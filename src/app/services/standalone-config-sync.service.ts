import {Injectable} from '@angular/core';
import {DrugstoneAnalysisConfigChange} from '../components/playground/drugstonepanel/drugstonepanel.component';
import {
  AvailableDatasourceMaps, DATASOURCE_CONFIG_KEYS, parseDatasource,
  toFrontendDatasourceConfig, toPluginDatasourceConfig
} from './datasource-mapping';

export const STANDALONE_TOGGLE_KEYS = ['autofillEdges', 'reviewed', 'approvedDrugs'];

type SnapshotSource = 'task' | 'view';
type SnapshotChange = DrugstoneAnalysisConfigChange & {source: SnapshotSource};
type GlobalChange = DrugstoneAnalysisConfigChange & {source: 'global'};
type SnapshotState = {
  source: SnapshotSource;
  globalConfig: Object;
  snapshotSignature: string;
};
export type ConfigSyncState =
  | {kind: 'global'; decision: {change: GlobalChange; globalConfig: Object} | null}
  | (SnapshotState & {kind: 'snapshot-kept'; decision: SnapshotChange | null})
  | (SnapshotState & {kind: 'snapshot-adopted'; decision: null});

export interface ConfigSyncEffect {
  settings?: Record<string, any>;
  savePreferences: boolean;
}

type ConfigSyncAction =
  | {type: 'plugin-config'; change: DrugstoneAnalysisConfigChange; currentConfig: Object; available: AvailableDatasourceMaps}
  | {type: 'accept'}
  | {type: 'keep'}
  | {type: 'global-config-updated'};

// Page-scoped state machine. Form updates and storage writes remain with the page;
// all decisions about snapshots, dialogs and outgoing config belong here.
@Injectable()
export class StandaloneConfigSyncService {
  private currentState: ConfigSyncState = {kind: 'global', decision: null};
  private lastPluginSettingsSignature?: string;
  private revision = 0;

  get state(): ConfigSyncState { return this.currentState; }
  get pendingChange(): DrugstoneAnalysisConfigChange | null {
    return this.currentState.kind === 'global'
      ? this.currentState.decision?.change ?? null : this.currentState.decision;
  }
  get configRevision(): number { return this.revision; }

  configForPlugin(currentConfig: Object): Object {
    return this.currentState.kind === 'global'
      ? this.currentState.decision?.globalConfig ?? currentConfig : this.currentState.globalConfig;
  }

  receive(change: DrugstoneAnalysisConfigChange, currentConfig: Object, available: AvailableDatasourceMaps): void {
    this.transition({type: 'plugin-config', change, currentConfig, available});
  }

  accept(): ConfigSyncEffect {
    return this.transition({type: 'accept'});
  }

  dismiss(): ConfigSyncEffect {
    return this.transition({type: 'keep'});
  }

  globalConfigUpdated(): void {
    this.transition({type: 'global-config-updated'});
  }

  private transition(action: ConfigSyncAction): ConfigSyncEffect {
    switch (action.type) {
      case 'plugin-config':
        this.receivePluginConfig(action.change, action.currentConfig, action.available);
        return {savePreferences: false};

      case 'accept': {
        const change = this.pendingChange;
        if (!change) return {savePreferences: false};
        if (this.currentState.kind === 'global') {
          // Restore global settings and stop holding the old outgoing config.
          this.currentState = {kind: 'global', decision: null};
          this.revision++;
        } else {
          // Update only the form while the snapshot remains active in the plugin.
          this.currentState = {...this.currentState, kind: 'snapshot-adopted', decision: null};
        }
        return {settings: change.config, savePreferences: true};
      }

      case 'keep': {
        const applyToGlobal = this.currentState.kind === 'global' && this.currentState.decision !== null;
        if (applyToGlobal) {
          // The snapshot has ended. Keeping its settings now applies them to
          // the main network, even if the serialized config happens to match.
          this.currentState = {kind: 'global', decision: null};
          this.revision++;
        } else if (this.currentState.kind === 'snapshot-kept') {
          this.currentState = {...this.currentState, decision: null};
        }
        return {savePreferences: applyToGlobal};
      }

      case 'global-config-updated':
        // A manual update is an action, not just a value difference. It must
        // leave the snapshot even when returning to an identical global config.
        this.currentState = {kind: 'global', decision: null};
        this.lastPluginSettingsSignature = undefined;
        this.revision++;
        return {savePreferences: false};
    }
  }

  private receivePluginConfig(
    change: DrugstoneAnalysisConfigChange, currentConfig: Object, available: AvailableDatasourceMaps
  ): void {
    // Compare effective settings only after both sides have been normalized
    // through the same plugin representation (including licensed -> open).
    const incomingComparable = this.comparableSettings(change.config, available);
    const currentComparable = this.comparableSettings(currentConfig, available);
    const signature = JSON.stringify({source: change.source, settings: incomingComparable});
    const previousState = this.currentState;
    const globalConfig = this.configForPlugin(currentConfig);
    const settingsMatch = JSON.stringify(incomingComparable) === JSON.stringify(currentComparable);
    // Deduplication only suppresses a repeated offer; it never chooses a state.
    if (!settingsMatch && signature === this.lastPluginSettingsSignature) return;
    this.lastPluginSettingsSignature = signature;
    let incoming = this.normalizeSettings(change.config, available);

    if (change.source === 'global') {
      // Restore known frontend choices when the plugin returns the same global
      // settings. Per-source access suffixes are lost on the round trip.
      if (JSON.stringify(incomingComparable) === JSON.stringify(this.comparableSettings(globalConfig, available))) {
        incoming = this.normalizeSettings(globalConfig, available);
      }
      this.currentState = {
        kind: 'global',
        decision: settingsMatch ? null : {
          change: {...change, source: 'global', config: incoming}, globalConfig
        }
      };
    } else {
      const snapshot = {
        source: change.source,
        globalConfig: previousState.kind === 'global' ? structuredClone(globalConfig) : globalConfig,
        snapshotSignature: signature
      };
      this.currentState = settingsMatch && previousState.kind === 'snapshot-adopted' &&
        signature === previousState.snapshotSignature
        ? {...snapshot, kind: 'snapshot-adopted', decision: null}
        : {...snapshot, kind: 'snapshot-kept', decision: settingsMatch ? null : {
          ...change, source: change.source, config: incoming
        }};
    }
  }

  private comparableSettings(config: Object, available: AvailableDatasourceMaps): Record<string, any> {
    return this.normalizeSettings(toPluginDatasourceConfig(config), available);
  }

  private normalizeSettings(config: Object, available: AvailableDatasourceMaps): Record<string, any> {
    const values = config as Record<string, any>;
    const settings: Record<string, any> = {
      identifier: values['identifier'] ?? 'symbol',
      ...toFrontendDatasourceConfig(config, available)
    };
    STANDALONE_TOGGLE_KEYS.forEach(key => {
      settings[key] = values[key] ?? (key === 'autofillEdges');
    });
    // Derive the flag after normalization, including licensed -> open fallbacks.
    settings['licensedDatasets'] = DATASOURCE_CONFIG_KEYS.some(key => parseDatasource(settings[key]).licensed);
    return settings;
  }
}

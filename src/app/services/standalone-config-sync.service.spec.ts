import {StandaloneConfigSyncService} from './standalone-config-sync.service';
import {AvailableDatasourceMaps, toPluginDatasourceConfig} from './datasource-mapping';

describe('StandaloneConfigSyncService', () => {
  const available: AvailableDatasourceMaps = Object.fromEntries(
    ['protProtInterList', 'drugProtInterList', 'protDisList', 'drugDisList'].map(key => [key, {
      'OmniPath|open': {}, 'OmniPath|licensed': {},
      'NeDRex|open': {}, 'NeDRex|licensed': {}
    }])
  );
  const globalSettings = {
    interactionProteinProtein: 'OmniPath|open',
    interactionDrugProtein: 'NeDRex|licensed',
    associatedProteinDisorder: 'NeDRex|open',
    indicationDrugDisorder: 'NeDRex|open',
    licensedDatasets: true
  };
  const taskSettings = {...toPluginDatasourceConfig(globalSettings), interactionProteinProtein: 'NeDRex'};

  it('compares task settings after normalizing the shared license flag on both sides', () => {
    const service = new StandaloneConfigSyncService();
    service.receive({version: 1, source: 'task', config: toPluginDatasourceConfig(globalSettings)},
      globalSettings, available);
    expect(service.pendingChange).toBeNull();
  });

  it('compares unavailable licensed sources as open on both sides', () => {
    const service = new StandaloneConfigSyncService();
    const openOnly = {...available, protProtInterList: {'APID|open': {}}};
    const current = {...globalSettings, interactionProteinProtein: 'APID|open'};
    service.receive({version: 1, source: 'task', config: {...toPluginDatasourceConfig(current), interactionProteinProtein: 'apid'}},
      current, openOnly);
    expect(service.pendingChange).toBeNull();
  });

  it('does not offer restoration after task settings were declined', () => {
    const service = new StandaloneConfigSyncService();
    service.receive({version: 1, source: 'task', config: taskSettings}, globalSettings, available);
    expect(service.pendingChange?.config.interactionProteinProtein).toBe('NeDRex|licensed');
    service.dismiss();
    service.receive({version: 1, source: 'global', config: toPluginDatasourceConfig(globalSettings)},
      globalSettings, available);
    expect(service.pendingChange).toBeNull();
  });

  it('restores the original per-source choices after task settings were accepted', () => {
    const service = new StandaloneConfigSyncService();
    service.receive({version: 1, source: 'view', config: taskSettings}, globalSettings, available);
    const accepted = {...globalSettings, ...service.accept().settings};
    service.receive({version: 1, source: 'global', config: toPluginDatasourceConfig(globalSettings)},
      accepted, available);
    expect(service.pendingChange?.config.interactionProteinProtein).toBe('OmniPath|open');
    expect(service.pendingChange?.config.interactionDrugProtein).toBe('NeDRex|licensed');
    expect(service.pendingChange?.config.associatedProteinDisorder).toBe('NeDRex|open');
  });

  it('does not reuse an old access choice if the plugin license flag changed', () => {
    const service = new StandaloneConfigSyncService();
    const openSettings = {...globalSettings, interactionDrugProtein: 'NeDRex|open', licensedDatasets: false};
    service.receive({version: 1, source: 'global', config: toPluginDatasourceConfig(globalSettings)},
      openSettings, available);
    expect(service.pendingChange?.config.interactionProteinProtein).toBe('OmniPath|licensed');
  });

  it('starts in global state and forwards the current config', () => {
    const service = new StandaloneConfigSyncService();
    expect(service.state.kind).toBe('global');
    expect(service.configForPlugin(globalSettings)).toBe(globalSettings);
    expect(service.configRevision).toBe(0);
  });

  it('keeps the snapshot open while adopting its settings', () => {
    const service = new StandaloneConfigSyncService();
    service.receive({version: 1, source: 'task', config: taskSettings}, globalSettings, available);
    expect(service.state.kind).toBe('snapshot-kept');
    const effect = service.accept();
    const accepted = {...globalSettings, ...effect.settings};
    expect(service.state.kind).toBe('snapshot-adopted');
    expect(service.configRevision).toBe(0);
    expect(effect.savePreferences).toBe(true);
    expect(JSON.stringify(service.configForPlugin(accepted))).toBe(JSON.stringify(globalSettings));
    expect(service.configForPlugin(accepted) === globalSettings).toBe(false);
  });

  it('keeps declined snapshot settings out of the outgoing config and preferences', () => {
    const service = new StandaloneConfigSyncService();
    service.receive({version: 1, source: 'view', config: taskSettings}, globalSettings, available);
    const effect = service.dismiss();
    expect(service.state.kind).toBe('snapshot-kept');
    expect(JSON.stringify(service.configForPlugin(globalSettings))).toBe(JSON.stringify(globalSettings));
    expect(effect.savePreferences).toBe(false);
    expect(service.configRevision).toBe(0);
  });

  it('applies adopted settings to the main network when restoration is declined', () => {
    const service = new StandaloneConfigSyncService();
    service.receive({version: 1, source: 'task', config: taskSettings}, globalSettings, available);
    const accepted = {...globalSettings, ...service.accept().settings};
    service.receive({version: 1, source: 'global', config: toPluginDatasourceConfig(globalSettings)}, accepted, available);
    expect(service.state.kind).toBe('global');
    expect(JSON.stringify(service.configForPlugin(accepted))).toBe(JSON.stringify(globalSettings));
    const effect = service.dismiss();
    expect(service.configForPlugin(accepted)).toBe(accepted);
    expect(service.configRevision).toBe(1);
    expect(effect.savePreferences).toBe(true);
    expect(effect.settings).toBe(undefined);
  });

  it('restores and remembers the previous settings when restoration is accepted', () => {
    const service = new StandaloneConfigSyncService();
    service.receive({version: 1, source: 'task', config: taskSettings}, globalSettings, available);
    const accepted = {...globalSettings, ...service.accept().settings};
    service.receive({version: 1, source: 'global', config: toPluginDatasourceConfig(globalSettings)}, accepted, available);
    const effect = service.accept();
    expect(effect.settings?.interactionProteinProtein).toBe('OmniPath|open');
    expect(effect.savePreferences).toBe(true);
    expect(service.state.kind).toBe('global');
    expect(service.configRevision).toBe(1);
    expect(service.pendingChange).toBeNull();
  });

  it('ends a snapshot on a manual change even if outgoing values are identical', () => {
    const service = new StandaloneConfigSyncService();
    service.receive({version: 1, source: 'task', config: taskSettings}, globalSettings, available);
    service.accept();
    service.globalConfigUpdated();
    expect(service.state.kind).toBe('global');
    expect(service.configForPlugin(globalSettings)).toBe(globalSettings);
    expect(service.configRevision).toBe(1);
    expect(service.pendingChange).toBeNull();
    service.receive({version: 1, source: 'global', config: toPluginDatasourceConfig(globalSettings)}, globalSettings, available);
    expect(service.pendingChange).toBeNull();
  });

  it('can offer the same snapshot again after a manual update', () => {
    const service = new StandaloneConfigSyncService();
    const event = {version: 1, source: 'task' as const, config: taskSettings};
    service.receive(event, globalSettings, available);
    service.dismiss();
    service.receive(event, globalSettings, available);
    expect(service.pendingChange).toBeNull();
    service.globalConfigUpdated();
    service.receive(event, globalSettings, available);
    expect(service.pendingChange?.source).toBe('task');
  });

  it('preserves the original global config when switching between snapshots', () => {
    const service = new StandaloneConfigSyncService();
    service.receive({version: 1, source: 'task', config: taskSettings}, globalSettings, available);
    const accepted = {...globalSettings, ...service.accept().settings};
    const next = {...taskSettings, reviewed: true};
    service.receive({version: 1, source: 'view', config: next}, accepted, available);
    const nextAccepted = {...accepted, ...service.accept().settings};
    service.receive({version: 1, source: 'global', config: toPluginDatasourceConfig(globalSettings)}, nextAccepted, available);
    expect(service.pendingChange?.config.interactionProteinProtein).toBe('OmniPath|open');
    expect(service.pendingChange?.config.reviewed).toBe(false);
  });

  it('treats a decision without a pending dialog as a no-op', () => {
    const service = new StandaloneConfigSyncService();
    expect(service.accept().savePreferences).toBe(false);
    expect(service.dismiss().savePreferences).toBe(false);
    expect(service.configRevision).toBe(0);
    expect(service.state.kind).toBe('global');
  });

  it('stores a snapshot decision in its state and removes it on acceptance', () => {
    const service = new StandaloneConfigSyncService();
    service.receive({version: 1, source: 'task', config: taskSettings}, globalSettings, available);
    if (service.state.kind !== 'snapshot-kept') throw new Error('Expected snapshot-kept');
    expect(service.state.decision).toBe(service.pendingChange);
    expect(service.state.decision?.source).toBe('task');
    service.accept();
    expect(service.state.kind).toBe('snapshot-adopted');
    expect(service.state.decision).toBeNull();
  });

  it('holds the global config only while a restoration decision is pending', () => {
    const service = new StandaloneConfigSyncService();
    service.receive({version: 1, source: 'task', config: taskSettings}, globalSettings, available);
    const accepted = {...globalSettings, ...service.accept().settings};
    const event = {version: 1, source: 'global' as const, config: toPluginDatasourceConfig(globalSettings)};
    service.receive(event, accepted, available);
    if (service.state.kind !== 'global') throw new Error('Expected global');
    expect(service.state.decision?.change).toBe(service.pendingChange);
    expect(service.state.decision?.globalConfig).toBe(service.configForPlugin(accepted));
    const pending = service.pendingChange;
    service.receive(event, accepted, available);
    expect(service.pendingChange).toBe(pending);
    service.dismiss();
    expect(service.state.decision).toBeNull();
    expect(service.configForPlugin(accepted)).toBe(accepted);
  });

  it('does not let duplicate events change an adopted snapshot into a kept snapshot', () => {
    const service = new StandaloneConfigSyncService();
    const event = {version: 1, source: 'task' as const, config: taskSettings};
    service.receive(event, globalSettings, available);
    const accepted = {...globalSettings, ...service.accept().settings};
    service.receive(event, accepted, available);
    expect(service.state.kind).toBe('snapshot-adopted');
    expect(service.state.decision).toBeNull();
  });
});

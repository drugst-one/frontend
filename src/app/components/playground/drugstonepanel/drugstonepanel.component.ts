import {Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {toPluginDatasourceConfig} from '../../../services/datasource-mapping';

export interface DrugstoneAnalysisConfigChange {
  version: number;
  source: 'task' | 'view' | 'global';
  config: Record<string, any>;
}

@Component({
  selector: 'app-drugstonepanel',
  templateUrl: './drugstonepanel.component.html',
  styleUrls: ['./drugstonepanel.component.scss'],
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DrugstonepanelComponent implements OnInit {

  @Input() public config:object = {}
  @Input() public network: object = {}
  @Input() public groups: object ={ nodeGroups:{}}
  @Input() public id: string = ""
  @Input() public configRevision = 0;
  @Output() public analysisConfigChange = new EventEmitter<DrugstoneAnalysisConfigChange>();
  private lastConfig?: string;
  private lastConfigRevision?: number;
  private cachedConfig: Record<string, any> = {};

  onAnalysisConfigChange(event: Event): void {
    const detail = (event as CustomEvent<DrugstoneAnalysisConfigChange>).detail;
    if (detail?.version === 1 && ['task', 'view', 'global'].includes(detail.source) && detail.config) {
      this.analysisConfigChange.emit(detail);
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  getConfig(): Record<string, any> {
    const config = toPluginDatasourceConfig(this.config);
    const serialized = JSON.stringify(config);
    // Both Angular and Angular Elements skip identical input values. A new
    // object reference makes an explicit manual update reach the plugin even
    // when its values match the global config sent before opening a task/view.
    if (serialized !== this.lastConfig || this.configRevision !== this.lastConfigRevision) {
      this.cachedConfig = structuredClone(config);
      this.lastConfig = serialized;
      this.lastConfigRevision = this.configRevision;
    }
    return this.cachedConfig;
  }

  getNetwork(): string{
    return JSON.stringify(this.network)
  }

  getGroups(): string{
    return JSON.stringify(this.groups)
  }

}

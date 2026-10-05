export const DATASOURCE_CONFIG_KEYS = [
  'interactionProteinProtein',
  'interactionDrugProtein',
  'associatedProteinDisorder',
  'indicationDrugDisorder'
];

const DATASOURCE_LIST_KEYS: Record<string, string> = {
  interactionProteinProtein: 'protProtInterList',
  interactionDrugProtein: 'drugProtInterList',
  associatedProteinDisorder: 'protDisList',
  indicationDrugDisorder: 'drugDisList'
};

export type AvailableDatasourceMaps = Record<string, Record<string, unknown>>;

const DATASOURCE_NAMES: Record<string, string> = {
  nedrex: 'NeDRex', biogrid: 'BioGRID', iid: 'IID', intact: 'IntAct',
  string: 'STRING', apid: 'APID', drugcentral: 'DrugCentral', chembl: 'ChEMBL',
  dgidb: 'DGIdb', disgenet: 'DisGeNET', ctd: 'CTD', drugbank: 'DrugBank',
  omim: 'OMIM', omnipath: 'OmniPath', cosmic: 'COSMIC', ncg: 'NCG',
  intogen: 'IntOGen', orphanet: 'Orphanet'
};

export function datasourceName(name: string): string {
  return DATASOURCE_NAMES[name.toLowerCase()] ?? name;
}

export function parseDatasource(value: string, licensed = false): {name: string; licensed: boolean} {
  const [name, access] = value.split('|');
  return {name: datasourceName(name), licensed: access ? access === 'licensed' : licensed};
}

export function datasourceValue(value: string, licensed = false): string {
  const source = parseDatasource(value, licensed);
  return `${source.name}|${source.licensed ? 'licensed' : 'open'}`;
}

export function datasourceConfigValue(
  key: string, value: string, licensed: boolean, available: AvailableDatasourceMaps
): string {
  const requested = datasourceValue(value, licensed);
  const sources = available[DATASOURCE_LIST_KEYS[key]];
  if (!sources || requested in sources) return requested;

  // Match the backend: a licensed request falls back to the open variant
  // of the same source if no licensed variant exists.
  const source = parseDatasource(requested);
  const open = datasourceValue(source.name, false);
  return source.licensed && open in sources ? open : requested;
}

export function datasourceOption(source: {name: string; licenced: boolean}) {
  return {
    label: datasourceName(source.name) + (source.licenced ? ' (licensed)' : ''),
    value: datasourceValue(source.name, source.licenced),
    licensed: source.licenced,
    open: !source.licenced
  };
}

export function datasourceMap(sources: Array<{name: string; licenced: boolean}>): Record<string, any> {
  return Object.fromEntries(sources.map(source => [datasourceValue(source.name, source.licenced), source]));
}

export function toFrontendDatasourceConfig(config: Object, available: AvailableDatasourceMaps): Record<string, any> {
  const values = config as Record<string, any>;
  return Object.fromEntries(DATASOURCE_CONFIG_KEYS.map(key => [
    key, datasourceConfigValue(key, values[key] ?? 'NeDRex', values['licensedDatasets'] ?? false, available)
  ]));
}

export function toPluginDatasourceConfig(config: Object): Record<string, any> {
  const clean = {...config} as Record<string, any>;
  DATASOURCE_CONFIG_KEYS.forEach(key => {
    if (typeof clean[key] === 'string') {
      clean[key] = parseDatasource(clean[key]).name;
    }
  });
  return clean;
}

import {datasourceConfigValue, datasourceMap, datasourceOption, toFrontendDatasourceConfig, toPluginDatasourceConfig} from './datasource-mapping';

describe('datasourceConfigValue', () => {
  const available = {protProtInterList: {
    'OmniPath|open': {}, 'OmniPath|licensed': {}, 'APID|open': {}
  }};
  const key = 'interactionProteinProtein';

  it('keeps licensed when that variant exists', () => {
    expect(datasourceConfigValue(key, 'omnipath', true, available)).toBe('OmniPath|licensed');
  });

  it('keeps open when requested', () => {
    expect(datasourceConfigValue(key, 'omnipath', false, available)).toBe('OmniPath|open');
  });

  it('falls back to open only if licensed is unavailable', () => {
    expect(datasourceConfigValue(key, 'apid', true, available)).toBe('APID|open');
  });

  it('respects an explicit access suffix', () => {
    expect(datasourceConfigValue(key, 'OmniPath|open', true, available)).toBe('OmniPath|open');
  });
});

describe('IID datasource mapping', () => {
  const source = {name: 'iid', licenced: false};
  const key = 'interactionProteinProtein';
  const available = {protProtInterList: datasourceMap([source])};

  it('keeps the display name separate from the backend identifier', () => {
    expect(datasourceOption(source).label).toBe('IID');
    expect(datasourceOption(source).value).toBe('iid|open');
    expect(available.protProtInterList['iid|open']).toBe(source);
  });

  it('resolves all IID inputs to the actual backend identifier', () => {
    ['iid', 'IID', 'IID|open', 'IID|licensed'].forEach(value => {
      const frontend = toFrontendDatasourceConfig({[key]: value}, available);
      expect(toPluginDatasourceConfig(frontend)[key]).toBe('iid');
    });
  });

  it('round-trips plugin settings through the frontend without changing the identifier', () => {
    const frontend = toFrontendDatasourceConfig({[key]: 'iid'}, available);
    expect(frontend[key]).toBe('iid|open');
    expect(toPluginDatasourceConfig(frontend)[key]).toBe('iid');
  });

  it('preserves the casing of other backend identifiers', () => {
    ['NeDRex', 'APID', 'STRING', 'BioGRID', 'OmniPath'].forEach(name => {
      expect(toPluginDatasourceConfig({[key]: `${name}|open`})[key]).toBe(name);
    });
  });
});

describe('backend datasource names', () => {
  it('preserves exact backend names for all four dataset types, as on main', () => {
    const lists = {
      interactionProteinProtein: 'protProtInterList',
      interactionDrugProtein: 'drugProtInterList',
      associatedProteinDisorder: 'protDisList',
      indicationDrugDisorder: 'drugDisList'
    };
    Object.entries(lists).forEach(([key, list]) => {
      ['iid', 'intact', 'apid', 'string', 'NeDRex', 'OmniPath', 'CustomSOURCE'].forEach(name => {
        const source = {name, licenced: false};
        const available = {[list]: datasourceMap([source])};
        const option = datasourceOption(source);
        expect(option.value).toBe(`${name}|open`);
        expect(toPluginDatasourceConfig({[key]: option.value})[key]).toBe(name);
        const frontend = toFrontendDatasourceConfig({[key]: name.toUpperCase()}, available);
        expect(frontend[key]).toBe(`${name}|open`);
        expect(toPluginDatasourceConfig(frontend)[key]).toBe(name);
      });
    });
  });

  it('does not reformat names passed directly to the plugin', () => {
    ['iid', 'apid', 'intact', 'CustomSOURCE'].forEach(name => {
      expect(toPluginDatasourceConfig({interactionProteinProtein: `${name}|open`}).interactionProteinProtein).toBe(name);
    });
  });
});

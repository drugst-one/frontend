import {datasourceConfigValue} from './datasource-mapping';

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

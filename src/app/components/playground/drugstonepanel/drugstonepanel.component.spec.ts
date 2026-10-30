import {DrugstonepanelComponent} from './drugstonepanel.component';

describe('DrugstonepanelComponent manual config updates', () => {
  function setup() {
    const component = new DrugstonepanelComponent();
    component.config = {interactionProteinProtein: 'OmniPath|open', licensedDatasets: true};
    return component;
  }

  it('keeps the same object while the outgoing settings and revision are unchanged', () => {
    const component = setup();
    const sent = component.getConfig();
    component.config = {...component.config};
    expect(component.getConfig()).toBe(sent);
  });

  it('uses a new object for a manual return to the same global settings', () => {
    const component = setup();
    const sent = component.getConfig();
    component.configRevision++;
    const updated = component.getConfig();
    expect(updated === sent).toBe(false);
    expect(updated.interactionProteinProtein).toBe('OmniPath');
    expect(component.getConfig()).toBe(updated);
  });

  it('uses a new object even if open and licensed map to identical plugin values', () => {
    const component = setup();
    const sent = component.getConfig();
    component.config = {...component.config, interactionProteinProtein: 'OmniPath|licensed'};
    component.configRevision++;
    const updated = component.getConfig();
    expect(updated === sent).toBe(false);
    expect(JSON.stringify(updated)).toBe(JSON.stringify(sent));
  });

  it('updates the object when config values change without a revision', () => {
    const component = setup();
    const sent = component.getConfig();
    component.config = {...component.config, interactionProteinProtein: 'APID|open'};
    expect(component.getConfig() === sent).toBe(false);
    expect(component.getConfig().interactionProteinProtein).toBe('APID');
  });
});

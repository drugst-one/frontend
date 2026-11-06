import {Subject} from 'rxjs';
import {StandaloneComponent} from './standalone.component';
import {StandaloneConfigSyncService} from '../../../services/standalone-config-sync.service';

describe('StandaloneComponent task links', () => {
  function setup() {
    const detectChanges = jasmine.createSpy('detectChanges');
    const component = new StandaloneComponent(
      {events: new Subject()} as any, {} as any, {} as any,
      {detectChanges} as any, {} as any, new StandaloneConfigSyncService()
    );
    spyOn(component, 'loadDatasets').and.returnValue(Promise.resolve());
    return {component, detectChanges};
  }

  it('opens a task without an input network and keeps the token out of config', async () => {
    const {component, detectChanges} = setup();
    component.network = {nodes: [{id: 'old'}], edges: []};
    await component.setParams({taskId: 'task-token'});
    expect(component.taskId).toBe('task-token');
    expect(component.networkReady).toBe(true);
    expect(component.network).toEqual({nodes: [], edges: []});
    expect(component.getConfig('taskId')).toBeUndefined();
    expect(detectChanges).toHaveBeenCalled();
  });

  it('decodes task tokens from the URL', async () => {
    const {component} = setup();
    const setParams = spyOn(component, 'setParams').and.returnValue(Promise.resolve());
    spyOn(history, 'replaceState');
    component.readParamsFromURL('/standalone?taskId=task%2Btoken%3D');
    expect(setParams).toHaveBeenCalledWith({taskId: 'task+token='});
  });

  it('clears the task when regular input parameters are loaded', async () => {
    const {component} = setup();
    await component.setParams({taskId: 'task-token'});
    await component.setParams({});
    expect(component.taskId).toBeNull();
    expect(component.networkReady).toBe(false);
  });

  it('does not mount a task for an empty token', async () => {
    const {component} = setup();
    await component.setParams({taskId: '  '});
    expect(component.taskId).toBeNull();
    expect(component.networkReady).toBe(false);
  });
});

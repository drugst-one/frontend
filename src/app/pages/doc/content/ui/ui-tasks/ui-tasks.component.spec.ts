import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTasksComponent } from './ui-tasks.component';

describe('UiTasksComponent', () => {
  let component: UiTasksComponent;
  let fixture: ComponentFixture<UiTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

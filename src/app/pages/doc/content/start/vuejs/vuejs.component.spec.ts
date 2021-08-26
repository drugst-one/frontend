import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VuejsComponent } from './vuejs.component';

describe('VuejsComponent', () => {
  let component: VuejsComponent;
  let fixture: ComponentFixture<VuejsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VuejsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VuejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

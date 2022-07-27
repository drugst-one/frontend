import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneButtonsComponent } from './standalone-buttons.component';

describe('ButtonsComponent', () => {
  let component: StandaloneButtonsComponent;
  let fixture: ComponentFixture<StandaloneButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandaloneButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandaloneButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

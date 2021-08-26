import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAnalysisComponent } from './ui-analysis.component';

describe('UiAnalysisComponent', () => {
  let component: UiAnalysisComponent;
  let fixture: ComponentFixture<UiAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

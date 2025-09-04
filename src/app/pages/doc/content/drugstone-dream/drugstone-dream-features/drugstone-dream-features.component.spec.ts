import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugstoneDreamFeaturesComponent } from './drugstone-dream-features.component';

describe('DrugstoneDreamFeaturesComponent', () => {
  let component: DrugstoneDreamFeaturesComponent;
  let fixture: ComponentFixture<DrugstoneDreamFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugstoneDreamFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugstoneDreamFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

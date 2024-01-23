import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificVersionComponent } from './specific-version.component';

describe('SpecificVersionComponent', () => {
  let component: SpecificVersionComponent;
  let fixture: ComponentFixture<SpecificVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificVersionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

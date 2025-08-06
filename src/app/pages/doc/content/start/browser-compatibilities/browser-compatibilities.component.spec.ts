import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserCompatibilitiesComponent } from './browser-compatibilities.component';

describe('BrowserCompatibilitiesComponent', () => {
  let component: BrowserCompatibilitiesComponent;
  let fixture: ComponentFixture<BrowserCompatibilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowserCompatibilitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserCompatibilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

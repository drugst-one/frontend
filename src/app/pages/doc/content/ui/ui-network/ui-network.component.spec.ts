import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiNetworkComponent } from './ui-network.component';

describe('UiNetworkComponent', () => {
  let component: UiNetworkComponent;
  let fixture: ComponentFixture<UiNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiNetworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

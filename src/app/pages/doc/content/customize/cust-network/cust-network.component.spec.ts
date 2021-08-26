import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustNetworkComponent } from './cust-network.component';

describe('CustNetworkComponent', () => {
  let component: CustNetworkComponent;
  let fixture: ComponentFixture<CustNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustNetworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

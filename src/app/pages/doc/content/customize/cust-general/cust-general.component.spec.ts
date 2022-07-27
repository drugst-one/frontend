import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustGeneralComponent } from './cust-general.component';

describe('CustGeneralComponent', () => {
  let component: CustGeneralComponent;
  let fixture: ComponentFixture<CustGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

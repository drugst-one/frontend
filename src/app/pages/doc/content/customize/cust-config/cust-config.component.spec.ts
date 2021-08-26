import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustConfigComponent } from './cust-config.component';

describe('CustConfigComponent', () => {
  let component: CustConfigComponent;
  let fixture: ComponentFixture<CustConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustVersionComponent } from './cust-version.component';

describe('CustVersionComponent', () => {
  let component: CustVersionComponent;
  let fixture: ComponentFixture<CustVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustVersionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

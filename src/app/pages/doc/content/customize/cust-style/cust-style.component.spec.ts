import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustStyleComponent } from './cust-style.component';

describe('CustStyleComponent', () => {
  let component: CustStyleComponent;
  let fixture: ComponentFixture<CustStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

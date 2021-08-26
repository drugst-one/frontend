import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustEventsComponent } from './cust-events.component';

describe('CustEventsComponent', () => {
  let component: CustEventsComponent;
  let fixture: ComponentFixture<CustEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

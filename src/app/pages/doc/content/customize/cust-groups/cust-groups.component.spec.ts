import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustGroupsComponent } from './cust-groups.component';

describe('CustGroupsComponent', () => {
  let component: CustGroupsComponent;
  let fixture: ComponentFixture<CustGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

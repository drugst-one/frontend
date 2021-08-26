import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RshinyComponent } from './rshiny.component';

describe('RshinyComponent', () => {
  let component: RshinyComponent;
  let fixture: ComponentFixture<RshinyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RshinyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RshinyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

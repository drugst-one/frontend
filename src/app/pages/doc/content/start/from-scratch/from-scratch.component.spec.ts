import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromScratchComponent } from './from-scratch.component';

describe('FromScratchComponent', () => {
  let component: FromScratchComponent;
  let fixture: ComponentFixture<FromScratchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromScratchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromScratchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

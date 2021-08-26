import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplVisComponent } from './impl-vis.component';

describe('ImplVisComponent', () => {
  let component: ImplVisComponent;
  let fixture: ComponentFixture<ImplVisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImplVisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplVisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplDataComponent } from './impl-data.component';

describe('ImplDataComponent', () => {
  let component: ImplDataComponent;
  let fixture: ComponentFixture<ImplDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImplDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

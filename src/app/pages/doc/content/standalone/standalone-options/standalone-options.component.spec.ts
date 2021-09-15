import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneOptionsComponent } from './standalone-options.component';

describe('StandaloneOptionsComponent', () => {
  let component: StandaloneOptionsComponent;
  let fixture: ComponentFixture<StandaloneOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandaloneOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandaloneOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

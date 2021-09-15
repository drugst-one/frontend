import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneUrlComponent } from './standalone-url.component';

describe('StandaloneUrlComponent', () => {
  let component: StandaloneUrlComponent;
  let fixture: ComponentFixture<StandaloneUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandaloneUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandaloneUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

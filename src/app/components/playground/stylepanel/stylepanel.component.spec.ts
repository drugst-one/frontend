import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylepanelComponent } from './stylepanel.component';

describe('StylepanelComponent', () => {
  let component: StylepanelComponent;
  let fixture: ComponentFixture<StylepanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylepanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StylepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

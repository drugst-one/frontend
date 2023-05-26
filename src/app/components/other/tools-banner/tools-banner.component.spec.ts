import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsBannerComponent } from './tools-banner.component';

describe('ToolsBannerComponent', () => {
  let component: ToolsBannerComponent;
  let fixture: ComponentFixture<ToolsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

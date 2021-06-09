import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodepanelComponent } from './codepanel.component';

describe('CodepanelComponent', () => {
  let component: CodepanelComponent;
  let fixture: ComponentFixture<CodepanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodepanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

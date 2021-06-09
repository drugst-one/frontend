import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugstonepanelComponent } from './drugstonepanel.component';

describe('DrugstonepanelComponent', () => {
  let component: DrugstonepanelComponent;
  let fixture: ComponentFixture<DrugstonepanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugstonepanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugstonepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

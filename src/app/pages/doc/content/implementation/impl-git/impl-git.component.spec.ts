import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplGitComponent } from './impl-git.component';

describe('ImplGitComponent', () => {
  let component: ImplGitComponent;
  let fixture: ComponentFixture<ImplGitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImplGitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

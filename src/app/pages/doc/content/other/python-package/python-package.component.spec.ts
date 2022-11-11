import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonPackageComponent } from './python-package.component';

describe('PythonPackageComponent', () => {
  let component: PythonPackageComponent;
  let fixture: ComponentFixture<PythonPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythonPackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

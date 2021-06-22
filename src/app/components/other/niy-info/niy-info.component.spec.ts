import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiyInfoComponent } from './niy-info.component';

describe('NiyInfoComponent', () => {
  let component: NiyInfoComponent;
  let fixture: ComponentFixture<NiyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiyInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NiyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

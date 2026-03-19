import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularNewComponent } from './angular-new.component';

describe('AngularNewComponent', () => {
  let component: AngularNewComponent;
  let fixture: ComponentFixture<AngularNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularNewComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

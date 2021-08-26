import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocSubheaderComponent } from './doc-subheader.component';

describe('DocSubheaderComponent', () => {
  let component: DocSubheaderComponent;
  let fixture: ComponentFixture<DocSubheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocSubheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocSubheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

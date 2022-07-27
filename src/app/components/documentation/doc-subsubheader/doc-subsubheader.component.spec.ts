import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocSubsubheaderComponent } from './doc-subsubheader.component';

describe('DocSubheaderComponent', () => {
  let component: DocSubsubheaderComponent;
  let fixture: ComponentFixture<DocSubsubheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocSubsubheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocSubsubheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

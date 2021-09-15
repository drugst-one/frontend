import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneDocComponent } from './standalone-doc.component';

describe('StandaloneDocComponent', () => {
  let component: StandaloneDocComponent;
  let fixture: ComponentFixture<StandaloneDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandaloneDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandaloneDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

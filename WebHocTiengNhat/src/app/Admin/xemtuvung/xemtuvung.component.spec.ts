import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XemtuvungComponent } from './xemtuvung.component';

describe('XemtuvungComponent', () => {
  let component: XemtuvungComponent;
  let fixture: ComponentFixture<XemtuvungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XemtuvungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XemtuvungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XoatuvungComponent } from './xoatuvung.component';

describe('XoatuvungComponent', () => {
  let component: XoatuvungComponent;
  let fixture: ComponentFixture<XoatuvungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XoatuvungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XoatuvungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

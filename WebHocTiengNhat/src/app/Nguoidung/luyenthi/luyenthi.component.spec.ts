import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuyenthiComponent } from './luyenthi.component';

describe('LuyenthiComponent', () => {
  let component: LuyenthiComponent;
  let fixture: ComponentFixture<LuyenthiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuyenthiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuyenthiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

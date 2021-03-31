import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhongdoiComponent } from './phongdoi.component';

describe('PhongdoiComponent', () => {
  let component: PhongdoiComponent;
  let fixture: ComponentFixture<PhongdoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhongdoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhongdoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

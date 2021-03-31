import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhongthithuComponent } from './phongthithu.component';

describe('PhongthithuComponent', () => {
  let component: PhongthithuComponent;
  let fixture: ComponentFixture<PhongthithuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhongthithuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhongthithuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

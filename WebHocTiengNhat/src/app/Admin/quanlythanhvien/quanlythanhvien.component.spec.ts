import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlythanhvienComponent } from './quanlythanhvien.component';

describe('QuanlythanhvienComponent', () => {
  let component: QuanlythanhvienComponent;
  let fixture: ComponentFixture<QuanlythanhvienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlythanhvienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlythanhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlybaihocComponent } from './quanlybaihoc.component';

describe('QuanlybaihocComponent', () => {
  let component: QuanlybaihocComponent;
  let fixture: ComponentFixture<QuanlybaihocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlybaihocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlybaihocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

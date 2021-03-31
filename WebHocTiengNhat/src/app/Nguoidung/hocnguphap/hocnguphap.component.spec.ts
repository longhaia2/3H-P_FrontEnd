import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HocnguphapComponent } from './hocnguphap.component';

describe('HocnguphapComponent', () => {
  let component: HocnguphapComponent;
  let fixture: ComponentFixture<HocnguphapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HocnguphapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HocnguphapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

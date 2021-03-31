import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapnguphapComponent } from './baitapnguphap.component';

describe('BaitapnguphapComponent', () => {
  let component: BaitapnguphapComponent;
  let fixture: ComponentFixture<BaitapnguphapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaitapnguphapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapnguphapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

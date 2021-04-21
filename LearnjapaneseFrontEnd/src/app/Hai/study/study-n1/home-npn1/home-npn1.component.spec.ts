import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNpn1Component } from './home-npn1.component';

describe('HomeNpn1Component', () => {
  let component: HomeNpn1Component;
  let fixture: ComponentFixture<HomeNpn1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNpn1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNpn1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

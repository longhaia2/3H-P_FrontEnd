import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNpn5Component } from './home-npn5.component';

describe('HomeNpn5Component', () => {
  let component: HomeNpn5Component;
  let fixture: ComponentFixture<HomeNpn5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNpn5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNpn5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

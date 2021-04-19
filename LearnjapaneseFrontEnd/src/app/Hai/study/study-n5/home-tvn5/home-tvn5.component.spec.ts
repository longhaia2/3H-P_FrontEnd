import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTvn5Component } from './home-tvn5.component';

describe('HomeTvn5Component', () => {
  let component: HomeTvn5Component;
  let fixture: ComponentFixture<HomeTvn5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTvn5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTvn5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

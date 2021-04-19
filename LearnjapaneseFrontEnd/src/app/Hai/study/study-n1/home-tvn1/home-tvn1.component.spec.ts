import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTVN1Component } from './home-tvn1.component';

describe('HomeTVN1Component', () => {
  let component: HomeTVN1Component;
  let fixture: ComponentFixture<HomeTVN1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTVN1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTVN1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

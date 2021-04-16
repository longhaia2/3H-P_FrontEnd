import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestN1Component } from './test-n1.component';

describe('TestN1Component', () => {
  let component: TestN1Component;
  let fixture: ComponentFixture<TestN1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestN1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestN1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

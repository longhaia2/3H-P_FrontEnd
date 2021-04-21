import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestN2Component } from './test-n2.component';

describe('TestN2Component', () => {
  let component: TestN2Component;
  let fixture: ComponentFixture<TestN2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestN2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestN2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

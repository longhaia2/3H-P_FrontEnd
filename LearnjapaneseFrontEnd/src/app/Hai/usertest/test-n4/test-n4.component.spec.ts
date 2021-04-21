import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestN4Component } from './test-n4.component';

describe('TestN4Component', () => {
  let component: TestN4Component;
  let fixture: ComponentFixture<TestN4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestN4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestN4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

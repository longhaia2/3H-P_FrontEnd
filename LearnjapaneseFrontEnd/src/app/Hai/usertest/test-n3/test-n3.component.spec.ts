import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestN3Component } from './test-n3.component';

describe('TestN3Component', () => {
  let component: TestN3Component;
  let fixture: ComponentFixture<TestN3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestN3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestN3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

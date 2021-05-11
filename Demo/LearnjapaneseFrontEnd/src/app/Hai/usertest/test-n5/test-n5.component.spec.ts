import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestN5Component } from './test-n5.component';

describe('TestN5Component', () => {
  let component: TestN5Component;
  let fixture: ComponentFixture<TestN5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestN5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestN5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

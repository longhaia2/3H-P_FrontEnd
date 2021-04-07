import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestjlptComponent } from './testjlpt.component';

describe('TestjlptComponent', () => {
  let component: TestjlptComponent;
  let fixture: ComponentFixture<TestjlptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestjlptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestjlptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

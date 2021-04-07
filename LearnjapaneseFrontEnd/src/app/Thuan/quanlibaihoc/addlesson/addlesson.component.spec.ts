import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlessonComponent } from './addlesson.component';

describe('AddlessonComponent', () => {
  let component: AddlessonComponent;
  let fixture: ComponentFixture<AddlessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlessonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

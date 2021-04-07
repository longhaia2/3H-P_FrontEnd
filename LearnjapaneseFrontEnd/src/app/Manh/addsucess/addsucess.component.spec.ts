import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsucessComponent } from './addsucess.component';

describe('AddsucessComponent', () => {
  let component: AddsucessComponent;
  let fixture: ComponentFixture<AddsucessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsucessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

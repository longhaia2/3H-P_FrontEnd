import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbaihocComponent } from './editbaihoc.component';

describe('EditbaihocComponent', () => {
  let component: EditbaihocComponent;
  let fixture: ComponentFixture<EditbaihocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditbaihocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbaihocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

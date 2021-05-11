import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogResultTestComponent } from './dialog-result-test.component';

describe('DialogResultTestComponent', () => {
  let component: DialogResultTestComponent;
  let fixture: ComponentFixture<DialogResultTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogResultTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogResultTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosegrammarComponent } from './choosegrammar.component';

describe('ChoosegrammarComponent', () => {
  let component: ChoosegrammarComponent;
  let fixture: ComponentFixture<ChoosegrammarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosegrammarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosegrammarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

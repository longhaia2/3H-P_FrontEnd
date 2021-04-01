import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagergrammarComponent } from './managergrammar.component';

describe('ManagergrammarComponent', () => {
  let component: ManagergrammarComponent;
  let fixture: ComponentFixture<ManagergrammarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagergrammarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagergrammarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

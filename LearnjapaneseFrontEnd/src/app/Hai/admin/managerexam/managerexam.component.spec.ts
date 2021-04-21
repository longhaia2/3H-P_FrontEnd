import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerexamComponent } from './managerexam.component';

describe('ManagerexamComponent', () => {
  let component: ManagerexamComponent;
  let fixture: ComponentFixture<ManagerexamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerexamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

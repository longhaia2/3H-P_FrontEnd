import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerexamupdateComponent } from './managerexamupdate.component';

describe('ManagerexamupdateComponent', () => {
  let component: ManagerexamupdateComponent;
  let fixture: ComponentFixture<ManagerexamupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerexamupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerexamupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

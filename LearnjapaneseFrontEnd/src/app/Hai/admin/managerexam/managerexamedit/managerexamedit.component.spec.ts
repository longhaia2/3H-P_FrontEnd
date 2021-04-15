import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerexameditComponent } from './managerexamedit.component';

describe('ManagerexameditComponent', () => {
  let component: ManagerexameditComponent;
  let fixture: ComponentFixture<ManagerexameditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerexameditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerexameditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

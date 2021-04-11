import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerexamaddComponent } from './managerexamadd.component';

describe('ManagerexamaddComponent', () => {
  let component: ManagerexamaddComponent;
  let fixture: ComponentFixture<ManagerexamaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerexamaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerexamaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

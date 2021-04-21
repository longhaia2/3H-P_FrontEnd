import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageruserComponent } from './manageruser.component';

describe('ManageruserComponent', () => {
  let component: ManageruserComponent;
  let fixture: ComponentFixture<ManageruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageruserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

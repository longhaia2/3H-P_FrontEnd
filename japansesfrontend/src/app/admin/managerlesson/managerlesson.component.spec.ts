import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerlessonComponent } from './managerlesson.component';

describe('ManagerlessonComponent', () => {
  let component: ManagerlessonComponent;
  let fixture: ComponentFixture<ManagerlessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerlessonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerlessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

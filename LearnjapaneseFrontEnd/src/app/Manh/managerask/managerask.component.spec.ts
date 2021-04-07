import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageraskComponent } from './managerask.component';

describe('ManageraskComponent', () => {
  let component: ManageraskComponent;
  let fixture: ComponentFixture<ManageraskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageraskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageraskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

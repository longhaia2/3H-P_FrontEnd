import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagertestComponent } from './managertest.component';

describe('ManagertestComponent', () => {
  let component: ManagertestComponent;
  let fixture: ComponentFixture<ManagertestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagertestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagertestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerlisttestComponent } from './managerlisttest.component';

describe('ManagerlisttestComponent', () => {
  let component: ManagerlisttestComponent;
  let fixture: ComponentFixture<ManagerlisttestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerlisttestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerlisttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

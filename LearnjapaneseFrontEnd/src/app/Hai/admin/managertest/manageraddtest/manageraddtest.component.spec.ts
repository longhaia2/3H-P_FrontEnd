import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageraddtestComponent } from './manageraddtest.component';

describe('ManageraddtestComponent', () => {
  let component: ManageraddtestComponent;
  let fixture: ComponentFixture<ManageraddtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageraddtestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageraddtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

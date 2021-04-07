import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageraddquestionfortestComponent } from './manageraddquestionfortest.component';

describe('ManageraddquestionfortestComponent', () => {
  let component: ManageraddquestionfortestComponent;
  let fixture: ComponentFixture<ManageraddquestionfortestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageraddquestionfortestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageraddquestionfortestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

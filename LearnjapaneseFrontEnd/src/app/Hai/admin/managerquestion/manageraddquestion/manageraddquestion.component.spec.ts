import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageraddquestionComponent } from './manageraddquestion.component';

describe('ManageraddquestionComponent', () => {
  let component: ManageraddquestionComponent;
  let fixture: ComponentFixture<ManageraddquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageraddquestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageraddquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

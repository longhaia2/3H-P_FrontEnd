import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerquestionComponent } from './managerquestion.component';

describe('ManagerquestionComponent', () => {
  let component: ManagerquestionComponent;
  let fixture: ComponentFixture<ManagerquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerquestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerlistquestionComponent } from './managerlistquestion.component';

describe('ManagerlistquestionComponent', () => {
  let component: ManagerlistquestionComponent;
  let fixture: ComponentFixture<ManagerlistquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerlistquestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerlistquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

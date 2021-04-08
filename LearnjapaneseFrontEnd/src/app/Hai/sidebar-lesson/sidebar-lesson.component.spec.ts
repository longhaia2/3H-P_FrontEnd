import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLessonComponent } from './sidebar-lesson.component';

describe('SidebarLessonComponent', () => {
  let component: SidebarLessonComponent;
  let fixture: ComponentFixture<SidebarLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarLessonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

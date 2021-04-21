import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelessonComponent } from './homelesson.component';

describe('HomelessonComponent', () => {
  let component: HomelessonComponent;
  let fixture: ComponentFixture<HomelessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomelessonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomelessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTvComponent } from './home-tv.component';

describe('HomeTvComponent', () => {
  let component: HomeTvComponent;
  let fixture: ComponentFixture<HomeTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

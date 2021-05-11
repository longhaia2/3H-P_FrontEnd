import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseScoreComponent } from './choose-score.component';

describe('ChooseScoreComponent', () => {
  let component: ChooseScoreComponent;
  let fixture: ComponentFixture<ChooseScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

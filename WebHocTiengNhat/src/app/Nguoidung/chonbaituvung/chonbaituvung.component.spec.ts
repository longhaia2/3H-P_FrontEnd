import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChonbaituvungComponent } from './chonbaituvung.component';

describe('ChonbaituvungComponent', () => {
  let component: ChonbaituvungComponent;
  let fixture: ComponentFixture<ChonbaituvungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChonbaituvungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChonbaituvungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

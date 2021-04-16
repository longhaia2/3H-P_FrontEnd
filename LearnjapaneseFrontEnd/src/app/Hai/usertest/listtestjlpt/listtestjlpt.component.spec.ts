import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtestjlptComponent } from './listtestjlpt.component';

describe('ListtestjlptComponent', () => {
  let component: ListtestjlptComponent;
  let fixture: ComponentFixture<ListtestjlptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListtestjlptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtestjlptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

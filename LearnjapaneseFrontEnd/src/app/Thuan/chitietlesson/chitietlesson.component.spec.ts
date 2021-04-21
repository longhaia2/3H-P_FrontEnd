import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietlessonComponent } from './chitietlesson.component';

describe('ChitietlessonComponent', () => {
  let component: ChitietlessonComponent;
  let fixture: ComponentFixture<ChitietlessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChitietlessonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietlessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

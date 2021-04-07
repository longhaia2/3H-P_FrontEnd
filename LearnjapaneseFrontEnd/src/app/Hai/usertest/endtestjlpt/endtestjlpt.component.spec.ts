import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndtestjlptComponent } from './endtestjlpt.component';

describe('EndtestjlptComponent', () => {
  let component: EndtestjlptComponent;
  let fixture: ComponentFixture<EndtestjlptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndtestjlptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndtestjlptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

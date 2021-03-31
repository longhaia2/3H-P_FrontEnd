import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaophongthidauComponent } from './taophongthidau.component';

describe('TaophongthidauComponent', () => {
  let component: TaophongthidauComponent;
  let fixture: ComponentFixture<TaophongthidauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaophongthidauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaophongthidauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThidauComponent } from './thidau.component';

describe('ThidauComponent', () => {
  let component: ThidauComponent;
  let fixture: ComponentFixture<ThidauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThidauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThidauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

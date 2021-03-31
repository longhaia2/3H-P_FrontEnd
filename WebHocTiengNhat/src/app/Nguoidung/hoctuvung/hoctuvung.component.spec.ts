import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoctuvungComponent } from './hoctuvung.component';

describe('HoctuvungComponent', () => {
  let component: HoctuvungComponent;
  let fixture: ComponentFixture<HoctuvungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoctuvungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoctuvungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemtuvungComponent } from './themtuvung.component';

describe('ThemtuvungComponent', () => {
  let component: ThemtuvungComponent;
  let fixture: ComponentFixture<ThemtuvungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemtuvungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemtuvungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

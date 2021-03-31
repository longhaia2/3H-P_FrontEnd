import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuatuvungComponent } from './suatuvung.component';

describe('SuatuvungComponent', () => {
  let component: SuatuvungComponent;
  let fixture: ComponentFixture<SuatuvungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuatuvungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuatuvungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

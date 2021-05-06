import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathConfirmDialogComponent } from './math-confirm-dialog.component';

describe('MathConfirmDialogComponent', () => {
  let component: MathConfirmDialogComponent;
  let fixture: ComponentFixture<MathConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathConfirmDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

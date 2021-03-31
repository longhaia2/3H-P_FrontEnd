import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThachdaucungnhauComponent } from './thachdaucungnhau.component';

describe('ThachdaucungnhauComponent', () => {
  let component: ThachdaucungnhauComponent;
  let fixture: ComponentFixture<ThachdaucungnhauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThachdaucungnhauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThachdaucungnhauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

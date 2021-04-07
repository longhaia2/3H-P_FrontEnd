import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlibaihocComponent } from './quanlibaihoc.component';

describe('QuanlibaihocComponent', () => {
  let component: QuanlibaihocComponent;
  let fixture: ComponentFixture<QuanlibaihocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlibaihocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlibaihocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

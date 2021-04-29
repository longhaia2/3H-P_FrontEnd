import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToptestComponent } from './toptest.component';

describe('ToptestComponent', () => {
  let component: ToptestComponent;
  let fixture: ComponentFixture<ToptestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToptestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToptestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

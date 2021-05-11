import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnaccessComponent } from './unaccess.component';

describe('UnaccessComponent', () => {
  let component: UnaccessComponent;
  let fixture: ComponentFixture<UnaccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnaccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

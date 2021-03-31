import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatdauthiComponent } from './batdauthi.component';

describe('BatdauthiComponent', () => {
  let component: BatdauthiComponent;
  let fixture: ComponentFixture<BatdauthiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatdauthiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatdauthiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

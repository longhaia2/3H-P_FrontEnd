import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitaptuvungComponent } from './baitaptuvung.component';

describe('BaitaptuvungComponent', () => {
  let component: BaitaptuvungComponent;
  let fixture: ComponentFixture<BaitaptuvungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaitaptuvungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitaptuvungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N3TuvungComponent } from './n3-tuvung.component';

describe('N3TuvungComponent', () => {
  let component: N3TuvungComponent;
  let fixture: ComponentFixture<N3TuvungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N3TuvungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N3TuvungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

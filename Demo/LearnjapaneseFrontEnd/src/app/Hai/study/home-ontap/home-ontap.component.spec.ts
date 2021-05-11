import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOntapComponent } from './home-ontap.component';

describe('HomeOntapComponent', () => {
  let component: HomeOntapComponent;
  let fixture: ComponentFixture<HomeOntapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeOntapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOntapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNpComponent } from './home-np.component';

describe('HomeNpComponent', () => {
  let component: HomeNpComponent;
  let fixture: ComponentFixture<HomeNpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

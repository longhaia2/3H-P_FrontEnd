import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndcompetitionComponent } from './endcompetition.component';

describe('EndcompetitionComponent', () => {
  let component: EndcompetitionComponent;
  let fixture: ComponentFixture<EndcompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndcompetitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndcompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

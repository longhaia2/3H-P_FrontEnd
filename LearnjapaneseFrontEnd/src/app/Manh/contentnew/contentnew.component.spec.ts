import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentnewComponent } from './contentnew.component';

describe('ContentnewComponent', () => {
  let component: ContentnewComponent;
  let fixture: ComponentFixture<ContentnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportActivityRecognizationComponent } from './sport-activity-recognization.component';

describe('SportActivityRecognizationComponent', () => {
  let component: SportActivityRecognizationComponent;
  let fixture: ComponentFixture<SportActivityRecognizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportActivityRecognizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SportActivityRecognizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

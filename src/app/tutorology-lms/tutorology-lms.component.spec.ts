import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorologyLMSComponent } from './tutorology-lms.component';

describe('TutorologyLMSComponent', () => {
  let component: TutorologyLMSComponent;
  let fixture: ComponentFixture<TutorologyLMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorologyLMSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorologyLMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

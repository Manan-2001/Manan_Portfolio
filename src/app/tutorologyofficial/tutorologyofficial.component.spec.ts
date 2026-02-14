import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorologyofficialComponent } from './tutorologyofficial.component';

describe('TutorologyofficialComponent', () => {
  let component: TutorologyofficialComponent;
  let fixture: ComponentFixture<TutorologyofficialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorologyofficialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorologyofficialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

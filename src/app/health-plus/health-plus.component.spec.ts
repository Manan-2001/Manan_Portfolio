import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthPlusComponent } from './health-plus.component';

describe('HealthPlusComponent', () => {
  let component: HealthPlusComponent;
  let fixture: ComponentFixture<HealthPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthPlusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HealthPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

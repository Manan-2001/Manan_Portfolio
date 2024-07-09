import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PGAVRentalSystemComponent } from './pgav-rental-system.component';

describe('PGAVRentalSystemComponent', () => {
  let component: PGAVRentalSystemComponent;
  let fixture: ComponentFixture<PGAVRentalSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PGAVRentalSystemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PGAVRentalSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

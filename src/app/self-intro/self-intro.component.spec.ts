import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfIntroComponent } from './self-intro.component';

describe('SelfIntroComponent', () => {
  let component: SelfIntroComponent;
  let fixture: ComponentFixture<SelfIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelfIntroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelfIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

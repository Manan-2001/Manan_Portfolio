import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeMochaManiaComponent } from './cafe-mocha-mania.component';

describe('CafeMochaManiaComponent', () => {
  let component: CafeMochaManiaComponent;
  let fixture: ComponentFixture<CafeMochaManiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafeMochaManiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CafeMochaManiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

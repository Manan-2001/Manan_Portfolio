import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseAndExpenditureComponent } from './expense-and-expenditure.component';

describe('ExpenseAndExpenditureComponent', () => {
  let component: ExpenseAndExpenditureComponent;
  let fixture: ComponentFixture<ExpenseAndExpenditureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseAndExpenditureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpenseAndExpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

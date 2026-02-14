import { Location } from '@angular/common';
import { Component } from '@angular/core';
import {  } from '@angular/router';

@Component({
  selector: 'app-expense-and-expenditure',
  standalone: true,
  imports: [],
  templateUrl: './expense-and-expenditure.component.html',
  styleUrl: './expense-and-expenditure.component.scss'
})
export class ExpenseAndExpenditureComponent {
   constructor(private location: Location) {}

  goBack(){
    this.location.back();
  }
}

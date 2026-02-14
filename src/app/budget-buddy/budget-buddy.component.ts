import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-budget-buddy',
  standalone: true,
  imports: [],
  templateUrl: './budget-buddy.component.html',
  styleUrl: './budget-buddy.component.scss'
})
export class BudgetBuddyComponent {

    constructor(private location: Location) {}

  goBack(){
    this.location.back();
  }

  source(){
    window.alert("Repository is private due to sensitive API credentials.");
  }
}

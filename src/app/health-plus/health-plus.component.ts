import { CommonModule,  Location } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-health-plus',
  standalone: true,
  imports: [CommonModule ,RouterOutlet, RouterModule],
  templateUrl: './health-plus.component.html',
  styleUrl: './health-plus.component.scss'
})
export class HealthPlusComponent {
    constructor(private location: Location) {}

  goBack(){
    this.location.back();
  }
}

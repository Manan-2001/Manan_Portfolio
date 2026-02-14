import {  Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sport-activity-recognization',
  standalone: true,
  imports: [],
  templateUrl: './sport-activity-recognization.component.html',
  styleUrl: './sport-activity-recognization.component.scss'
})
export class SportActivityRecognizationComponent {
  constructor(private location: Location) {}

  goBack(){
    this.location.back();
  }
}

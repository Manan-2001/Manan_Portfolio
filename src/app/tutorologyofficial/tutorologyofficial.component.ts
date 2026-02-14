import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tutorologyofficial',
  standalone: true,
  imports: [],
  templateUrl: './tutorologyofficial.component.html',
  styleUrl: './tutorologyofficial.component.scss'
})
export class TutorologyofficialComponent {
  constructor(private location: Location) {}

  goBack(){
    this.location.back();
  }

  source(){
    window.alert("This project is part of a company system. Source code is not publicly accessible due to company policy.");
  }
}

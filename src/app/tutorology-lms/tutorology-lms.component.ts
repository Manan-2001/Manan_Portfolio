import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tutorology-lms',
  standalone: true,
  imports: [],
  templateUrl: './tutorology-lms.component.html',
  styleUrl: './tutorology-lms.component.scss'
})
export class TutorologyLMSComponent {
  constructor(private location: Location) {}

  goBack(){
    this.location.back();
  }

  source(){
    window.alert("This project is part of a company system. Source code is not publicly accessible due to company policy.");
  }
}

import { Location } from '@angular/common';
import { Component, } from '@angular/core';

@Component({
  selector: 'app-employee-management-rest-api',
  standalone: true,
  imports: [],
  templateUrl: './employee-management-rest-api.component.html',
  styleUrl: './employee-management-rest-api.component.scss'
})
export class EmployeeManagementRestAPIComponent {
    constructor(private location: Location) {}

  goBack(){
    this.location.back();
  }
}

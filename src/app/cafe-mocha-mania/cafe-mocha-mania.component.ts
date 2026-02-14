import {  Location } from '@angular/common';
import { Component, } from '@angular/core';
@Component({
  selector: 'app-cafe-mocha-mania',
  standalone: true,
  imports: [],
  templateUrl: './cafe-mocha-mania.component.html',
  styleUrl: './cafe-mocha-mania.component.scss'
})
export class CafeMochaManiaComponent {
   constructor(private location: Location) {}
  goBack(){
    this.location.back();
  }
}

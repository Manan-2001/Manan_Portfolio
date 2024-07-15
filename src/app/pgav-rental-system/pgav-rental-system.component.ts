import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pgav-rental-system',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterModule],
  templateUrl: './pgav-rental-system.component.html',
  styleUrl: './pgav-rental-system.component.scss'
})
export class PGAVRentalSystemComponent {
  vidStarPGAV=false;
  startVideoPGAV(){
    this.vidStarPGAV=true;
  }
  stopVideoPGAV(){
    this.vidStarPGAV=false;
  }
}

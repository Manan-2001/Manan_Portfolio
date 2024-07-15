import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pgav-rental-system',
  standalone: true,
  imports: [CommonModule],
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

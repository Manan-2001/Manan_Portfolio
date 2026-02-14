import { Component } from '@angular/core';
import { SmootScrollService } from '../smoot-scroll.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  constructor(private smoothScrollService: SmootScrollService) {}

  scrollTo(targetId: string): void {
    setTimeout(() => {
      this.smoothScrollService.scrollToElement(targetId);
    }, 250);
  }
}

import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { SmootScrollService } from '../smoot-scroll.service';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  private scrollHandler!: () => void;

  constructor(
    private elementRef: ElementRef,
    private smoothScrollService: SmootScrollService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  scrollTo(targetId: string): void {
    this.smoothScrollService.scrollToElement(targetId);
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const aboutMeContainer = this.elementRef.nativeElement.querySelector('#about-me-container');

      if (aboutMeContainer) {
        this.scrollHandler = () => {
          const rect = aboutMeContainer.getBoundingClientRect();
          const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;

          if (isInView) {
            aboutMeContainer.classList.add('fade-in');
          } else {
            aboutMeContainer.classList.remove('fade-in');
          }
        };

        window.addEventListener('scroll', this.scrollHandler);
      }
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId) && this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }
}

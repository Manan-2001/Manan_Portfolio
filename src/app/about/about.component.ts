import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  private observer!: IntersectionObserver;

  constructor(
    private elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {

      const target = this.elementRef.nativeElement.querySelector('#about-me-container');

      if (target) {
        this.observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              target.classList.add('fade-in');
            }
          },
          { threshold: 0.3 }
        );

        this.observer.observe(target);
      }
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

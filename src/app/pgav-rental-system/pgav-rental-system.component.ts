import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pgav-rental-system',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterModule],
  templateUrl: './pgav-rental-system.component.html',
  styleUrl: './pgav-rental-system.component.scss'
})
export class PGAVRentalSystemComponent {
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const contents = this.el.nativeElement.querySelectorAll('.content');

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.addClass(entry.target, 'float-right-to-left');
          }
        });
      }, {
        threshold: 0.1
      });

      contents.forEach((content: Element) => {
        this.observer.observe(content);
      });
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

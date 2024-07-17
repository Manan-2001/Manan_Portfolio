import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sport-activity-recognization',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './sport-activity-recognization.component.html',
  styleUrl: './sport-activity-recognization.component.scss'
})
export class SportActivityRecognizationComponent {
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

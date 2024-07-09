import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-workexperience',
  standalone: true,
  imports: [],
  templateUrl: './workexperience.component.html',
  styleUrl: './workexperience.component.scss'
})
export class WorkexperienceComponent {
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

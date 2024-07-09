import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  private observer!: IntersectionObserver;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const contents = this.el.nativeElement.querySelectorAll('.content');

      if (contents && contents.length > 0) {
        try {
          this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                this.renderer.addClass(entry.target, 'float-bottom-to-top');
              }
            });
          }, {
            threshold: 0.1
          });

          contents.forEach((content: Element) => {
            this.observer.observe(content);
          });
        } catch (error) {
          console.error('Error creating IntersectionObserver:', error);
        }
      }
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId) && this.observer) {
      this.observer.disconnect();
    }
  }
}

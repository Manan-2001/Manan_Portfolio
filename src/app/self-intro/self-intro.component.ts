import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-self-intro',
  standalone: true,
  imports: [CommonModule, NgxTypedJsModule],
  templateUrl: './self-intro.component.html',
  styleUrl: './self-intro.component.scss'
})
export class SelfIntroComponent {
  isBrowser: boolean;
  showTyped = true;   // control rendering
  private observer!: IntersectionObserver;

  @ViewChild('introBox', { static: false }) introBox!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser && this.introBox) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.showTyped = true;   // show when visible
            } else {
              this.showTyped = false;  // hide when not visible
            }
          });
        },
        {
          threshold: 0.2
        }
      );

      this.observer.observe(this.introBox.nativeElement);
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
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

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      // Any code that needs to run on the browser
    }
  }
}

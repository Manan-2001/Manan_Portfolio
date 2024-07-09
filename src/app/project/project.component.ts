import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  private scrollHandler!: () => void;

  constructor(
    private elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  EEApphref="/assets/SelfIntro/Expense_Manager_Application.html";
  pgavhref="/assets/SelfIntro/PGAV_Rental_Sytem.html";
  CMMhref="/assets/SelfIntro/Cafe_Mocha_Mania.html";
  HPApphref="/assets/SelfIntro/Health_Plus_Application.html";
  EMRApihref="/assets/SelfIntro/EmployeeManagement_RestFull_API.html";
  SARShref="/assets/SelfIntro/Sports Activity Recognition System.html";

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

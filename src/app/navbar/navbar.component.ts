import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isScrolled = false;
  activeSection = 'home';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 30;
    this.detectSection();
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      this.activeSection = id;
    }
  }

  detectSection() {
    const sections = ['home', 'about', 'skills', 'workexperience', 'projects', 'contact'];
    for (let sec of sections) {
      const el = document.getElementById(sec);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          this.activeSection = sec;
        }
      }
    }
  }
}

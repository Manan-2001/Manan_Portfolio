import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
    imports: [FormsModule, CommonModule]
})
export class ContactComponent {
  private scrollHandler!: (this: Window, ev: Event) => void;

  constructor(private elementRef: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {}

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


name="";
email="";
subject="";
msg="";
validatename=true;
validateemail=true;
validatemsg=true;
validatesubject=true;
validate=true;

async send(){
  // emailjs.init('9ODSSIXdXnjLwqRD7');
  // let response= emailjs.send("service_ev0mglf","template_m36qw5u",{
  //   from_name: this.name,
  //   to_name: "Manan Jain",
  //   from_email: this.email,
  //   subject: this.subject,
  //   message: this.msg
  //   });

  this.validateemail=true;
  this.validatemsg=true;
  this.validatename=true;
  this.validatesubject=true;
  
   if(this.name ==""){
    this.validatename=false;
    this.validate=false;
    }
    if(this.email ==""){
      this.validateemail=false;
    this.validate=false;
      }
      if(this.subject ==""){
        this.validatesubject=false;
    this.validate=false;
   }
   if(this.msg ==""){
    this.validatemsg=false;
    this.validate=false;
   }
 
}
clear(){
  this.name="";
    this.email="";
    this.subject="";
    this.msg="";
}
}


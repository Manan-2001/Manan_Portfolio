import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-hire-form',
  standalone: true,
  imports: [FormsModule,RouterOutlet, RouterModule,CommonModule],
  templateUrl: './hire-form.component.html',
  styleUrl: './hire-form.component.scss'
})
export class HireFormComponent {
name="";
email="";
subject="";
msg="";
senderemail="";
validatename=true;
validateemail=true;
validatemsg=true;
validatesubject=true;
validate=true;



  // emailjs.init('9ODSSIXdXnjLwqRD7');
  // let response= emailjs.send("service_ev0mglf","template_m36qw5u",{
  //   from_name: this.name,
  //   to_name: "Manan Jain",
  //   from_email: this.email,
  //   subject: this.subject,
  //   message: this.msg
  //   });

  async send() {
    this.validateemail = true;
    this.validatemsg = true;
    this.validatename = true;
    this.validatesubject = true;
    this.validate = true;
  
    if (this.name === "") {
      this.validatename = false;
    }
    if (this.senderemail === "") {
      this.validateemail = false;
    }
    if (this.subject === "") {
      this.validatesubject = false;
    }
    if (this.msg === "") {
      this.validatemsg = false;
    }
  
    if (this.validatename && this.validateemail && this.validatesubject && this.validatemsg) {
      this.validate = true;
      console.log("All fields are valid. Sending email...");
  
      // Email Js COnfiguration
      emailjs.init('9ODSSIXdXnjLwqRD7');
      let response = emailjs.send("service_ev0mglf", "template_m36qw5u", {
        from_name: this.name,
        to_name: "Manan Jain",
        from_email: this.senderemail,
        subject: this.subject,
        message: this.msg
      });
      this.clear();
    } else {
      console.log("One or more fields are invalid.");
    }
  }
clear(){
  this.name="";
    this.senderemail="";
    this.subject="";
    this.msg="";
}


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

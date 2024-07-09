import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-hire-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hire-form.component.html',
  styleUrl: './hire-form.component.scss'
})
export class HireFormComponent {
name="";
email="";
subject="";
msg="";


async send(){
  emailjs.init('9ODSSIXdXnjLwqRD7');
  let response= emailjs.send("service_ev0mglf","template_m36qw5u",{
    from_name: this.name,
    to_name: "Manan Jain",
    from_email: this.email,
    subject: this.subject,
    message: this.msg
    });

    alert('Mail has been Sent...');
    this.name="";
    this.email="";
    this.subject="";
    this.msg="";
}

}

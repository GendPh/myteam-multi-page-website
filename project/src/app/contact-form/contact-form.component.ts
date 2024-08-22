import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { EmailService } from '../service/email.service';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

type FormDetails = {
  name: string;
  email: string;
  company: string;
  title: string;
  message: string;
}

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  @ViewChild('contactForm') contactForm: NgForm | undefined;


  public details: FormDetails = {
    name: "",
    email: "",
    company: "",
    title: "",
    message: ""
  }

  private myEmail = environment.myEmail;
  public failedEmailValidation = false;


  public sendingEmail: boolean = false;
  public statusMessage: string = 'submit';
  public emailSent: boolean = false;


  constructor(private emailService: EmailService) {
    this.emailService.sendingEmail$.subscribe((sending) => {
      this.sendingEmail = sending;
    });
    this.emailService.statusMessage$.subscribe((status) => {
      this.statusMessage = status;
    });
    this.emailService.emailSent$.subscribe((sent) => {
      this.emailSent = sent;
    });
  }

  onSubmit() {
    // Iterate over the keys of the details object and trim the values
    (Object.keys(this.details) as Array<keyof FormDetails>).forEach(key => {
      this.details[key] = this.details[key].trim();
    });

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    this.failedEmailValidation = emailRegex.test(this.details.email) ? false : true;


    if (!this.contactForm?.valid) {
      // Send the form details to the server
      console.log("invalid form");
    } else {
      this.emailService.sendEmail({
        client_name: this.details.name,
        client_email: this.details.email,
        client_message: this.details.message,
        destination_email: this.myEmail,
      });

      this.contactForm.resetForm();
    }
  }
}

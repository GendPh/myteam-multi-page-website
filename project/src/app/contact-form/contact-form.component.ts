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
  // ViewChild decorator to get the form reference
  @ViewChild('contactForm') contactForm: NgForm | undefined;

  // Form details object
  public details: FormDetails = {
    name: "",
    email: "",
    company: "",
    title: "",
    message: ""
  }

  // Email address to send the form details
  private myEmail = environment.myEmail;
  // Variable to determine if the email validation failed
  public failedEmailValidation = false;
  // Variables to determine the email sending status
  public sendingEmail: boolean = false;
  public statusMessage: string = 'submit';
  public emailSent: boolean = false;


  constructor(private emailService: EmailService) {
    // Subscribing to the email service observables
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

    // Regular expression to validate the email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Check if the email is valid
    this.failedEmailValidation = emailRegex.test(this.details.email) ? false : true;

    // Check if the form is valid
    if (this.contactForm?.valid) {
      // Send the email with the form details 
      this.emailService.sendEmail({
        client_name: this.details.name,
        client_email: this.details.email,
        client_message: this.details.message,
        destination_email: this.myEmail,
      });
      // Reset the form after sending the email
      this.contactForm?.resetForm();
    }
  }
}

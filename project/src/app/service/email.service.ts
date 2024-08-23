import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import emailjs from 'emailjs-com';
import { BehaviorSubject } from 'rxjs';


export interface emailMessage {
  client_name: string;
  client_email: string;
  client_message: string;
  destination_email: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  // EmailJS API key, service ID and template ID
  private apiKey = environment.apiKey;
  private sKey = environment.service_id;
  private tKey = environment.template_id;
  // Observables to determine the email sending status
  private sendingEmail: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public sendingEmail$ = this.sendingEmail.asObservable();

  private emailSent: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public emailSent$ = this.emailSent.asObservable();

  private statusMessage: BehaviorSubject<string> = new BehaviorSubject<string>('submit');
  public statusMessage$ = this.statusMessage.asObservable();

  constructor() { }

  // Method to initialize the EmailJS
  private initEmail(): boolean {
    try {
      if (!this.apiKey) {
        return false;
      }

      emailjs.init(this.apiKey);
      return true;

    } catch (error) {
      return false;
    }
  }
  // Method to send the email
  sendEmail(template: emailMessage) {
    // Set the sending email status to true
    this.sendingEmail.next(true);
    this.statusMessage.next('sending');
    // Initialize the EmailJS
    const ini = this.initEmail();
    // If the initialization fails, set the sending email status to false and the status message to error
    if (!ini) {
      this.sendingEmail.next(false);
      this.statusMessage.next('error');
      return;
    }

    // Sanitize the input to prevent XSS attacks
    const sanitizeTemplate: Record<string, unknown> = this.sanitizeInput(template) as Record<string, unknown>;

    // Send the email
    emailjs.send(this.sKey, this.tKey, sanitizeTemplate).then(
      (resp) => {
        // If the email is sent successfully, set the status message to success and the email sent status to true
        this.statusMessage.next('success');
        this.emailSent.next(true);
      },
      (err) => {
        // If the email sending fails, set the status message
        this.statusMessage.next('failed');
      },
    ).finally(() => {
      // Set the sending email status to false
      this.sendingEmail.next(false);
    }
    );
  }

  // Method to sanitize the input
  private sanitizeInput(template: emailMessage) {
    return {
      client_name: template.client_name.replace(/<[^>]*>?/gm, ''),
      client_email: template.client_email.replace(/<[^>]*>?/gm, ''),
      client_message: template.client_message.replace(/<[^>]*>?/gm, ''),
      destination_email: template.destination_email.replace(/<[^>]*>?/gm, ''),
    };
  }
}

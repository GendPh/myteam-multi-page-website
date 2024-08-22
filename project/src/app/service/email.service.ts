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

  private apiKey = environment.apiKey;
  private sKey = environment.service_id;
  private tKey = environment.template_id;

  private sendingEmail: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public sendingEmail$ = this.sendingEmail.asObservable();

  private emailSent: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public emailSent$ = this.emailSent.asObservable();

  private statusMessage: BehaviorSubject<string> = new BehaviorSubject<string>('submit');
  public statusMessage$ = this.statusMessage.asObservable();

  constructor() { }

  initEmail(): boolean {
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

  sendEmail(template: emailMessage) {

    this.sendingEmail.next(true);
    this.statusMessage.next('sending');

    const ini = this.initEmail();

    if (!ini) {
      this.sendingEmail.next(false);
      this.statusMessage.next('error');
      return;
    }

    // Sanitize the input to prevent XSS attacks
    const sanitizeTemplate: Record<string, unknown> = this.sanitizeInput(template) as Record<string, unknown>;



    emailjs.send(this.sKey, this.tKey, sanitizeTemplate).then(
      (resp) => {
        this.statusMessage.next('success');
        this.emailSent.next(true);
      },
      (err) => {
        this.statusMessage.next('failed');
      },
    ).finally(() => {
      this.sendingEmail.next(false);
    }
    );
  }


  private sanitizeInput(template: emailMessage) {
    return {
      client_name: template.client_name.replace(/<[^>]*>?/gm, ''),
      client_email: template.client_email.replace(/<[^>]*>?/gm, ''),
      client_message: template.client_message.replace(/<[^>]*>?/gm, ''),
      destination_email: template.destination_email.replace(/<[^>]*>?/gm, ''),
    };
  }
}

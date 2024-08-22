import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiKey = environment.apiKey;
  private apiUrl = environment.apiUrl;

  constructor() {
    console.log('API Key:', this.apiKey);
    console.log('API URL:', this.apiUrl);
  }
}

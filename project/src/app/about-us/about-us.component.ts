import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AboutUs } from '../contact-page/contact-page.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  /* Pre default value */
  @Input("Us") aboutUs: AboutUs = {
    description: "The quality of our talent network",
    image: "icon-person"
  };
}

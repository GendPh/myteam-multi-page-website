import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';


export type AboutUs = {
  description: string;
  image: string;
}

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, AboutUsComponent, ContactFormComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent implements AfterViewInit {


  public aboutUs: Array<AboutUs> = [
    {
      description: "The quality of our talent network",
      image: "icon-person"
    },
    {
      description: "Usage & implementation of our software",
      image: "icon-cog"
    },
    {
      description: "How we help drive innovation",
      image: "icon-chart"
    }
  ];


  ngAfterViewInit(): void {
    do {
      window.scrollTo(0, 0);
    } while (window.scrollY !== 0);
  }

}

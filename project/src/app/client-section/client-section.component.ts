import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { ClientLogoComponent } from '../client-logo/client-logo.component';

@Component({
  selector: 'app-client-section',
  standalone: true,
  imports: [CommonModule, ClientLogoComponent],
  templateUrl: './client-section.component.html',
  styleUrl: './client-section.component.css'
})
export class ClientSectionComponent implements AfterViewInit {

  // Array of client logos
  public clientLogos: Array<string> = ["logo-the-verge", "logo-jakarta-post", "logo-the-guardian", "logo-tech-radar", "logo-gadgets-now"];

  // Variable to determine if the component is in the view of the user
  public isInViewport = false;

  ngAfterViewInit() {
    // This observer will check if the component is in the viewport of the user
    const logosHeader: HTMLElement = document.querySelector("#clientLogosHeader") as HTMLElement;
    const observer = new IntersectionObserver(
      // If the component is in the viewport, the isInViewport variable will be set to true
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isInViewport = true;
          // The observer will stop observing the component
          observer.unobserve(logosHeader);
        }
      },
      // The threshold is set to 0.7, which means that the observer will trigger when 70% of the component is in the viewport
      { threshold: 0.7 }
    );

    // The observer will observe the header of the client logos section
    observer.observe(logosHeader);
  }

}

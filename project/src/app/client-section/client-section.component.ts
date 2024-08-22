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

  public clientLogos: Array<string> = ["logo-the-verge", "logo-jakarta-post", "logo-the-guardian", "logo-tech-radar", "logo-gadgets-now"];


  public isInViewport = false;

  ngAfterViewInit() {
    const logosHeader: HTMLElement = document.querySelector("#clientLogosHeader") as HTMLElement;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isInViewport = true;
          observer.unobserve(logosHeader);
        }
      },
      { threshold: 0.7 }
    );

    observer.observe(logosHeader);
  }

}

import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-client-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-logo.component.html',
  styleUrl: './client-logo.component.css'
})
export class ClientLogoComponent implements AfterViewInit {
  /* Pre default image */
  @Input("LogoName") public logoName: string = "logo-the-verge";

  /* Variable to determine if the component is in the view of the user */
  public isInViewport = false;

  /* Gets this component reference */
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    // This observer will check if the component is in the viewport of the user 
    const observer = new IntersectionObserver(
      // If the component is in the viewport, the isInViewport variable will be set to true
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isInViewport = true;
          observer.unobserve(this.elementRef.nativeElement);
        }
      },
      // The threshold is set to 0.7, which means that the observer will trigger when 70% of the component is in the viewport
      { threshold: 0.7 }
    );
    // The observer will observe this component
    observer.observe(this.elementRef.nativeElement);
  }
}

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
  @Input("LogoName") public logoName: string = "logo-the-verge";

  public isInViewport = false;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isInViewport = true;
          observer.unobserve(this.elementRef.nativeElement);
        }
      },
      { threshold: 0.7 }
    );

    observer.observe(this.elementRef.nativeElement);
  }
}

import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {
  @Input("Header") header: string = "Find the best";
  @Input("HeaderSpan") headerSpan: string = "talent";
  @Input("Description") description: string = "Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.";


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
      { threshold: 0.5 }
    );

    observer.observe(this.elementRef.nativeElement);
  }
}

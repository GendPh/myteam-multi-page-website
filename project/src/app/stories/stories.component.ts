import { AfterViewInit, Component, ElementRef, Input, OnDestroy } from '@angular/core';
import { Story } from '../home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css'
})
export class StoriesComponent implements OnDestroy, AfterViewInit {
  @Input("Story") public story: Story = {
    name: 'Kady Baker',
    position: 'Product Manager at Bookmark',
    image: 'kady',
    quote: '“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”'
  };


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
      { threshold: 1 }
    );

    observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.isInViewport = false;
  }
}

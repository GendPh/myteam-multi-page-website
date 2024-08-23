import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import { Director } from '../directors-section/directors-section.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-director',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './director.component.html',
  styleUrl: './director.component.css'
})
export class DirectorComponent implements AfterViewInit {
  // Director object 
  @Input("Director") director: Director = {
    name: "Nikita Marks",
    position: "Founder & CEO",
    desc: "“It always amazes me how much talent there is in every corner of the globe.”",
    img: "nikita"
  };

  // Variable to determine if the component is in the view of the user
  public isInViewport: boolean = false;

  // Variables to determine if the description is open
  public descOpen: boolean = false;
  public firstClick: number = 0;

  // Gets this component reference
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    // This observer will check if the component is in the viewport of the user
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isInViewport = true;
          observer.unobserve(this.elementRef.nativeElement);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(this.elementRef.nativeElement);
  }

  // Method to toggle the description
  public toggleDesc() {
    if (this.firstClick === 0) {
      this.firstClick++;
    }
    this.descOpen = !this.descOpen;
  }

}

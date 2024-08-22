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
  @Input("Director") director: Director = {
    name: "Nikita Marks",
    position: "Founder & CEO",
    desc: "“It always amazes me how much talent there is in every corner of the globe.”",
    img: "nikita"
  };

  public isInViewport: boolean = false;

  public descOpen: boolean = false;
  public firstClick: number = 0;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
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

  public toggleDesc() {
    if (this.firstClick === 0) {
      this.firstClick++;
    }
    this.descOpen = !this.descOpen;
  }

}

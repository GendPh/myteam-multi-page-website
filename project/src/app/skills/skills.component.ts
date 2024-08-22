import { AfterViewInit, Component, ElementRef, Input, OnDestroy } from '@angular/core';
import { Skill } from '../home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'], // Ensure correct plural 'styleUrls'
})
export class SkillsComponent implements AfterViewInit, OnDestroy {
  @Input("Skill") skill: Skill = { // Corrected "Skill" to "skill"
    icon: 'icon-person',
    title: 'Experienced Individuals',
    desc: 'Our network is made up of highly experienced professionals who are passionate about what they do.'
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

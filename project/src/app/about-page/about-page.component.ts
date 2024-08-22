import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { DirectorsSectionComponent } from '../directors-section/directors-section.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [HeroSectionComponent, DirectorsSectionComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {

  public title: string = "About";
  public desc: string = "We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.";
}

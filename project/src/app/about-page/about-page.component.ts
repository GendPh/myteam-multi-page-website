import { AfterViewInit, Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { DirectorsSectionComponent } from '../directors-section/directors-section.component';
import { ClientSectionComponent } from '../client-section/client-section.component';
import { StartComponent } from '../start/start.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [HeroSectionComponent, DirectorsSectionComponent, ClientSectionComponent, StartComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent implements AfterViewInit {
  
  ngAfterViewInit(): void {
    do {
      // Scroll to the top of the page
      window.scrollTo(0, 0);
    } while (window.scrollY !== 0);
  }

  public title: string = "About";
  public desc: string = "We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.";
}

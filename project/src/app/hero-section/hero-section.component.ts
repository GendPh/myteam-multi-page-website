import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {
  @Input("Header") header: string = "Find the best";
  @Input("HeaderSpan") headerSpan: string = "talent";
  @Input("Description") description: string = "Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.";
}

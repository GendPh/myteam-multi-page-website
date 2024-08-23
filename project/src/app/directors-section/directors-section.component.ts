import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { DirectorComponent } from '../director/director.component';
import { CommonModule } from '@angular/common';


export type Director = {
  name: string;
  position: string;
  desc: string;
  img: string;
}



@Component({
  selector: 'app-directors-section',
  standalone: true,
  imports: [DirectorComponent, CommonModule],
  templateUrl: './directors-section.component.html',
  styleUrl: './directors-section.component.css'
})
export class DirectorsSectionComponent implements AfterViewInit {

  // Array of objects containing the director details
  public directors: Array<Director> = [
    {
      name: "Nikita Marks",
      position: "Founder & CEO",
      desc: "“It always amazes me how much talent there is in every corner of the globe.”",
      img: "nikita"
    },
    {
      name: "Cristian Duncan",
      position: "Co-founder & COO",
      desc: "“Distributed teams required unique processes. You need to approach work in a new way.”",
      img: "christian"
    },
    {
      name: "Cruz Hamer",
      position: "Co-founder & CTO",
      desc: "“Technology is at the forefront of enabling distributed teams. That's where we come in.”",
      img: "cruz"
    },
    {
      name: "Drake Heaton",
      position: "Business Development Lead",
      desc: "“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”",
      img: "drake"
    },
    {
      name: "Griffin Wise",
      position: "Lead Marketing",
      desc: "“Unique perspectives shape unique products, which is what you need to survive these days.”",
      img: "griffin"
    },
    {
      name: "Aden Allan",
      position: "Head of Talent",
      desc: "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
      img: "aden"
    }
  ];

  // Variable to determine if the directors header is in the viewport
  public isDirectorsHeaderInViewport: boolean = false;

  ngAfterViewInit(): void {
    // This observer will check if the directors header is in the viewport of the user
    const directorsHeader: HTMLElement = document.querySelector('#directors-header') as HTMLElement;
    const observerDirectorHeader = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isDirectorsHeaderInViewport = true;
          observerDirectorHeader.unobserve(directorsHeader);
        }
      },
      { threshold: 0.1 }
    );
    // The observer will observe the directors header element 
    observerDirectorHeader.observe(directorsHeader);
  }

}
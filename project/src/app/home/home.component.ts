import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { SkillsComponent } from '../skills/skills.component';
import { CommonModule } from '@angular/common';
import { StoriesComponent } from '../stories/stories.component';
import { StartComponent } from '../start/start.component';


export type Skill = {
  icon: string;
  title: string;
  desc: string;
};

export type Story = {
  name: string;
  position: string;
  image: string;
  quote: string;
}


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, SkillsComponent, StoriesComponent, StartComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  public skillHeaderVisible: boolean = false;
  public storiesHeaderVisible: boolean = false;


  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {

    do {
      // Scroll to the top of the page
      window.scrollTo(0, 0);
    } while (window.scrollY !== 0);


    const skillHeaderEl: HTMLElement | null = document.getElementById('skills-header');
    const storyHeaderEl: HTMLElement | null = document.getElementById('stories-header');


    const observerSkill = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.skillHeaderVisible = true;
          observerSkill.unobserve(skillHeaderEl!);
        }
      },
      { threshold: 0.1 }
    );
    const observerStory = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.storiesHeaderVisible = true;
          observerStory.unobserve(storyHeaderEl!);
        }
      },
      { threshold: 0.1 }
    );

    observerSkill.observe(skillHeaderEl!);
    observerStory.observe(storyHeaderEl!);

  }



  public skills: Array<Skill> = [
    {
      icon: 'icon-person',
      title: 'Experienced Individuals',
      desc: 'Our network is made up of highly experienced professionals who are passionate about what they do.'
    },
    {
      icon: 'icon-cog',
      title: 'Easy to Implement',
      desc: 'Our processes have been refined over years of implementation meaning our teams always deliver.'
    },
    {
      icon: 'icon-chart',
      title: 'Enhanced Productivity',
      desc: 'Our customized platform with in-built analytics helps you manage your distributed teams.'
    },
  ];

  public stories: Array<Story> = [
    {
      name: 'Kady Baker',
      position: 'Product Manager at Bookmark',
      image: 'kady',
      quote: '“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”'
    },
    {
      name: 'Aiysha Reese',
      position: 'Founder of Manage',
      image: 'aiysha',
      quote: '“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”'
    },
    {
      name: 'Arthur Clarke',
      position: 'Co-founder of MyPhysio',
      image: 'arthur',
      quote: '“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”'
    }
  ];
}
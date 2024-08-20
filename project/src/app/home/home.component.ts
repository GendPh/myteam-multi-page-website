import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { SkillsComponent } from '../skills/skills.component';
import { CommonModule } from '@angular/common';


export type Skill = {
  icon: string;
  title: string;
  desc: string;
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, SkillsComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

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

}

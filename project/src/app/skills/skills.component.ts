import { Component, Input } from '@angular/core';
import { Skill } from '../home/home.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})

export class SkillsComponent {
  @Input("Skill") skill: Skill = {
    icon: 'icon-person',
    title: 'Experienced Individuals',
    desc: 'Our network is made up of highly experienced professionals who are passionate about what they do.'
  };
}

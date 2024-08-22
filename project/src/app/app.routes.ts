import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutPageComponent } from './about-page/about-page.component';

export const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: HomeComponent
  },

  {
    path: 'about', pathMatch: "full", component: AboutPageComponent
  },

  {
    path: "**", redirectTo: ''
  }
];

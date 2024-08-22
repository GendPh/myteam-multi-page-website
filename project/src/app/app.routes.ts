import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: HomeComponent
  },

  {
    path: 'about', pathMatch: "full", component: AboutPageComponent
  },

  {
    path: 'contact', pathMatch: "full", component: ContactPageComponent
  },

  {
    path: "**", redirectTo: ''
  }
];

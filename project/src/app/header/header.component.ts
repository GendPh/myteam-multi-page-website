import { Component } from '@angular/core';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';
import { ButtonComponent } from '../button/button.component';


const bodyEl = document.querySelector('body');

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MobileNavComponent, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public isNavOpen: boolean = false;

  public openNav() {
    this.isNavOpen = true;
    bodyEl?.classList.add('overflow-y-hidden');
  }

  public receiveCloseNav(event: boolean) {
    this.isNavOpen = event;
    bodyEl?.classList.remove('overflow-y-hidden');
  }
}

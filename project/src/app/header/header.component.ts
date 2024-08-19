import { Component } from '@angular/core';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MobileNavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public isNavOpen: boolean = false;

  public openNav() {
    this.isNavOpen = true;
  }

  public receiveCloseNav(event: boolean) {
    this.isNavOpen = event;
  }
}

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterLink, RouterLinkActive],
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.css'
})
export class MobileNavComponent {
  @Input("NavOpen") navOpen: boolean = false;

  @Output("CloseNav") closeNav: EventEmitter<boolean> = new EventEmitter<boolean>();

  public emitCloseNav() {
    this.closeNav.emit(false);
  }

}

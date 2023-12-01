import { Component } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faInfoCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ BtnComponent, OverlayModule, FontAwesomeModule ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faUserCircle = faUserCircle;

  isOpen = false;
  isOpenBody = false;

}

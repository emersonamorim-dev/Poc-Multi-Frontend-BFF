import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from '../../store/actions/user.actions';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private store: Store) {}

  onLogout(): void {
    this.store.dispatch(logout()); 
  }
}
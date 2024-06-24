import { Component } from '@angular/core';
import { UsersListComponent } from './users/users-list/users-list.component';
import { DUMMY_USERS } from './dummy-users';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UsersListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
}

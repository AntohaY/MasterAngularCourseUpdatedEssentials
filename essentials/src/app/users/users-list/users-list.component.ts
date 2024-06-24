import { Component, Input } from '@angular/core';
import { User } from '../../shared/interfaces/user';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  @Input() users!: User[];

  onSelectUser(id: string) {
    console.log(id);
  }
}

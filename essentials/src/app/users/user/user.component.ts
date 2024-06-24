import { Component, EventEmitter, Input, Output, computed, input, output } from '@angular/core';
import { User } from '../../shared/interfaces/user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  @Output() select = new EventEmitter();
  // select = output<string>();

  user = input.required<User>();
  // avatar = input<string>();
  // name = input<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.user()?.avatar;
  });

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}

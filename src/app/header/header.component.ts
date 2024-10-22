import { Component } from '@angular/core';
import { User } from '../Types/User';
import { UserStorageService } from '../shared/user-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  user: User | null = null;
  constructor(private userStorage: UserStorageService) {
    this.userStorage.getUser().subscribe((response) => {
      this.user = response;
    });
  }
  logout() {
    this.userStorage.clearUser();
  }
}

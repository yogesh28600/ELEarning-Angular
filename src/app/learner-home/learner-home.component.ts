import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserStorageService } from '../shared/user-storage.service';
import { User } from '../Types/User';

@Component({
  selector: 'app-learner-home',
  templateUrl: './learner-home.component.html',
  styleUrl: './learner-home.component.css',
})
export class LearnerHomeComponent {
  user!: User;
  constructor(private userStorage: UserStorageService) {
    this.userStorage.getUser().subscribe((response) => {
      response && (this.user = response);
    });
  }
}

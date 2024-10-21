import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { UserStorageService } from '../shared/user-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(
    private _form: FormBuilder,
    private userService: UserService,
    private userStorage: UserStorageService,
    private router: Router
  ) {
    this.loginForm = _form.group({
      Email: ['', Validators.required],
      PasswordHash: ['', Validators.required],
    });
  }
  loginUser(form: FormGroup) {
    this.userService.getUsers().subscribe((response) => {
      console.log(response);
      var user = response.find((u) => u['email'] === form.value['Email']);
      console.log(form.value['email']);
      if (user && user.passwordHash === form.value['PasswordHash']) {
        this.userStorage.setUser(user);
        if (user.role == 'LEARNER') {
          this.router.navigate(['/learner']);
        } else {
          this.router.navigate(['/trainer']);
        }
      } else {
        console.log('login failed');
      }
    });
  }
}

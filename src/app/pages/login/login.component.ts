import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userName = new FormControl('', [Validators.required]);

  password = new FormControl('', [Validators.required]);

  loginForm = new FormGroup({
    userName: this.userName,
    password: this.password,
  });

  login() {
    console.log('logging in');
  }
}

import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  username = new FormControl('', [Validators.required, Validators.email]);
  firstname = new FormControl('', [Validators.required]);
  lastname = new FormControl('', [Validators.required]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
  ]);

  registerForm = new FormGroup({
    username: this.username,
    password: this.password,
    firstname: this.firstname,
    lastname: this.lastname,
  });

  showMsg = false;
  msg = 'Please complete the form ...';

  register() {
    this.showMsg = true;
    this.msg = 'Your account has been created.';
    // console.log(this.registerForm);
  }
}

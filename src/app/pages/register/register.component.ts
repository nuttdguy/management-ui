import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { RegisterValidators } from 'src/app/validators/register.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  // user: User = new User('userA', '', '');

  userName = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.minLength(2),
  ]);
  firstName = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
  ]);
  lastName = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%?&])[A-Za-z\d$@$!%?&]{8,}$/gm
    ),
  ]);
  confirmPassword = new FormControl('', [Validators.required]);

  registerForm = new FormGroup(
    {
      userName: this.userName,
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password,
      confirmPassword: this.confirmPassword,
    },
    [RegisterValidators.match('password', 'confirmPassword')]
  );

  register() {
    console.log(this.registerForm);
  }
}

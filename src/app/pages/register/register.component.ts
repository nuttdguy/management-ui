import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/api/auth.service';
import { RegisterValidators } from 'src/app/validators/register.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService) {}
  message: string = '';

  ngOnInit(): void {}

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

  registerForm: FormGroup = new FormGroup(
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
    this.authService.register(this.registerForm).subscribe({
      next: (res) => {
        this.displayMessage(res);
        this.registerForm.reset();
      },
      error: (err) => {
        this.displayMessage(err.error);
      },
    });
  }

  displayMessage(data: any) {
    this.message = data.message;
    setTimeout(() => {
      this.message = '';
    }, 10000);
  }
}

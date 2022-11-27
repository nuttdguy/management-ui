import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AuthService } from 'src/app/api/auth.service';
import { User } from 'src/app/models/user';
import { RegisterValidators } from 'src/app/validators/register.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
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
    const user = new User(
      this.registerForm.value.userName || '',
      this.registerForm.value.firstName || '',
      this.registerForm.value.lastName || '',
      this.registerForm.value.password || '',
      this.registerForm.value.confirmPassword || ''
    );

    this.authService.register(user).subscribe({
      next: () => {
        this.message =
          'Account created. Check email to confirm and activate the account';
        setTimeout(() => {
          this.message = '';
        }, 5000);
        this.registerForm.reset();
      },
      error: (error) => {
        this.message = error.message;
        setTimeout(() => {
          this.message = '';
        }, 5000);
      },
    });

    // this.authService.register(user).subscribe(
    //   (response: any) => {
    //     console.log(response.headers);
    //     console.log(response);

    //     this.router.navigate(['']);
    //   },
    //   (response) => {
    //     console.log(response.error);
    //     console.log(response.error.message);
    //   }
    // );
  }
}

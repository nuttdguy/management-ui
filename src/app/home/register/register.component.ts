import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/api/auth.service';
import { RegisterValidators } from 'src/app/validators/register.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  userName!: FormControl;
  firstName!: FormControl;
  lastName!: FormControl;
  password!: FormControl;
  confirmPassword!: FormControl;
  registerForm!: FormGroup;
  message: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.createFormControls();
    this.createFormGroup();
  }

  createFormControls() {
    this.userName = new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(2),
    ]);
    this.firstName = new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]);
    this.lastName = new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%?&])[A-Za-z\d$@$!%?&]{8,}$/gm
      ),
    ]);
    this.confirmPassword = new FormControl('', [Validators.required]);
  }

  createFormGroup() {
    this.registerForm = new FormGroup(
      {
        userName: this.userName,
        firstName: this.firstName,
        lastName: this.lastName,
        password: this.password,
        confirmPassword: this.confirmPassword,
      },
      [RegisterValidators.match('password', 'confirmPassword')]
    );
  }

  // userModel: FormGroup =
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

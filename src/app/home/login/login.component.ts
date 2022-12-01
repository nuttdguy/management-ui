import { HttpResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { AuthService } from 'src/app/api/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @Input() isHidden = false;
  message: string = '';

  userName = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  constructor(private authService: AuthService, private router: Router) {}

  loginForm = new FormGroup({
    userName: this.userName,
    password: this.password,
  });

  forgotForm = new FormGroup({
    userName: this.userName,
  });

  login() {
    this.authService.login(this.loginForm).subscribe({
      next: (res: HttpResponse<any>) => {
        this.authService.setUserToLocalStorage(res.headers);
        this.router.navigate(['dashboard']);
      },
      error: (err: any) => {
        this.displayMessage({
          message: 'Username or Password is incorrect.',
        });
      },
      complete: () => console.log('Login complete ...'),
    });
  }

  forgot() {
    this.authService.forgotPwd(this.forgotForm).subscribe({
      next: (res) => {},
      error: (err) => {},
    });
  }

  show() {
    this.isHidden = !this.isHidden;
    console.log(this.isHidden);
  }

  displayMessage(data: any) {
    this.message = data?.message;
    setTimeout(() => {
      this.message = '';
    }, 5000);
  }
}

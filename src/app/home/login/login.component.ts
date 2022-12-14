import {
  HttpContext,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
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
        this.authService.setAuthHeaderToLocalStorage(res.headers);
        this.router.navigate(['dashboard']);
      },
      error: (err: HttpErrorResponse) => {
        this.displayMessage({
          message: err.statusText,
        });
      },
      complete: () => {
        this.loginForm.reset();
      },
    });
  }

  forgot() {
    this.authService.forgotPwd(this.forgotForm).subscribe({
      next: (res: HttpResponse<any>) => {
        this.displayMessage(res.body);
      },
      error: (err) => {
        this.displayMessage('Something went wrong ...');
      },
      complete: () => {
        this.forgotForm.reset();
      },
    });
  }

  switchView() {
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

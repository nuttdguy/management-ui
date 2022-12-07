import { HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../api/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  constructor(private authService: AuthService, private router: Router) {}

  @Output()
  logoutEmitter = new EventEmitter<boolean>();

  logout() {
    this.authService.logout().subscribe({
      next: (res) => this.authService.clear(),
      error: (err) => console.log(err),
      complete: () => console.log('Logout complete  ...'),
    });
    this.router.navigate(['']);

    this.logoutEmitter.emit(true);
  }
}

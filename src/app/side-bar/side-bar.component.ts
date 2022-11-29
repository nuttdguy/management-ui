import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../api/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  status: boolean = true;
  sidebarHandler() {
    this.status = !this.status;
  }
  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    // .subscribe({
    //   next: (res) => {
    //     this.router.navigate(['']);
    //   },
    //   error: (err) => console.error(err),
    // });
    this.router.navigate(['']);
  }
}

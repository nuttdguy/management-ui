import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input() registerActive = !false;
  @Input() loginActive = !true;

  constructor() {}

  ngOnInit(): void {}

  showLogin() {
    this.registerActive = false;
    this.loginActive = true;
  }

  showRegister() {
    this.registerActive = true;
    this.loginActive = false;
  }
}

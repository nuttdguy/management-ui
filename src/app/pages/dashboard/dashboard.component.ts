import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  status: boolean = false;

  sidebarHandler() {
    this.status = !this.status;
  }
  constructor() {}

  ngOnInit(): void {}
}

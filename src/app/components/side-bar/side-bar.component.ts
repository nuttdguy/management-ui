import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  status: boolean = true;
  sidebarHandler() {
    this.status = !this.status;
  }
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
})
export class TopBarComponent implements OnInit {
  title: string = 'management-ui';

  constructor() {}

  ngOnInit(): void {}
}

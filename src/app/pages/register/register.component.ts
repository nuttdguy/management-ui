import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  user: User = new User();

  constructor() {}

  ngOnInit(): void {}

  register() {
    this.user.role = 'user';

    console.log(JSON.stringify(this.user) + '... is registered');
  }
}

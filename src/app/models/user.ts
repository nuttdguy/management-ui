interface IUser {
  username: string;
  password: string;
  confirm_password: string;
  role: string;
  token: string;
}

export class User {
  username: string = '';
  password: string = '';
  confirm_password = '';
  role: string = '';
  token: string = '';
}

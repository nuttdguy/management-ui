interface IUser {
  username: string;
  password: string;
  confirm_password: string;
  role: string;
  token: string;
}

export class User implements Partial<IUser> {
  constructor(
    public username: string,
    public password: string,
    public confirm_password: string
  ) {}
}

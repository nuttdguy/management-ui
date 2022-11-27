interface IUser {
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  role: string;
  token: string;
}

export class User {
  constructor(
    public userName: string,
    public firstName: string,
    public lastName: string,
    public password: string,
    public confirmPassword: string
  ) {}
}

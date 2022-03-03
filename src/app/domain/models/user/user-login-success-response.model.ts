export class UserLoginSuccessResponseModel {
  jwt: string;

  constructor(jwt: string) {
    this.jwt = jwt;
  }
}

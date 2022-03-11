import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public GetUserFromJwt(jwt: string): void {
    console.log(jwt);
    let decode = jwt_decode(jwt);
    console.log(decode);
  }
}

import {Injectable} from '@angular/core';
import jwt_decode from 'jwt-decode';
import {UserModel} from "../../domain/models/user/user.model";

interface JwtUser {
  ['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']: string;
  ['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']: string;
  ['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname']: string;
  ['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress']: string;
  ['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']: Array<string>;
  ['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/mobilephone']: string;
};

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public getUserFromJwt(jwt: string): UserModel {
    const decode = jwt_decode(jwt) as JwtUser;
    let id = decode["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
    let name = decode["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
    let surname = decode["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname"];
    let email = decode["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"];
    let roles = decode["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    let phoneNumber = decode["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/mobilephone"];

    return new UserModel(id, email, name, surname, phoneNumber, roles);
  }

  public saveJwtInLocalStorage(jwt: string): void {
    localStorage.setItem('jwt', jwt);
  }

  public removeJwtFromLocalStorage(): void {
    localStorage.removeItem('jwt');
  }

  public getJwtFromLocalStorage(): string | null {
    return localStorage.getItem('jwt');
  }
}

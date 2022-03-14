import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserImageService {

  constructor(private http: HttpService) { }

  public getUserImageByUserId(userId: string): Observable<any> {
    return this.http.get(environment.api_url +  'users/' + userId + '/image');
  }
}

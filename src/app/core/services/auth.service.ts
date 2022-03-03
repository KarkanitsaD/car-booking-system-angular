import {HttpService} from "./http.service";
import {Observable} from "rxjs";
import {UserLoginSuccessResponseModel} from "../../domain/models/user/user-login-success-response.model";
import {UserLoginRequestModel} from "../../domain/models/user/user-login-request.model";
import {environment} from "../../../environments/environment";
import {UserRegistrationRequestModel} from "../../domain/models/user/user-registration-request.model";
import {Injectable} from "@angular/core";

export const authApiPath = "auth/";

@Injectable()
export class AuthService {
  constructor(private httpService: HttpService) {
  }

  login(loginRequest: UserLoginRequestModel): Observable<UserLoginSuccessResponseModel> {
    return this.httpService.post<UserLoginSuccessResponseModel>(environment.api_url + authApiPath + 'login', loginRequest);
  }

  register(registerRequest: UserRegistrationRequestModel): Observable<any> {
    return this.httpService.post<any>(environment.api_url + authApiPath + 'register', registerRequest);
  }
}

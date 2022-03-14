import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {ApplicationStore} from "../../store";
import {Store} from "@ngrx/store";
import {UserLoginSuccessResponseModel} from "../../domain/models/user/user-login-success-response.model";
import {loginUser} from "../../store/auth/auth-state.actions";
import {UserLoginRequestModel} from "../../domain/models/user/user-login-request.model";
import {AuthService} from "../../core/services/auth.service";
import {TokenService} from "../../core/services/token.service";
import {UserRegistrationRequestModel} from "../../domain/models/user/user-registration-request.model";

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent implements OnInit {

  constructor
  (
    public dialogRef: MatDialogRef<AuthModalComponent>,
    private store: Store<ApplicationStore>,
    private authService: AuthService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
  }

  public close(): void {
    this.dialogRef.close();
  }

  public onLogin(loginRequestModel: UserLoginRequestModel): void {
    this.authService.login(loginRequestModel)
      .subscribe((data: UserLoginSuccessResponseModel) => {
        this.tokenService.saveJwtInLocalStorage(data.jwt);
        let user = this.tokenService.getUserFromJwt(data.jwt);
        this.store.dispatch(loginUser({user: user}));
        this.dialogRef.close();
      });
  }

  public onRegister(registerRequestModel: UserRegistrationRequestModel): void {
    this.authService.register(registerRequestModel)
      .subscribe(() => {
        console.log('OK');
      });
  }
}

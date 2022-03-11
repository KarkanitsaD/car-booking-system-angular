import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {ApplicationStore} from "../../store";
import {Store} from "@ngrx/store";
import {UserLoginSuccessResponseModel} from "../../domain/models/user/user-login-success-response.model";
import {loginUser} from "../../store/auth/auth-state.actions";
import {UserLoginRequestModel} from "../../domain/models/user/user-login-request.model";
import {AuthService} from "../../core/services/auth.service";
import {TokenService} from "../../core/services/token.service";

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

  public onLogin(loginSuccessModel: UserLoginRequestModel): void {
    this.authService.login(loginSuccessModel)
      .subscribe((data: UserLoginSuccessResponseModel) => {
        this.tokenService.GetUserFromJwt(data.jwt);
      });
  }
}

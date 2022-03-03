import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserLoginRequestModel} from "../../domain/models/user/user-login-request.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  hidePassword: boolean = true;
  errorMessage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public submit(): void {
    if(this.login.invalid) {
      this.login.markAllAsTouched();
    } else {
      let loginRequestModel = new UserLoginRequestModel(this.login.controls.email.value, this.login.controls.password.value);
    }
  }
}

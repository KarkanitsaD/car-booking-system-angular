import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {TokenService} from "./core/services/token.service";
import {loginUser} from "./store/auth/auth-state.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor
  (
    private store: Store<Store>,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    let jwt = this.tokenService.getJwtFromLocalStorage();
    if(jwt) {
      let user = this.tokenService.getUserFromJwt(jwt);
      this.store.dispatch(loginUser({user: user}));
    }
  }
}

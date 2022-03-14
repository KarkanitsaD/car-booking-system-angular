import { Component, OnInit } from '@angular/core';
import {ApplicationStore} from "../../store";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {UserModel} from "../../domain/models/user/user.model";
import {loggedUserSelector} from "../../store/auth/auth-state.selectors";
import {MatDialog} from "@angular/material/dialog";
import {AuthModalComponent} from "../auth-modal/auth-modal.component";
import {logOutUser} from "../../store/auth/auth-state.actions";
import {TokenService} from "../../core/services/token.service";
import {environment} from "../../../environments/environment";
import {UserImageService} from "../../core/services/user-image.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public imageSrc: string = '';

  currentUser$: Observable<UserModel | undefined> = this.store.select(loggedUserSelector);

  constructor
  (
    private store: Store<ApplicationStore>,
    private tokenService: TokenService,
    private userImageService: UserImageService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.currentUser$.subscribe((user: UserModel | undefined) => {
      if(user) {
        this.userImageService
          .getUserImageByUserId(user.id)
            .subscribe((data: string) => this.imageSrc = data);
      } else {
        this.imageSrc = '';
      }
    })
  }

  public onLoginClick(): void {
    let dialogRef = this.dialog.open(AuthModalComponent, {
      width: '600px'
    });
  }

  public logOutUser(): void {
    this.store.dispatch(logOutUser());
    this.tokenService.removeJwtFromLocalStorage();
  }
}

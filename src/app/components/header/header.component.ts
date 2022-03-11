import { Component, OnInit } from '@angular/core';
import {ApplicationStore} from "../../store";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {UserModel} from "../../domain/models/user/user.model";
import {loggedUserSelector} from "../../store/auth/auth-state.selectors";
import {MatDialog} from "@angular/material/dialog";
import {AuthModalComponent} from "../auth-modal/auth-modal.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser$: Observable<UserModel | undefined> = this.store.select(loggedUserSelector);

  constructor
  (
    private store: Store<ApplicationStore>,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  click() {
    alert('click');
  }

  public onLoginClick(): void {
    let dialogRef = this.dialog.open(AuthModalComponent, {
      width: '600px'
    });
  }

}

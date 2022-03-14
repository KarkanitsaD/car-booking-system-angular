import {createAction, props} from "@ngrx/store";
import {UserModel} from "../../domain/models/user/user.model";


export const loginUser = createAction(
  '[AUTH] login user',
  props<{user: UserModel}>()
);

export const logOutUser = createAction(
  '[AUTH] logout user'
);



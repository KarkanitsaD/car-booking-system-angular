import {createAction, props} from "@ngrx/store";
import {UserModel} from "../../domain/models/user/user.model";
import {RegistrationModel} from "../../domain/models/auth/registration.model";

export const registerUser = createAction(
  '[AUTH] register user',
  props<{registrationModel: RegistrationModel}>()
);

export const registerUserSuccess = createAction(
  '[AUTH] register user success'
);

export const registerUserError = createAction(
  '[AUTH] register user error'
);

export const loginUser = createAction(
  '[AUTH] login user',
  props<{user: UserModel}>()
);

export const logInUserSuccess = createAction(
  '[AUTH] login user success',
  props<{user: UserModel}>()
);

export const loginUserError = createAction(
  '[AUTH] login user error'
)

export const logOutUser = createAction(
  '[AUTH] logout user'
);



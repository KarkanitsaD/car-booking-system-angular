import {RoleModel} from "../role/role.model";

export class UserModel {
  id: string;
  email: string;
  name: string;
  surname: string;
  phoneNumber: string;
  userImageId: string;
  roles: RoleModel[];

  constructor(
    id: string,
    email: string,
    name: string,
    surname: string,
    phoneNumber: string,
    userImageId: string,
    roles: RoleModel[]
  ) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.surname = surname;
    this.phoneNumber = phoneNumber;
    this.userImageId = userImageId;
    this.roles = roles;
  }
}

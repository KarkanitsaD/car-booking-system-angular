import {RoleModel} from "../role/role.model";

export class UserModel {
  id: string;
  email: string;
  name: string;
  surname: string;
  phoneNumber: string;
  roles: string[];

  constructor(
    id: string,
    email: string,
    name: string,
    surname: string,
    phoneNumber: string,
    roles: string[]
  ) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.surname = surname;
    this.phoneNumber = phoneNumber;
    this.roles = roles;
  }
}

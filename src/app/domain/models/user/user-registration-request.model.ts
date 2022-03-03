import {ImageModel} from "../image.model";

export class UserRegistrationRequestModel {
  email: string;
  password: string;
  name: string;
  surname: string;
  phoneNumber: string;
  image: ImageModel | null;

  constructor(
    email: string,
    password: string,
    name: string,
    surname: string,
    phoneNumber: string,
    image: ImageModel | null
  ) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.surname = surname;
    this.phoneNumber = phoneNumber,
    this.image = image;
  }
}

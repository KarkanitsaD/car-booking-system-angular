import {ImageModel} from "../image.model";

export interface RegistrationModel {
  email: string;
  password: string;
  userName?: string;
  userSurname?: string;
  phoneNumber?: string;
  imageBase64Content?: string;
};

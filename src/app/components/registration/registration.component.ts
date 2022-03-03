import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ImageModel} from "../../domain/models/image.model";
import {UserRegistrationRequestModel} from "../../domain/models/user/user-registration-request.model";
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  @Output() onSuccessRegistration = new EventEmitter();

  registrationForm = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl(''),
    userName: new FormControl(''),
    userSurname: new FormControl(''),
    phoneNumber: new FormControl('')
  }, {
    validator: this.passwordConfirmValidation
  });

  userImage: ImageModel | null = null;

  hidePassword: boolean = true;

  disabledForm: boolean = false;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  public submit(): void {
    if(this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
    } else {
      let userRegistrationModel = new UserRegistrationRequestModel(
        this.registrationForm.controls.email.value,
        this.registrationForm.controls.password.value,
        this.registrationForm.controls.userName.value,
        this.registrationForm.controls.userSurname.value,
        this.registrationForm.controls.phoneNumber.value,
        this.userImage
      );
      //send action to store about registration
    }
  }

  public onImageSelected(image: ImageModel | null): void {
    this.userImage = image;
  }

  private passwordConfirmValidation(form: FormGroup) {
    if(form.controls.password.value !== form.controls.confirmPassword.value) {
      form.controls.confirmPassword.setErrors({mustMatch: true});
    } else {
      form.controls.confirmPassword.setErrors(null);
    }
  }
}

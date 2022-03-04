import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./modules/material/material.module";
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { RegistrationComponent } from './components/registration/registration.component';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import {serviceDeclarations} from "./core/constans/export-constans";
import {HttpService} from "./core/services/http.service";
import {AuthService} from "./core/services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import { CarFormComponent } from './components/car/car-form/car-form.component';
import { ImagesUploaderComponent } from './components/images-uploader/images-uploader.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {metaReducers, reducers} from "./store";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    ImageUploaderComponent,
    CarFormComponent,
    ImagesUploaderComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    serviceDeclarations
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

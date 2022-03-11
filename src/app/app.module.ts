import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./modules/material/material.module";
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegistrationComponent } from './components/registration/registration.component';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import {serviceDeclarations} from "./core/constans/export-constans";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { CarFormComponent } from './components/car/car-form/car-form.component';
import { ImagesUploaderComponent } from './components/images-uploader/images-uploader.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {metaReducers, reducers} from "./store";
import { DateTimeRangePickerComponent } from './components/date-time-range-picker/date-time-range-picker.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { BookingPointFiltrationFormComponent } from './components/booking-point/booking-point-filtration-form/booking-point-filtration-form.component';
import { BookingPointsPageComponent } from './components/booking-point/booking-points-page/booking-points-page.component';
import { AuthModalComponent } from './components/auth-modal/auth-modal.component';
import {HttpHeadersInterceptor} from "./core/interceptors/http-headers.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    ImageUploaderComponent,
    CarFormComponent,
    ImagesUploaderComponent,
    DateTimeRangePickerComponent,
    BookingPointFiltrationFormComponent,
    BookingPointsPageComponent,
    AuthModalComponent,
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
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    MatDatepickerModule,
    FormsModule
  ],
  providers: [
    serviceDeclarations,
    {provide: HTTP_INTERCEPTORS, useClass: HttpHeadersInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

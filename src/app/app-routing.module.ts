import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {BookingPointsPageComponent} from "./components/booking-point/booking-points-page/booking-points-page.component";
import {CarPageComponent} from "./components/car/car-page/car-page.component";

const routes: Routes = [
  {path: '', component: BookingPointsPageComponent},
  {path: 'bookingPoints', component: BookingPointsPageComponent},
  {path: 'bookingPoints' + '/:bookingPointId/' + 'cars', component: CarPageComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

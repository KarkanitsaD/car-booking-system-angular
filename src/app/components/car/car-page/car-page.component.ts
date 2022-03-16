import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {ApplicationStore} from "../../../store";
import {filterCars, setCurrentBookingPointId} from "../../../store/cars/cars.actions";

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.scss']
})
export class CarPageComponent implements OnInit {

  public isRouteValid: boolean = false;

  constructor
  (
    private route: ActivatedRoute,
    private store: Store<ApplicationStore>
  ) { }


  ngOnInit(): void {
    this.verifyRoute();
  }

  private verifyRoute(): void {
    this.route.params.subscribe(params => {
      let bookingPointId = params['bookingPointId'];
      debugger
      if(bookingPointId !== 'undefined') {
        this.store.dispatch(setCurrentBookingPointId({rentalPointId: bookingPointId}))
        this.store.dispatch(filterCars());
      }
    });
  }
}

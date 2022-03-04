import {Component} from '@angular/core';
import {CarModel} from "./domain/models/car/car.model";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: Store<Store>) {
  }

  title = 'car-booking-system-angular';

  car: CarModel = new CarModel(12,'Audi','A8',10,5,'1','1', []);

}

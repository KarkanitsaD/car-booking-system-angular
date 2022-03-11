import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ApplicationStore} from "../../../store";
import {fromEvent, Observable} from "rxjs";
import {CountryModel} from "../../../domain/models/country/country.model";
import {citiesSelector, countriesSelector} from "../../../store/location/location-state.selectors";
import {CityModel} from "../../../domain/models/city/city.model";
import {map, throttleTime} from "rxjs/operators";
import {DateTimeRangeModel} from "../../date-time-range-picker/date-time-range-picker.component";
import {currentBookingPointsFiltrationModelSelector} from "../../../store/booking-points/booking-points.selectors";

@Component({
  selector: 'app-booking-point-filtration-form',
  templateUrl: './booking-point-filtration-form.component.html',
  styleUrls: ['./booking-point-filtration-form.component.scss']
})
export class BookingPointFiltrationFormComponent implements OnInit, AfterViewInit {

  public countries$: Observable<CountryModel[]> = this.store.select(countriesSelector);
  public cities$: Observable<CityModel[]> = this.store.select(citiesSelector);
  public citiesToShow$: Observable<CityModel[]> = new Observable<CityModel[]>();
  public cityId: string | null = null;
  public countryId: string | null = null;

  public bookingPointsFiltrationModel$ = this.store.select(currentBookingPointsFiltrationModelSelector);
  public dateTimeRangeModel: DateTimeRangeModel = {
    firstDate: new Date(),
    firstHours: 10,
    firstMinutes: 0,
    secondDate: new Date(),
    secondHours: 19,
    secondMinutes: 0
  };

  constructor
  (
    private store: Store<ApplicationStore>
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let filterButton = document.getElementById('filterButton') as HTMLButtonElement;
    fromEvent(filterButton, 'click')
      .pipe
      (
        throttleTime(1000)
      ).subscribe(() => console.log(2));
  }

  public onCountrySelected(): void {
    this.filterCities(this.countryId);
  }

  private filterCities(countryId: string | null): void {
    this.citiesToShow$ = this.cities$.pipe(
      map(cities => cities.filter(city => city.countryId === countryId))
    );
    this.cityId = null;
  }
}

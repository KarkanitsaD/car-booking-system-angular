import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ApplicationStore} from "../../../store";
import {fromEvent, Observable} from "rxjs";
import {CountryModel} from "../../../domain/models/country/country.model";
import {citiesSelector, countriesSelector} from "../../../store/location/location-state.selectors";
import {CityModel} from "../../../domain/models/city/city.model";
import {map, throttleTime} from "rxjs/operators";
import {DateTimeRangeModel} from "../../../domain/models/date-time-range/date-time-range.model";
import {dateTimeRangeSelector} from "../../../store/date-time-range/date-time-range.selectors";
import {setTimeRange} from "../../../store/date-time-range/date-time-range.actions";

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

  public dateTimeRangeModel!: DateTimeRangeModel;

  constructor
  (
    private store: Store<ApplicationStore>
  ) { }

  ngOnInit(): void {
    this.store.select(dateTimeRangeSelector).subscribe((range: DateTimeRangeModel | null) => {
      if(range) {
        this.dateTimeRangeModel = range;
      } else {
        let today = new Date();
        let tomorrow = new Date();
        tomorrow.setUTCDate(today.getUTCDate() + 1);
        tomorrow.setUTCHours(0);
        tomorrow.setUTCMinutes(0);
        tomorrow.setUTCSeconds(0);

        let dayAfterTomorrow = new Date();
        dayAfterTomorrow.setUTCDate(today.getUTCDate() + 2);
        dayAfterTomorrow.setUTCHours(0);
        dayAfterTomorrow.setUTCMinutes(0);
        dayAfterTomorrow.setUTCSeconds(0);

        this.dateTimeRangeModel = {
          firstDate: tomorrow,
          firstHours: 10,
          firstMinutes: 0,
          secondDate: dayAfterTomorrow,
          secondHours: 19,
          secondMinutes: 0
        };
        this.store.dispatch(setTimeRange({dateTimeRange: Object.assign({}, this.dateTimeRangeModel)}));
      }
    });
  }

  ngAfterViewInit(): void {
    let filterButton = document.getElementById('filterButton') as HTMLButtonElement;
    fromEvent(filterButton, 'click')
      .pipe
      (
        throttleTime(1000)
      ).subscribe(() => {
        this.store.dispatch(setTimeRange({dateTimeRange: Object.assign({}, this.dateTimeRangeModel)}));
    });
  }

  public onCountrySelected(): void {
    this.cityId = null;
    this.filterCities(this.countryId);
  }

  private filterCities(countryId: string | null): void {
    this.citiesToShow$ = this.cities$.pipe(
      map(cities => cities.filter(city => city.countryId === countryId))
    );
  }
}

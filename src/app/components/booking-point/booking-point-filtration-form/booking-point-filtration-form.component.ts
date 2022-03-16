import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Store} from "@ngrx/store";
import {ApplicationStore} from "../../../store";
import {fromEvent, Observable} from "rxjs";
import {CountryModel} from "../../../domain/models/country/country.model";
import {
  areCitiesLoaded,
  areCountriesLoaded,
  citiesSelector,
  countriesSelector
} from "../../../store/location/location-state.selectors";
import {CityModel} from "../../../domain/models/city/city.model";
import {map, take, throttleTime} from "rxjs/operators";
import {DateTimeRangeModel} from "../../../domain/models/date-time-range/date-time-range.model";
import {dateTimeRangeSelector} from "../../../store/date-time-range/date-time-range.selectors";
import {setTimeRange} from "../../../store/date-time-range/date-time-range.actions";
import {setBookingPointsCityId, setBookingPointsCountryId} from "../../../store/booking-points/booking-points.actions";
import {loadAllCities, loadAllCountries} from "../../../store/location/location-state.actions";

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

  @Output() public onFilter = new EventEmitter();

  public dateTimeRangeModel!: DateTimeRangeModel;

  constructor
  (
    private store: Store<ApplicationStore>
  ) { }

  ngOnInit(): void {
    this.store.select(areCitiesLoaded)
      .subscribe(loaded => loaded ? {} : this.store.dispatch(loadAllCities()));

    this.store.select(areCountriesLoaded)
      .subscribe(loaded => loaded ? {} : this.store.dispatch(loadAllCountries()));

    this.store.select(dateTimeRangeSelector).subscribe((range: DateTimeRangeModel) => {
      this.dateTimeRangeModel = range;
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

  public filterClick(): void {
    let range = Object.assign({}, this.dateTimeRangeModel);
    this.store.dispatch(setTimeRange({dateTimeRange: range}));
    this.store.dispatch(setBookingPointsCountryId({countryId: this.countryId}));
    this.store.dispatch(setBookingPointsCityId({cityId: null}));
    this.onFilter.emit();
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

import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {CountriesService} from "../../core/services/countries.service";
import {
  loadAllCities,
  loadAllCitiesError,
  loadAllCitiesSuccess,
  loadAllCountries,
  loadAllCountriesError, loadAllCountriesSuccess
} from "./location-state.actions";
import {catchError, concatMap, map} from "rxjs/operators";
import {of} from "rxjs";
import {CitiesService} from "../../core/services/cities.service";

@Injectable()
export class LocationsEffects {

  constructor
  (
    private actions$: Actions,
    private countriesService: CountriesService,
    private citiesService: CitiesService
  ) {}

  loadAllCities$ = createEffect(
    () => this.actions$.pipe(
      ofType(loadAllCities),
      concatMap(() => this.citiesService.getAllCities()),
      map(cities => loadAllCitiesSuccess({cities: cities})),
      catchError(() => of(loadAllCitiesError()))
    )
  );

  loadAllCountries$ = createEffect(
    () => this.actions$.pipe(
      ofType(loadAllCountries),
      concatMap(() => this.countriesService.getAllCountries()),
      map(countries => loadAllCountriesSuccess({countries: countries})),
      catchError(() => of(loadAllCountriesError()))
    )
  )
}

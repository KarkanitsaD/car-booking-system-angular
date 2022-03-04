import {createAction, props} from "@ngrx/store";
import {CityModel} from "../../domain/models/city/city.model";
import {CountryModel} from "../../domain/models/country/country.model";

export const loadAllCities = createAction(
  '[LOCATION] Load All Cities'
)

export const loadAllCitiesSuccess = createAction(
  '[LOCATION] Load All Cities Success',
  props<{cities: CityModel[]}>()
)

export const loadAllCitiesError = createAction(
  '[LOCATION] Load All Cities Error'
)

export const loadAllCountries = createAction(
  '[LOCATION] Load All Countries',
)

export const loadAllCountriesSuccess = createAction(
  '[LOCATION] Load All Countries Success',
  props<{countries: CountryModel[]}>()
)

export const loadAllCountriesError = createAction(
  '[LOCATION] Load All Countries Error'
)

export const addCity = createAction(
  '[LOCATION] Add city',
  props<{city: CityModel}>()
)

export const addCountry = createAction(
  '[LOCATION] Add country',
  props<{country: CountryModel}>()
)

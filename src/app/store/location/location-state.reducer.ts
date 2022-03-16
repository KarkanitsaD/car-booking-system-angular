import {createReducer, on} from "@ngrx/store";
import {initialLocationState} from "./location-state";
import {addCity, addCountry, loadAllCitiesSuccess, loadAllCountriesSuccess} from "./location-state.actions";
import {act} from "@ngrx/effects";

export const locationStateReducer = createReducer(
  initialLocationState,
  on(loadAllCitiesSuccess, (state, action) => ({
    ...state,
    cities: action.cities,
    citiesLoaded: true
  })),
  on(loadAllCountriesSuccess, (state, action) => ({
    ...state,
    countries: action.countries,
    countriesLoaded: true
  })),
  on(addCountry, (state, action) => ({
    ...state,
    countries: state.countries.concat(action.country)
  })),
  on(addCity, (state, action) => ({
    ...state,
    cities: state.cities.concat(action.city)
  }))
)

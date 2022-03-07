import {createFeatureSelector, createSelector} from "@ngrx/store";
import {locationState, LocationState} from "./location-state";

export const featureSelector = createFeatureSelector<LocationState>(locationState);

export const countriesSelector = createSelector(
  featureSelector,
  state => state.countries
)

export const citiesSelector = createSelector(
  featureSelector,
  state => state.cities
)

export const areCountriesLoaded = createSelector(
  featureSelector,
  state => state.countriesLoaded
)

export const areCitiesLoaded = createSelector(
  featureSelector,
  state => state.citiesLoaded
)

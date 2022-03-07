import {CityModel} from "../../domain/models/city/city.model";
import {CountryModel} from "../../domain/models/country/country.model";

export const locationState = 'location';

export interface LocationState {
  cities: CityModel[];
  citiesLoaded: boolean;
  countries: CountryModel[];
  countriesLoaded: boolean;
}

export const initialLocationState: LocationState = {
  cities: [new CityModel('1', 'One', '1'), new CityModel('2', '1Two', '1'), new CityModel('2', 'One', '2')],
  citiesLoaded: false,
  countries: [new CountryModel('1', 'One'), new CountryModel('2', 'Two'), new CountryModel('3', 'Three')],
  countriesLoaded: false
};

import {SET_COUNTRY, SET_COUNTRIES} from "../actions/types";

let country = localStorage.getItem("country");

if (!country) {
  country = {
    country: "United Kingdom",
    countryCode: "gb",
    language: "Eglish",
    languageCode: "en"
  };
} else {
  country = JSON.parse(country);
}

const INITIAL_STATE = {
  country: country.country,
  countryCode: country.countryCode,
  language: country.language,
  languageCode: country.languageCode,
  countries: []
};

export default (state = INITIAL_STATE, action = {}) => {

  switch (action.type) {
  case SET_COUNTRY:
    return {
      ...state,
      ...action.country
    };
  case SET_COUNTRIES:
    return {
      ...state,
      ...action
    };
  default:
    return state;
  }

}
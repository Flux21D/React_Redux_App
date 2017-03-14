import {SET_COUNTRY, SET_COUNTRIES} from "./types";
import axios from "axios";

export const setCountry = (country) => {

  return {
    type: SET_COUNTRY,
    country
  };
};

export const setCountries = (countries) => {
  return {
    type: SET_COUNTRIES,
    countries
  };
};

export const getCountries = () => {
  return dispatch => {
    return axios.get("/api/languages").then(resp => {
      dispatch(setCountries(resp.data));
    });
  }
};
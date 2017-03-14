import axios from "axios";
import {SET_SLIDE_DATA, SET_SLIDE_VERSION, SET_FIRST_VISITED_SLIDE} from "./types";
import sortBy from "lodash/sortBy";

export function setSlideData (slides) {
  return {
    type: SET_SLIDE_DATA,
    slides
  };
}

export function setSlideVersion (version) {
  return {
    type: SET_SLIDE_VERSION,
    version
  };
}

export function setFirstVisitedSlide (slide) {
  return {
    type: SET_FIRST_VISITED_SLIDE,
    slide
  }
}

export default function getSlidesData (version) {
  return dispatch => {
    return axios.get('/api/slides/' + version).then(res => {
      dispatch(setSlideData(sortBy(res.data, 'id')));
      return res;
    }).catch(error => {
      console.log("getSlidesData error", error);
    });
  };
}
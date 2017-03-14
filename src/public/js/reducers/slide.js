import {SET_SLIDE_DATA, SET_SLIDE_VERSION, SET_FIRST_VISITED_SLIDE} from '../actions/types';

const INITIAL_STATE = {
  slides: [],
  version: "full",
  firstVisitedSlide: {
    slug: "intro"
  }
};

export default (state = INITIAL_STATE, action = {}) => {

  switch(action.type) {
  case SET_SLIDE_DATA:
    return {
      ...state,
      slides: action.slides
    };
  case SET_SLIDE_VERSION:
    return {
      ...state, ...action.version
    };
  case SET_FIRST_VISITED_SLIDE:
    return {
      ...state, ...action.slide
    };
  default:
    return state;
  }
}
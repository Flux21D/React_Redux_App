import {SET_RESUME_INFO} from "../actions/types";

const INITIAL_STATE = {
  slideId: null
};

export default (state = INITIAL_STATE, action = {}) => {

  switch (action.type) {
  case SET_RESUME_INFO:
    return {
      ...state,
      ...action.resume
    };
  default:
    return state;
  }

}
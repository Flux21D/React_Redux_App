import {TOGGLE_SIDEBAR} from "../actions/types";

const INITIAL_STATE = {
  flag: false
};

export default (state = INITIAL_STATE, action = {}) => {

  switch (action.type) {
  case TOGGLE_SIDEBAR:
    return {
      ...state,
      ...action.flag
    };
  default:
    return state;
  }

}
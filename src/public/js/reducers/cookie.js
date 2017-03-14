import {HIDE_COOKIE} from "../actions/types";

import {getCookie} from "../utils/cookie";

const INITIAL_STATE = {
  showCookie: getCookie(),
};

export default (state = INITIAL_STATE, action = {}) => {

  switch (action.type) {
  case HIDE_COOKIE:
    return {
      ...state,
      ...action.cookie
    };
  default:
    return state;
  }

}
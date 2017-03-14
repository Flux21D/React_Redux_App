import {TOGGLE_OVERLAY, SHOW_OVERLAY, HIDE_OVERLAY} from "../actions/types";

const INITIAL_STATE = {
  showOverlay: false
};

export default (state = INITIAL_STATE, action = {}) => {

  switch (action.type) {
  case TOGGLE_OVERLAY:
    return {
      ...state, showOverlay: !state.showOverlay
    };
  case SHOW_OVERLAY:
    return {
      ...state, showOverlay: true
    };
  case HIDE_OVERLAY:
    return {
      ...state, ...INITIAL_STATE
    };
  default:
    return state;
  }

}
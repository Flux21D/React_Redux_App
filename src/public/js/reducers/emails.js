import {CONTACT_SALES_REPRESENTATIVE, SUBSCRIBE_TO_NEWSLETTER} from "../actions/types";

const INITIAL_STATE = {

};

export default (state = INITIAL_STATE, action = {}) => {

  switch (action.type) {
  case CONTACT_SALES_REPRESENTATIVE:
    return {
      ...state,
      ...action.data
    };
  case SUBSCRIBE_TO_NEWSLETTER:
    return {
      ...state,
      ...action.data
    };
  default:
    return state;
  }

}
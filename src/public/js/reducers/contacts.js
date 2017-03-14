import {SET_CONTACTS} from "../actions/types";

const INITIAL_STATE = {
    contacts: []
};

export default (state = INITIAL_STATE, action = {}) => {

    switch (action.type) {
        case SET_CONTACTS:
            return {
                ...state.contacts, ...action.contacts
            };
        default:
            return state;
    }

}
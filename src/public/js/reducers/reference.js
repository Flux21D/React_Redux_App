import {SET_REFERENCE, TOGGLE_REFERENCE} from "../actions/types";

const INITIAL_STATE = {
    reference: null,
    showReference: null
};

export default (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case SET_REFERENCE:
            return {
                ...state, ...action.reference
            };
        case TOGGLE_REFERENCE: {
            return {
                ...state, ...action.showReference
            };
        }
        default: {
            return state;
        }
    }
}
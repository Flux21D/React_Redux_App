import {
    SET_CURRENT_USER,
    REMOVE_CURRENT_USER,
    SET_AUTH_ERRORS,
    REMOVE_AUTH_ERRORS,
    REMOVE_NEW_USER,
    UPDATE_CURRENT_USER
} from '../actions/types';
import removeNewUser from "../utils/new-user";
import extend from "lodash/extend";

const initialState = {
    accessToken: null,
    user: {
        uuid: '',
        title: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        role: '',
        speciality: '',
        postalCode: '',
        contactConsent: false
    },
    errors: {}
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                ...action.data
            };
        case UPDATE_CURRENT_USER:
            const user = extend(state.user, action.data);

            return {
                ...state, user
            };
        case REMOVE_CURRENT_USER:
            return {
                ...state,
                ...initialState
            };
        case SET_AUTH_ERRORS:
            return {
                ...state,
                ...action.errors
            };
        case REMOVE_AUTH_ERRORS:
            state.errors = {};
            return state;
        case REMOVE_NEW_USER:
            state.isNew = false;
            removeNewUser();
            return state;
        default:
            return state;
    }
}
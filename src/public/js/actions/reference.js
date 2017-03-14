import {SET_REFERENCE, TOGGLE_REFERENCE} from "./types";

export const setReference = (reference) => {
    return {
        type: SET_REFERENCE,
        reference
    };
};

export const toggleReference = (showReference) => {
    return {
        type: TOGGLE_REFERENCE,
        showReference
    };
};
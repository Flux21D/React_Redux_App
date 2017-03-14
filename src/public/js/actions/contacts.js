import {SET_CONTACTS} from "../actions/types";
import axios from "axios";

export const setContacts = (contacts) => {
    return {
        type: SET_CONTACTS,
        contacts
    };
};

export const getContacts = () => {
    return dispatch => {
        const req = axios.get("/api/contacts");

        req.then(resp => {
            dispatch(setContacts({contacts: resp.data}));
        }).catch(err => {console.log(err)});

        return req;
    }
};
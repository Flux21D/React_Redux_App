import {CONTACT_SALES_REPRESENTATIVE, SUBSCRIBE_TO_NEWSLETTER} from "./types";
import axios from "axios";

export function setContactSalesRepresentativeData(data) {
    return {
        type: CONTACT_SALES_REPRESENTATIVE,
        data
    };
}

export function contactSalesRepresentative(data) {
    return dispatch => {

        const req = axios.post("/api/sendgrid/contact-sales-representative", data).then(res => {

            if (res.data.stat === "ok") {
                dispatch(setContactSalesRepresentativeData(req.data))
            }

        }).catch(err => {

        });

        return req;
    };
}

export function setSubscribeToNewsletterData(data) {
    return {
        type: SUBSCRIBE_TO_NEWSLETTER,
        data
    };
}

export function subscribeToNewsletter(data) {
    return dispatch => {
        const req = axios.post("/api/subscribe/newsletter", data).then(res => {

            if (res.data.success) {
                dispatch(setSubscribeToNewsletterData(req.data))
            }

        }).catch(err => {

        });

        return req;
    };
}
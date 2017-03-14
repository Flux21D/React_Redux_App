import {combineReducers} from "redux";

import flashMessages from "./flash-messages";
import auth from "./auth";
import sidebar from "./toggle-sidebar";
import country from "./country";
import modal from "./modal";
import cookie from "./cookie";
import overlay from "./overlay";
import reference from "./reference";
import resume from "./resume";
import slide from "./slide";
import emails from "./emails";
import quiz from "./quiz";
import contacts from "./contacts";

const rootReducer = combineReducers({
    modal,
    flashMessages,
    auth,
    sidebar,
    country,
    cookie,
    overlay,
    reference,
    resume,
    slide,
    emails,
    quiz,
    contacts
});

export default rootReducer;
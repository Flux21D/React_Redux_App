import {TOGGLE_SIDEBAR} from "./types";

export const toggleSidebar = (flag) => {
    return {
        type: TOGGLE_SIDEBAR,
        flag
    };
};
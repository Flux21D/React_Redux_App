import {TOGGLE_OVERLAY, SHOW_OVERLAY, HIDE_OVERLAY} from "./types";

export const toggleOverlay = () => {
  return {
    type: TOGGLE_OVERLAY
  };
};

export const showOverlay = () => {
  return {
    type: SHOW_OVERLAY
  };
};

export const hideOverlay = () => {
  return {
    type: HIDE_OVERLAY
  };
};
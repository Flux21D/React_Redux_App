import axios from "axios";
import {SET_RESUME_INFO} from "./types";

export function setLatestVisitedSlideInfo (resume) {
  return {
    type: SET_RESUME_INFO,
    resume
  };
}

export function getLatestVisitedSlideInfo (uuid) {

  return dispatch => {
    return axios.get('/api/resume/' + uuid).then(response => {

      dispatch(setLatestVisitedSlideInfo({
        slideId: response.data.slide_id
      }));

      return response.data;

    }).catch (error => {
      console.log('error getLatestVisitedSlideInfo', error);
    });
  };

}

export function saveLatestVisitedSlideInfo (data) {

  return dispatch => {
    return axios.post('/api/resume', data).then(data => {
            // console.log('then', data);
    }).catch (error => {
            // console.log('error', error);
    });
  };

}
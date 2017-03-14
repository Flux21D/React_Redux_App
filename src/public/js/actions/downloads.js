import axios from "axios";

export function getDownloads () {
  return dispatch => {

    return axios.get('/api/downloads');
  }
}
import axios from 'axios';

import { fetchDataStart } from './fetchDataStart';
import { fetchDataSuccess } from './fetchDataSuccess';
import { fetchDataError } from './fetchDataError';

export function fetchData(url) {
  return (dispatch) => {
    dispatch(fetchDataStart());
    return axios({
      url,
      timeout: 5000,
      method: 'get',
      responseType: 'json',
    })
      .then(response => {
        dispatch(fetchDataSuccess(response));
      })
      .catch(error => {
        dispatch(fetchDataError(error));
      });
  };
}

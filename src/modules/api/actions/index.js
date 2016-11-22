import axios from 'axios';

export const GET_USERS_DATA = Symbol('@@axios/GET_USERS_DATA');
export const GET_USERS_DATA_ERROR = Symbol('@@axios/GET_USERS_DATA_ERROR');
export const GET_USERS_DATA_SUCCESS = Symbol('@@axios/GET_USERS_DATA_SUCCESS');

function requestData() {
  return {
    type: GET_USERS_DATA,
  };
}

function receiveData(json) {
  return {
    type: GET_USERS_DATA_SUCCESS,
    data: json,
  };
}

function receiveError(json) {
  return {
    type: GET_USERS_DATA_ERROR,
    data: json,
  };
}

export function fetchData(url) {
  return (dispatch) => {
    dispatch(requestData());
    return axios({
      url,
      timeout: 5000,
      method: 'get',
      responseType: 'json',
    })
      .then(response => {
        dispatch(receiveData(response.data));
      })
      .catch(response => {
        dispatch(receiveError(response.data));
      });
  };
}

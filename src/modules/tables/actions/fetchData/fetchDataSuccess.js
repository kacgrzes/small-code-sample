export const FETCH_DATA_SUCCESS = Symbol('@@table/FETCH_DATA_SUCCESS');

export function fetchDataSuccess(response) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: response,
  };
}

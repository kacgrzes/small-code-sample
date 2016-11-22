export const FETCH_DATA_ERROR = Symbol('@@table/FETCH_DATA_ERROR');

export function fetchDataError(error) {
  return {
    type: FETCH_DATA_ERROR,
    isLoading: false,
    payload: error,
  };
}

export const FETCH_DATA_START = Symbol('@@table/FETCH_DATA_START');

export function fetchDataStart() {
  return {
    type: FETCH_DATA_START,
    isLoading: true,
  };
}

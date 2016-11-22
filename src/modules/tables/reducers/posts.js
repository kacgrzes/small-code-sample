import {FETCH_DATA_SUCCESS} from '../actions/fetchData/fetchDataSuccess';
import {FETCH_DATA_START} from '../actions/fetchData/fetchDataStart';
import {FETCH_DATA_ERROR} from '../actions/fetchData/fetchDataError';

export const getInitState = () => ({
  isLoading: false,
  data: [],
  error: null,
});

const initState = getInitState();

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return Object.assign({}, getInitState(), {
        isLoading: true,
      });
    case FETCH_DATA_SUCCESS:
      return Object.assign({}, getInitState(), {
        data: action.payload.data,
      });
    case FETCH_DATA_ERROR:
      return Object.assign({}, getInitState(), {
        error: action.payload.error,
      });
    default:
      return state;
  }
};


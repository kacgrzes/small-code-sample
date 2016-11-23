import {FETCH_DATA_SUCCESS} from '../actions/fetchData/fetchDataSuccess';
import {FETCH_DATA_START} from '../actions/fetchData/fetchDataStart';
import {FETCH_DATA_ERROR} from '../actions/fetchData/fetchDataError';
import {CREATE_POST} from '../actions/createPost';

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
    case CREATE_POST:
      const {id, post_title, user_name, views, likes, created_at} = action;
      return Object.assign({}, state, {
        data: [{id, post_title, user_name, views, likes, created_at,}, ...state.data],
      });
    default:
      return state;
  }
};

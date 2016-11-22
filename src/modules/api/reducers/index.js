import {GET_USERS_DATA, GET_USERS_DATA_SUCCESS, GET_USERS_DATA_ERROR} from 'modules/api/actions';

const initState = {
  isLoading: false,
  data: [],
  error: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_USERS_DATA_ERROR:
      return Object.assign({}, state, {isLoading: false, data: action.data, error: true});
    case GET_USERS_DATA_SUCCESS:
      return Object.assign({}, state, {isLoading: false, data: action.data, error: false });
    case GET_USERS_DATA:
      return Object.assign({}, state, {isLoading: true, error: false });
    default:
      return state;
  }
};

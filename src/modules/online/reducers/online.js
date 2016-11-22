import { SET_APP_ONLINE } from 'modules/online/actions/setAppOnline';
import { SET_APP_OFFLINE } from 'modules/online/actions/setAppOffline';

export default (state = true, action) => {
  switch (action.type) {
    case SET_APP_ONLINE:
      return true;
    case SET_APP_OFFLINE:
      return false;
    default:
      return state;
  }
};

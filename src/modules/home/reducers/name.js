import {SET_NAME} from '../actions/setName';

export const getInitState = () => 'React';

const initState = getInitState();

export default (state = initState, action) => {
  switch (action.type) {
    case SET_NAME:
      return action.name;
    default:
      return state;
  }
};


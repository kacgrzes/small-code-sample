import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from 'reducers';

const middlewares = [
  thunk,
];

const enhancers = compose(
  applyMiddleware(...middlewares),
);

export default initialState => createStore(
  reducers,
  initialState,
  enhancers,
);

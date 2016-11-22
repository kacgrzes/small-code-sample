import React from 'react';
import { render } from 'react-dom';
import { AppContainer as HotLoader} from 'react-hot-loader';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Root from 'containers/Root';
import createStore from './store';

const store = createStore();
const rootEl = document.getElementById('app');

const history = syncHistoryWithStore(browserHistory, store);

render(
  <HotLoader>
    <Root store={store} history={history}/>
  </HotLoader>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const RootContainer = require('containers/Root').default;

    render(
      <HotLoader>
        <RootContainer store={store} history={history}/>
      </HotLoader>,
      rootEl
    );
  });
}

import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import DevTools from 'containers/DevTools';

import HomeContainer from 'modules/home/containers/HomeContainer';
import TableContainer from 'modules/tables/containers/TableContainer';

import LayoutContainer from 'modules/layout/containers/LayoutContainer';
import LocaleProvider from 'modules/i18n/containers/LocaleProvider';

class Root extends Component {
  render() {
    const {store, history} = this.props;

    return (
      <Provider store={store}>
        <LocaleProvider>
          <div>
            <Router history={history}>
              <Route path="/" component={LayoutContainer}>
                <IndexRoute component={HomeContainer}/>
                <Route path="demo" component={TableContainer}/>
              </Route>
            </Router>
            <DevTools />
          </div>
        </LocaleProvider>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object,
};

export default Root;

import { combineReducers } from 'redux';
import { routerReducer as routing} from 'react-router-redux';
import {reducer as form} from 'redux-form';

import home from 'modules/home/reducers';
import tables from 'modules/tables/reducers';
import i18n from 'modules/i18n/reducers';

export default combineReducers({
  home,
  tables,
  i18n,
  routing,
  form,
});

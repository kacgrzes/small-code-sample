import {UPDATE_LOCALE} from 'modules/i18n/actions/updateLocale';

import config from 'config.json';

import pl from 'translations/pl_PL.json';
import en from 'translations/en_GB.json';

const initialState = {
  locale: config.defaultLocale,
  languages: config.languages,
  defaultLocale: config.defaultLocale,
  messages: {
    en,
    pl,
  },
};

export default (state = initialState, action) => {
  if (action.type !== UPDATE_LOCALE) {
    return state;
  }

  return Object.assign({}, state, {
    locale: action.locale,
  });
};

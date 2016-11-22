import { connect } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';

import config from 'config.json';

config.languages.forEach(language => {
  // eslint-disable-next-line
  const locale = require('react-intl/locale-data/' + language.locale);
  addLocaleData(locale);
});

const mapStateToProps = (state) => {
  const { locale, messages, defaultLocale } = state.i18n;
  return { locale, defaultLocale, messages: messages[locale], key: locale };
};

export default connect(mapStateToProps)(IntlProvider);

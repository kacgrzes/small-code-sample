import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import LanguageOption from 'modules/i18n/components/LanguageOption/LanguageOption';
import { updateLocale } from 'modules/i18n/actions/updateLocale';

import style from './LanguageSelect.scss';

const LanguageSelect = ({languages, updateLocale}) => (
  <div className={style.ControlsRight}>
    <ul role="navigation" className={`${style.List}`}>
      {languages.map(language =>
        <li key={language.locale}>
          <LanguageOption
            onLanguageSelect={() => updateLocale(language.locale)}
            languageName={language.name}
          />
        </li>
      )}
    </ul>
  </div>
);

const mapStateToProps = (state) => ({
  languages: state.i18n.languages,
});

const mapDispatchToProps = (dispatch) => ({
  updateLocale: locale => dispatch(updateLocale(locale)),
});

LanguageSelect.propTypes = {
  languages: PropTypes.array,
  updateLocale: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelect);

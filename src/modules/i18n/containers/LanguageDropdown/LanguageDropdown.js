import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Menu, MenuItem, Popover, Position } from '@blueprintjs/core';
import { updateLocale } from 'modules/i18n/actions/updateLocale';

import style from './LanguageDropdown.scss';

const LanguageSelect = ({locale, languages, updateLocale}) => {
  const compassMenu = (
    <Menu>
      {languages.map(language => {
        // eslint-disable-next-line
        const flag = require('assets/flags/' + language.flag);
        const item = (
          <div className={style.FlagItem}>
            <img src={flag} alt={language.name}/>
            {language.name}
          </div>
        );
        return (<MenuItem
          key={language.locale}
          onClick={() => updateLocale(language.locale)}
          text={item}
        />);
      })}
    </Menu>
  );
  const currentLanguage = languages.find(lang => lang.locale === locale);
  // eslint-disable-next-line
  const flag = require('assets/flags/' + currentLanguage.flag);
  return (
    <Popover content={compassMenu} position={Position.BOTTOM}>
      <button className="pt-button pt-minimal" type="button">
        <div className={style.FlagItem}>
          <img src={flag} alt={currentLanguage.name}/>
          {currentLanguage.name}
        </div>
      </button>
    </Popover>
  );
};

LanguageSelect.propTypes = {
  locale: PropTypes.string,
  languages: PropTypes.array,
  updateLocale: PropTypes.func,
};

const mapStateToProps = (state) => ({
  locale: state.i18n.locale,
  languages: state.i18n.languages,
});

const mapDispatchToProps = (dispatch) => ({
  updateLocale: locale => dispatch(updateLocale(locale)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelect);

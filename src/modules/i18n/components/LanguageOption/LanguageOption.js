import React, {PropTypes} from 'react';
import style from './LanguageOption.scss';

const LanguageOption = (props) => (
  <button
    onClick={props.onLanguageSelect}
    className={style.ButtonPrimary}
  >
    {props.languageName}
  </button>
);

LanguageOption.propTypes = {
  languageName: PropTypes.string,
  onLanguageSelect: PropTypes.func,
};

export default LanguageOption;

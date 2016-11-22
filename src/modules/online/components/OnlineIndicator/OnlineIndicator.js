import React, { PropTypes } from 'react';
import style from './OnlineIndicator.scss';

const OnlineIndicator = ({online}) =>
  <div className={online ? style.Online : style.Offline} />;

OnlineIndicator.propTypes = {
  online: PropTypes.bool,
};

export default OnlineIndicator;

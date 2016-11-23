import React, {PropTypes} from 'react';
import {Cell} from 'fixed-data-table';

import config from 'config.json';
import style from './TextCell.scss';

const activeUser = config.activeUser;

const TextCell = ({rowIndex, data, col, ...props}) => (
  <Cell
    {...props}
    className={data[rowIndex].user_name === activeUser ? style.HighlightCell : ''}
  >
    {data[rowIndex][col]}
  </Cell>
);

TextCell.propTypes = {
  rowIndex: PropTypes.number,
  data: PropTypes.any,
  col: PropTypes.any,
};

export default TextCell;

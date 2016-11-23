import React, {PropTypes} from 'react';
import {FormattedDate} from 'react-intl';
import {Cell} from 'fixed-data-table';

import config from 'config.json';
import style from './DateCell.scss';

const activeUser = config.activeUser;

const DateCell = ({rowIndex, data, col, ...props}) => {
  const date = parseInt(data[rowIndex][col], 10) * 1000;
  return (
    <Cell
      {...props}
      className={data[rowIndex].user_name === activeUser ? style.HighlightCell : ''}
    >
      <FormattedDate value={new Date(date)}/>
    </Cell>
  );
};

DateCell.propTypes = {
  rowIndex: PropTypes.number,
  data: PropTypes.any,
  col: PropTypes.any,
};

export default DateCell;

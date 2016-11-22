import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import style from './Demo.scss';

const Demo = (props) => (
  <div className={style.Demo}>
    <h1>
      <FormattedMessage
        id={'demo.welcome'}
        description={'Demo welcome message'}
        defaultMessage={'Hello, {name}!'}
        values={{
          name: props.name,
        }}
      />
    </h1>
  </div>
);

Demo.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Demo;

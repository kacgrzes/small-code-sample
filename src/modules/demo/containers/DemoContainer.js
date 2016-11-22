import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import style from './DemoContainer.scss';

class DemoContainer extends Component {
  render() {
    return (
      <div className={style.DemoContainer}>
        <h1>
          <FormattedMessage
            id={'demo.title'}
            description={'Demo container title'}
            defaultMessage={'Demo Container'}
          />
        </h1>
      </div>
    );
  }
}

export default DemoContainer;

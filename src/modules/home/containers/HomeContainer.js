import React, { Component } from 'react';
import { FormattedDate, FormattedMessage } from 'react-intl';

import logoStack from 'assets/logo-stack.gif';
import style from './HomeContainer.scss';

class HomeContainer extends Component {

  render() {
    return (
      <div className={style.HomeContainer}>
        <h1>
          <FormattedMessage
            id={'home.title'}
            description={'Home container title'}
            defaultMessage={'Home container'}
          />
        </h1>
        <h2>
          <FormattedMessage
            id={'home.demo'}
            description={'Demo component title'}
            defaultMessage={'Demo component'}
          />
        </h2>
        <img src={logoStack} alt="stack logo"/>
        <p>
          <FormattedDate
            value={new Date(1459832991883)}
            year={'numeric'}
            month={'long'}
            day={'numeric'}
            weekday={'long'}
          />
        </p>
      </div>
    );
  }
}

export default HomeContainer;

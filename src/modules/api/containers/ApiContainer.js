import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Button } from '@blueprintjs/core';

import Spinner from 'modules/api/components/Spinner';
import { fetchData } from 'modules/api/actions';
import style from './ApiContainer.scss';

const url = 'https://jsonplaceholder.typicode.com/users';

class ApiContainer extends Component {
  render() {
    return (
      <div className={style.ApiContainer}>
        <h1>
          <FormattedMessage
            id={'api.title'}
            description={'Api container title'}
            defaultMessage={'Api container'}
          />
        </h1>
        {this.props.users.isLoading ?
          <Spinner /> :
          <Button onClick={() => this.props.fetchData(url)}>
            <FormattedMessage
              id={'api.getusers'}
              description={'Api get users'}
              defaultMessage={'Get users'}
            />
          </Button>
        }
        {this.props.users.data.length > 0 ?
          <ul>
            {this.props.users.data.map(user => <li key={user.id}>{user.name}</li>)}
          </ul> :
          'no data'
        }
      </div>
    );
  }
}

ApiContainer.propTypes = {
  users: PropTypes.object,
  fetchData: PropTypes.func,
};

const mapStateToProps = state => ({
  users: state.api,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: (url) => dispatch(fetchData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApiContainer);

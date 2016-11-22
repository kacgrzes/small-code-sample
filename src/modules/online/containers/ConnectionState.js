import { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setAppOnline } from 'modules/online/actions/setAppOnline';
import { setAppOffline } from 'modules/online/actions/setAppOffline';

require('offline-js');

const { Offline } = window;

const ConnectionState = ({setAppOnline, setAppOffline}) => {
  Offline.on('down', () => setAppOffline());
  Offline.on('up', () => setAppOnline());

  return null;
};

ConnectionState.propTypes = {
  setAppOnline: PropTypes.func,
  setAppOffline: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  setAppOnline: () => dispatch(setAppOnline()),
  setAppOffline: () => dispatch(setAppOffline()),
});

export default connect(null, mapDispatchToProps)(ConnectionState);

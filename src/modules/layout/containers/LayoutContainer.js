import React, { Component, PropTypes } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Navbar from 'modules/layout/components/Navbar/Navbar';

import './Reset.scss';
import "!!style-loader!css-loader!@blueprintjs/core/dist/blueprint.css";
import "!!style-loader!css-loader!fixed-data-table/dist/fixed-data-table.css";

class App extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12}><Navbar/></Col>
        </Row>
        <Row>
          {this.props.children}
        </Row>
      </Grid>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
};

export default App;

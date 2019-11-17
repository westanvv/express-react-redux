import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import List from '../../components/List';

import * as appActions from '../../actions/app'

class Main extends Component {

  handleOnClick = () => {
    this.props.appActions.getData();
  };

  render() {
    console.log('render', this);

    return (
      <div id="main-layout">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Title
            </Typography>
          </Toolbar>
        </AppBar>
        <div id="page-wrapper" className="page-wrapper">
          <Button onClick={this.handleOnClick}>Button</Button>
          <List data={this.props.appReducer.data}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    appReducer: state.appReducer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

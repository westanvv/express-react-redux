import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import {Route, Switch, Redirect, BrowserRouter as Router} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import * as configureStore from './store';

import MainLayout from './containers/Main';

import './styles/index.css';

const store = configureStore.STORE;
const theme = createMuiTheme();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/" component={MainLayout}/>
          <Route path="/template" component={MainLayout}/>
          <Redirect to="/not-found" />
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

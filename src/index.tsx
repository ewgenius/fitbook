import './styles/index.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as configureTap from 'react-tap-event-plugin';
import { initializeApp } from 'firebase';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Router, Route, hashHistory } from 'react-router';

import {theme} from './theme';
import App from './components/App/App';
import WelcomeView from './views/WelcomeView/WelcomeView';

configureTap();

const config = {
  apiKey: 'AIzaSyB4x88S8zzJfX55cSuCIjDXHOW8MHpEad4',
  authDomain: 'fitbook-e417b.firebaseapp.com',
  databaseURL: 'https://fitbook-e417b.firebaseio.com',
  storageBucket: 'fitbook-e417b.appspot.com',
  messagingSenderId: '833904904674'
};

const app = initializeApp(config);

ReactDOM.render(<MuiThemeProvider muiTheme={theme}>
  <Router history={hashHistory}>
    <Route path='/' component={WelcomeView}></Route>
  </Router>
</MuiThemeProvider>, document.getElementById('root'));

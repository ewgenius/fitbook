import './styles/index.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as configureTap from 'react-tap-event-plugin';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { initializeApp } from 'firebase';
import { Router, Route, hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { reducer } from './reducers';

import { theme } from './theme';
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

const enhancer = compose((window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(reducer, enhancer);

ReactDOM.render(<MuiThemeProvider muiTheme={theme}>
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={WelcomeView}></Route>
    </Router>
  </Provider>
</MuiThemeProvider>, document.getElementById('root'));

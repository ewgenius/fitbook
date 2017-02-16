import './styles/index.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as configureTap from 'react-tap-event-plugin';
import { initializeApp } from 'firebase';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App/App';

configureTap();

const config = {
  apiKey: 'AIzaSyB4x88S8zzJfX55cSuCIjDXHOW8MHpEad4',
  authDomain: 'fitbook-e417b.firebaseapp.com',
  databaseURL: 'https://fitbook-e417b.firebaseio.com',
  storageBucket: 'fitbook-e417b.appspot.com',
  messagingSenderId: '833904904674'
};

const app = initializeApp(config);

const theme = getMuiTheme({
  appBar: {
    height: 56
  }
});

ReactDOM.render(<MuiThemeProvider muiTheme={theme}>
  <App />
</MuiThemeProvider>, document.getElementById('root'));

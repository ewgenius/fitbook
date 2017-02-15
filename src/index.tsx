import './styles/index.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { initializeApp } from 'firebase';
import App from './components/App/App';

const config = {
  apiKey: 'AIzaSyB4x88S8zzJfX55cSuCIjDXHOW8MHpEad4',
  authDomain: 'fitbook-e417b.firebaseapp.com',
  databaseURL: 'https://fitbook-e417b.firebaseio.com',
  storageBucket: 'fitbook-e417b.appspot.com',
  messagingSenderId: '833904904674'
};

const app = initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

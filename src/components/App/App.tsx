import './App.scss';
import * as React from 'react';
import { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import View from '../View/View';

export default class App extends Component<any, any> {
  render() {
    return (
      <View className='app'>
        <AppBar />
      </View>
    );
  }
}

import * as React from 'react';
import { Component } from 'react';
import { theme } from '../../theme';
import SwipeableViews from 'react-swipeable-views';
import View from '../../components/View/View';
import FlatButton from 'material-ui/FlatButton';

export default class App extends Component<any, any> {
  render() {
    return <View fill flexFlow='column' style={{
      backgroundColor: theme.palette.primary1Color,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <View flex={1} style={{ width: '100%' }}>
        <SwipeableViews style={{
          width: '100%',
          height: '100%'
        }}>
          <View fill>1</View>
          <View fill>2</View>
          <View fill>3</View>
        </SwipeableViews>
      </View>
      <View flexFlow='row' style={{
        width: '100%',
        maxWidth: 480,
        alignItems: 'center',
        padding: 16
      }}>
        <FlatButton label='Prev' />
        <View flex={1} />
        <FlatButton label='Prev' />
      </View>
    </View>;
  }
}

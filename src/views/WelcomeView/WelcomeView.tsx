import * as React from 'react';
import { Component, CSSProperties } from 'react';
import { theme } from '../../theme';
import { connect, Dispatch } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import FlatButton from 'material-ui/FlatButton';
import View from '../../components/View/View';
import { State } from '../../reducers';

const fillStyle: CSSProperties = {
  width: '100%',
  height: '100%'
};

const welcomeScreenStyle: CSSProperties = {
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  ...fillStyle
};

const screens = [
  <View key={0} style={welcomeScreenStyle}>1</View>,
  <View key={1} style={welcomeScreenStyle}>2</View>,
  <View key={2} style={welcomeScreenStyle}>3</View>,
  <View key={3} style={welcomeScreenStyle}>4</View>
];

interface WelcomeViewProps {

}

class WelcomeView extends Component<any, {
  index: number;
}> {
  state = {
    index: 0
  };

  private changeIndex = (index: number) => this.setState({ index });

  private prevScreen = () => this.state.index > 0 && this.changeIndex(this.state.index - 1);

  private nextScreen = () => this.state.index < screens.length - 1 && this.changeIndex(this.state.index + 1);

  render() {
    const {index} = this.state;

    return <View style={{
      display: 'flex',
      flexFlow: 'column',
      backgroundColor: theme.palette.primary1Color,
      alignItems: 'center',
      justifyContent: 'center',
      ...fillStyle
    }}>
      <View style={{ flex: 1, width: '100%' }}>
        <SwipeableViews index={index} onChangeIndex={this.changeIndex} style={fillStyle} containerStyle={fillStyle}>
          {screens}
        </SwipeableViews>
      </View>
      <View style={{
        display: 'flex',
        flexFlow: 'row',
        width: '100%',
        maxWidth: 480,
        alignItems: 'center'
      }}>
        <FlatButton style={{ margin: 16 }} label='Prev' disabled={index === 0} onTouchTap={this.prevScreen} />
        <View style={{ flex: 1 }} />
        <FlatButton style={{ margin: 16 }} label='Next' disabled={index === screens.length - 1} onTouchTap={this.nextScreen} />
      </View>
    </View>;
  }
}

export default connect((state: State) => {
  return {
    welcomeShowed: state.ui.welcomeShowed
  };
})(WelcomeView);

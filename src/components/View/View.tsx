import './View.scss';
import * as React from 'react';
import { Component, HTMLAttributes } from 'react';
import AppBar from 'material-ui/AppBar';

interface ViewProps extends HTMLAttributes<HTMLDivElement> { }

export default class View extends Component<ViewProps, {}> {
  render() {
    return <div {...this.props} className='view'>{this.props.children}</div>;
  }
}

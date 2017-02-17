import * as React from 'react';
import { Component, Props, HTMLAttributes, CSSProperties } from 'react';
import AppBar from 'material-ui/AppBar';

interface ViewProps extends Props<View>, HTMLAttributes<HTMLDivElement> {}

export default class View extends Component<ViewProps, {}> {
  render() {
    return <div {...this.props as HTMLAttributes<HTMLDivElement>}>{this.props.children}</div>;
  }
}

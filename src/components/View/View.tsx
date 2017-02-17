import * as React from 'react';
import { Component, Props, HTMLAttributes, CSSProperties } from 'react';
import AppBar from 'material-ui/AppBar';

interface ViewProps extends Props<View>, HTMLAttributes<HTMLDivElement> {
  flex?: number;
  flexFlow?: 'column' | 'row';
  fill?: boolean;
}

export default class View extends Component<ViewProps, {}> {
  render() {
    const style = {
      ...this.props.style
    };
    if (this.props.flex) style.flex = this.props.flex;
    if (this.props.flexFlow) {
      style.flexFlow = this.props.flexFlow;
      style.display = 'flex';
    }
    if (this.props.fill) {
      style.width = '100%';
      style.height = '100%';
    }
    return <div {...this.props as HTMLAttributes<HTMLDivElement>} style={style}>{this.props.children}</div>;
  }
}

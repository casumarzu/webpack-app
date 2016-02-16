import React, { Component } from 'react';
import {RaisedButton, Dialog, ThemeManager, LightRawTheme, Colors} from 'material-ui';

const style = {
  margin: 12,
};

export class Buttons extends React.Component {
  render () {
    return (
      <div>
        <RaisedButton label="Default" style={style}/>
        <RaisedButton label="Primary" primary={true} style={style} />
        <RaisedButton label="Secondary" secondary={true} style={style} />
        <RaisedButton label="Disabled" disabled={true} style={style} />
      </div>
    )
  }
}

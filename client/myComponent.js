import React, { Component } from 'react';
import {AppBar, RaisedButton} from 'material-ui';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

const MyRawTheme = {
  spacing: Spacing,
  zIndex: zIndex,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.cyan500,
    primary2Color: Colors.cyan700,
    primary3Color: Colors.lightBlack,
    accent1Color: Colors.pinkA200,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
    pickerHeaderColor: Colors.cyan500,
  }
};


@ThemeDecorator(ThemeManager.getMuiTheme(MyRawTheme))

class MySampleAppComponent extends React.Component {

  render() {
    return (
      <div>
        <AppBar title="My AppBar" />
        <RaisedButton label="My Button" primary={true}
           onClick={this.handleClick} />
      </div>
    );
  }

  //arrow function automatically binds lexical "this"
  handleClick = () => {
    //do something in response to button click
  }
}

export default MySampleAppComponent;

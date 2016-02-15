import React, { Component } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Dialog from 'material-ui/lib/dialog';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
import Colors from 'material-ui/lib/styles/colors';

// const containerStyle = {
//   textAlign: 'center',
//   paddingTop: 200,
// };
//
// const standardActions = [
//   {
//     text: 'Okay',
//   },
// ];
//
// const App = React.createClass({
//
//   childContextTypes: {
//     muiTheme: React.PropTypes.object,
//   },
//
//   getInitialState() {
//     return {
//       muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
//     };
//   },
//
//   getChildContext() {
//     return {
//       muiTheme: this.state.muiTheme,
//     };
//   },
//
//   componentWillMount() {
//     let newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
//       accent1Color: Colors.deepOrange500,
//     });
//
//     this.setState({muiTheme: newMuiTheme});
//   },
//
//   _handleRequestClose() {
//     this.setState({
//       open: false,
//     });
//   },
//
//   _handleTouchTap() {
//     this.setState({
//       open: true,
//     });
//   },
//
//   render() {
//     return (
//       <div style={containerStyle}>
//         <h1>material-ui</h1>
//         <h2>example project</h2>
//         <RaisedButton label="Super Secret Password" primary={true} onTouchTap={this._handleTouchTap} />
//       </div>
//     );
//   },
// });
//

const App = React.createClass({
  render {
    return {
      <div className='ReactApp'>
        <h1>Hello! I'm App!</h1>
      </div>
    }
  }
});

export default App;

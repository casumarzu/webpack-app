import React, { Component } from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import {Dialog, FlatButton, RaisedButton, DatePicker, LeftNav, MenuItem} from 'material-ui';

class DialogExampleDialogDatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Dialog With Date Picker" onTouchTap={this.handleOpen} />
        <Dialog
          title="Dialog With Date Picker"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Open a Date Picker dialog from within a dialog.
          <DatePicker hintText="Date Picker" />
        </Dialog>
      </div>
    );
  }
}

class LeftNavSimpleExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <RaisedButton
          label="Toggle LeftNav"
          onTouchTap={this.handleToggle}
        />
        <LeftNav open={this.state.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </LeftNav>
      </div>
    );
  }
}


ReactDOM.render(<div>
  <DialogExampleDialogDatePicker />
  <LeftNavSimpleExample />
</div>, document.getElementById('root'));

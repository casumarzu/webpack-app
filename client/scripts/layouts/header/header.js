import React, { Component } from 'react';
import 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory, RouterContext } from 'react-router';
import {AppBar, LeftNav, MenuItem, RaisedButton, Tabs, Tab, Slider} from 'material-ui';

const ACTIVE = { color: 'rgb(127, 135, 173)' };

class NavLink extends React.Component {
  render () {
    return (
      <Link to={this.props.href} activeStyle={ACTIVE}>{this.props.children}</Link>
    )
  }
}

class LeftNavUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <RaisedButton
          label="Open LeftNav"
          onTouchTap={this.handleToggle}
        />
        <LeftNav
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </LeftNav>
      </div>
    );
  }
}

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props.route} was activated.`);
}


export class Header extends React.Component {
  constructor (props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => {
    this.setState({open: false});
  }

  render () {
    return (
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <LeftNav
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose} link="/">Index</MenuItem>
          <MenuItem onTouchTap={this.handleClose} link="/index">About</MenuItem>
          <MenuItem onTouchTap={this.handleClose} link="/contacts">Contacts</MenuItem>
          <MenuItem onTouchTap={this.handleClose} link="/portfolio">Portfolio</MenuItem>
        </LeftNav>
    </div>
    )
  }
}
// export class Header extends React.Component {
//   render () {
//     return (
//       <div>
//         <Navbar inverse>
//           <Navbar.Header>
//             <Navbar.Brand>
//               <Link to="/" activeStyle={ACTIVE}>React-Bootstrap</Link>
//             </Navbar.Brand>
//             <Navbar.Toggle />
//           </Navbar.Header>
//           <Navbar.Collapse>
//             <Nav>
//               <NavLink href="/about">About</NavLink>
//               <NavLink href="/contacts">Contacts</NavLink>
//               <NavLink href="/portfolio">Portfolio</NavLink>
//               <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//                 <NavLink href="/users">/users</NavLink>
//                 <NavLink href="/users">/users IndexLink</NavLink>
//                 <NavLink href="/users/ryan">/users/ryan</NavLink>
//                 <MenuItem divider />
//                 <NavLink href={{ pathname: '/users/ryan', query: { foo: 'bar' } }}>/users/ryan?foo=bar</NavLink>
//               </NavDropdown>
//             </Nav>
//             <Nav pullRight>
//               <NavItem eventKey={1} href="#">Link Right</NavItem>
//               <NavItem eventKey={2} href="#">Link Right</NavItem>
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//       </div>
//     )
//   }
// }

import React, { Component } from 'react';
import 'react-dom';
import * as bootstrap from "react-bootstrap";
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';

const ACTIVE = { color: 'rgb(127, 135, 173)' };

class NavLink extends React.Component {
  render () {
    return (
      <li role="presentation">
        <Link to={this.props.href} activeStyle={ACTIVE}>{this.props.children}</Link>
      </li>
    )
  }
}

export class Header extends React.Component {
  render () {
    return (
      <div>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/" activeStyle={ACTIVE}>React-Bootstrap</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contacts">Contacts</NavLink>
              <NavLink href="/portfolio">Portfolio</NavLink>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <NavLink href="/users">/users</NavLink>
                <NavLink href="/users">/users IndexLink</NavLink>
                <NavLink href="/users/ryan">/users/ryan</NavLink>
                <MenuItem divider />
                <NavLink href={{ pathname: '/users/ryan', query: { foo: 'bar' } }}>/users/ryan?foo=bar</NavLink>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Link Right</NavItem>
              <NavItem eventKey={2} href="#">Link Right</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

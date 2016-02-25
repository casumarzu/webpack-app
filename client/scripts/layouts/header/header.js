import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import bootstrap from 'bootstrap-webpack';
// import {Button, Nav,Navbar, NavItem, NavDropdown, MenuItem} from "react-bootstrap";
// import { Button } from 'react-bootstrap';

function handleSelect(selectedKey) {
  alert('selected ' + selectedKey);
}


import style from './header.styl';

export class Header extends React.Component {
  render () {
    return (
      <header className={style.Header}>
        <h1>Header</h1>
      </header>
    )
  }
}

// export class Header extends React.Component {
//   render () {
//     return (
//       <header className={style.Header}>
//         <Navbar inverse>
//           <Navbar.Header>
//             <Navbar.Brand>
//               <a href="#">React-Bootstrap</a>
//             </Navbar.Brand>
//             <Navbar.Toggle />
//           </Navbar.Header>
//           <Navbar.Collapse>
//             <Nav>
//               <NavItem eventKey={1} href="#">Link</NavItem>
//               <NavItem eventKey={2} href="#">Link</NavItem>
//               <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//                 <MenuItem eventKey={3.1}>Action</MenuItem>
//                 <MenuItem eventKey={3.2}>Another action</MenuItem>
//                 <MenuItem eventKey={3.3}>Something else here</MenuItem>
//                 <MenuItem divider />
//                 <MenuItem eventKey={3.3}>Separated link</MenuItem>
//               </NavDropdown>
//             </Nav>
//             <Nav pullRight>
//               <NavItem eventKey={1} href="#">Link Right</NavItem>
//               <NavItem eventKey={2} href="#">Link Right</NavItem>
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//       </header>
//     )
//   }
// }

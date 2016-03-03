import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';

import {Header} from './layouts/header/header';
import {Content} from './layouts/content/content';
import {Footer} from './layouts/footer/footer';

import {Index} from './pages/index';
import {About} from './pages/about';
import {Contacts} from './pages/contacts';
import {Portfolio} from './pages/portfolio';
import {Users} from './pages/users';
import {UsersIndex} from './pages/usersIndex';
import {User} from './pages/user';

import 'bootstrap/less/bootstrap.less';

import index from './../stylesheets/index.css';

class Root extends React.Component {
  render() {
    return (
      <div className={index.Wrapper}>
        <Header/>
        <div className="container">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    )
  }
}

export class App extends React.Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Root}>
          <IndexRoute component={Index}/>
          <Route path="/about" component={About}/>
          <Route path="/contacts" component={Contacts}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="users" component={Users}>
            <IndexRoute component={UsersIndex}/>
            <Route path=":id" component={User}/>
          </Route>
        </Route>
      </Router>
    )
  }
}

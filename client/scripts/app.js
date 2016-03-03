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

// // Core variables and mixins
// import 'bootstrap/less/variables.less';
// import 'bootstrap/less/mixins.less';
//
// // Reset and dependencies
// import 'bootstrap/less/normalize.less';
// import 'bootstrap/less/print.less';
// import 'bootstrap/less/glyphicons.less';
//
// // Core CSS
// import 'bootstrap/less/scaffolding.less';
// import 'bootstrap/less/type.less';
// import 'bootstrap/less/code.less';
// import 'bootstrap/less/grid.less';
// import 'bootstrap/less/tables.less';
// import 'bootstrap/less/forms.less';
// import 'bootstrap/less/buttons.less';
//
// // Components
// import 'bootstrap/less/component-animations.less';
// import 'bootstrap/less/dropdowns.less';
// import 'bootstrap/less/button-groups.less';
// import 'bootstrap/less/input-groups.less';
// import 'bootstrap/less/navs.less';
// import 'bootstrap/less/navbar.less';
// import 'bootstrap/less/breadcrumbs.less';
// import 'bootstrap/less/pagination.less';
// import 'bootstrap/less/pager.less';
// import 'bootstrap/less/labels.less';
// import 'bootstrap/less/badges.less';
// import 'bootstrap/less/jumbotron.less';
// import 'bootstrap/less/thumbnails.less';
// import 'bootstrap/less/alerts.less';
// import 'bootstrap/less/progress-bars.less';
// import 'bootstrap/less/media.less';
// import 'bootstrap/less/list-group.less';
// import 'bootstrap/less/panels.less';
// import 'bootstrap/less/responsive-embed.less';
// import 'bootstrap/less/wells.less';
// import 'bootstrap/less/close.less';
//
// // Components w/ JavaScript
// import 'bootstrap/less/modals.less';
// import 'bootstrap/less/tooltip.less';
// import 'bootstrap/less/popovers.less';
// import 'bootstrap/less/carousel.less';
//
// // Utility classes
// import 'bootstrap/less/utilities.less';
// import 'bootstrap/less/responsive-utilities.less';





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

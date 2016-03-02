import React, { Component } from 'react';
import $ from 'jquery';
import _ from 'lodash';

import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';

import {Header} from './layouts/header/header';
import {Content} from './layouts/content/content';
import {Footer} from './layouts/footer/footer';
// import 'style-loader!css-loader!normalize.css';
import 'style-loader!css-loader!reset.css';
// import 'style-loader!less-loader!bootstrap/less/bootstrap.less';

import indexCss from './../stylesheets/index.css';

const ACTIVE = { color: 'red' };

class Root extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <h1>APP!</h1>
        <ul className="b-nav">
          <li><Link to="/"activeStyle={ACTIVE}>/</Link></li>
          <li><IndexLink to="/" activeStyle={ACTIVE}>/ IndexLink</IndexLink></li>

          <li><Link to="/users" activeStyle={ACTIVE}>/users</Link></li>
          <li><IndexLink to="/users" activeStyle={ACTIVE}>/users IndexLink</IndexLink></li>

          <li><Link to="/users/ryan" activeStyle={ACTIVE}>/users/ryan</Link></li>
          <li><Link to={{ pathname: '/users/ryan', query: { foo: 'bar' } }} activeStyle={ACTIVE}>/users/ryan?foo=bar</Link></li>

          <li><Link to="/about" activeStyle={ACTIVE}>/about</Link></li>
        </ul>
        <div className={indexCss.Wrapper}>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    )
  }
}

class Index extends React.Component {
  render() {
    return (
      <div className={indexCss.Wrapper}>
        <h2>Index!</h2>
        <Content/>
      </div>
    )
  }
}

class Users extends React.Component {
  render() {
    return (
      <div>
        <h2>Users</h2>
        {this.props.children}
      </div>
    )
  }
}

class UsersIndex extends React.Component {
  render() {
    return (
      <div>
        <h3>UsersIndex</h3>
      </div>
    )
  }
}

class User extends React.Component {
  render() {
    return (
      <div>
        <h3>User {this.props.params.id}</h3>
      </div>
    )
  }
}

class About extends React.Component {
  render() {
    return (
      <div>
        <h2>About</h2>
      </div>
    )
  }
}

// export class App extends React.Component {
//   render () {
//     return (
//       <div className={indexCss.Wrapper}>
//         <Header/>
//         <Content/>
//         <Footer/>
//       </div>
//     )
//   }
// }

export class App extends React.Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Root}>
          <IndexRoute component={Index}/>
          <Route path="/about" component={About}/>
          <Route path="users" component={Users}>
            <IndexRoute component={UsersIndex}/>
            <Route path=":id" component={User}/>
          </Route>
        </Route>
      </Router>
    )
  }
}


$.ajax({
  url: '/api/v1/tasks.json',
  type: 'GET',
  data: {
    private_token: 'DHPAmq8LLcNhbGsZHYyf'
  }
})
.done(
  (data)=> {
    var results = [];
    data.forEach((task)=> {
      console.info(_.pick(task, ['id','name']))
      results.push(_.pick(task, ['id','name']))
    })
    return results;
  })
.fail(
  (data)=> {
    console.error(data)
  });

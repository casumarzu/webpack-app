import React, { Component } from 'react';

import {Header} from './layouts/header/header';
import {Content} from './layouts/content/content';
import {Footer} from './layouts/footer/footer';
// import 'normalize.css';
// import 'reset.css';
import indexCss from './../stylesheets/index.css';

const wait = (time) => {
  return new Promise(
    (resolve, reject)=> {
      setTimeout(resolve, time);
    }
  );
}

// wait(3000).then(()=> console.log('wait yo!'));

wait(1000).then(()=> {
  console.log('step 1!');
  return wait(3000);
}).then(()=> {
  console.log('step 2!');
  return wait(2000);
}).then(()=> console.log('step 3!'));

// import {Header, Content, Footer} from './layouts';

export class App extends React.Component {
  render () {
    return (
      <div className={indexCss.Wrapper}>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    )
  }
}

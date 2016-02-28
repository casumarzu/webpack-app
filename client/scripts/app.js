import React, { Component } from 'react';

import {Header} from './layouts/header/header';
import {Content} from './layouts/content/content';
import {Footer} from './layouts/footer/footer';
// import 'style-loader!css-loader!normalize.css';
import 'style-loader!css-loader!reset.css';
// import 'style-loader!less-loader!bootstrap/less/bootstrap.less';

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

import arrChange from './exp/arrChange';
console.log(arrChange([1,2,3]))

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

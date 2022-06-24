import React, { Component } from 'react';
import Navigation from "./components/Navigation"
import Content from './components/Content';
import Subject from './components/Subject';

import './App.css';

class App extends Component {

  render () {

    return (
      <div className="App">
        <Subject title="WEB" sub="abcd"></Subject>
        <Navigation></Navigation>
        <Content abc="abc" haha="haha"></Content>
      </div>
    );

  }
}


export default App;

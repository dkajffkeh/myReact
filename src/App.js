import React, { Component } from 'react';
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

class Navigation extends Component {
  render () {
    return (
      <nav>
        <ul>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">JS</a></li>
        </ul>
    </nav>
    );
  }
}
  
class Content extends Component {

  render () {
    return (
      <article>
        <h2>{this.props.abc}</h2>
        {this.props.haha}
    </article>
    );
  }

}

class Subject extends Component {

  render () {
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>    
    );
  }
}

export default App;

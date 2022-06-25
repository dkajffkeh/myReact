import React, { Component } from 'react';
import Navigation from "./components/Navigation"
import Content from './components/Content';
import Subject from './components/Subject';

import './App.css';

class App extends Component {

    // 이부분이 먼저 시작되는 부분임
    constructor(props) {
        super(props);
        this.state = {
            mode:'read',
            welcome:{title:'Welcome',desc:'Hello React!!'},
            selected_content_id:2,
            subject:{title:'WEB',sub:"World Wide Web"},

            contents:[{id:1, title:'HTML', desc:"HTML is HyperText..."},
                {id:2, title:'CSS', desc:"CSS is for design"},
                {id:3, title:'JS', desc:"JavaScript is for interactive"},
            ]

        }

    }

    render () {

        let title, desc = null;

        if (this.state.mode === 'welcome'){
            title = this.state.welcome.title;
            desc = this.state.welcome.desc;
        }
        if (this.state.mode === 'read') {
            let i = 0;
            while(i < this.state.contents.length) {
                console.log("실행");
                let data = this.state.contents[i];
                if(data.id === this.state.selected_content_id) {
                    title = data.title;
                    desc = data.desc;
                    break;
                }
                i += 1;

            }
        }

        return (
      <div className="App">
        <Subject title={this.state.subject.title}
                 sub={this.state.subject.sub}
                 onChangePage = {function () {
                     this.setState({mode:'welcome'})
                 }.bind(this)}
        />
          <Navigation
              onChangePage = {function (id){
                this.setState(
                    {mode:'read',
                        selected_content_id : Number(id)}
                )
              }.bind(this)}
              data={this.state.contents}/>
        <Content title={title} desc={desc}/>
      </div>
    );
  }
}

export default App;

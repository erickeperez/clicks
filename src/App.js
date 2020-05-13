import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      count:  0
    }
  }
  render(){

    return (
      <div className="App">
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

export default App;

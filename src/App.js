import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      count:  0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => {
      return{
        count: prevState.count + 1
      }
    })
  }
  render(){

    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <button>Increment</button>
        <button>Decrement</button>
      </div>
    );
  }
}

export default App;

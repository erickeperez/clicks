import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      count:  0
    }
    this.handleClickP = this.handleClickP.bind(this)
    this.handleClickM = this.handleClickM.bind(this)
  }

//  Method for adding 1 to count when increment button is pressed
  handleClickP() {
    this.setState(prevState => {
      return{
        count: prevState.count + 1
      }
    })
  }
  //  Method for subtracting 1 to count when decrement button is pressed
  handleClickM() {
    this.setState(prevState => {
      return{
        count: prevState.count - 1
      }
    })
  }
  render(){

    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClickP}>Increment</button>
        <button onClick={this.handleClickM}>Decrement</button>
      </div>
    );
  }
}

export default App;

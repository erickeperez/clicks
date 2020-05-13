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
        <h1 className='count'>{this.state.count}</h1>
        <div className="buttons">
          <button onClick={this.handleClickP} className='btn btn-primary btn-lg plus'>Increment</button>
          <button onClick={this.handleClickM} className='btn btn-primary btn-lg minus'>Decrement</button>
        </div>
      </div>
    );
  }
}

export default App;

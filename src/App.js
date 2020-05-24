import React, { useState, useEffect } from 'react';
import './App.css';
import randomColor from 'random-color'

// Refactoring code 
// Changing from Class to Function
// Using useState()
// useEffect()

function App() {
  const [count, setCount] = useState(0) 
  const [color, setColor] = useState(randomColor())

  function increment() {
    setCount(prevCount => prevCount + 1)
  }
  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  useEffect(() => {
    setColor(randomColor())
}, [count])

  return(
      <div className="App">
        <h1 style={{color: color.hexString()}}  className='count'>{count}</h1>
        <div className="buttons">
            <button onClick={increment} className='btn btn-primary btn-lg plus'>Increment</button>
            <button onClick={decrement} className='btn btn-primary btn-lg minus'>Decrement</button>
        </div>
      </div>
  )
}



export default App;

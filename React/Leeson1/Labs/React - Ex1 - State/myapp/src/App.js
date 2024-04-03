import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {

  const [num, setNum] = useState(0)
  const [sum, setsum] = useState(0)
  return (
    <div className="App">
      <input type="text" onChange={e => setNum(+e.target.value)}/> 
      <input type="button" value={'+'} onClick={() => setsum(sum + num)}/> <br/>
      Total: {sum}

    </div>
  );
}

export default App;

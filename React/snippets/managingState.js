import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <p>-----------------------------------------------------------</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Count up</button>
      <button onClick={() => setCount(0)}>Clear counter</button>
      <button onClick={() => setCount(count - 1)}>Count down</button>
      <p>-----------------------------------------------------------</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          Here is the counter <Counter />
        </p>
      </header>
    </div>
  );
}

export default App;
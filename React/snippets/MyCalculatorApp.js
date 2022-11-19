import './App.css';
import { useState } from 'react'

const Calculator = () => {
  const [result, makeNumber] = useState(0) // display number
  const [number, getNumber] = useState(0) // pushed number
  
  return (
    <div>
      <p>-------------------------------------</p>
      <p>Result: {result}</p>
      <p>-------------------------------------</p>
      <button onClick={() => makeNumber(result*10+0)}>0</button>
      <button onClick={() => makeNumber(result*10+1)}>1</button>
      <button onClick={() => makeNumber(result*10+2)}>2</button>
      <button onClick={() => makeNumber(number + result)}>+</button>
      <p></p>
      <button onClick={() => makeNumber(result*10+3)}>3</button>
      <button onClick={() => makeNumber(result*10+4)}>4</button>
      <button onClick={() => makeNumber(result*10+5)}>5</button>
      <button onClick={() => makeNumber(number - result)}>-</button>
      <p></p>
      <button onClick={() => makeNumber(result*10+6)}>6</button>
      <button onClick={() => makeNumber(result*10+7)}>7</button>
      <button onClick={() => makeNumber(result*10+8)}>8</button>
      <button onClick={() => makeNumber(number * result)}>x</button>
      <p></p>
      <button onClick={() => makeNumber(result*10+9)}>9</button>
      <button onClick={() => { 
            getNumber(result)
            makeNumber(0)
          }
        }>Enter</button>
      <button onClick={() => makeNumber(number / result)}>/</button>
      <p></p>
      <button onClick={() => makeNumber(number * number)}>squared</button>
      <button onClick={() => makeNumber(Math.sqrt (number) )}>root</button>
      <p></p>
      <button onClick={() => {
            getNumber(0)
            makeNumber(0)
          }
        }>Clear calculator</button>
      <p>Number on the stack: {number}</p>

      <p>-------------------------------------</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Simple RPN calculator <Calculator />
        </p>
      </header>
    </div>
  );
}

export default App;
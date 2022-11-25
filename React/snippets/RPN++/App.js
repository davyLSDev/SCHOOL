import './App.css';
	import { useState } from 'react'

	const Calculator = () => {
  	const [number, GetNumber] = useState(0) // number is made from button pushing, or calculation
  	const [pushedNumber, Push] = useState(0)
  	const [decimalKey, PressedDecimalKey] = useState(0) // to help prevent multiple decimal points in entering number

  	function testToAppend(testString){
    	return !(Number(testString) === 0 && testString[testString.length-1] !== '.')
  	}

  	return (
      <div>
        <p>-------------------------------------</p>
        <p>Current number: {number}</p>
        <p>-------------------------------------</p>
        <button className="Number-button" onClick={() => GetNumber( (Number(number) !== 0) ? number+"0" : "0" )}>0</button>
        <button className="Number-button" onClick={() => GetNumber( testToAppend(number) ? number+"1" : "1" )}>1</button>
        <button className="Number-button" onClick={() => GetNumber( testToAppend(number) ? number+"2" : "2" )}>2</button>
        <button className="Function-button" onClick={() => GetNumber(pushedNumber + number)}>+</button>
        <p></p>
        <button className="Number-button" onClick={() => GetNumber( testToAppend(number) ? number+"3" : "3" )}>3</button>
        <button className="Number-button" onClick={() => GetNumber( testToAppend(number) ? number+"4" : "4" )}>4</button>
        <button className="Number-button" onClick={() => GetNumber( testToAppend(number) ? number+"5" : "5" )}>5</button>
        <button className="Function-button" onClick={() => GetNumber(pushedNumber - number)}>-</button>
        <p></p>
        <button className="Number-button" onClick={() => GetNumber( testToAppend(number) ? number+"6" : "6" )}>6</button>
        <button className="Number-button" onClick={() => GetNumber( testToAppend(number) ? number+"7" : "7" )}>7</button>
        <button className="Number-button" onClick={() => GetNumber( testToAppend(number) ? number+"8" : "8" )}>8</button>
        <button className="Function-button" onClick={() => GetNumber(pushedNumber * number)}>x</button>
        <p></p>
        <button className="Number-button" onClick={() => GetNumber( testToAppend(number) ? number+"9" : "9" )}>9</button>
        <button className="Number-button" onClick={() => {
              GetNumber( (decimalKey === 1) ? number : number + ".")
              PressedDecimalKey(1)
            }
        }>.</button>
        <button onClick={() => {
              GetNumber(0)
              PressedDecimalKey(0)
              }
        }>C</button>
        <button className="Function-button" onClick={() => GetNumber(pushedNumber / number)}>/</button>
        <p></p>
        <button onClick={() => {
              Push(number)
              GetNumber(0)
              PressedDecimalKey(0)
              }
        }>Enter</button>
        <p></p>
        <button className="Function-button" onClick={() => GetNumber(pushedNumber * pushedNumber)}>squared</button>
        <button className="Function-button" onClick={() => GetNumber(Math.sqrt (pushedNumber) )}>root</button>
        <p></p>
        <button onClick={() => {
            Push(0)
            GetNumber(0)
            PressedDecimalKey(0)
            }
        }>Clear calculator</button>
        <p>Number on the stack: {pushedNumber}</p>
        <p>-------------------------------------</p>
      </div>
    )
    }

	function App() {
      return (
        <div className="App">
          <header className="App-header">
            <p>
            A little more advanced RPN calculator <Calculator />
            </p>
          </header>
        </div>
      );
    }

	export default App;
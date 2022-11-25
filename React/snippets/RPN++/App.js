/* README
Clearly there are improvements to be made:
OK 1) Logic for all the operations
1b) Have to figure out how to register that the "." button was pushed after "returning"
OK 2) infer functions from the actual button label instead of mapping "buttonType"?
OK 3) Logic(?) for laying out rows of buttons at a time
4) Better css, grid or? for laying out buttons
5) A better display, like LCD font or something
6) maybe a box around the calculator
7) Need to start working on TDD!
*/

import './App.css';
import { useState } from 'react'

function App() {
  const [number, GetNumber] = useState(0)
  const [savedNumber, SaveNumber] = useState(0)
  const [decimalKey, PressedDecimalKey] = useState(0) // to help prevent multiple decimal points in entering number
  const [status, UpdateStatus] = useState(0)

  const buttons = [
    {
        "buttonLabel": "0",
        "buttonType": "Number-button"
    },
    {
        "buttonLabel": "1",
        "buttonType": "Number-button"
    },
    {
        "buttonLabel": "2",
        "buttonType": "Number-button"
    },
    {
        "buttonLabel": "+",
        "buttonType": "Function-button"
    },
    {
        "buttonLabel": "",
        "buttonType": "Newrow"
    },
    {
        "buttonLabel": "3",
        "buttonType": "Number-button"
    },
    {
        "buttonLabel": "4",
        "buttonType": "Number-button"
    },
    {
        "buttonLabel": "5",
        "buttonType": "Number-button"
    },
    {
        "buttonLabel": "-",
        "buttonType": "Function-button"
    },
    {
        "buttonLabel": "",
        "buttonType": "Newrow"
    },
    {
        "buttonLabel": "6",
        "buttonType": "Number-button"
    },
    {
        "buttonLabel": "7",
        "buttonType": "Number-button"
    },
    {
        "buttonLabel": "8",
        "buttonType": "Number-button"
    },
    {
        "buttonLabel": "x",
        "buttonType": "Function-button"
    },
    {
        "buttonLabel": "",
        "buttonType": "Newrow"
    },
    {
        "buttonLabel": "9",
        "buttonType": "Number-button"
    },
    {
        "buttonLabel": ".",
        "buttonType": "Number-button"
    },
    {
        "buttonLabel": "c",
        "buttonType": "Calculator-button"
    },
    {
        "buttonLabel": "/",
        "buttonType": "Function-button"
    },
    {
        "buttonLabel": "",
        "buttonType": "Newrow"
    },
    {
        "buttonLabel": "Enter",
        "buttonType": "Calculator-button"
    },
    {
        "buttonLabel": "",
        "buttonType": "Newrow"
    },
    {
        "buttonLabel": "squared",
        "buttonType": "Function-button"
    },
    {
        "buttonLabel": "root",
        "buttonType": "Function-button"
    },
    {
        "buttonLabel": "",
        "buttonType": "Newrow"
    },
    {
        "buttonLabel": "Clear calculator",
        "buttonType": "Calculator-button"
    }
]

const keypad = buttons.map(
	(element) => { return ( element.buttonType !== "Newrow" ? makeButton(element.buttonType, element.buttonLabel) : <p></p>) }
)

function makeButton(buttonType, buttonLabel) {

    function doAction() {
//      UpdateStatus(buttonLabel)
      switch (buttonLabel) {
        case "0":
          return GetNumber( (Number(number) !== 0) ? number+"0" : "0" )
          break
        case ".":
          return GetNumber( (decimalKey === 1) ? number : number + "." )
          // not sure how to           PressedDecimalKey(1)
          break
        case "Enter":
          SaveNumber(number)
          PressedDecimalKey(0)
          return GetNumber(0)
          break
        case "-":
          return GetNumber(savedNumber - number)
          break
        case "+":
          return GetNumber(savedNumber + number)
          break
        case "x":
          return GetNumber(savedNumber * number)
          break
        case "/":
          return GetNumber(savedNumber / number)
          break
        case "squared":
          return GetNumber(savedNumber * savedNumber)
          break
        case "c":
          PressedDecimalKey(0)
          return GetNumber(0)
          break
        case "Clear calculator":
          SaveNumber(0)
          PressedDecimalKey(0)
          return GetNumber(0)
          break
        default:
          return GetNumber(testToAppend(number) ? number+buttonLabel : buttonLabel)
      }
  }
    return <button className={buttonType} onClick={() => doAction()}>
    {buttonLabel}</button>
}

  function testToAppend(testString){
    return !(Number(testString) === 0 && testString[testString.length-1] !== '.')
  }

  return (
    <div className="App">
      <header className="App-header">
        Somewhat improved RPN calculator
      </header>
      <p>Current number: {number}</p>
      {keypad}
      <p>Saved number: {savedNumber}</p>
      <p>---------------------------</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default App;


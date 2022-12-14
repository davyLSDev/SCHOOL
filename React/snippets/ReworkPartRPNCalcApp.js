/* README
Clearly there are improvements to be made:
1) Logic for all the operations
2) infer functions from the actual button label instead of mapping "buttonType"?
3) Logic(?) for laying out rows of buttons at a time
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
        "buttonLabel": "-",
        "buttonType": "Function-button"
    },
    {
        "buttonLabel": "Enter",
        "buttonType": "Calculator-button"
    }
]

const keypad = buttons.map(
	(element) => {return makeButton(element.buttonType, element.buttonLabel)}
)      
  
function makeButton(buttonType, buttonLabel) {
    
    function doAction() {
      switch (buttonType) {
        case "Calculator-button":
          GetNumber(0)
          return SaveNumber(number)
          break;
        case "Function-button":
          return GetNumber(savedNumber - number)
          break;
        // case "Number-button" && (buttonLabel === "0"):
        //   break;
        case "Number-button":
          return GetNumber(testToAppend(number) ? number+buttonLabel : buttonLabel) 
        default:
          return GetNumber("ERROR")      
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
        Create buttons
      </header>
      <p>-------------------------------------</p>
      <p>Current number: {number}</p>
      <p>-------------------------------------</p>
      <p></p>
      {makeButton("Number-button", "0")}
      {makeButton("Number-button", "1")}
      {makeButton("Number-button", "2")}
      {makeButton("Function-button", "-")}
      <h3>Now create the buttons using a mapping function</h3>
      {keypad}
    </div>
  );
}

export default App;

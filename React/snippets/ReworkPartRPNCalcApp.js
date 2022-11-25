import './App.css';
import { useState } from 'react'

function App() {
  const [number, GetNumber] = useState(0)
  const [savedNumber, SaveNumber] = useState(0)
  
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
      {makeButton("Calculator-button", "Enter")}

    </div>
  );
}

export default App;

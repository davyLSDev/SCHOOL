import './App.css';
import { useState } from 'react'

function App() {
  const [number, GetNumber] = useState(0)
  
  function makeButton(buttonType, buttonLabel, buttonFunction) {
    return <button className={buttonType} onClick={() => GetNumber( 
        testToAppend(number) ? number+buttonLabel : buttonLabel 
      )}>
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
      {makeButton("Number-button", "1")}
      {makeButton("Number-button", "2")}
      {makeButton("Function-button", "-")}
      {makeButton("Calculator-button", "Enter")}
    </div>
  );
}

export default App;

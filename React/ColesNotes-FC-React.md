# My notes from Flavio's book
## to master the 80% which is most useful from React

## Introduction to React

React is a JavaScript library which simplifies developing visual interfaces by dividing the UI into a collection of componenets. This simplifies understanding about an interface and its state at any given point in time. Its core API is small. You only need to understand four concepts to get started:

* Components
* JSX
* State
* Props

## How much JavaScript [do] you need to know to use React?
These subjects I need to know more of before moving onto learning React.
### Callbacks
* [Reference URL](https://flaviocopes.com/javascript-callbacks/)

### Promises
* [Reference URL](https://flaviocopes.com/javascript-promises/)

### Async/Await
* [Reference URL](https://flaviocopes.com/javascript-async-await/)

* [18-Nov-2022] talked with Tom about callbacks, promises, async/await and it seems like I have enough basic understanding to go ahead with learning React. It wouldn't hurt to do a wee bit of review, but . .
* some topics to look up: JavaScript **microstack** / **macrostack**

### ES Modules
* [Reference URL](https://flaviocopes.com/es-modules/)

## Why should you learn React?
## How to install React
Ok, that was easy. Already done prior.

Then, generate your first React app using the application generator, thus:

	npx create-react-app todolist
## React Components
Poking around at the application that *npx-create-app todoist* generated, there are a few main pieces in the *src* folder, *App.js* is where you can see JSX on display.

## Introduction to JSX
In the app, App.js, everything wrapped in parenthesis in the app's **return()* is JSX:

	<div className="App">
	  <header className="App-header">
	    <img src={logo} className="App-logo" alt="logo"
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
	  </header>
	</div>

React will take this JSX and *compile* it into JavaScript code that the browser can consume. The idea behind JSX is that it is easier to create UI interfaces with it than only using JavaScript.

## Using JSX to compose UI
Here is a function to add to the App.js file in the basic generated React code:

    function WelcomeMessage() {
        return <p>The <i>WelcomeMessage function</i> says: Welcome to react!</p>
    }

Then, in order to render the message, put this code in the body of the App function return:

	<WelcomeMessage/>

It is as though we have made our own html tag through the *magic* of React. React components and JSX enable us to create application interfaces and use them as though they are html.

## The difference between JSX and HTML
*ClassName* was selected by the designers of React so that it could not interfere with JavaScript's *class*, which is a reserved word. Also, html has a *class* attribute which could have become confusing if *class* was used for multiple contexts. One other area of difference between JSX and html is that JSX is very rigid about syntax and will complain if tags that need to be closed are not. Html, on the other hand is much less stringent about these kinds of details, and will still work. JSX also allows for embedding JavaScript.

## Embedding JavaScript in JSX

* I startted trying to find an alternative svg, but ran into problems, also the same happened when I tried to make an svg using Gimp(that doesn't work anyway), and inkscape, also editing the logo.svg using inkscape.

Flavio's example with the ternary operator is missing the ":" along with the result which is expected when the two things being compared are not ===.

so use this instead, and it is expanded a bit to demonstrate how the ternary function works:

	function App() {
	  const message1 = "Hello!";
  	  const message2 = "Goodbye!";
  	    return (
    	  <div className="App">
      	    <header className="App-header">
        	  <img src={logo} className="App-logo" alt="logo" />
        	  <p>
          	    Edit <code>src/App.js</code> and save to reload.
        	  </p>
        	  <h4>Message one is {message1}</h4>
        	  <h4>Message two is {message2}</h4>
        	  <p>
          	    {message1 === 'Hello!' ? 'Message one really was "Hello!"' : 'The message was NOT "Hello!"'}
        	  </p>
        	  <p>
          	    {message1 === message2 ? 'The two messages are the same!' : 'The messages are the same'}
        	  </p>
        	  <a
          	    className="App-link"
          	    href="https://reactjs.org"
          	    target="_blank"
          		rel="noopener noreferrer"
        	  >
          	    Learn React
        	  </a>
    	    </header>
    	  </div>
  		);
	}

## Managing state in React
State is the data that a given component manages. This is managed by the *useState* utility that React provides. Underlyingly, it is a **hook**. The details of how a hook operates are not necessary to get started using *useState*. You may have many useState() calls in your code.

Here is code snippet:
	import React, { useState } from 'react'
	// . . .

	const [count, setCount] = userState(0)

Where *count* is the state variable, and *setCount*. You modify the state variable only by its modifier function if you want the React component to update its UI based on any change made to the state variable. Note, useState() returns an array which we must destructure using **array destructuring** to gain access to each of the items in the array.

### Practical example:

	import { useState } from 'react'
	
	const Counter = () => {
	  const [count, setCount] = useState(0)
	  
	  return (
	    <div>
	      <p>You clicked {count} times</p>
	      <button onClick={() => setCount(count + 1)}>Click me</button>
	    </div>
	  )
	}

	ReactDOM.render(<Counter />, document.getElementById('app'))

### And here is an example of a slightly more advance RPN calculator than my first iteration:

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
        <button onClick={() => GetNumber( (Number(number) !== 0) ? number+"0" : "0" )}>0</button>
        <button onClick={() => GetNumber( testToAppend(number) ? number+"1" : "1" )}>1</button>
        <button onClick={() => GetNumber( testToAppend(number) ? number+"2" : "2" )}>2</button>
        <button onClick={() => GetNumber(pushedNumber + number)}>+</button>
        <p></p>
        <button onClick={() => GetNumber( testToAppend(number) ? number+"3" : "3" )}>3</button>
        <button onClick={() => GetNumber( testToAppend(number) ? number+"4" : "4" )}>4</button>
        <button onClick={() => GetNumber( testToAppend(number) ? number+"5" : "5" )}>5</button>
        <button onClick={() => GetNumber(pushedNumber - number)}>-</button>
        <p></p>
        <button onClick={() => GetNumber( testToAppend(number) ? number+"6" : "6" )}>6</button>
        <button onClick={() => GetNumber( testToAppend(number) ? number+"7" : "7" )}>7</button>
        <button onClick={() => GetNumber( testToAppend(number) ? number+"8" : "8" )}>8</button>
        <button onClick={() => GetNumber(pushedNumber * number)}>x</button>
        <p></p>
        <button onClick={() => GetNumber( testToAppend(number) ? number+"9" : "9" )}>9</button>
        <button onClick={() => { 
              GetNumber( (decimalKey === 1) ? number : number + ".")
              PressedDecimalKey(1)
            }
        }>.</button>
        <button onClick={() => { 
              GetNumber(0)
              PressedDecimalKey(0)
              }
        }>C</button>
        <button onClick={() => GetNumber(pushedNumber / number)}>/</button>
        <p></p>
        <button onClick={() => { 
              Push(number)
              GetNumber(0)
              PressedDecimalKey(0)
              }
        }>Enter</button>
        <p></p>
        <button onClick={() => GetNumber(pushedNumber * pushedNumber)}>squared</button>
        <button onClick={() => GetNumber(Math.sqrt (pushedNumber) )}>root</button>
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

## Component Props in React

**Props**, which stands for properties are like *function arguements*, or initial values can be passed as *attributes* to the component in JSX. Props are **read only**. Components either contain data through state, or reveive data through props.

A word about curly brackets meaning:
* in a function arguement, they are used as part of the object destructuring syntax:
	function WelcomeMessage({ myprop }) {
		return <p>{myprop}</p>
	}
* they define a function or other code block
* in JSX to print a JavaScript value: 
	<WelcomeMessage myprop={'somevalue'} />

Here is another way to do this:

	function Welcome(props) {
  	  return <h1>Hello, {props.name}</h1>;
	}

This component could also be defined thus:
	class Welcome extends React.Component {
  	  render() {
     	return <h1>Hello, {this.props.name}</h1>;
  	  }
	}	

Then this bit is in the App.js (as much as you need, as in a create-react-app, the render portion is actually in index.js):

	const root = ReactDOM.createRoot(document.getElementById('root'));
	const element = <Welcome name="Dawson" />;
	root.render(element);

Props can be functions; this enables a *child* component to call functions from the *parent* component.

## Data flow in a React application
## Handling user events in React
## Lifecycle events in a React component
## Where to go from here

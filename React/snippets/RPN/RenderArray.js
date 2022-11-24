import './App.css';

function RenderingArrayOfObjects() {
    const buttons = [
        {
            "Name": "0",
            "Function" : "GetNumber(0)",
            "Style": "Button-number"           
        },
        {
            "Name": "1",
            "Function" : "GetNumber(1)",
            "Style": "Button-number"
        },
        {
			"Name": "2",
            "Function" : "GetNumber(2)",
            "Style": "Button-number"  
        },
        {
            "Name": "-",
            "Function" : "Subtract(3)",
            "Style": "Button-function"
        }
    ]
    const listItems = buttons.map(
        (element) => {
            return (
                <ul>
                    <li style={{ 
                        fontWeight: 'bold', 
                        color: 'red' }}
                    >
                        {element.Name}
                    </li>
                    <li>{element.Function}</li>
                    <li>{element.Style}</li>
                </ul>
            )
        }
    )
    return (
        <div>
            {listItems}
        </div>
    )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>A simple array example with map function</h1>
      </header>
      <RenderingArrayOfObjects />
    </div>
  );
}

export default App;

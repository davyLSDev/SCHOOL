#!/usr/bin/env node

// Classes
class Person {
    firstName
    lastName
    hello() {
            return `Hello, I am ${this.firstName} ${this.lastName}`
    }
}

// Now, you can instantiate (create) an object patterned off of the Person class like so:

const dawson = new Person()
dawson.firstName = 'Dawson'
dawson.lastName = 'Tennant'

console.log(dawson.hello())

const john = {
    firstName: 'John',
    lastName: 'Thompson',
    hello() {
        return `Hello, I am ${this.firstName} ${this.lastName}`
    }
}

console.log(john.hello())

class Camera {
    constructor(frameSize, model) {
            this.frameSize = frameSize
            this.model = model
    }

    cameraModel() {
            return console.log(`This camera is a ${this.model}.`)
    }

    cameraSize() {
            return console.log(`This camera takes ${this.frameSize} size pictures.`)
    }
}

const minolta = new Camera('35mm','Himatic 7')

minolta.cameraModel()
minolta.cameraSize()

    class House {
        static numberOfHouses = 0
        constructor(size, style, address) {
        House.numberOfHouses += 1
        this.size = size
        this.style = style
        this.address = address
        }
        houseData() {
            console.log(`This house is located at ${this.address}
            and is ${this.size} square feet, and is made in the ${this.style}`)
        }
    }

    console.log(`There are ${House.numberOfHouses} registered houses in this database to date.`)
    const beverly = new House('1300', 'two storey', '3811-114 Ave in Edmonton')
    console.log(`Now, there are ${House.numberOfHouses} registered houses in this database to date.`)
    const huntingtonHills = new House('1100', 'bungalow', '8015 Huntington Rd, Calgary')
    console.log(`Now, there are ${House.numberOfHouses} registered houses in this database to date.`)

// Inheritance

class Human {
    hello() {
            return 'Hi, I am a Human.'
    }
}

class Programmer extends Human {
    hello() {
            return super.hello() +
            ' I am also a Programmer.'
    }

}

const brian = new Human()
const dawsont = new Programmer()
console.log(brian.hello()) // Hi, I am a Human.
console.log(dawsont.hello()) // Hi, I am a Human. I am also a Programmer.

// Asynchronous Programming and Timeouts

console.log('Before the line of code with setTimeout()')
setTimeout(() => {
        // runs after 2 seconds
    console.log('inside the setTimeout() function')
}, 2000)
console.log('After the line of code with setTimeout()')

// Callback - use a callback, Flavio Copes example didn't work, so here is another one from https://www.programiz.com/javascript/callback

// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Dawson', callMe);

/* another example of callback functions (function that calls another funtion)
This example comes from: https://www.javascriptfunction.com/articles/callback-function-javascript
*/

function addTwoNumberFunctions(functionOne, functionTwo) {
    var functionAdditionResult = functionOne() + functionTwo();
    return functionAdditionResult;
}

function functionOneHundred() { return 100; }

function functionTwoHundred() { return 200; }

console.log(`${addTwoNumberFunctions(functionOneHundred, functionTwoHundred)}`);

// Try Flavio's code again without my additions:

const doSomething = callback => {
    //do things
    console.log('do some things')
    //do things
    console.log('do some more things')
    const result = 'some result?'/* .. */
    callback(result)
}

doSomething(result => {
    console.log(result)
})

// Promises
// I can't get the doIt function to work
// My code added above it

// const doIt = new Promise(() => {

// })
// doIt()
//     .then(result2 => {
//         console.log(result2)
//     })    

const doSomethingElse = new Promise(
    (resolve, reject) => {
        //some code
        const success = 'some value needed here' /* ... */
        if (success) {
            resolve('ok')
            console.log('Promise, ok')
        } else {
            reject('this error occurred')
            console.log('Promise, rejected')
        }
    }
)
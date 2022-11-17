# My notes from Flavio's book
##  to master the 80% of JavaScript that is most useful

Make some notes along the way, and put code snippets in the directory to help as a reference.

## Introduction

JavaScript is high-level, dynamic, dynamically typed, loosely typed, interpreted and multi-paradigm. It is useful to create websites, web applications and server-side applications using Node.js. It can also be used to create mobile applications, smartwatch applications, and create programs for microcontrollers and the IOT (internet of things). 

Note, "console.log()" is not JavaScript, it is part of a library of APIs included in the browser.

## Syntax

* Comments are made using either // in front of the line, or /* */ for multiline comments.
* One practice is to avoid semicolons unless strictly necessary.
* [how to know when a semicolon is strictly necessary](https://javascript.plainenglish.io/javascript-how-line-breaks-and-missing-semicolons-can-break-your-code-58e031e7f235)
    * If your statement begins with [, (, +, -, / , ` , make sure that there is a semicolon on the statement before to avoid errors.
    * While using return, continue, break , etc., make sure that the identifier after the keyword is on the same line.

## Values
 * Values are stored in variables   

## Variables

* *const* cannot be changed. You cannot reassign a new value to it.
* *let* lets you assign a new value to it.
* Advise to prefer *const* unless you know the variable needs to change.
* *var*, don't need to use (archaic?)

## Types

* *primitives*, such as numbers, strings, booleans and symbols
* *objects*, which have *properties* and *methods* to act on the *properties*

## Expressions

* A single unit of JavaScript code, which can be:
  * simple: primary, arithmetic, string, logical
  * more complex: objects, functions, arrays, 

## Operators

* the glue to allow combining of two or more expressions

## Precedence

* from left to right
* some operator precedences:
  * \* / %
  * \+ -
  * =

## Comparisons

* < less than, > greater than, <= less than or equal, >= greater than or equal
* equality ... be careful:
  * use these ===, !==
  * avoid these == !=

## Conditionals

    if (true) {
        doSomething()
    }

    if (false) {
        doSomething()
    }

    if (true) doSomething()

* Using blocks can help with code readability.

## Strings

* A sequence of characters which can be a literal, or assigned to a variable.
* Use
  * *single quotes* for variable assignment
  * *double quotes* reserve for defining *html attributes*
  * use anyVariableName.length() to get the length of anyVariableName
  * join strings using \+
  * multiline strings (or even a single line string) can be defined using backticks \`
  * templated variables using the ${. . . } syntax:

    const var = 'testy'
    const string = `something ${var}`

* ${. . .} syntax allows expressions to be inside the curly brackets also

## Arrays

* They are objects
* Three ways to initialize an empty array:

        const a = []
        const a = Array()
        const a = Array(12).fill(0)

* Two ways to initialize an array with values:

        const a = [1, 'b', 'c']  // note arrays can contain different types
        const a = Array.(1, 'b', 'c')

* Arrays can be multidimensional since arrays can contain arrays or any other object or type:

        const matrix = [
            [1, 'b', 'c'],
            [2, 'd', 'e'],
            [3, 'f', 'g']
        ]

* Read a value from the above array

        matrix[0][0] // 1
        matrix[2][1] // f

* .length() yields the number of elements in the array
* Note: if you assign less elements that you define the array to be, the array will cut off at that point. However, you do not get more elements if you define more than the size of the array!
* some other functions to apply to arrays:

        a.push(1) // add an element, such as *1*, at the end of the  a array

        a.unshift(2) // add an element, such as *2*, at the beginning of the a array

        a.pop() // remove an element at the end of the a array

        a.shift() // remove an element at the beginning of the a array

        a.concat(b) // concatonate array b to array a

* spread array example (...):

        const a = [1, 2]
        const b = [3, 4]
        const c = [...a, ...b]
        // the value of c is [1,2,3,4]

* some other array functions for array a:
  * a.find(element, index, array)
  * a.findIndex()
  * a.includes(value, [index])

## Loops

* while

        const list = ['a', 'b', 'c']
        let i = 0
        while (i < list.length) {
            console.log(list[i]) //value
            console.log(i) //index
            i = i + 1
        }

* for

        const list = ['a', 'b', 'c']
        for (let i = 0; i < list.length; i++) {
            console.log(list[i]) //value
            console.log(i) //index
        }

* for..of

        const list = ['a', 'b', 'c']
        for (const value of list) {
            console.log(value) //value
        }

* Can interrupt a loop with:

        while (true) {
            if (somethingIsTrue) break
        }

* You can also skip the current itteration with:

        while (true) {
            if (somethingIsTrue) continue
            //do something else
        }

## Functions

* *typeof* is a unary operator which returns the type of object, variable, string, number, function ... that follows it

* example of a function

        function multiplyTwoNumbers( a, b) {
            return a*b
        }

* every parameter you don't pass to the function when calling it in the code will be *undefined*
* you can have a default value for any parameter, example:

        const getData = (color = 'black',
            age = 2) => {
        //do something
        }


* if there is no return statement, the function will return "undefined"
* a function can only return one value, but you can return an object or an array
* functions can be nested inside other functions, however the neste functions cannot be called from outside the function


## Arrow Functions

* have no names, they are annonymous. Consider the function:

        function multiplyTwoNumbers(a, b) {
            return a*b
        }

* Rewrite this as an arrow function:

        (a, b) => {
            return a*b
        }

* You can assign a variable to functions:

        let getData =  function getData() {
            // ... do stuff
        }

* You don't need the function name:

        let getData = function () {
            // ... do stuff
        }

* Rewritten as an arrow function:
    
        const getData = () => {
            // ... do stuff
        }


* You can omit the brackets if your function has only one parameter:

        const getData = param => console.log(param)

## Objects

3 Ways of setting up an object

        const car1 = {

        }

* Object literal, which Flavio loves

        const car2 = new Object()


        const car3 = Object.create()

* can initialize an object with new

        function Car(brand, model) {
                this.brand = brand
        this.model = model
        }

* Then to initialize a new object do this so that
myCar.brand // 'Ford'
myCar.model // 'Fusion' */

        const myCar = new Car('Ford', 'Fusion')

* objects are always **passed by reference**, while variables are passed by value.
* Note that arrays or functions are **objects** underlyingly

## Object properties

Here is an object *car* with a **property** of colour, which has a *value* of blue.

        const car = {
                colour: 'blue',
                'the model': 'Ford'
        }

* Invalid variable names for "properties" are spaces, hyphens, and other special characters. If you want to use any of these in a variable name, you  must enclose the name in quotes.

* Separate each property with a comma at the end of the line
* There are two ways to get the value of the property:
  
        car.colour // 'blue', this is the **dot notation**

        car['the model'] // ''Ford'

This is the **only** way to get the property value when using properties with invalid names.

Trying to access a property that doesn't exist, results in getting the **undefined** value.

Objects can be nested.

        const car = {
                brand: {
                        name: 'Ford'
                },
                color: 'blue'
        }

You access the brand name from this example in these two ways:

        car.brand.name

        car['brand']['name']

You can set property values, and you can add new properties to an object, you can also *delete* a property from the object, by using

        delete car.brand

## Object methods

**Methods** are functions that are defined within an object. Inside the the method defined using function() {} you can access the object by referring to *this*. If, however, you define using an arrow function, you have no access to *this*. (Reason: arrow functions are not bound to the object.). Note, be very careful to note that you must use **`** the backtick in the string substitution in console.log functions otherwise the strings will not be substituted with the proper values, they will instead contain *Going to ${destination}* for example, rather than *going to Banff*. Note also, methods can have parameters, like the function *goTo* as noted in this example:

        const motorcycle = {
                brand: 'Honda',
                model: 'Silverwing',
                start: function() {
                        console.log(`Started
                        ${this.brand} ${this.model}`)
                }
                goTo: function(destination) {
                        console.log(`Going to ${destination}`)
                }
        }

        motorcycle.start()
        motorcycle.goTo('Banff')

## Classes

As in other programming languages, *classes* offer a way to generalize a pattern for creating more than one object. By convention, capitalize the first letter of the name of a class.

        const dawson = {
                firstName: 'Dawson'
                lastName: 'Tennant'
        }

As a class, it would look like, which has the property, name:

        class Person {
                firstName,
                lastName,
                hello() {
                        return `Hello, I am ${this.firstName} $(this.lastName)`
                }
        }

Now, you can instantiate (create) an object patterned off of the Person class like so:

        const dawson = new Person()
        dawson.firstName = 'Dawson'
        dawson.lastName = 'Tennant'

Here is using the special method called *constructor()* which is only used for initializing class properties upon instantiating an object from a given class.

        class Camera {
                constructor (frameSize, model) {
                        this.frameSize = frameSize
                        this.model = model
                }
                cameraModel() {
                        return console.log(`This camera is a ${this.model}.`)
                }
                cameraSize() {
                        return console.log(`This camera takes ${this.frameSize} size pictures.`)
                static count() {
                        cameraCount += cameraCount        
                }
        }

        const minolta = new Camera('35mm','Himatic 7')

You can have a static member of a class, and static methods which are for the class itself not for the objects instantiated by the class.

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

        console.log(`There are ${House.numberOfHouses} registered houses in this database to date.`) // 0 houses
        const beverly = new House('1300', 'two storey', '3811-114 Ave in Edmonton')
        console.log(`Now, there are ${House.numberOfHouses} registered houses in this database to date.`) // 1 houses
        const huntingtonHills = new House('1100', 'bungalow', '8015 Huntington Rd, Calgary')
        console.log(`Now, there are ${House.numberOfHouses} registered houses in this database to date.`) // 2 houses

## Inheritance

A class can **extend** another class. The *child* class can access a function or property from the *parent* classs, use **super**.

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
        const dawson = new Programmer()
        brian.hello() // Hi, I am a Human.
        dawson.hello() // Hi, I am a Human. I am also a Programmer.

## Asynchronous Programming and Callbacks

JavaScript allows the programmer to run code while waiting for other code to complete as opposed to running code line by line and sometimes having the code blocked because, for instance there is a large file to load.

The tool to accomplish this is called **callbacks**. A simple way to set up a callback is to use one of the types of timers, which actually is provided by the browser not by JavaScript:

        console.log('Before the line of code with setTimeout()')
        setTimeout(() => {
                // runs after 2 seconds
                console.log('inside the setTimeout() function')
        }, 2000)
        console.log('After the line of code with setTimeout()')

This code yields the following output:

Before the line of code with setTimeout()
After the line of code with setTimeout()
inside the setTimeout() function

We can use a **callback** from Flavio Copes (does not seem to work!):

        const doSomething = callback => {
                //do things
                console.log('do thing one')
                //do things
                console.log('do thing two')
                console.log('do thing n')
                const result = /* .. */
                callback(result)
        }

        doSomething(result => {
                console.log(result)
        })

Callback - a callback is a piece of executable code that is passed as an argument to other code, which is expected to call back (execute) the argument at some convenient time.

The invocation may be immediate as in a synchronous callback or it might happen at later time, as in an asynchronous callback.
The following example uses callbacks, Flavio Copes example didn't work, so here is another one from https://www.programiz.com/javascript/callback

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

This yeilds the following output:

Hi Dawson
I am callback function
inside the setTimeout() function

Try Flavio's code again, note the problem was on the line with 'const result =". For it to work there needed to be something that it was '='!

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

Which, by itself, would yield:

do some things
do some more things
some result?

## Promises

**Promises** are another way to deal with assynchronous code without having to rely on nesting code. This should make it easier to maintain code. Codeback "hell" is when there are 2-3 levels of nested callbacks.

## Async and Await
**Async** and **await** are a tidier and more expressive way to accomplish **promise** or **callback** functionality, especially with more complex code. An **async** function is more abstract than a **promise**; in fact, an async fucntion returns a promise. **Await** is a reserved word in JavaScript which is only allowed inside an **async** function or at the top level of a **module**. **Await** is used to wait for a **promise** and get its fulfillment value. **C#** has a similar concept.

        const getData = () => {
                return new Promise((resolve, reject) => {
                        setTimeout(() =>
                                resolve('some data'), 2000)
                })
        }

        const doSomeTask = async () => {
                const data = await getData()
                console.log(data)
        }

## Variables scope

There are three scopes at which a variable is valid in JavaScript:

* **Global** - any variable defined outside a function or a block is by default global.
* **Block** - a variable defined using *const*, or *let* is only visible inside the block - think inside curly braces - where it is defined. You will find these in *if*, *for*, or *function* statements.
* **Function** - a variable defined inside a function is only valid within that function.

Here is where *var* lets you down. If a variable is defined by *var* in an *if* block, after the block is completed the variable is still valid.
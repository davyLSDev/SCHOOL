#!/usr/bin/env node
console.log('---------------------- snippet from FC -----------------')
console.log('Start the program')

const getData = () => {
    return new Promise((resolve, reject) => {
            setTimeout(() =>
                    resolve('some data from FC code above'), 2000)
    })
}

const doSomeTask = async () => {
    const data = await getData()
    console.log(data)
}

doSomeTask() // This was the missing statement
console.log('End the program')

/* Here is one that actually works, from 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
*/
console.log('')
console.log('---------------------- snippet from MDN -----------------')
console.log('However, the next function actually demonstrates something!')

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();
console.log('This statement sequentially comes after the asyncCall in the code!')
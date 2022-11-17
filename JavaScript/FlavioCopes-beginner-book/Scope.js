#!/usr/bin/env node

// Functional scope
function fun()
{
    let temp1 = '-40'
	var temp2 ="temp is defined in function scope";
    console.log('Inside the function')
    console.log(temp1); 
	console.log(temp2); 
}

fun();
console.log('outside the function')
console.log('Error: temp1 which was defined by "let" in the function, is not defined now');
console.log('Error: temp2, which was defined by "var" in the function, is not defined now');

// Block scope
if(true)
{
  var v1 =10;
  let v2=20;
  console.log(v1);
  console.log(v2); 
}

console.log(v1);
console.log('Error: the variable, v2, defined by "let" is not defined now');
#!/usr/bin/env node

let x = '0001.'
let y =  '0'

function allChars(input) {
	for (a in input) {
		console.log(input[a])
	}
}

function lastCharNumber(letters) {
	return letters.length-1
}

function lastChar(characters) {
	return characters[characters.length-1]
}

function replaceZero(calcInput) {
	return ((Number(calcInput) === 0 && lastChar(calcInput) !== '.') ? 'replace 0' : 'just append the number')
}


console.log('The 4th letter in the string ' + x + ' is ' + x[3])
allChars('abcdefg12345')

console.log('The last letter position is ' + lastCharNumber(x)) 
console.log('And the last character in ' + x + ' is ' + lastChar(x))
console.log('And the last character in ' + y + ' is ' + lastChar(y))

console.log('For the number ' + x  + ' ' + replaceZero(x))
console.log('For the number ' + y  + ' ' + replaceZero(y))


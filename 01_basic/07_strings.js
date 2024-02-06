const name = "hammad"
const repoCount = 50

console.log(name + repoCount + "value") // old syntax for contatinating strings.

// in modern day we use "string interpolation".

console.log(`Hello my name is ${name}. My repo count is ${repoCount}`)

//how to declare astring?
const myName = new String ("hammad")

console.log(myName[0])
console.log(myName.__proto__)

console.log(myName.at(5))
console.log(myName.at(-4))

console.log(myName.charAt(5))
console.log(myName.charAt(-4))
//charAt gives the empty string when index is given in negative.

console.log(myName.charCodeAt(3))
//The charCodeAt() method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
console.log(myName.charCodeAt(-4)) // NaN

console.log(myName.toUpperCase()) 
console.log(myName.indexOf('a')) 
console.log(myName.lastIndexOf('a')) 


const sentence = "The quick brown fox jump over the lazy dog."
console.log(sentence.match('o'))
console.log(sentence.length)
const newString = sentence.substring(0, 4)
console.log(newString)

const anotherString1 = sentence.slice(0, 4)
console.log(anotherString1)

const anotherString2 = sentence.slice(-40, 8)
console.log(anotherString2)
// slice accepts the negative values but substring dont.

console.log(sentence.split(' ')) // split a string into an array on the basis of spaces.


const nameString = "  Hammad Tariq   "

console.log(nameString.trim()) // works on white spaces and line terminators.

const



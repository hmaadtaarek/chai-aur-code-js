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
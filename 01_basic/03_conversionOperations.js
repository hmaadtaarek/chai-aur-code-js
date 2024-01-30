//--------Number conversion--------

//let score = "33"

//let score = "33abs"

let score = null
/*
"33" => 33
"33abs" => NaN(not a number)
null

*/

//------boolean conversion-----------

console.log(typeof score)
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

let isLoggedIn1 = ""
let isLoggedIn2 = "hammad"

let booleanLoggedIn1 = Boolean(isLoggedIn1)
let booleanLoggedIn2 = Boolean(isLoggedIn2)

console.log(booleanLoggedIn1)
console.log(booleanLoggedIn2)

//1 => true
//0 => false
//""(empty string) => false
const score = new Number(123.5)

console.log(score.toString())
console.log(score.toFixed(2)) // number of demimels after the digit
console.log(score.toPrecision(3)) // precise (roundoff) the value to the given digit.

const number = 1123.78876
console.log(number.toPrecision(3)) // precise (roundoff) the value to the given digit.

console.log(score.toString().length)

const balance = 200003400

console.log(balance.toLocaleString())
console.log(balance.toLocaleString('en-PK'))
console.log(balance.toLocaleString('en-IN'))
console.log(balance.toExponential())
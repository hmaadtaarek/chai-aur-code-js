// for clean code comaprarison can be done with the same datatype.
// can be done with the different datatypes but can give unpredictable results.


console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

//the reason in the contradiction is that both comparison and equality check work differently.
//comaprison converts null to a number equals to 0.
// therefore (null > 0) = false ; (null => 0 ) = true.


console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined >= 0)

//---------------" Triple equal ==="----------------
//strict check 
// triple equals also check the data type and values.

console.log(2 === 2)
console.log(1 === 2)
console.log("2" === 2)

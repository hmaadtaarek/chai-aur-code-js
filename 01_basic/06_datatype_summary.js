// category made on the basis of datatypes placed in the memory.
//---------(primitive data types)----------------
// copy of these are given in memory(stack).
// 
// 7 types
/**
 * string
 * number
 * null ( return datatype on "typeof" = object)
 * bigint
 * undefined
 * boolean
 * symbol
 */

const id = Symbol('342')
const anotherId = Symbol('342')

console.log(id)
console.log(anotherId)

console.log( id === anotherId)

const bigNumber = 35342342425243534n
console.log(typeof bigNumber)


//Javascript is dynamicaaly typed language.
//like c++, typescript is statically typed as use to define the datatype on decleratioin.


//---------- non primitive(reference)------------
// reference of these in given from memory 
// there reference is placed on the heap not on the stack.

/**
 * array[]
 * objects{key-pair}
 * functions
 */

// these are return the data type of "object", function returs the "object function"







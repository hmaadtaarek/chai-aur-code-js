/////----------------------------- Array part 1 ------------------------------------------

//when copy operation is performed array form shallow copies.
//A shallow copy of an object is a copy whose properties share the same reference point.

//Deep copy doesnot show the same reference point.

const arr = [1,2,3,4,5]
console.log(arr)
console.log(arr[2])

const newarr = new Array(1,2,3,4,5,6,7,8,90) // can be declared withoud "new" keyword.
console.log(newarr)
arr.push(6) // add to the end of array.
console.log(arr)

arr.pop()
console.log(arr)

arr.unshift(7) // add to the start of array
console.log(arr)

arr.shift() // remove from start of array.
console.log(arr)

console.log(arr.includes(9))
console.log(arr.includes(4))
console.log(arr.indexOf(9))
console.log(arr.indexOf(3))



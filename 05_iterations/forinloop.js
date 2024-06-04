// for in loop:

// on objects:

// const myObject = {
//     js : "javascript",
//     ruby : "ruby on rails",
//     py : "python",
//     cpp : "C++",
// }

// for (const key in myObject) {
//     // console.log(key)
//     // console.log(myObject[key])
//     console.log(`${key}: shortcut for "${myObject[key]}."`)
// }


// const arr = [ 1, 2 ,3 , 4,5]

// for (const key in arr) {
//     // console.log(arr[key])
//     // console.log(key)

// }

// map 

const myMap = new Map()
myMap.set("PK" , "Pakistan")
myMap.set("UK" , "United Kingdom")
myMap.set("IN" , "india")

// for (const key in myMap) {
//     console.log(key)
// }
for (const [key, value] in myMap) {
    console.log(`4{key} : ${value}`)
}



// conculsion: 
// map : forof loop
// objects :  forin loop
// for of:


// const number = [1,2,3,4,5,6,7]

// for (const num of number) {
//     console.log(num)
// }

// const greeting = "Hello World."
// for (const greet of greeting) {
//     if (greet == " ") {
//         console.log("space skipped")
//         continue
        
//     }
//     console.log(`each letter is ${greet}`)
    
// }

// maps:
 // something like objects in js , holds key value pair.

const map = new Map()

map.set('In', 'India')
map.set('In', 'India')
map.set('PK', 'Pakistan')
map.set('FR', 'France')
// doesnot hold duplicate entries. also maintain the order or entries.

// console.log(map)

// forof on map.

// for (const key of map) {
//     console.log(key)   
// }

for (const [key, value] of map) {
    // console.log( key ,":", value)
}

// testing the forof on objects.

const myObj = {
    name1: "hammad",
    name2: "pegasus"
}

// for (const [key, value] of myObj) {
//     // console.log( key ,":", value)
//     // it is not iterateable.
// }

for (const key of myObj) {
    console.log(key)   

    // not iterateable
}
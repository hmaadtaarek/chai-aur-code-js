// For loops

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element)
    
// }


// for (let a = 0; a <=15; a+=2){
//     const value = a
//     console.log(value)
// }



// for (let i = 0; i <= 10; i++){
//     const value = i
//     if( value == 5){
//         console.log("prints 5")
//     }
//     console.log(value)
// }


// for (let i = 0; i <= 5; i++) {
//     const element = i;
//     console.log(`outer loop iternation: ${i}`)
//     for (let j = 0; j <=5; j++) {
//         const element = j;
//         console.log(`Inner loop iteration ${j} and outer loop ${i}`)
        
//     }
    
// }

// const myArray = [' hello', 'hammad', 'kukure']

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element)
    
// }


// for (let index = 1; index <=20; index++) {
//     if (index ==5) {
//         console.log("5 detected")
//         break // it will break the loop.
//     }
//     console.log(`value of index is ${index}`)
    
// }

for (let index = 1; index <=20; index++) {
    if (index ==5) {
        console.log("5 detected")
        continue // it will just jump that index and then continue.
    }
    console.log(`value of index is ${index}`)
    
}

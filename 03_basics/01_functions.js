// rest operator , objects and arrays with function.


function calculateCartPrice(num1,...all){ // this is called spread operator
    return all // return an array
}

console.log(calculateCartPrice(200,500,400,556))


// objects in function.

const newObject = {
    username : "Hammad",
    price : 450
}

function checkObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

checkObject(newObject)
checkObject({
    username: "Pegasus",
    price : "infinity"
})


// arrays in functions.
const newarray = [100,355,288,400]

function checkArray(anyarray){
    return `first value of array is ${anyarray[0]}.`
}

console.log(checkArray(newarray))
console.log(checkArray([200,400,340]))
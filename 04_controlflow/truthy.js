// truthy and falsy values.

const userEmail = "Ham@gmail.com"

if (userEmail) {
    console.log("user email")
}

const user = ""

if (user) {
    console.log("user availnle")
}

// falsy values:

// false , 0, -0, "", BigINt 0n, null, undefined, NAN

// truthy values:
// all values except falsy somme cinfusing values.

// "0",'false', [], {}, function(){}, "space "


// how to check the empty Array.

const emptyArray = []

if (emptyArray.length === 0){
    console.log("array is empty")
}



// How to check the emppty object.

const emptyObject = {}
if (Object.keys(emptyObject).length === 0) //will convert the object to array then check its length 
 {

    console.log("object is empty.")
    
}



// false == 0 , true
// 


// Nullish Coalisence Operator. (??) : null , undefined.

// its a type of safety check for null and undefined.

let val1 = 5 ?? 10
let val2 = null ?? 7 ?? 20
let val3 = null ?? 10
let val4 = undefined ?? 15


console.log(val1)
console.log(val2)
console.log(val3)
console.log(val4)



// terniary operator (?):

// syntax ::: condition statement ? true statement : flase statement.

// exmaple:

const teaPrice = 100

teaPrice <= 80 ? console.log("price is less than 80") : console.log(" prie is above 80.")

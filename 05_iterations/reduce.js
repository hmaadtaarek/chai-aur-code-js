const arr = [1,2,3,4,5]
// an example is the total in cart.

// const total = arr.reduce(function(accumulator , currentvalue){
//     console.log(`accumulator : ${accumulator} and currentvalue: ${currentvalue}`)
//     return accumulator + currentvalue
// }, 3)

// console.log(total)

// 0 at the end is the initial value from where to start.


const total = arr.reduce ((acc, curval) => ( acc + curval), 3)

console.log(total)



const shoopingCart = [
    {
        course : "js course",
        price: 2999
    },
    {
        course : "py course",
        price: 999
    },
    {
        course : "react course",
        price: 3999
    },
    {
        course : "ai course",
        price: 12999
    }
]


const tcost = shoopingCart.reduce((acc, item) => (acc + item.price), 0)
console.log(tcost)
// foreachloop :

const arr = [ 'js', 'python','ruby', 'cpp']

// for each is the builtin property of array.
// and it requires a call back function.
// callback function has no name.
// 

// arr.forEach( function (i){
//     console.log(i)
// })

// arr.forEach((item)=>{
//     console.log(item)
// })


// function printMe (item){
//     console.log(item)
// }

// arr.forEach(printMe)


// it have mor parameters also other than the items , it includes index, and array list also.

// arr.forEach((it, ind , arr)=>{
//     console.log(it, ind , arr)
// })



const Coding = [
    {
        lgname : "javascript",
        lgsc : "js"

    },
    {
        lgname : "java",
        lgsc : "java"

    },
    {
        lgname : "python",
        lgsc : "py"

    }
]

Coding.forEach((item)=>{
    console.log(item)
    console.log(item.lgname)
})

const numbers = [1,2,3,4,5,6,7,8,9,10]

// let newNum = numbers.map((num)=> num +10)

// console.log(newNum)

// chaining :

let numb = numbers
                .map((num) => num * 5)
                .map((num) => num + 2)
                .filter( (num) => num >= 20)

console.log(numb)


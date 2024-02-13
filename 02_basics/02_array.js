
//------------------ Merging Arrays---------------

const marvelHeroes = ['Thor','Siderman','Captain America']
const dcHeros = ['Superman', 'Flash','Batman']
const newHeros = ['Ironman', 'Thynos']

// console.log(marvelHeroes.push(dcHeros)) //gives length of the array
// console.log(marvelHeroes) // merges the array as it is in the array in the originnal array.
// console.log(marvelHeroes[3][1])

// const concatHeros = marvelHeroes.concat(dcHeros)
// console.log(concatHeros) // merges the array elemnts in the array ruturning the new array.

// SPREAD METHOD...

// kanch ke glass ko drop krde to wo dpread ho jai ga.

const allHeroes = [...marvelHeroes, ...dcHeros,...newHeros]
// console.log(allHeroes)

const anotherArray = [1,2,3,[4,5,6],7,[4,5,[6,7]]]

const realArray = anotherArray.flat(Infinity)
// give the depth of array to bhe flated in number e.g 1 ,2 ,3 etc , Infinity can be given for infinite number of arrays. 

//"BUT IT IS NOT A GOOD PRACTICE"
console.log(realArray)

// How to check if the datatype is array?

console.log(Array.isArray("Hammad"))
console.log(Array.isArray([1,2,3]))

// convert to Array:
// can be coverted ny 2 methods ".from " or ".of"

console.log(Array.from("Hammad")) // can convert string , number object anything to array.
console.log(typeof Array.from("Hammad")) 

console.log(Array.of("Hammad")) 
console.log(typeof(Array.of("Hammad"))) 

console.log(Array.from({name : "hammad"}))  // INTERESTING CASE
// return an empty array , we need to specifie that either convert keys into array or value into array.


const score1 = 100
const score2 = 200
const score3 = 300
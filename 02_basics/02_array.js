
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
console.log(allHeroes)
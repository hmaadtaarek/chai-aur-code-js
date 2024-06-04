// const coding = ['js', 'python', 'ruby','cpp']

// const value = coding.forEach((item) => {
//     // console.log(item)
//     return item
// })

// console.log(value)

// // foreach doesnot return anything.




//filter:

// const number = [1,2,3,4,5,6,7,8,9]

// console.log(number.filter((item) => item >5))
// console.log(number.filter((item) => {item >5}))  // empty array return due to explicit return.
// console.log(number.filter((item) => {
//     return item>3
// }))


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userbooks = books.filter( (book) => {
   const result = book.genre === "History"
    return result
})


userbooks = books.filter((bk)=>{
     const result = bk.genre === "Non-Fiction" && bk.publish >=1990
     return result
})

console.log(userbooks)

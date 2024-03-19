// objects are declared by 2 methods.
// 1. By constructer method (singleton is formed.)
// Object.create


const mysyb = Symbol("key1")
//2. by object literals.

const JSuser = {
    name : "Hammad",
    age : 19,
    [mysyb] : "mykey",
    email: "hammad@gmail.com",
    location: "lahore",
    isLogggedIn: false,
    loginDays: ['monday','tuesday','saturday']
}

console.log(JSuser.email)
console.log(JSuser["email"])
console.log(JSuser["loginDays"])
console.log(JSuser[mysyb])
console.log(typeof JSuser[mysyb])
console.log(JSuser.mysyb)
console.log(typeof JSuser.mysyb)
console.log(JSuser)


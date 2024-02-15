// objects are diclared by 2 methods.
// 1. By constructer method (singleton is formed.)
// Object.create


//2. by object literals.
const mysyb = Symbol("key1")

const JSuser = {
    name : "Hammad",
    age : 19,
    [mysyb] : "mykey",
    mysyb : "mykey1",
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

JSuser.email = " hammadtariq@mail.comm"
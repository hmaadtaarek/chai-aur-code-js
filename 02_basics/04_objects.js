// objects by sigleton(constructor method.)

const FbUser = new Object()
// console.log(FbUser)
const InstsUser = {}
// console.log(InstsUser)

// declaring an object inside the object and then accessing it.

const regularUser = {
    email : "some@gmail.com",
    fullname:{
        userFullname:{
            firstname:"Hammad",
            lastname:"Tariq"
        }
    }
}

// console.log(regularUser)
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userFullname)
// console.log(regularUser.fullname.userFullname.firstname)

// combining the objects.

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}
const obj3 = {
    4: "e",
    5: "f"
}

// const obj4 = {obj1,obj2,obj3} // does'nt merge them , gives objects as it is.

//1st method:
const obj4 = Object.assign({},obj1, obj2, obj3) // the empty object is not necessary . but industrial practice as it specifies the data type to be expected in the output.
// console.log(obj4)

//2nd method:by using spread method
const obj5 = {...obj1,...obj2,...obj3}


const tinderUser = {
    name: "sammy",
    email: "sammy@gmail.com",
    isloggedIn: false
}

console.log(tinderUser)
console.log(Object.keys(tinderUser)) // return value in the form of array
console.log(Object.values(tinderUser)) // return value in the form of array
console.log(Object.entries(tinderUser)) // return value in the form of arrayin the array
console.log(tinderUser.hasOwnProperty('isloggedIn'))
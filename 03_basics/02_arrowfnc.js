// this and arrow function.

//+++++++++++++++++++++++++++++++++++++++++  THIS  ++++++++++++++++++++++++++++++++++++++++++++
const user = {
    username: "Hammad",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website.`);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()

// console.log(this)  // in node this is empty , because there is no global context .........but .... in browser it will give windows because global context is windows on which all the events occur.


function chai(){
    let username = "hello"
    console.log(this) // give lots of values.
    console.log(this.usernaame) // undefined , this doesnot work in function.
}
// chai()

//++++++++++++++++++++++++++++++++++++++ ARROW FNCTION ++++++++++++++++++++++++++++++++++++


// () => {}

// const addTwo =  (num1 , num2) => {
//     return num1 + num2 // explicit return: when we use return keyword by using "curly braces" 
// } 

// const addTwo =  (num1 , num2) => num1 + num2 // implicit return : with or without "simple brakets"

// const addTwo =  (num1 , num2) => (num1 + num2)
// const addTwo =  (num1 , num2) => {username: "hammad"} // undefined
const addTwo =  (num1 , num2) => ({username: 'Hammad'})
console.log(addTwo(3,4))
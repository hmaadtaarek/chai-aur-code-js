// Immediately Invoked Function Expression(IIFE).

//sometimes there is problem from global sccope , by some variables or any thing. 
// to avoid this problem we use iife.


(function garmi (){
    console.log("Too much garmi")
})();
//()():::: 1st(): for function . 2nd(): for execution ..... this is called iife.


// this will not work , because the first function is nor ende by interpretor, for this we use semi- colon

(() => {
    console.log("garmi with habs")
})();

// for parameters and arguments.

((name) =>{
    console.log(`${name}, bht garmi h yaha`)
})("Hammad")
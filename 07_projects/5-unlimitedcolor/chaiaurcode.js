function randomColor(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()* 16)];   
    }
    return color
}
// console.log(randomColor())

const chnageBgColor = function(){
    document.body.style.backgroundColor = randomColor()
}
let intervalId
const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(chnageBgColor, 1000)
    }
    
    console.log("start cliked")
}
const stopChangingColor = function(){
    clearInterval(intervalId)
    console.log("stop cliked")
    intervalId = null
}

document.querySelector("#start").addEventListener('click',startChangingColor)
document.querySelector("#stop").addEventListener('click',stopChangingColor)
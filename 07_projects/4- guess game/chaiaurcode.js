// random number generete kro.

// input lena h 
// input ko check krna ke equal ya xiada ya kam ha
// guesses ko array ma save krna 
// guess count ko kam krna
// end game and again start.


let random = parseInt(Math.random() * 100 + 1)

let submit = document.querySelector('#subt')
let userInput = document.querySelector('#guessField')
let remaining = document.querySelector('.lastResult')
let guessList = document.querySelector('.guesses')
let lowOrHi = document.querySelector('.lowOrHi')
let startAgain = document.querySelector(".resultParas")


const p = document.createElement("p")

let prevGuess = []
let guessValue = 1

let playGame = true

if (playGame) {
    submit.addEventListener("click", function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
};


function validateGuess(guess){
    if (isNaN(guess)) {
        alert(`Please enter a valid number`)
    }
    else if (guess < 1){
        alert(`Please enter number more than 1`)
    }
    else if (guess > 100){
        alert(`Please enter number less than 100`)
    }
    else{
        prevGuess.push(guess)
        if (guessValue === 11) {
            displayGuess(guess)
            displayMessage(`Game Over! Number was ${random}`)
            endGame()
        }
        else{
            checkGuess(guess)
            displayGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === random){
        displayMessage(` Hurray! You guesses it right!`)
        endGame()
    }
    else if(guess < random){
        displayMessage(` Number is TOO low.`)
    }
    else if(guess > random){
        displayMessage(` Number is TOO high.`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessList.innerHTML +=  `${guess}, `
    guessValue++
    remaining.innerHTML = `${11 - guessValue}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h3>${message}</h3>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startAgain.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGame = document.querySelector("#newGame")
    newGame.addEventListener('click', function(e){
        e.preventDefault()
        random = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        guessValue = 1
        guessList.innerHTML = ''
        remaining.innerHTML = `${11 - guessValue}`
        userInput.removeAttribute('disabled')
        startAgain.removeChild(p)

        playGame = true

    })
}

console.log(userInput)
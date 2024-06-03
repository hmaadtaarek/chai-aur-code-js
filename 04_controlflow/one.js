const userLoggedIn = true
const debitCard = true
const loginFromGoogle = false
const LoginFromEmail = true

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to purchase course.")
}

if (loginFromGoogle || LoginFromEmail){
    console.log("user logged in")
}
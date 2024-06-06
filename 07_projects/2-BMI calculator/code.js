const form = document.querySelector("form")


form.addEventListener("submit",  function(e){
    e.preventDefault()
    // prevent any default action of form.

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#results")


    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please input valid Height!`
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please input valid Weight!`
    }
    else{
        const BMI = (weight / ((height*height)/10000)).toFixed(2)

        if (BMI < 18.6) {
            result.innerHTML = `BMI : ${BMI} Under Weight :( `
        }
        else if (BMI >= 18.6 && BMI <= 24.9) {
            result.innerHTML = `BMI : ${BMI} Normal Weight :) `
        }
        else{
            result.innerHTML = `BMI : ${BMI} Over Weight :( `
        }
    }

})
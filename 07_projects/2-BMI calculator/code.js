const form = document.querySelector("form")

form.addEventListener("submit", function(e){

    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#results")


    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = (` Please input valid height:  ${height}`)
        console.log(` Please input valid height  ${height}`)
        
    }
    if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = (` Please input valid weight:  ${weight}`)
    }
    else{
        const bmi = (weight/ ((height* height) /10000)).toFixed(2)
        if (bmi < 18.6 ) {
            result.innerHTML = `Under weight , BMI :${bmi}`
        }
        else if (bmi >= 18.6 && bmi < 25) {
        result.innerHTML = `Normal weight, BMI: ${bmi}`;
        } 
        else {
        result.innerHTML = `Overweight or obese, BMI: ${bmi}`;
      }
    }
})
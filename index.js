/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input-el")
let myNumbers = []
let btnEl = document.getElementById("btn-el")

let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

btnEl.addEventListener("click", function(){
  myNumbers.push(inputEl.value)
  renderNumberLength()
  renderNumberVolume()
  renderNumberMass()
  inputEl.value = " "
})

function renderNumberLength(){
  let inputVal = Number(inputEl.value)
  let oneMeter = 3.281
  let operationMeter = (inputVal * oneMeter).toFixed(3)
  let operationFeet = (inputVal / oneMeter).toFixed(3)
  lengthEl.textContent= `${inputVal} meters = ${operationMeter} feet | ${inputVal} feet = ${operationFeet} meters`

}

function renderNumberVolume(){
  let inputVal = Number(inputEl.value)
  let oneLiter = 0.264
  let operationLiter = (inputVal * oneLiter).toFixed(3)
  let operationGallon = (inputVal / oneLiter).toFixed(3)
  volumeEl.textContent= `${inputVal} liters = ${operationLiter} gallons | ${inputVal} gallons = ${operationGallon} liters`

}

function renderNumberMass(){
  let inputVal = Number(inputEl.value)
  let oneKilogram = 2.204
  let operationKilogram = (inputVal * oneKilogram).toFixed(3)
  let operationPound = (inputVal / oneKilogram).toFixed(3)
  massEl.textContent= `${inputVal} kilos = ${operationKilogram} pounds | ${inputVal} pounds = ${operationPound} kilos`

}


/*let listNumbers = " "

for(let i = 0; i < myNumbers.length; i++){
  console.log(myNumbers[i])
  listNumbers += "<p>" + myNumbers[i] + "</p>"
  //`20 meters = 65.616 feet | 20 feet = 6.096 meters`
}

lengthEl.innerHTML = listNumbers*/
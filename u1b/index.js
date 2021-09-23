let num1=5
let num2=4
document.getElementById("num1-el").textContent=num1
document.getElementById("num2-el").textContent=num2

function add() {
    let result = num1+num2
    document.getElementById("result-el").textContent="Sum: "+result
}

function substract() {
    let result = num1-num2
    document.getElementById("result-el").textContent="Substract: "+result
}


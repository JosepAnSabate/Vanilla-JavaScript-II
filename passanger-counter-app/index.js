// document.getElementById("count-el").innerText=5
// let firstBatch = 5

// let count = firstBatch + 2

// console.log(count)
// 1.
// let myAge=26
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// 2. Reassigning and incrementing
// let count = 5
// count = 3
// count = 1
// // count = 1
// count = count +1

// console.log(count)

// let bonusPoints = 50
// bonusPoints += 50
// bonusPoints /= 4
// bonusPoints +=45
// console.log(bonusPoints)

//2functions
// let lapsCompleted = 0
// function increment() {
//     lapsCompleted += 1
// }
// increment()
// increment()
// console.log(lapsCompleted)
//button increament with a function
let count = 1
function increment() {
    count +=1   
    //change the count-el in the HTML to reflect the new count
    document.getElementById("count-el").innerText = count  
    //console.log(count)
}

function save() {
    //console.log(count)
    document.getElementById("saved").innerText = count  
}

// 4 render by id
welcomeEl = document.getElementById("welcome-el")

let names = "josep"
let greeting="welcome"

welcomeEl.innerText = greeting + names 
welcomeEl.innerText = welcomeEl.innerText + " aqui"
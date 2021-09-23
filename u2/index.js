// let age = 21

// if (age <  21) {
//     console.log("You cannot enter")
// } else {
//     console.log("Welcome!")
// }

// condicionals
// let age = 100

// if (age < 100) {
//     console.log("Not elegible")
// } else if (age === 100){
//     console.log("Happy Birthday!!")
// } else {
//     console.log("You have already gotten one")
// }

// for loops
// for (let count=1; count < 11; count += 1) {
//     console.log(count)
// }
// for (let i = 10; i <= 100; i+=10) {
//     console.log(i)
// }

// let message = ["a","b","c","d"]

// for (let i= 0; i < 5; i += 1){
//     console.log(message[i ])
// }


// function roll(){
//     let random = Math.floor(Math.random() * 12) + 1; // Math.random() used with Math.floor() can be used to return random integers.
//     return random
// }
// console.log(
// roll())

// let course = {
//     title: "Learn CSS",
//     lessons: 16,
//     creator: "Per",
//     length: 63,
//     level:2,
//     isFree: true,
//     tags: ["html", "css"]
// }

// console.log(course["tags"])


// let castle = {
//     title: "Castell riudsabella",
//     piscina: true,
//     habitacions: 9,
//     conreus: ["img/vinya.jpg", "vinya"]
// }

// console.log(castle.conreus[0])

// let person = {
//     name: "Josep",
//     age: 26,
//     country: "Catalunya"
// }

// function logData(){
//     let data = person.name +" is " + person.age + "  years old and lives in " + person.country
//     console.log(data)
// }

// logData()


//condicionals
// let age = 15

// if (age < 6){
//     console.log("free")
// } else if( age <= 17){
//     console.log("child discount")
// } else if(age <= 26) {
//     console.log("student discount")
// } else if(age <=66){
//     console.log("full price")
// } else {
//     console.log(" senior discount")
// }   

// for loop
// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistant"]

// for(let i=0; i < largeCountries.length; i++){
//     console.log("- " + largeCountries[i])
// }

// let dayOfMonth = 13
// let weekday = "Friday"

// if ( dayOfMonth === 13 && weekday === "Friday"){
//     console.log("RUN")
// }

// rock paper scissor
// let hands = ["rock", "paper", "scissor"]

// function partida() {
//     let random = Math.floor(Math.random() * 3);
//     let resultat = hands[random]
//     console.log("Winner: "+resultat)
// }

// partida()

let fruits = ["apple", "orange", "apple", "apple", "orange"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")



function sortFruit() {
    for (let i = 0; i < fruits.length; i++) {
        apples = 0
        oranges = 0
        if (fruits[i] === "apple") {
            appleShelf.textContent += "apple + "
        } else {
            orangeShelf.textContent += "oranges + "
        }
    }
}

sortFruit()





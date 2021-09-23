
let player= {  //object to store data
    name: "Pep",
    chips: 150,
    sayHello: function() {
        console.log("Welcome!")
    }
}
player.sayHello()

let sum = 0
let cards= []

let hasBlackJack = false
let isAlive = false

let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")

// render the player's name and chip
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": " + player.chips + "€"

function startGame() {
    isAlive = true
    let firstCard= getRandomCard()
    let secondCard= getRandomCard()
    cards.push(firstCard)
    cards.push(secondCard)
    sum = firstCard+secondCard
    renderGame()
}

function renderGame() { 
    cardsEl.textContent= "Cards: "
    for(let i =0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    console.log(sum)
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = ("Do you want to draw a new card?")
    } else if (sum === 21) {
        message=("Blackjack!")
        hasBlackJack=true
    } else {
        message=("Game Over!")
        isAlive = false
    }
    messageEl.textContent = message
    
}

function anotherCard() {
    if (isAlive === true && hasBlackJack === false) {
    console.log("Drawing a new card") 
    let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    renderGame()   
    }
}

function getRandomCard() {
    let random = Math.floor(Math.random()*13) +1
    if (random === 1) {
        return 11
    } else if (random > 10 ){
        return 10
    } else {
        return random
    }
    //Math.random() used with Math.floor() can be used to return random integers.
}


let firstCard= 8
let secondCard= 1
let sum = firstCard+secondCard

let hasBlackJack = false
let isAlive = true

let message = ""

if (sum < 21) {
    message = (sum + " Do you want to draw a new card?")
} else if (sum === 21) {
    message=(sum + " Blackjack!")
    hasBlackJack=true
} else {
    message=(sum + " Game Over!")
    isAlive = false
}

console.log(message)
console.log(isAlive)
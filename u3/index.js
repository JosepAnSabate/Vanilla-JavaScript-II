let box = document.getElementById("box")

box.addEventListener("click", function(){
    console.log("I want to open the box!")
})

const containerEL = document.getElementById("container")

containerEL.innerHTML = "<button onclick='buy()'>Click!</button>"

function  buy(){
    containerEL.innerHTML += "<p>Thanks for buying!</p>"
}



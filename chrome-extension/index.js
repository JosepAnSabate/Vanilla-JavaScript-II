// local storage
// let myLeads = `["https://www.w3schools.com"]` // AS STRING for local stor
// myLeads = JSON.parse(myLeads) // turn myLeads into string array
// myLeads.push("https://developer.mozilla.org/en-US/") // Push the new value to the array
// myLeads = JSON.stringify(myLeads) // Turn the array into a string again
// console.log(typeof myLeads)  // console.log the string to verify that its a string
let myLeads = []
let oldLeads = []
 //"https://www.w3schools.com", "https://developer.mozilla.org/en-US/","www.geomaps-blog.herokuapp.com/ "
const inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
const ulEl =document.getElementById("ul-el")

// local storage
//localStorage.setItem("myName", "Josep Andreu")
//  let name = localStorage.getItem("myName")
// console.log(myname)
// localStorage.clear()

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))  // get data from local storage
//ckeck if values from local storage os truthy, if so, 
// set myLeads to its values and call renderLeads()
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads){
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        // listItems += "<li><a target= '_blank' href='" + "'>" + myLeads[i] + "</a></li> " 
        listItems += ` 
        <li>
        <a target= '_blank' href='${leads}'>
        ${leads[i]}
        </a>
        </li> ` 
    }
    ulEl.innerHTML = listItems
}



// listen for double clicks on delete btn,
// when clicked, clear localStorage, myLeads an dom
const deleteBtn = document.getElementById("delete-btn")
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads) //dom
    
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    // save myLeads array to localStorage, remember JSON strignify
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    // console.log( localStorage.getItem("myLeads"))
    
})


   
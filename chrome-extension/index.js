let myLeads = [] //"https://www.w3schools.com", "https://developer.mozilla.org/en-US/","www.geomaps-blog.herokuapp.com/ "
const inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")

const ulEl =document.getElementById("ul-el")


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()

})

function renderLeads(){
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // listItems += "<li><a target= '_blank' href='" + "'>" + myLeads[i] + "</a></li> " 
        listItems += ` 
        <li>
        <a target= '_blank' href='${myLeads}'>
        ${myLeads[i]}
        </a>
        </li> ` 
        
        console.log(listItems)
    }
    ulEl.innerHTML = listItems
}

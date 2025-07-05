// let yourName = prompt("Enter your name :")
// let nameEl = document.getElementById("name-el")
// nameEl.innerText += yourName

let count = 0

let countEl = document.getElementById("count-el")

//increment function
function increment(){
    count +=1
    countEl.innerText = count
}

//decrement function
// function decrement(){
//     count -= 1;
//     countEl.innerText = count
// }

let numberEnteredEl = document.getElementById("numberEntered")
//function save
function save(){
    numberEnteredEl.textContent += count + " - "
    countEl.innerText = 0
}

// let firstBatch = 5;
// let secondBatch = 10;

// let count = firstBatch;

// console.log('count');

//initialize
//listen
//increment
//log out to the page by changing h2"s value

let count = 0;

let countEl = document.getElementById("count");


function increment(){
    count += 1;

    countEl.innerText = count;
}
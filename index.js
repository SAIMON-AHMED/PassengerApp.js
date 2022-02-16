
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count++;
    countEl.textContent = count;
}

let saveEl = document.getElementById("save-el");
function save() {
    let countSep = count + " - ";
    saveEl.textContent += countSep;
    console.log(count);
    countEl.textContent = 0;
    count = 0;
}

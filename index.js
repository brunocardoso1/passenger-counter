let countEl = document.getElementById("count-el");
let savedCount = document.getElementById("count-saved");
let count = 0;

function increment() {
  count += 1;
  console.log(count);
  countEl.innerText = count;
}

function save() {
  savedCount.innerText += " " + count + " - ";
  count = 0;
  countEl.innerText = 0;
}

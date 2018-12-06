function getRandomNumber(min, max) {
  return math.random() * (max - min) + min;
}

// Update min and max ranges

var minRange = document.getElementById("min-range");
var maxRange = document.getElementById("max-range");

var updateButton = document.querySelector(“range-update”);

function minNumFunction() {
var x = document.getElementById(“min-range”).value;
document.getElementById(“min”).innerText = x;
console.log();
}

updateButton.addEventListener(‘click’, minNumFunction);

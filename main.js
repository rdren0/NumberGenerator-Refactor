// function getRandomNumber(min, max) {
//   return math.random() * (max - min) + min;
// }

// Test Click on Submit Button
var submitButton = document.getElementById("submit-guess");

function submitGuessFunction(){
  console.log("i'm a console log");
  alert("i work");
}

submitButton.addEventListener("click", submitGuessFunction);

// Update min and max ranges

// var minRange = document.getElementById("min-range");
// var maxRange = document.getElementById("max-range");

var updateButton = document.getElementById("new-button-name");

function minNumFunction() {
console.log("first alert");
var minNumber = document.getElementById(“min-range”).value;
document.getElementById(“min”).innerText = minNumber;
alert("I work!");
}

updateButton.addEventListener(‘click’, minNumFunction);


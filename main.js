// function getRandomNumber(min, max) {
//   return math.random() * (max - min) + min;
// }

// Test Click on Submit Button

// function submitGuessFunction(){
//   // console.log("i'm a console log");
//   // alert("i work");
// }

// submitButton.addEventListener("click", submitGuessFunction);

// Update min and max ranges

var minRange = document.getElementById("min-range");
var maxRange = document.getElementById("max-range");
var min = document.getElementById("min");

var updateButton = document.getElementById("new-button-name");

updateButton.addEventListener('click', minNumFunction);

function minNumFunction(e) {
  e.preventDefault();
console.log("first alert");
var minNumber = minRange.value;
console.log(minNumber);
min.innerText = minNumber;
// document.getElementById(“min”).innerText = minNumber;
// alert("I work!"); 
}



// var chalOneName = document.getElementById("inputChallenger1-name");
// var chalTwoName = document.getElementById("inputChallenger2-name");
// var ChalOneNameSpace = document.getElementById("ChallOneNameSpace");
// var ChalTwoNameSpace = document.getElementById("ChallTwoNameSpace");


// var submitButton = document.getElementById("submit-guess");
// submitButton.addEventListener('click', changePlayerNames);



// function changePlayerNames(e) {
//   e.preventDefault();
//   alert("Testing Submit Button")

// //////everything below doesnt work///
//   var playerOneName = chalOneName.value;
//   playerOneName = chalOneNameSpace.innerText;
//   var playerTwoName = chalTwoName.value;
//   playerTwoName = chalTwoNameSpace.innerText;
//   var playOneNameStuff = chalOneName.value;
//   var playTwoNameStuff = chalTwoName.value;
//   playOneNameStuff = chalOneName.innerText;
//   playTwoNameStuff = chalTwoName.innerText;
//   
// }




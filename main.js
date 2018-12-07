// function getRandomNumber(min, max) {
//   return math.random() * (max - min) + min;
// }



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

// Reset button resets guess fields to blank
var resetButton = document.getElementById("reset-game");

resetButton.addEventListener("click", resetGuesses);

function resetGuesses() {
  document.getElementById("challenger1-guess").reset();
  document.getElementById("challenger2-guess").reset();
}

// Current guesses show in Latest score panel
var challenger1CurrentGuessInput = document.getElementById("challenger1-guess");
var challenger2CurrentGuessInput = document.getElementById("challenger2-guess");
var submitButton = document.getElementById("submit-guess");

submitButton.addEventListener("click", currentGuesses);

function currentGuesses (e) {
  e.preventDefault();
var challenger1CurrentGuess = document.getElementById("challenger1-current-guess");
var challenger2CurrentGuess = document.getElementById("challenger2-current-guess");
  console.log(challenger1CurrentGuess);
  console.log(challenger2CurrentGuess);
  challenger1CurrentGuess.innerText = challenger1CurrentGuessInput.value;
  challenger2CurrentGuess.innerText = challenger2CurrentGuessInput.value;
}

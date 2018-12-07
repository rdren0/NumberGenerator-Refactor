

/////////////////Submits Names and Guesses, changes text///////////////////

var nameInput1 = document.getElementById("input-Challenger1-name"); 
var nameInput2 = document.getElementById("input-Challenger2-name");
var guessInput1 = document.getElementById("input-Challenger1-guess"); 
var guessInput2 = document.getElementById("input-Challenger2-guess");
var submitButton = document.getElementById("submit-guess");
var fillNamePlayer1 = document.getElementById("fill-Challenger1-name");

submitButton.addEventListener("click", submitGuessFunction);


function submitGuessFunction(e){
  e.preventDefault();
  alert("alert alert");
  var FirstPerson = nameInput1.value;
  var FirstGuess = guessInput1.value;
  alert(FirstPerson);
  alert(FirstGuess);
  // fillNamePlayer1.innerText = FirstPerson;
  var SecondPerson = nameInput2.value;
  var SecondGuess = guessInput2.value;
  alert(SecondPerson);
  alert(SecondGuess);
}


var minRange = document.getElementById("min-range");
var maxRange = document.getElementById("max-range");
var min = document.getElementById("min");
var max = document.getElementById("max");
var updateButton = document.getElementById("new-button-name");


updateButton.addEventListener('click', minNumFunction);

function minNumFunction(e) {
  e.preventDefault();
console.log("first alert");
var minNumber = minRange.value;
//alert(minNumber);
min.innerText = minNumber;
var maxNumber = maxRange.value;
//alert(maxNumber);
max.innerText = maxNumber;

}




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

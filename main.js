// Generating random number 
var randomNumber = Math.floor((Math.random() * 100) + 1);
console.log(randomNumber);

// Setting min and max range
var minRange = document.getElementById("min-range");
var maxRange = document.getElementById("max-range");
var minDisplay = document.getElementById("min");
var maxDisplay = document.getElementById("max");
var updateButton = document.getElementById("new-button-name");

updateButton.addEventListener('click', rangeNumFunction);

function rangeNumFunction(e) {
  e.preventDefault();
var minNumber = parseInt(minRange.value);
minDisplay.innerText = minNumber;
var maxNumber = parseInt(maxRange.value);
// console.log(typeof maxNumber);
maxDisplay.innerText = maxNumber;
updateRandomNumber(minNumber, maxNumber);
}

function updateRandomNumber(min, max) {
  console.log(Math.floor(Math.random() * (max - min + 1) + min));
}

var challenger1Alert = document.getElementById("challenger1-alert");
var challenger2Alert = document.getElementById("challenger2-alert");


// Reset button resets all fields to blank
var resetButton = document.getElementById("reset-game");

resetButton.addEventListener("click", resetGuesses);

function resetGuesses() {
  document.getElementById("challenger1-guess").reset();
  document.getElementById("challenger2-guess").reset();
}

// Current guesses show in Latest score panel
var challenger1CurrentNameInput = document.getElementById("input-Challenger1-name");
var challenger1CurrentGuessInput = document.getElementById("input-Challenger1-guess");
var challenger2CurrentNameInput = document.getElementById("input-Challenger2-name");
var challenger2CurrentGuessInput = document.getElementById("input-Challenger2-guess");
var submitButton = document.getElementById("submit-guess");
var challenger1CurrentName = document.getElementById("fill-Challenger1-name");
var challenger1CurrentGuess = document.getElementById("challenger1-current-guess");
var challenger2CurrentName = document.getElementById("fill-Challenger2-name");
var challenger2CurrentGuess = document.getElementById("challenger2-current-guess");

submitButton.addEventListener("click", currentGuesses);

function currentGuesses(e) {
  e.preventDefault();
  challenger1CurrentName.innerText = challenger1CurrentNameInput.value;
  challenger1CurrentGuess.innerText = challenger1CurrentGuessInput.value;
  challenger2CurrentName.innerText = challenger2CurrentNameInput.value;
  challenger2CurrentGuess.innerText = challenger2CurrentGuessInput.value;
  checkGueses();
}
function checkGueses() {
  console.log(parseInt(challenger1CurrentGuessInput.value));
  if (parseInt(challenger1CurrentGuessInput.value) < randomNumber) {
  challenger1Alert.innerText = "That's too low!";
  } else if (parseInt(challenger1CurrentGuessInput.value) > randomNumber) {
  challenger1Alert.innerText = "That's too high!";
  } else {
    challenger1Alert.innerText = "BOOM";
}
}
// Reset button resets guess fields to blank
var resetButton = document.getElementById("reset-game");

resetButton.addEventListener("click", resetGuesses);

function resetGuesses() {
  document.getElementById("challenger1-guess").reset();
  document.getElementById("challenger2-guess").reset();

}

function functionAddCard(){
var cardNumber =0;
var boxTwoSection = document.querySelector(".boxtwo");
var cardHTML = `<article id="${cardNumber}">
          <table class="versus-table">
            <tr>
             <th><span id="fill-Challenger1-name">${challenger1CurrentNameInput.value}</span></th>
              <th> vs </th>
              <th>${challenger2CurrentNameInput.value}</th>
            </tr>
          </table>
            <hr>
          <h2> XXX WINNERS NAME XXX </h2>
          <h2>WINNER</h2>
            <hr>
          <table>
            <tr>
              <th>XXXXX NUMBER OF GUESSES</th>
              <th>XXXXX GAME DURATION</th>
              <th><button id="circle-button" type="button">&#x2715;</button></th>
            </tr>
          </table>
        </article>`
        cardNumber++;
        boxTwoSection.insertAdjacentHTML('afterbegin',cardHTML);
      }

///boxTwoSection.insertAdjacentHTML('afterbegin',cardHTML);


//---------------Global Variables---------------//
var randomNumber = Math.floor((Math.random() * 100) + 1);
var minRange = document.getElementById("min-range");
var maxRange = document.getElementById("max-range");
var minDisplay = document.getElementById("min");
var maxDisplay = document.getElementById("max");
var updateButton = document.getElementById("new-button-name");
var challenger1CurrentNameInput = document.getElementById("input-Challenger1-name");
var challenger1CurrentGuessInput = document.getElementById("input-Challenger1-guess");
var challenger2CurrentNameInput = document.getElementById("input-Challenger2-name");
var challenger2CurrentGuessInput = document.getElementById("input-Challenger2-guess");
var submitButton = document.getElementById("submit-guess");
var challenger1CurrentName = document.getElementById("fill-Challenger1-name");
var challenger1CurrentGuess = document.getElementById("challenger1-current-guess");
var challenger2CurrentName = document.getElementById("fill-Challenger2-name");
var challenger2CurrentGuess = document.getElementById("challenger2-current-guess");
var challenger1Alert = document.getElementById("challenger1-alert");
var challenger2Alert = document.getElementById("challenger2-alert");
var resetButton = document.getElementById("reset-game");
var submitButtonVar = document.getElementById('new-button-name');
var clearButton = document.getElementById("clear-game");
var minRangeField = document.getElementById('min-range');



//---------------Event Listeners---------------//

submitButton.addEventListener("click", currentGuesses);
updateButton.addEventListener('click', rangeNumFunction);
resetButton.addEventListener("click", resetGuesses);
submitButtonVar.addEventListener("click", DisableButtons);
clearButton.addEventListener("click", clearFields);
minRangeField.addEventListener("keyup", RangesIncorrect);


//---------------Functions---------------//

function rangeNumFunction(e) {
  e.preventDefault();
  var minNumber = parseInt(minRange.value);
  minDisplay.innerText = minNumber;
  var maxNumber = parseInt(maxRange.value);
  maxDisplay.innerText = maxNumber;
  updateRandomNumber(minNumber, maxNumber);
}

function RangesIncorrect() {
  if (parseInt(minRange.value) > parseInt(maxRange.value)) {
    document.getElementById("new-button-name").disabled = true;
    alert("Your minimum number is higher than your maximum!");
  } else if (parseInt(maxRange.value) < parseInt(minRange.value)) {
    document.getElementById("new-button-name").disabled = true;
    alert("Your maximum number is lower than your minimum!");
  }
}

function DisableButtons() {
  if (challenger1CurrentNameInput.value.length === 0 || challenger2CurrentNameInput.value.length === 0 ) {
    clearButton.Disable = true;
    resetButton.Disable = true;
  } else if (challenger1CurrentGuessInput.value.length === 0 || challenger2CurrentGuessInput.value.length === 0) {
    clearButton.Disable = true;
    resetButton.Disable = true;
  } else {
    alert("Error!");
  }
}

function updateRandomNumber(min, max) {
  Math.floor(Math.random() * (max - min + 1) + min);
}

function currentGuesses(e) {
  e.preventDefault();
  challenger1CurrentName.innerText = challenger1CurrentNameInput.value;
  challenger1CurrentGuess.innerText = challenger1CurrentGuessInput.value;
  challenger2CurrentName.innerText = challenger2CurrentNameInput.value;
  challenger2CurrentGuess.innerText = challenger2CurrentGuessInput.value;
  checkGuesses1();
  checkGuesses2();
}

function checkGuesses1() {
  if (parseInt(challenger1CurrentGuessInput.value) < randomNumber) {
    challenger1Alert.innerText = "That's too low!";
  } else if (parseInt(challenger1CurrentGuessInput.value) > randomNumber) {
    challenger1Alert.innerText = "That's too high!";
  } else {
    challenger1Alert.innerText = "BOOM";
    functionAddCard();
  }
}

function checkGuesses2() {
  if (parseInt(challenger2CurrentGuessInput.value) < randomNumber) {
    challenger2Alert.innerText = "That's too low!";
  } else if (parseInt(challenger2CurrentGuessInput.value) > randomNumber) {
    challenger2Alert.innerText = "That's too high!";
  } else {
    challenger2Alert.innerText = "BOOM";
    functionAddCard();
  }
}

function functionAddCard() {
  var cardNumber = 0;
  var boxTwoSection = document.querySelector(".boxtwo");
  var cardNumberAdds = document.querySelector(".cardNumber");
  var cardHTML = `<article class="card-info" id="${cardNumber} ">
          <table class="versus-table">
            <tr>
             <th><h2>${challenger1CurrentNameInput.value}</h2></th>
              <th><h4> vs </h4> </th>
              <th><h2>${challenger2CurrentNameInput.value}</h2></th>
            </tr>
          </table>
            <hr>
          <h2 id= "winner-name-text">  CHALLENGER X NAME </h2>
          <h4 class='winner-text'>WINNER</h4>
            <hr>
          <table class="game-info">
            <tr>
              <th><h4 class="game-text-info"><b>00</b> GUESSES </h4></th>
              <th><h4 class="game-text-info"><b>00.00</b> MINUTES</h4></th>
              <th><button id="circle-button" type="button" onClick="document.getElementById('card-info').style.visibility = 'hidden';">&#x2715;</button></th>
            </tr>
          </table>
        </article>`
  cardNumber++;
  boxTwoSection.insertAdjacentHTML('afterbegin', cardHTML);
}

function resetGuesses() {
  challenger1CurrentGuessInput.reset();
  challenger2CurrentGuessInput.reset();
}

function clearFields(e) {
  e.preventDefault();
  challenger1CurrentGuessInput.value = "";
  challenger1CurrentGuessInput.value = "";
}


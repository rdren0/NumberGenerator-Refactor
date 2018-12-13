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
        boxTwoSection.insertAdjacentHTML('afterbegin',cardHTML);
    }

///Reset button resets guess fields to blank
var resetButton = document.getElementById("reset-game");

resetButton.addEventListener("click", resetGuesses);

function resetGuesses() {
  document.getElementById("challenger1-guess").reset();
  document.getElementById("challenger2-guess").reset();
}

var submitButtonVar = document.getElementById('new-button-name');
submitButtonVar.addEventListener("click", DisableButtons);

// Clear button only clears guess input fields
var clearButton = document.getElementById("clear-game");
clearButton.addEventListener("click", clearFields);

function clearFields(e) {
    e.preventDefault();
    document.getElementById("input-Challenger1-guess").value = "";
    document.getElementById("input-Challenger2-guess").value = "";
}

function DisableButtons(){
       var chalOneInput = document.getElementById('input-Challenger1-name');
       var chalTwoInput = document.getElementById('input-Challenger2-name');
       var chalOneNum = document.getElementById('input-Challenger1-guess');
       var chalTwoNum = document.getElementById('input-Challenger1-guess');
       var resetButton = document.getElementById('reset-game')
       var clearButton = document.getElementById('clear-game');
         if ( chalOneInput.value.length = 0) {
              clearButton.Disable = true;
              resetButton.Disable = true;
            } else if (chalTwoInput.value.length =0 ){
              clearButton.Disable = true;
              resetButton.Disable = true;
            } else if (chalOneNum.value.length=0){
              clearButton.Disable = true;
              resetButton.Disable = true;
            }else if (chalTwoNum.value.length =0){
              clearButton.Disable = true;
              resetButton.Disable = true;
            }
   }


var minRangeField = document.getElementById('min-range');
minRangeField.addEventListener("keyup", RangesIncorrect);

function RangesIncorrect() {
  var minRangeNumber = document.getElementById('min-range');
  var maxRangeNumber = document.getElementById('max-range');
  // var newButtonVar = document.getElementById('new-button-name');
  if (parseInt(minRangeNumber.value) > parseInt(maxRangeNumber.value)){
      document.getElementById("new-button-name").disabled = true;
      alert("Your minimum number is higher than your maximum!");
    } else if (parseInt(maxRangeNumber.value) < parseInt(minRangeNumber.value)){
      document.getElementById("new-button-name").disabled = true;
      alert("Your maximum number is lower than your minimum!");
    }
  }


///boxTwoSection.insertAdjacentHTML('afterbegin',cardHTML);





     






////////////////Submits Names and Guesses, changes text///////////////////

var nameInput1 = document.getElementById("input-Challenger1-name"); 
var nameInput2 = document.getElementById("input-Challenger2-name");
var guessInput1 = document.getElementById("input-Challenger1-guess"); 
var guessInput2 = document.getElementById("input-Challenger2-guess");
var submitButton = document.getElementById("submit-guess");
var fillNamePlayer1 = document.getElementById("fill-Challenger1-name");
var fillNamePlayer2 = document.getElementById("fill-Challenger2-name");

// submitButton.addEventListener("click", submitGuessFunction);

// var closeButton = document.getElementById("circle-button");
// var gameCard = document.getElementById("info-cards");

// closeButton.addEventListener("click", clearGameCard);

// function clearGameCard() {
//   gameCard.style.visibility = "hidden";


// function submitGuessFunction(e){
//   debugger;
//   e.preventDefault();
//   alert("alert alert");
//   var FirstPerson = nameInput1.value;
//   var FirstGuess = guessInput1.value;
//   alert(FirstPerson);
//   alert(FirstGuess);
//   fillNamePlayer1.innerText = FirstPerson;
//   var SecondPerson = nameInput2.value;
//   var SecondGuess = guessInput2.value;
//   alert(SecondPerson);
//   alert(SecondGuess);
//   debugger;
// }


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
var challenger1CurrentNameInput = document.getElementById("input-Challenger1-name");
var challenger1CurrentGuessInput = document.getElementById("input-Challenger1-guess");
var challenger2CurrentNameInput = document.getElementById("input-Challenger2-name");
var challenger2CurrentGuessInput = document.getElementById("input-Challenger2-guess");
var submitButton = document.getElementById("submit-guess");

submitButton.addEventListener("click", currentGuesses);

function currentGuesses (e) {
  e.preventDefault();
var challenger1CurrentName = document.getElementById("fill-Challenger1-name");
var challenger1CurrentGuess = document.getElementById("challenger1-current-guess");
var challenger2CurrentName = document.getElementById("fill-Challenger2-name");
var challenger2CurrentGuess = document.getElementById("challenger2-current-guess");
  console.log(challenger1CurrentName);
  console.log(challenger1CurrentGuess);
  console.log(challenger2CurrentName);
  console.log(challenger2CurrentGuess);
  challenger1CurrentName.innerHTML = challenger1CurrentNameInput.value;
  challenger1CurrentGuess.innerText = challenger1CurrentGuessInput.value;
  challenger2CurrentName.innerHTML = challenger2CurrentNameInput.value;
  challenger2CurrentGuess.innerText = challenger2CurrentGuessInput.value;
  functionAddCard();
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
// // Current guesses show in Latest score panel
// var challenger1CurrentGuessInput = document.getElementById("challenger1-guess");
// var challenger2CurrentGuessInput = document.getElementById("challenger2-guess");
// var submitButton = document.getElementById("submit-guess");

// submitButton.addEventListener("click", currentGuesses);

// function currentGuesses (e) {
//   e.preventDefault();
// var challenger1CurrentGuess = document.getElementById("challenger1-current-guess");
// var challenger2CurrentGuess = document.getElementById("challenger2-current-guess");
//   console.log(challenger1CurrentGuess);
//   console.log(challenger2CurrentGuess);
//   challenger1CurrentGuess.innerText = challenger1CurrentGuessInput.value;
//   challenger2CurrentGuess.innerText = challenger2CurrentGuessInput.value;
// }


boxTwoSection.insertAdjacentHTML('afterbegin',cardHTML);

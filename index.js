

const randomNumber = Math.floor(Math.random()*100)+1;

// Select DOM elements

const input = document.getElementById("guessInput");
const button = document.getElementById("submitGuess");
const feedback = document.getElementById("feedback");
const attempts = document.getElementById("attempts");
const playAgain = document.getElementById("playAgain");

let numTries=0;
let gameOver = false;

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    button.click();
  }
});
button.addEventListener("click", ()=> {
    if (gameOver) return;
    const userGuess =Number(input.value);
    if(!userGuess || userGuess< 1 || userGuess >100 ){
        feedback.textContent= "Please Enter a Number Between 1 and 100."; return;
    }
    numTries++
    if (userGuess === randomNumber) {
        feedback.textContent = `🎉 Correct! The number was ${ randomNumber}.`;
        gameOver = true;
        playAgain.style.display= "inline-block"
    }
    else if (userGuess < randomNumber) {
        feedback.textContent = `📉 Too low! The number was ${ randomNumber}.`;
         }
    else {
        feedback.textContent = `📈 Too high! The number was ${ randomNumber}.`;
    }
    attempts.textContent = `attempts: ${(numTries)}`;
    input.value = "";
    input.focus();

});

playAgain.addEventListener( "click" , ()=> {
    window.location.reload();
});


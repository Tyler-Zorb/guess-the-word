const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia"; //using just this 1 word to start until we hadd the list of 800.

// Display our symbols as placeholders for the chosen word's letters.
const placeholder = function () {
    const placeholderLetters = [];
    for (const letter of word) {
       console.log(letter);
       placeholderLetters.push("●"); 
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word); //calling the function and passing the var word as the argument. This makes it so 8 circle symbols are on the screen.(one for each letter of mangolia which is the single word we are starting with)

guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault(); //this line prevents the page from reloading after the button is clicked. Since it's a ford and it's guessing more than once you don't want the page to keep reloading.
    const guess = letterInput.value; // the var captures the value of the input. So the letter that is guessed.
    console.log(guess);
    letterInput.value = ""; // This empties the value of the input after it's been guesses. So now you'll see the letter you enter into the input field.
});
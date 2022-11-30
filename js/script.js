const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia"; //using just this 1 word to start until we add the list of 800.

const guessedLetters = [];  //this array will contain the letters the player has guessed.

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
    message.innerText = "";  //empty message paragraph. I added this after the messages in the validInput function below. Cuz the function below will check it and send it to this to send the message.
    const guess = letterInput.value; // the var captures the value of the input. So the letter that is guessed.
    //console.log(guess);
    
    const goodGuess = validateInput(guess); //making sure that it is a single letter here.

    if (goodGuess) {
        makeGuess(guess);   
    }
    letterInput.value = ""; // This empties the value of the input after it's been guessed. So now you'll see the letter you enter into the input field.
});

//This function will validate the player's input
const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/   //This line they gave me. It uses a regular expression to ensure the player inputs a letter.
    if (input.length === 0) {  //This is checking if the input is empty.
        message.innterText = "Please enter a letter.";
    } else if (input > 1) {    //this is checking for more than one letter entered.
        message.innerText = "Please only enter one letter.";
    } else if (!input.match(acceptedLetter)) { //This is checking for a number, character or something not a letter.
        message.innerText = "Please enter a letter from A to Z."
    } else {
        return input;
    }
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase();    //this makes all the guesses uppercase because it's easier to make them all the same in something like this.
    if (guessedLetters.includes(guess)) {
        message.innerText = "You've already guessed that letter, try again.";
    } else {
        guessedLetters.push(guess);     //this pushes the letter they've guessed to the guessedLetters array.
        console.log(guessedLetters);
    }
};
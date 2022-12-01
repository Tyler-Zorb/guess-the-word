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
        showGuessedLetters();   //calling the function below this (after I created that function obviously) so the letter displays when it hasn't been guessed before.
        updateWordInProgress(guessedLetters);   //calling the updateWordInProgress function I created below with guessedLetters as an argument.
    }
};

const showGuessedLetters = function () {
    guessedLettersElement.innerHTML = "";   //this empties the innerHTML of the unordered list where the players guessed letters will display.
    for (const letter of guessedLetters) {  //all of this is creating a new list item for each letter inside my guessedLetters array and adding it to the unordered list.
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersElement.append(li);
    }
};

const updateWordInProgress = function (guessedLetters) {    //this function will replace the circle symbols with the correct letters guessed.
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");  //this splits the word string into an array so that the letter can appear in the guessedLetters array.
    const revealWord = [];
    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            revealWord.push(letter.toUpperCase());
        } else {
            revealWord.push("●");
        }
    }
    // console.log(revealWord);
    wordInProgress.innerText = revealWord.join("");
    checkIfWin();
};

const checkIfWin = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {
        message.classList.add("win");   //adding the "win" class to the empty paragraph where messages appear when the guess the letter. Since the player has won here.
        message.innerHTML = `<p class="highlight"> You guessed the correct word! Congrats!</p>`;    //updating the paragraphs content for congrats.
    }
};

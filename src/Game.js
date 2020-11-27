

const Game = ({ chosenWord, lettersGuessed }) => {

    const formatWord = (chosenWord, lettersGuessed) => {
        // chosenWord and guessedLetter as inputs
        // turn the chosenWord into *

        // map of the array of lettersGuessed
        // if letter is in chosenWord - reveal the letter
        // else go into the bin
    };

    return (
        <div>
            <p>{formatWord(chosenWord)}</p>
            <input type="text"></input><button id="guess">Guess</button>
        </div>
    );
};

export default Game;
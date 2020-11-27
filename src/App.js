import React from "react";
import Game from './Game'

class App extends React.Component {
  state = {
    catergories: {
      animals: ["Chicken", "Horse", "Sloth", "Armadillo"],
      films: ["Batman", "Inception", "Jaws", "Parasite"],
    },
    chosenWord: '',
    lettersGuessed: []
  };

  wordPicker = (catergory) => {
    const word = this.state.catergories[catergory][
      Math.floor(Math.random() * this.state.catergories[catergory].length)
    ];
    this.setState({ chosenWord: word })
  };

  render() {
    return (
      <div>
        <h1>Hangman</h1>
        <button
          onClick={() => {
            this.wordPicker("animals");
          }}
        >
          Animals
        </button>
        <button
          onClick={() => {
            this.wordPicker("films");
          }}
        >
          Films
        </button>
        <p>Word</p>
        <Game chosenWord={this.state.chosenWord} lettersGuessed={this.state.lettersGuessed} />
      </div>
    );
  }
}

export default App;

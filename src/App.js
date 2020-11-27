import React from "react";

class App extends React.Component {
  state = {
    catergories: {
      animals: ["Chicken", "Horse", "Sloth", "Armadillo"],
      films: ["Batman", "Inception", "Jaws", "Parasite"],
    },
  };

  wordPicker = (catergory) => {
    const word = this.state.catergories[catergory][
      Math.floor(Math.random() * this.state.catergories[catergory].length)
    ];
    console.log(word);
  };
  // Math.floor((Math.random()* state.catergories["animals"].length) -1) // 0-3

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
      </div>
    );
  }
}

export default App;

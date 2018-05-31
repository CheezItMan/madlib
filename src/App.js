import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs';
import Story from './components/Story';
import WordForm from './components/WordForm';
import MadLibSelector from './components/MadLibSelector';



class App extends Component {
  constructor() {
    super();

    const madLibIndex = Math.floor(MadLibs.length * Math.random(), 10);
    MadLibs[madLibIndex].words.forEach((word) => {
      word.value = '';
    });

    this.state = {
      selectedMadLib: MadLibs[madLibIndex],
      hideMadLib: true,
    };

  }

  // Update the value of a word in the selected
  // mad lib using setState
  updateWord = (key, value) => {
    const updatedMadLib = this.state.selectedMadLib;
    const changedWord = updatedMadLib.words.find((word) => {
      return word.key === key;
    });
    if (changedWord) {
      changedWord.value = value;
      this.setState({selectedMadLib: updatedMadLib});
    }
  }

  resetMadLib = (index) => {
    MadLibs[index].words.forEach((word) => {
      word.value = '';
    });

    this.setState({
      selectedMadLib: MadLibs[index],
      hideMadLib: true,
    });
  }

  submitHandler = () => {
    const selectedMadLib = this.state.selectedMadLib;
    const words = selectedMadLib.words;
    let finished = true;

    words.forEach((word) => {
      if (word.value.length < 1) {
        finished = false;
      }
    });

    if (finished) {
      this.setState({
        selectedMadLib,
        hideMadLib: false,
      });
    }
    // otherwise give an error message

  }

  selectMadLib = (event) => {
    this.resetMadLib(event.target.value);
  }

  render() {
    const puzzles = MadLibs.map((madLib, index) => {
      return {
        index,
        title: madLib.title,
      }
    });


    return (
      <section className="App">
        <h1>Welcome to MadLibs!</h1>
        <p>Fill in all of the choices to see your final story.</p>
        <MadLibSelector
          puzzles={puzzles}
          selectMadLib={this.selectMadLib}
        />
        <div className={ !this.state.hideMadLib ? "hidden": "shown"}>

          <WordForm
            words= { this.state.selectedMadLib.words}
            setWords={ this.submitHandler }
            fillInWords={ this.submitHandler }
            updateWord={ this.updateWord }
            />
        </div>
        <div className={ this.state.hideMadLib ? "hidden": "shown"}>
          <Story
            text={ this.state.selectedMadLib.getText() }
            title= { this.state.selectedMadLib.title }
            />
        </div>
      </section>
    );
  }
}

export default App;

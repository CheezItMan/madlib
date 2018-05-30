import React, { Component } from 'react';
import './App.css';
import madlibs from './data/madlibs.json';
import Story from './components/Story.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedMadLib: madlibs[0],
    };
  }

  render() {
    return (
      <section className="App">
        <h1>Welcome to MadLibs!</h1>
        <p>Fill in all of the choices to see your final story.</p>
        {/*
          Render your form with input values
        */}
        <Story text={ this.state.selectedMadLib.getText() } />
      </section>
    );
  }
}

export default App;

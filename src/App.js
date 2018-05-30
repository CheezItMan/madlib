import React, { Component } from 'react';
import './App.css';
import madlibs from './data/madlibs.json';
import Story from './components/Story.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedMadLib: madlibs[0],
      substitutions: {
        adjective_1: "unruly",
        noun_1: "courage",
        noun_2: "exhaust"
      }
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
        <Story madLib={this.state.selectedMadLib} substitutions={this.state.substitutions} />
      </section>
    );
  }
}

export default App;

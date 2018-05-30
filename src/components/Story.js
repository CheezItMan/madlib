import React, { Component } from 'react';
import './Story.css';

class Story extends Component {
  render() {
    const madLib = this.buildMadLib();
    const text = madLib(this.props.substitutions);

    return (
      <section className="story">
        <p>{text}</p>
      </section>
    );
  }

  buildMadLib() {
    // Dynamically create a function which takes
    // an object with word substitutions, and returns
    // the current madlib with those substitutions filled-in
    return Function('substitutions', `
      let completeSubs = {};
      this.props.madLib.keys.forEach((key) => {
        completeSubs[key] = '_'.repeat(8);
      });
      completeSubs = { ...completeSubs, ...substitutions };

      with(completeSubs) {
        return this.reactMadLib\`${this.props.madLib.text}\`;
      }
    `).bind(this);
  }

  reactMadLib = (strings, ...subs) => {
    let parts = [strings[0]];

    subs.forEach((sub, i) => {
      parts.push(<span className='story-substitution'>{sub}</span>, strings[i + 1]);
    });

    return parts;
  }
}

export default Story;

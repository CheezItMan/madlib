import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WordForm extends Component {

  submitHandler = (event) => {
    event.preventDefault();
    this.props.fillInWords();
  }

  render() {
    console.log(this.props.words);
    const fields = this.props.words.map((word) => {
      return (
        <div key={word['key']}>
          <label htmlFor={word['key']}>
            {word['label']}
          </label>
          <input
            type="text"
            name={word['key']}
            onChange={(event) => this.props.updateWord(word.key, event.target.value)}
            value={ word.value }
            />
        </div>
      );
    });


    return (
      <div>
        Form
        <form onSubmit={this.submitHandler}>
          {fields}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

WordForm.propTypes = {
  words: PropTypes.array.isRequired,
  fillInWords: PropTypes.func.isRequired,
  updateWord:  PropTypes.func.isRequired,
}

export default WordForm;

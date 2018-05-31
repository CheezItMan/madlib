import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Story extends Component {
  render() {
    return (
      <section className="story">
        <h2>{this.props.title}</h2>
        <p>{ this.props.text }</p>
      </section>
    );
  }
}

Story.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string,
}

export default Story;

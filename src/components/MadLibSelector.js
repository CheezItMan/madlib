import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MadLibSelector extends Component {

  render() {
    const options = this.props.puzzles.map((puzzle) => {
      return (<option key={puzzle.index} value={puzzle.index}>{puzzle.title}</option>)
    });
    return (
      <select onChange={(event) => this.props.selectMadLib(event)}>
        {options}
      </select>
    );
  }
}


MadLibSelector.propTypes = {
  puzzles: PropTypes.array.isRequired,
  selectMadLib: PropTypes.func.isRequired,
}

export default MadLibSelector;

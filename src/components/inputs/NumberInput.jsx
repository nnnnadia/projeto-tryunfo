import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NumberInput extends Component {
  render() {
    const { label, name } = this.props;
    return (
      <>
        <label htmlFor={ name }>
          { label }
        </label>
        <input
          type="number"
          id={ name }
          name={ name }
          data-testid={ name }
        />
      </>
    );
  }
}

NumberInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

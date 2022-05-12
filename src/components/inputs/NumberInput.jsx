import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NumberInput extends Component {
  render() {
    const {
      label,
      name,
      value,
      onChange,
    } = this.props;
    return (
      <>
        <label htmlFor={ name }>
          { label }
        </label>
        <input
          type="number"
          name={ name }
          value={ value }
          onChange={ onChange }
          id={ name }
          data-testid={ name }
        />
      </>
    );
  }
}

NumberInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextInput extends Component {
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
          type="text"
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

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

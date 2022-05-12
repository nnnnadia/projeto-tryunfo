import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextInput extends Component {
  render() {
    const { label, name } = this.props;
    return (
      <>
        <label htmlFor={ name }>
          { label }
        </label>
        <input
          type="text"
          name={ name }
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
};

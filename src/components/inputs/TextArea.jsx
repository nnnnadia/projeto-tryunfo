import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextArea extends Component {
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
        <textarea
          name={ name }
          id={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ name }
        />
      </>
    );
  }
}

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

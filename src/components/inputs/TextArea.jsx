import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../style/inputs.css';

export default class TextArea extends Component {
  render() {
    const {
      label,
      name,
      value,
      onChange,
      dataTestid,
    } = this.props;
    return (
      <>
        <label
          className="form-label full-label"
          htmlFor={ name }
        >
          { label }
        </label>
        <textarea
          className="form-input"
          name={ name }
          id={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ dataTestid }
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
  dataTestid: PropTypes.string.isRequired,
};

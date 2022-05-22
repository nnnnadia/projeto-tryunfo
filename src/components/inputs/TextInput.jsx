import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../style/inputs.css';

export default class TextInput extends Component {
  render() {
    const {
      label,
      placeholder,
      name,
      value,
      onChange,
      dataTestid,
    } = this.props;
    return (
      <>
        { label
          && (
            <label
              className="form-label full-label"
              htmlFor={ name }
            >
              { label }
            </label>
          )}
        <input
          className="form-input"
          type="text"
          placeholder={ placeholder }
          name={ name }
          value={ value }
          onChange={ onChange }
          id={ name }
          data-testid={ dataTestid }
        />
      </>
    );
  }
}

TextInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dataTestid: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  label: '',
  placeholder: '',
};

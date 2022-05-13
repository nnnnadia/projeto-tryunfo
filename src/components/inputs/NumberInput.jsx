import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../style/inputs.css';

export default class NumberInput extends Component {
  render() {
    const {
      label,
      name,
      value,
      onChange,
      dataTestid,
    } = this.props;
    return (
      <div className="container-row nice-spacing">
        <label
          className="form-label less-label"
          htmlFor={ name }
        >
          { label }
        </label>
        <input
          className="input-fit"
          type="number"
          name={ name }
          value={ value }
          onChange={ onChange }
          id={ name }
          data-testid={ dataTestid }
        />
      </div>
    );
  }
}

NumberInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dataTestid: PropTypes.string.isRequired,
};

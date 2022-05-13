import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../style/inputs.css';

export default class Select extends Component {
  render() {
    const {
      label,
      name,
      options,
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
        <select
          className="form-input"
          id={ name }
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ dataTestid }
        >
          { options.map((option) => (
            <option key={ option }>{option}</option>
          )) }
        </select>
      </>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  dataTestid: PropTypes.string.isRequired,
};

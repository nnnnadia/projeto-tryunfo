import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const {
      label,
      name,
      options,
      value,
      onChange,
    } = this.props;
    return (
      <>
        <label htmlFor={ name }>
          { label }
        </label>
        <select
          id={ name }
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ name }
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
};

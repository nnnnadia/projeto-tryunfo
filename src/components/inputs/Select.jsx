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
      disabled,
      dataTestid,
    } = this.props;
    return (
      <>
        { label && (
          <label
            className="form-label full-label"
            htmlFor={ name }
          >
            { label }
          </label>
        )}
        <select
          className="form-input"
          id={ name }
          name={ name }
          value={ value }
          onChange={ onChange }
          disabled={ disabled }
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
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  dataTestid: PropTypes.string.isRequired,
};

Select.defaultProps = {
  label: '',
  disabled: false,
};

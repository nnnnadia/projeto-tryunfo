import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CheckboxInput extends Component {
  render() {
    const {
      label,
      name,
      checked,
      onChange,
    } = this.props;
    return (
      <>
        <input
          type="checkbox"
          id={ name }
          name={ name }
          checked={ checked }
          onChange={ onChange }
          data-testid={ name }
        />
        <label htmlFor={ name }>
          { label }
        </label>
      </>
    );
  }
}

CheckboxInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

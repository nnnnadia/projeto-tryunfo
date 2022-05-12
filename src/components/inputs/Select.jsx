import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const { label, name, options } = this.props;
    return (
      <>
        <label htmlFor={ name }>
          { label }
        </label>
        <select
          id={ name }
          name={ name }
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
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

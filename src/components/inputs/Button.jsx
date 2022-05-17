import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../style/inputs.css';

export default class Button extends Component {
  render() {
    const {
      label,
      name,
      isButtonDisabled,
      onButtonClick,
    } = this.props;
    return (
      <button
        className="save-button"
        type="button"
        data-testid={ name }
        disabled={ isButtonDisabled }
        onClick={ onButtonClick }
      >
        { label }
      </button>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

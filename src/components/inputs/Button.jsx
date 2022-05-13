import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../style/inputs.css';

export default class Button extends Component {
  render() {
    const {
      label,
      name,
      isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.props;
    return (
      <button
        className="save-button"
        type="button"
        data-testid={ name }
        disabled={ isSaveButtonDisabled }
        onClick={ onSaveButtonClick }
      >
        { label }
      </button>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

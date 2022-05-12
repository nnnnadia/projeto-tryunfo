import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextArea extends Component {
  render() {
    const { label, name } = this.props;
    return (
      <>
        <label htmlFor={ name }>
          { label }
        </label>
        <input
          name={ name }
          id={ name }
          data-testid={ name }
        />
      </>
    );
  }
}

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

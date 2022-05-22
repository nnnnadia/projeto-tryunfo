import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from './inputs/TextInput';

export default class FilterCollectionForm extends Component {
  render() {
    const {
      filterName,
      onInputChange,
    } = this.props;
    return (
      <div>
        <h3>Filtros de busca</h3>
        <TextInput
          placeholder="Filtrar pelo nome"
          name="filterName"
          value={ filterName }
          onChange={ onInputChange }
          dataTestid="name-filter"
        />
      </div>
    );
  }
}

FilterCollectionForm.propTypes = {
  filterName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

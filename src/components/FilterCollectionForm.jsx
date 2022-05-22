import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from './inputs/TextInput';
import Select from './inputs/Select';

export default class FilterCollectionForm extends Component {
  render() {
    const {
      filterName,
      filterRarity,
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
        <Select
          name="filterRarity"
          value={ filterRarity }
          onChange={ onInputChange }
          options={ ['normal', 'raro', 'muito raro', 'todas'] }
          dataTestid="rare-filter"
        />
      </div>
    );
  }
}

FilterCollectionForm.propTypes = {
  filterName: PropTypes.string.isRequired,
  filterRarity: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

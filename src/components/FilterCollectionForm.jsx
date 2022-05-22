import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from './inputs/TextInput';
import Select from './inputs/Select';
import CheckboxInput from './inputs/CheckboxInput';

export default class FilterCollectionForm extends Component {
  render() {
    const {
      filterName,
      filterRarity,
      filterTrunfo,
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
          disabled={ filterTrunfo }
          dataTestid="name-filter"
        />
        <Select
          name="filterRarity"
          value={ filterRarity }
          onChange={ onInputChange }
          disabled={ filterTrunfo }
          options={ ['normal', 'raro', 'muito raro', 'todas'] }
          dataTestid="rare-filter"
        />
        <CheckboxInput
          name="filterTrunfo"
          checked={ filterTrunfo }
          onChange={ onInputChange }
          dataTestid="trunfo-filter"
        />
      </div>
    );
  }
}

FilterCollectionForm.propTypes = {
  filterName: PropTypes.string.isRequired,
  filterRarity: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './inputs/Button';
import CheckboxInput from './inputs/CheckboxInput';
import NumberInput from './inputs/NumberInput';
import Select from './inputs/Select';
import TextArea from './inputs/TextArea';
import TextInput from './inputs/TextInput';

export default class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <TextInput
          label="Nome"
          name="name-input"
          value={ cardName }
          onChange={ onInputChange }
        />
        <TextArea
          label="Descrição"
          name="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <NumberInput
          label="Atributo 1"
          name="attr1-input"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <NumberInput
          label="Atributo 2"
          name="attr2-input"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <NumberInput
          label="Atributo 3"
          name="attr3-input"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <TextInput
          label="Imagem"
          name="image-input"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <Select
          label="Raridade"
          name="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
          options={ ['normal', 'raro', 'muito raro'] }
        />
        <CheckboxInput
          label="Super Trunfo"
          name="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        <Button
          label="Salvar"
          name="save-button"
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ onSaveButtonClick }
        />
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

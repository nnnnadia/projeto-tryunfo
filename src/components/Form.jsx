import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './inputs/Button';
import CheckboxInput from './inputs/CheckboxInput';
import NumberInput from './inputs/NumberInput';
import Select from './inputs/Select';
import TextArea from './inputs/TextArea';
import TextInput from './inputs/TextInput';
import '../style/Form.css';

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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form className="new-card-form">
        <TextInput
          label="Nome"
          name="cardName"
          value={ cardName }
          onChange={ onInputChange }
          dataTestid="name-input"
        />
        <TextArea
          label="Descrição"
          name="cardDescription"
          value={ cardDescription }
          onChange={ onInputChange }
          dataTestid="description-input"
        />
        <NumberInput
          label="Atributo 1"
          name="cardAttr1"
          value={ cardAttr1 }
          onChange={ onInputChange }
          dataTestid="attr1-input"
        />
        <NumberInput
          label="Atributo 2"
          name="cardAttr2"
          value={ cardAttr2 }
          onChange={ onInputChange }
          dataTestid="attr2-input"
        />
        <NumberInput
          label="Atributo 3"
          name="cardAttr3"
          value={ cardAttr3 }
          onChange={ onInputChange }
          dataTestid="attr3-input"
        />
        <TextInput
          label="Imagem"
          name="cardImage"
          value={ cardImage }
          onChange={ onInputChange }
          dataTestid="image-input"
        />
        <Select
          label="Raridade"
          name="cardRare"
          value={ cardRare }
          onChange={ onInputChange }
          options={ ['normal', 'raro', 'muito raro'] }
          dataTestid="rare-input"
        />
        { hasTrunfo
          ? <p>Você já tem um Super Trunfo em seu baralho</p>
          : (
            <CheckboxInput
              label="Super Trunfo"
              name="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              dataTestid="trunfo-input"
            />
          )}
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

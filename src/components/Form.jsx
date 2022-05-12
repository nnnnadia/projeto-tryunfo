import React, { Component } from 'react';
import Button from './inputs/Button';
import CheckboxInput from './inputs/CheckboxInput';
import NumberInput from './inputs/NumberInput';
import Select from './inputs/Select';
import TextArea from './inputs/TextArea';
import TextInput from './inputs/TextInput';

export default class Form extends Component {
  render() {
    return (
      <form>
        <TextInput
          label="Nome"
          name="name-input"
        />
        <TextArea
          label="Descrição"
          name="description-input"
        />
        <NumberInput
          label="Atributo 1"
          name="attr1-input"
        />
        <NumberInput
          label="Atributo 2"
          name="attr2-input"
        />
        <NumberInput
          label="Atributo 3"
          name="attr3-input"
        />
        <TextInput
          label="Imagem"
          name="image-input"
        />
        <Select
          label="Raridade"
          name="rare-input"
          options={ ['normal', 'raro', 'muito raro'] }
        />
        <CheckboxInput
          label="Super Trunfo"
          name="trunfo-input"
        />
        <Button
          label="Salvar"
          name="save-button"
        />
      </form>
    );
  }
}

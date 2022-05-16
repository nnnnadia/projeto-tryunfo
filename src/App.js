import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
  };

  validateText = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
    } = this.state;
    if (cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0) return true;
    return false;
  }

  validateAttributes = () => {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const attr1 = +cardAttr1;
    const attr2 = +cardAttr2;
    const attr3 = +cardAttr3;
    const minAttr = 0;
    const maxAttr = 90;
    const maxSum = 210;
    if (Math.min(attr1, attr2, attr3) >= minAttr
      && Math.max(attr1, attr2, attr3) <= maxAttr
      && (attr1 + attr2 + attr3) <= maxSum) return true;
    return false;
  }

  validateInputs = () => {
    const {
      validateText,
      validateAttributes,
    } = this;
    if ((validateText()) && (validateAttributes())) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox'
      ? target.checked
      : target.value;
    this.setState({ [name]: value },
      () => this.validateInputs());
  }

  onSaveButtonClick = () => {
    console.log('oi');
  }

  render() {
    const { state: {
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
    },
    onInputChange,
    onSaveButtonClick } = this;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ onInputChange }
          onSaveButtonClick={ onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;

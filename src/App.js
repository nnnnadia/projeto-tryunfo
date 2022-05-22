import React from 'react';
import Card from './components/Card';
import Collection from './components/Collection';
import NewCardForm from './components/NewCardForm';
import './style/App.css';

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
    savedCards: [],
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

  getRandomId = () => {
    const idMinLength = 1000000;
    const idMaxLength = 9999999;
    const idNumber = Math.floor(
      (Math.random() * (idMaxLength - idMinLength)) + idMinLength,
    ).toString();
    return idNumber;
  }

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    const objectToSave = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cardId: this.getRandomId(),
    };
    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
    this.setState(({ savedCards }) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      savedCards: [...savedCards, objectToSave],
    }));
  }

  onDeleteButtonClick = (cardId) => {
    const { savedCards } = this.state;
    const deletedCard = savedCards.find((card) => card.cardId === cardId);
    const newSavedCards = savedCards.filter((card) => card.cardId !== cardId);
    if (deletedCard.cardTrunfo) {
      this.setState({ hasTrunfo: false });
    }
    this.setState({ savedCards: newSavedCards });
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
      savedCards,
    },
    onInputChange,
    onSaveButtonClick,
    onDeleteButtonClick } = this;
    return (
      <>
        <h1>Tryunfo</h1>
        <div className="container-row">
          <NewCardForm
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
        <Collection
          savedCards={ savedCards }
          onDeleteButtonClick={ onDeleteButtonClick }
        />
      </>
    );
  }
}

export default App;

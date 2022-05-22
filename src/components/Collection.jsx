import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Button from './inputs/Button';
import FilterCollectionForm from './FilterCollectionForm';

export default class Collection extends Component {
  state = {
    filterName: '',
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox'
      ? target.checked
      : target.value;
    this.setState({ [name]: value }, () => this.filterCards);
  }

  render() {
    const {
      props: {
        savedCards,
        onDeleteButtonClick,
      },
      state: {
        filterName,
      },
      onInputChange,
    } = this;
    return (
      <div className="container-row">
        <div className="container-column">
          <FilterCollectionForm
            filterName={ filterName }
            onInputChange={ onInputChange }
          />
        </div>
        <div className="container-row">
          { savedCards
            .filter((card) => card.cardName.includes(filterName))
            .map((card) => (
              <div className="container-column" key={ card.cardId }>
                <Card
                  { ...card }
                />
                <Button
                  label="Excluir"
                  name="delete-button"
                  isButtonDisabled={ false }
                  onButtonClick={ () => onDeleteButtonClick(card.cardId) }
                />
              </div>
            )) }
        </div>
      </div>
    );
  }
}

Collection.propTypes = {
  savedCards: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string,
    cardDescription: PropTypes.string,
    cardAttr1: PropTypes.string,
    cardAttr2: PropTypes.string,
    cardAttr3: PropTypes.string,
    cardImage: PropTypes.string,
    cardRare: PropTypes.string,
    cardTrunfo: PropTypes.bool,
  })).isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
};

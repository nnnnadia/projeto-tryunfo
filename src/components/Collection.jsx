import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Button from './inputs/Button';

export default class Collection extends Component {
  render() {
    const { savedCards, onDeleteButtonClick } = this.props;
    return (
      <div className="container-row">
        { savedCards.map((card) => (
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

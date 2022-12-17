import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Card.css';

export default class Card extends Component {
  countStars = (cardRare) => {
    if (cardRare === 'muito raro') return '★★★';
    if (cardRare === 'raro') return '★★';
    return '★';
  }

  render() {
    const { props: {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    }, countStars } = this;
    return (
      <div className="card">
        <div className="card-content">
          <div className="card-title">
            <span
              className="card-stars"
              data-testid="rare-card"
            >
              {countStars(cardRare)}
            </span>
            <h2
              className="card-name"
              data-testid="name-card"
            >
              { cardName }
            </h2>
          </div>
          <img
            className="card-image"
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
          />
          <p
            className="card-description"
            data-testid="description-card"
          >
            { cardDescription }
          </p>
          <div className="attr-content">
            <div className="attr-container">
              <p>Atributo 1</p>
              <span data-testid="attr1-card">{ cardAttr1 }</span>
            </div>
            <div className="attr-container">
              <p>Atributo 2</p>
              <span data-testid="attr2-card">{ cardAttr2 }</span>
            </div>
            <div className="attr-container">
              <p>Atributo 3</p>
              <span data-testid="attr3-card">{ cardAttr3 }</span>
            </div>
          </div>
        </div>
        { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

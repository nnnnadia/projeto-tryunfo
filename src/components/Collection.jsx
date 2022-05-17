import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class Collection extends Component {
  render() {
    const { savedCards } = this.props;
    return (
      <div>
        { savedCards.map((card, index) => <Card key={ index } { ...card } />) }
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
};

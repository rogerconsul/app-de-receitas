import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function DrinkCards({ drink, index }) {
  const { strDrink, strDrinkThumb } = drink;
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <Link
        key={ drink.idDrink }
        to={ `/drinks/${drink.idDrink}` }
      >
        <h2 data-testid={ `${index}-card-name` }>{ strDrink }</h2>
        <img
          data-testid={ `${index}-card-img` }
          src={ strDrinkThumb }
          alt="Card receita"
          className="CardImg"
        />
      </Link>
    </div>
  );
}

DrinkCards.propTypes = {
  meal: PropTypes.node,
  strDrink: PropTypes.string,
  strDrinkThumb: PropTypes.string,
}.isRequired;

export default DrinkCards;

import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <React.Fragment>
      <h3>{props.brand} - {props.name}</h3>
      <p>Price: ${props.price}</p>
      <p>ABV: {props.alcoholContent}</p>
      <p>Pints remaining: {props.pints}</p>
      <hr />
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  pints: PropTypes.number,
  id: PropTypes.string
};

export default Keg;
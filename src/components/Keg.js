import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h3>{props.brand} - {props.name}</h3>
        <p>Price: ${parseInt(props.price).toFixed(2)}</p>
        <p>ABV: {props.alcoholContent}</p>
        <p>Pints remaining: {props.pints}</p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  pints: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

function KegDetail(props) {
  const { keg } = props;


  function handleClickingSellPint() {
    const newPints = keg.pints - 1;
    props.onClickingSellPint({ name: keg.name, 
                            brand: keg.brand, 
                            price: keg.price, 
                            alcoholContent: keg.alcoholContent,
                            pints: newPints,
                            id: keg.id
                            });
  }
  
  function displayButtonControl() {
    if (keg.pints > 0) {
      return (<Button onClick={handleClickingSellPint}>Sell Pint</Button>);
    } else {
      return (<p>Out of stock!</p>);
    }
  }

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{keg.brand} - {keg.name}</h3>
      <p>Price: ${keg.price}</p>
      <p>ABV: {keg.alcoholContent}</p>
      <p>Pints remaining: {keg.pints}</p>
      {displayButtonControl()}
      <hr />
    </React.Fragment>
  );
}

KegDetail. propTypes = {
  keg: PropTypes.object,
  onClickingSellPint: PropTypes.func
}

export default KegDetail;
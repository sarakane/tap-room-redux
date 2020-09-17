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
      return (<Button variant="success" onClick={handleClickingSellPint}>Sell Pint</Button>);
    } else {
      return (<p className="text-danger">Out of stock!</p>);
    }
  }

  return (
    <React.Fragment>
      <h2>Keg Detail</h2>
      <h3>{keg.brand} - {keg.name}</h3>
      <p>Price: ${parseInt(keg.price).toFixed(2)}</p>
      <p>ABV: {keg.alcoholContent}</p>
      <p>Pints remaining: {keg.pints}</p>
      {displayButtonControl()}
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingSellPint: PropTypes.func
}

export default KegDetail;
import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

function KegList(props) {
  return (
    <React.Fragment>
      <ListGroup style={{ marginBottom: '5px' }} variant='flush'>
        {Object.values(props.kegList).map((keg) => (
          <Keg
            name={keg.name}
            brand={keg.brand}
            price={keg.price}
            alcoholContent={keg.alcoholContent}
            pints={keg.pints}
            id={keg.id}
            key={keg.id}
            whenKegClicked={props.onKegSelection}
          />
        ))}
      </ListGroup>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func,
};

export default KegList;

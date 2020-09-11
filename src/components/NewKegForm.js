import React from 'react';
import { v4 } from 'uuid';
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';

function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      pints: 124,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input 
          type='text'
          name='name'
          placeholder='Name' />
          <input 
          type='text'
          name='brand'
          placeholder='Brand' />
          <input 
          type='number'
          name='price'
          min='0'
          step='0.01'
          placeholder='Price per pint' />
          <input 
          type='number'
          name='alcoholContent'
          step='0.1'
          min='0'
          placeholder='ABV' />
          <Button type='submit'>Submit</Button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
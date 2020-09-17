import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: parseFloat(event.target.price.value),
      alcoholContent: parseFloat(event.target.alcoholContent.value),
      pints: 124,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <Form onSubmit={handleNewKegFormSubmission}>
        <FormControl 
          type='text'
          name='name'
          placeholder='Name' />
          <FormControl 
          type='text'
          name='brand'
          placeholder='Brand' />
          <FormControl 
          type='number'
          name='price'
          min='0'
          step='0.01'
          placeholder='Price per pint' />
          <FormControl 
          type='number'
          name='alcoholContent'
          step='0.1'
          min='0'
          placeholder='ABV' />
          <Button type='submit'>Submit</Button>
      </Form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
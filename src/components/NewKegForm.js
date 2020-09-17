import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { FormGroup } from 'react-bootstrap';

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
        <FormGroup>
          <FormControl 
            type='text'
            name='name'
            placeholder='Name' required />
            <FormControl 
            type='text'
            name='brand'
            placeholder='Brand' required />
            <FormControl 
            type='number'
            name='price'
            min='0'
            step='0.01'
            placeholder='Price per pint' required />
            <FormControl 
            type='number'
            name='alcoholContent'
            step='0.1'
            min='0'
            placeholder='ABV' required />
          </FormGroup>
          <Button variant="success" type='submit'>Submit</Button>
      </Form>
      <hr />
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
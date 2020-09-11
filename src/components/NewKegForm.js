import React from 'react';
import { v4 } from 'uuid';
import Button from 'react-bootstrap/Button'

function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
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
          name='name'
          min='0'
          placeholder='Price per pint' />
          <input 
          type='number'
          name='name'
          step='0.1'
          min='0'
          placeholder='ABV' />
          <Button type='submit'>Submit</Button>
      </form>
    </React.Fragment>
  );
}

export default NewKegForm;
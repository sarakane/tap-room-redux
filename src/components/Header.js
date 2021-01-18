import React from 'react';
import { Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg='primary' variant='light'>
      <Navbar.Brand style={{ fontFamily: 'Lobster, cursive', color: 'white' }}>
        Tap Room
      </Navbar.Brand>
    </Navbar>
  );
}

export default Header;

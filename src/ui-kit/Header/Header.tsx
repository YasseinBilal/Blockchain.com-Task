import React from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

export const Header = () => {
  const history = useHistory();

  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Link to='/' className='nav-link'>
          <Navbar.Brand>Pokedex</Navbar.Brand>
        </Link>
        <Nav>
          <Button
            variant='primary'
            onClick={() => history.push('/pokemon/add')}
          >
            Add New Pokemon
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

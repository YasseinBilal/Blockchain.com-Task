import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import toastr from 'toastr';

import { createPokemon } from '../../api';

export const AddPokemonPage = () => {
  const [name, setName] = useState<string>('');
  const history = useHistory();

  const onAddClick = async () => {
    createPokemon({ name })
      .then(() => {
        toastr.success(`Pokemon ${name} added successfully`, undefined, {
          positionClass: 'toast-bottom-right',
        });
        history.push('/');
      })
      .catch(() =>
        toastr.error(`Failed to add Pokemon`, undefined, {
          positionClass: 'toast-bottom-right',
        }),
      );
    setName('');
  };

  return (
    <Container className='mt-4'>
      <h1>Add Pokemon</h1>
      <Form className='mt-4 w-50'>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Name: </Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter pokemon name'
            onChange={(e) => setName(e.target.value.trim())}
          />
        </Form.Group>
        <Button
          variant='primary'
          type='button'
          disabled={!name}
          onClick={onAddClick}
        >
          Add new
        </Button>
      </Form>
    </Container>
  );
};

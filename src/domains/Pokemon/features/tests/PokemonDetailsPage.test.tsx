import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../../../../App';
import { setupEnvironment } from '../../../../infra';
import { pokemon } from '../../api/DTO/fixtures';

setupEnvironment();

test('it should load and display pokemon details', async () => {
  render(<App />);

  expect(
    await waitFor(() => screen.getByText('Pokemons List')),
  ).toBeInTheDocument();

  // open first bokemon in the listing screen
  fireEvent.click(screen.getByText('pokemon 1'));

  expect(
    await waitFor(() => screen.getByText('Pokemon details')),
  ).toBeInTheDocument();

  // display pokemon name
  expect(screen.getByText('Test pokemon')).toBeInTheDocument();

  // display pokemon weight
  expect(screen.getByText('Weight')).toBeInTheDocument();
  expect(screen.getByText(pokemon.weight)).toBeInTheDocument();

  // display bekemon abilities
  expect(screen.getByText('Abilities')).toBeInTheDocument();
  expect(
    screen.getByText(
      pokemon.abilities.map((ability) => ability.ability.name).join(', '),
    ),
  ).toBeInTheDocument();
});

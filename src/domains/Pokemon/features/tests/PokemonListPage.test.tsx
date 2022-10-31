import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../../../../App';
import { setupEnvironment } from '../../../../infra';
import { pokemonList } from '../../api/DTO/fixtures';

setupEnvironment();

test('it should load and display pokemons', async () => {
  render(<App />);

  expect(
    await waitFor(() => screen.getByText('Pokemons List')),
  ).toBeInTheDocument();

  expect(screen.getByText('pokemon 1')).toBeInTheDocument();
  expect(screen.getAllByRole('pokemon-item')).toHaveLength(
    pokemonList.results.length,
  );
});

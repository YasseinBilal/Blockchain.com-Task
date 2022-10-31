import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Spinner, ErrorMessage } from '../../../../ui-kit';
import { notReachable } from '../../../../infra';
import { fetchPokemonDetails } from '../../api';
import { Pokemon } from '../../Pokemon';

import { PokemonDetails } from './PokemonDetails';

type PageState =
  | { type: 'loading' }
  | { type: 'error' }
  | { type: 'loaded'; data: Pokemon };

export const PokemonDetailsPage = () => {
  const [pageState, setPageState] = useState<PageState>({
    type: 'loading',
  });
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetchPokemonDetails({ id })
      .then((pokemonDetails) => {
        setPageState({ type: 'loaded', data: pokemonDetails });
      })
      .catch(() => {
        setPageState({ type: 'error' });
      });
  }, [id]);

  switch (pageState.type) {
    case 'loading':
      return <Spinner />;
    case 'error':
      return <ErrorMessage />;
    case 'loaded':
      return <PokemonDetails data={pageState.data} />;
    default:
      return notReachable(pageState);
  }
};

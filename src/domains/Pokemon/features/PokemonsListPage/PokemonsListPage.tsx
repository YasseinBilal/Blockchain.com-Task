import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Spinner, ErrorMessage } from '../../../../ui-kit';
import { notReachable } from '../../../../infra';
import { PokemonItem } from '../../Pokemon';
import { fetchAllPokemons } from '../../api';

import { PokemonsList } from './PokemonsList';

const PAGING_LIMIT = 50;

type PageState =
  | { type: 'loading' }
  | { type: 'error' }
  | { type: 'loaded'; count: number };

type PagingState = {
  limit: number;
  offset: number;
};

export const PokemonsListPage = () => {
  const [pageState, setPageState] = useState<PageState>({
    type: 'loading',
  });
  const [pagingState, setPagingState] = useState<PagingState>({
    limit: PAGING_LIMIT,
    offset: 0,
  });

  const [pokemons, setPokemons] = useState<PokemonItem[]>([]);

  useEffect(() => {
    fetchAllPokemons(pagingState)
      .then((newPokemons) => {
        setPageState({ type: 'loaded', count: newPokemons.count });
        setPokemons([...pokemons, ...newPokemons.data]);
      })
      .catch(() => {
        setPageState({ type: 'error' });
      });
  }, [pagingState]);

  const fetchMoreData = () => {
    setPagingState({
      ...pagingState,
      offset: pagingState.offset + pagingState.limit,
    });
  };

  switch (pageState.type) {
    case 'loading':
      return <Spinner />;
    case 'error':
      return <ErrorMessage />;
    case 'loaded':
      return (
        <InfiniteScroll
          dataLength={pokemons.length}
          next={fetchMoreData}
          hasMore={pageState.count > pokemons.length}
          loader={
            <h4 className='d-flex justify-content-center mt-2'>Loading...</h4>
          }
        >
          <PokemonsList pokemons={pokemons} />
        </InfiniteScroll>
      );
    default:
      return notReachable(pageState);
  }
};

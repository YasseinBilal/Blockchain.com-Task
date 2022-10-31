import { BASE_URL } from '../../../infra/configs';
import { PokemonItem } from '../Pokemon';

type Params = {
  limit: number;
  offset: number;
};

export const fetchAllPokemons = ({
  limit,
  offset,
}: Params): Promise<{ data: PokemonItem[]; count: number }> =>
  fetch(`${BASE_URL}pokemon?limit=${limit}&offset=${offset}`)
    .then((response) => response.json())
    .then((data) => ({ data: mapPokemons(data.results), count: data.count }));

const mapPokemons = (pokemons: PokemonItem[]): PokemonItem[] => {
  return pokemons.map((pokemon) => ({
    ...pokemon,
    url: pokemon.url.replace(BASE_URL, ''),
  }));
};

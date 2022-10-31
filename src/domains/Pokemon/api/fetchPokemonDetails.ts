import { BASE_URL } from '../../../infra/configs';
import { Pokemon } from '../Pokemon';

type Params = {
  id: string;
};

export const fetchPokemonDetails = ({ id }: Params): Promise<Pokemon> =>
  fetch(`${BASE_URL}pokemon/${id}`).then((response) => response.json());

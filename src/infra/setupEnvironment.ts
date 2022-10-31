import nock from 'nock';

import { pokemonList, pokemon } from '../domains/Pokemon/api/DTO';
import { BASE_URL } from './configs';

export const setupEnvironment = () => {
  nock(BASE_URL)
    .defaultReplyHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json',
    })
    .get('/pokemon')
    .query(true)
    .reply(200, pokemonList)
    .get('/pokemon/1')
    .reply(200, pokemon);
};

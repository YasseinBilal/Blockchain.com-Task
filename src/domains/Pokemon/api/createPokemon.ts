import { pokemon } from './DTO/fixtures';

type Params = {
  name: string;
};

/* mocking the response for pokemon creation */
export const createPokemon = (_: Params) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(pokemon);
    }, 500);
  });
};

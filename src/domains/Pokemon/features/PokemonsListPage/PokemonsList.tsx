import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, Container } from 'react-bootstrap'

import { PokemonItem } from '../../Pokemon'

type Props = {
  pokemons: PokemonItem[]
}

export const PokemonsList = ({ pokemons }: Props) => {
  return (
    <Container className="mt-4">
      <h1>Pokemons List</h1>
      <ListGroup className="mt-4">
        {pokemons.map((pokemon) => (
          <Link to={pokemon.url} key={pokemon.name} className="nav-link">
            <ListGroup.Item
              className="list-group-item-action"
              role="pokemon-item"
            >
              {pokemon.name}
            </ListGroup.Item>
          </Link>
        ))}
      </ListGroup>
    </Container>
  )
}

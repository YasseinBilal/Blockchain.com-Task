import React from 'react'
import { Container, Card } from 'react-bootstrap'

import { Pokemon } from '../../Pokemon'

type Props = {
  data: Pokemon
}

export const PokemonDetails = ({ data }: Props) => {
  return (
    <Container className="mt-4">
      <h1>Pokemon details</h1>
      <Card className="mt-4">
        <Card.Header>
          Pokemon <b>{data.name}</b>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <b>Weight </b>
            {data.weight}
          </Card.Text>
          <Card.Text>
            <b>Abilities </b>
            {data.abilities.map(({ ability }) => ability.name).join(', ')}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export type Pokemon = {
  id: string
  name: string
  weight: number
  abilities: Ability[]
}

type Ability = {
  ability: {
    name: string
    url: string
  }
  is_hidden: boolean
  slot: number
}

export type PokemonItem = {
  name: string
  url: string
}

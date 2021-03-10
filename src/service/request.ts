
export type PokemonType = {
  order: number
  name: string
  types: string[]
  image: string
}

export default async function request(): Promise<PokemonType[]> {
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
    .then(data => data.json())
    .then(({ results }) => 
      results.map(({ url }) => 
        fetch(url).then(data => data.json()) 
    ))

  return Promise.all(pokemons).then(mapPokemon)
}

function mapPokemon(pokemons): PokemonType[] {
  return pokemons.map(pokemon => ({
    order: pokemon.order,
    name: pokemon.name,
    types: pokemon.types.map(({ type }) => type.name),
    image: pokemon.sprites.front_default,
  }))
}
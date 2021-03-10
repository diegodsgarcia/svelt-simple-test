import { render, screen } from '@testing-library/svelte'
import Card from './Card.svelte'

const pokemon = {
  name: 'Bulbasaur',
  types: ['grass', 'poison'],
  order: 1,
  image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
}

test('Should be render the component', () => {
  render(Card, {
    props: { ...pokemon }
  })

  expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument()
  expect(screen.getByText(/grass/i)).toBeInTheDocument()
  expect(screen.getByText(/poison/i)).toBeInTheDocument()
  expect(screen.getByText(/1/i)).toBeInTheDocument()
  expect(screen.getByRole('img', { name: /bulbasaur/i })).toBeInTheDocument()
})
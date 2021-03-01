import { render, screen } from '@testing-library/svelte'
import Item from './Item.svelte'

const transaction = {
  name: 'João',
  status: 'Paga',
  date: new Date(2021, 2, 24),
  amount: 1000,
}

test('Should be render the component', () => {
  render(Item, {
    props: { ...transaction }
  })

  screen.getByText(/joão/i)
  screen.getByText(/paga/i)
  screen.getByText('24/02/2021')
  screen.getByText('R$ 1.000,00')
})
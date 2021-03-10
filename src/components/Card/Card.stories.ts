import Card from './Card.svelte';

export default {
  title: 'Card',
  component: Card,
  args: {
    name: 'Bulbasaur',
    types: ['grass', 'poison'],
    order: 1,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  argTypes: {
    image: {
      type: ''
    }
  }
};

const Template = ({ ...args }) => ({
  Component: Card,
  props: args,
});

export const Default = Template.bind({})
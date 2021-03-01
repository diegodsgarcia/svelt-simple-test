import Item from './Item.svelte';

export default {
  title: 'Item',
  component: Item,
  args: {
    name: 'Test',
    status: 'Paga',
    date: new Date(),
    amount: 1000,
  }
};

const Template = ({ onArchiveTask, onPinTask, ...args }) => ({
  Component: Item,
  props: args,
});

export const Test = Template.bind({})
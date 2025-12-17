import DXBox from './DXBox.vue';

export default {
  title: 'Layout/DXBox',
  component: DXBox,
  tags: ['autodocs'],
};

export const Default = {
  args: { p: 'md', bg: 'slate', rounded: 'lg' },
  render: (args) => ({
    components: { DXBox },
    setup() { return { args }; },
    template: '<DXBox v-bind="args">Content inside box</DXBox>',
  }),
};

export const WithBorder = {
  args: { p: 'lg', bg: 'white', rounded: 'xl', border: true },
  render: (args) => ({
    components: { DXBox },
    setup() { return { args }; },
    template: '<DXBox v-bind="args">Box with border</DXBox>',
  }),
};

export const WithShadow = {
  args: { p: 'lg', bg: 'white', rounded: 'xl', shadow: 'lg' },
  render: (args) => ({
    components: { DXBox },
    setup() { return { args }; },
    template: '<DXBox v-bind="args">Box with shadow</DXBox>',
  }),
};


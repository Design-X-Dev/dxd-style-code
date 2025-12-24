import DXCode from './DXCode.vue';

export default {
  title: 'Atoms/DXCode',
  component: DXCode,
  tags: ['autodocs', 'category:typography'],
};

export const Inline = {
  render: () => ({
    components: { DXCode },
    template: '<p>Используйте <DXCode>npm install</DXCode> для установки.</p>',
  }),
};

export const Block = {
  args: { block: true },
  render: (args) => ({
    components: { DXCode },
    setup() { return { args }; },
    template: `<DXCode v-bind="args">const greeting = "Hello World";
console.log(greeting);

function add(a, b) {
  return a + b;
}</DXCode>`,
  }),
};


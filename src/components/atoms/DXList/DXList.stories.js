import DXList from './DXList.vue';

export default {
  title: 'Atoms/DXList',
  component: DXList,
  tags: ['autodocs', 'category:typography'],
};

export const Unordered = {
  render: () => ({
    components: { DXList },
    template: `
      <DXList>
        <li>Первый элемент</li>
        <li>Второй элемент</li>
        <li>Третий элемент</li>
      </DXList>
    `,
  }),
};

export const Ordered = {
  args: { ordered: true },
  render: (args) => ({
    components: { DXList },
    setup() { return { args }; },
    template: `
      <DXList v-bind="args">
        <li>Шаг первый</li>
        <li>Шаг второй</li>
        <li>Шаг третий</li>
      </DXList>
    `,
  }),
};

export const NoMarker = {
  args: { marker: 'none' },
  render: (args) => ({
    components: { DXList },
    setup() { return { args }; },
    template: `
      <DXList v-bind="args">
        <li>Элемент без маркера</li>
        <li>Ещё один элемент</li>
      </DXList>
    `,
  }),
};


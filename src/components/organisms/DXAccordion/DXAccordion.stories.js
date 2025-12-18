import DXAccordion from './DXAccordion.vue';

export default {
  title: 'Organisms/DXAccordion',
  component: DXAccordion,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: { type: 'select' }, options: ['default', 'bordered', 'separated'] },
  },
};

const items = [
  { title: 'What is DX Components?', content: 'DX Components is a Vue 3 UI component library built with Tailwind CSS.' },
  { title: 'How to install?', content: 'Run npm install dxd-style-code to add the library to your project.' },
  { title: 'Is it customizable?', content: 'Yes, all components are fully customizable using Tailwind CSS classes.' },
];

export const Default = {
  args: { items },
};

export const Bordered = {
  args: { items, variant: 'bordered' },
};

export const Multiple = {
  args: { items, multiple: true, defaultOpen: [0] },
};

export const WithDefaultOpen = {
  args: { items, defaultOpen: [0, 1] },
};


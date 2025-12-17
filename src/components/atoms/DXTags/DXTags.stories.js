import DXTags from './DXTags.vue';

export default {
  title: 'Atoms/DXTags',
  component: DXTags,
  tags: ['autodocs'],
};

export const Default = {
  args: { tags: ['Vue.js', 'React', 'Angular', 'TypeScript'] },
};

export const Large = {
  args: { tags: ['Frontend', 'Backend', 'DevOps'], variant: 'large' },
};

export const Single = {
  args: { tags: ['Active'] },
};


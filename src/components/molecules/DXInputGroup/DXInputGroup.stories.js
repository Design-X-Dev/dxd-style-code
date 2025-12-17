import DXInputGroup from './DXInputGroup.vue';
import { ref } from 'vue';

export default {
  title: 'Molecules/DXInputGroup',
  component: DXInputGroup,
  tags: ['autodocs'],
};

export const Default = {
  render: () => ({
    components: { DXInputGroup },
    setup() {
      const value = ref('');
      return { value };
    },
    template: `
      <DXInputGroup label="Website">
        <span class="flex items-center px-3 border border-r-0 border-slate-200 bg-slate-50 text-slate-600 text-sm rounded-l-xl">https://</span>
        <input v-model="value" type="text" class="flex-1 rounded-r-xl border border-slate-200 px-4 py-3 text-sm" placeholder="example.com" />
      </DXInputGroup>
    `,
  }),
};

export const WithSuffix = {
  render: () => ({
    components: { DXInputGroup },
    setup() {
      const value = ref('');
      return { value };
    },
    template: `
      <DXInputGroup label="Price">
        <input v-model="value" type="number" class="flex-1 rounded-l-xl border border-slate-200 px-4 py-3 text-sm" placeholder="0.00" />
        <span class="flex items-center px-3 border border-l-0 border-slate-200 bg-slate-50 text-slate-600 text-sm rounded-r-xl">USD</span>
      </DXInputGroup>
    `,
  }),
};


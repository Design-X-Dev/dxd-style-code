import DXButtonGroup from './DXButtonGroup.vue';
import { ref } from 'vue';

export default {
  title: 'Molecules/DXButtonGroup',
  component: DXButtonGroup,
  tags: ['autodocs'],
};

export const Default = {
  render: () => ({
    components: { DXButtonGroup },
    setup() {
      const selected = ref('left');
      return { selected };
    },
    template: `
      <DXButtonGroup v-model="selected">
        <button value="left" class="px-4 py-2 text-sm border border-slate-200 rounded-l-xl" :class="selected === 'left' ? 'bg-slate-900 text-white' : 'bg-white'">Left</button>
        <button value="center" class="px-4 py-2 text-sm border-y border-slate-200" :class="selected === 'center' ? 'bg-slate-900 text-white' : 'bg-white'">Center</button>
        <button value="right" class="px-4 py-2 text-sm border border-slate-200 rounded-r-xl" :class="selected === 'right' ? 'bg-slate-900 text-white' : 'bg-white'">Right</button>
      </DXButtonGroup>
    `,
  }),
};


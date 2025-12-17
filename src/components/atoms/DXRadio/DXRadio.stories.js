import DXRadio from './DXRadio.vue';
import { ref } from 'vue';

export default {
  title: 'Atoms/DXRadio',
  component: DXRadio,
  tags: ['autodocs'],
};

export const Default = {
  render: () => ({
    components: { DXRadio },
    setup() {
      const selected = ref('option1');
      return { selected };
    },
    template: `
      <div class="space-y-2">
        <DXRadio v-model="selected" value="option1" label="Option 1" />
        <DXRadio v-model="selected" value="option2" label="Option 2" />
        <DXRadio v-model="selected" value="option3" label="Option 3" />
      </div>
    `,
  }),
};

export const Disabled = {
  render: () => ({
    components: { DXRadio },
    setup() {
      const selected = ref('option1');
      return { selected };
    },
    template: '<DXRadio v-model="selected" value="option1" label="Disabled option" disabled />',
  }),
};


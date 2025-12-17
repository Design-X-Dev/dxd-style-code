import DXCheckbox from './DXCheckbox.vue';
import { ref } from 'vue';

export default {
  title: 'Atoms/DXCheckbox',
  component: DXCheckbox,
  tags: ['autodocs'],
};

export const Default = {
  render: () => ({
    components: { DXCheckbox },
    setup() {
      const checked = ref(false);
      return { checked };
    },
    template: '<DXCheckbox v-model="checked" label="Accept terms" />',
  }),
};

export const Checked = {
  render: () => ({
    components: { DXCheckbox },
    setup() {
      const checked = ref(true);
      return { checked };
    },
    template: '<DXCheckbox v-model="checked" label="Already checked" />',
  }),
};

export const Disabled = {
  render: () => ({
    components: { DXCheckbox },
    setup() {
      const checked = ref(false);
      return { checked };
    },
    template: '<DXCheckbox v-model="checked" label="Disabled checkbox" disabled />',
  }),
};

export const WithDescription = {
  render: () => ({
    components: { DXCheckbox },
    setup() {
      const checked = ref(false);
      return { checked };
    },
    template: '<DXCheckbox v-model="checked" label="Subscribe to newsletter" helper="We\'ll send you weekly updates" />',
  }),
};


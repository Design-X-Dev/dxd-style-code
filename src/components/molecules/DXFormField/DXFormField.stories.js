import DXFormField from './DXFormField.vue';
import { ref } from 'vue';

export default {
  title: 'Molecules/DXFormField',
  component: DXFormField,
  tags: ['autodocs'],
};

export const Default = {
  render: () => ({
    components: { DXFormField },
    setup() {
      const value = ref('');
      return { value };
    },
    template: `
      <DXFormField label="Email" helper="We'll never share your email">
        <input v-model="value" type="email" class="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm" placeholder="Enter email" />
      </DXFormField>
    `,
  }),
};

export const Required = {
  render: () => ({
    components: { DXFormField },
    setup() {
      const value = ref('');
      return { value };
    },
    template: `
      <DXFormField label="Username" required>
        <input v-model="value" type="text" class="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm" placeholder="Enter username" />
      </DXFormField>
    `,
  }),
};

export const WithError = {
  render: () => ({
    components: { DXFormField },
    setup() {
      const value = ref('');
      return { value };
    },
    template: `
      <DXFormField label="Password" error="Password is too short">
        <input v-model="value" type="password" class="w-full rounded-xl border border-rose-300 px-4 py-3 text-sm" placeholder="Enter password" />
      </DXFormField>
    `,
  }),
};


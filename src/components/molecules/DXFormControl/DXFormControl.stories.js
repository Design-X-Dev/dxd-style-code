import DXFormControl from './DXFormControl.vue';
import { ref } from 'vue';

export default {
  title: 'Molecules/DXFormControl',
  component: DXFormControl,
  tags: ['autodocs'],
};

export const Default = {
  render: () => ({
    components: { DXFormControl },
    setup() {
      const value = ref('');
      return { value };
    },
    template: `
      <DXFormControl label="Email">
        <input v-model="value" type="email" class="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm" placeholder="Enter email" />
      </DXFormControl>
    `,
  }),
};

export const WithCounter = {
  render: () => ({
    components: { DXFormControl },
    setup() {
      const value = ref('Hello');
      return { value };
    },
    template: `
      <DXFormControl label="Bio" :max-length="100" :current-length="5" show-count>
        <textarea v-model="value" class="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm" rows="3"></textarea>
      </DXFormControl>
    `,
  }),
};

export const ValidationSuccess = {
  render: () => ({
    components: { DXFormControl },
    setup() {
      const value = ref('valid@email.com');
      return { value };
    },
    template: `
      <DXFormControl label="Email" validation-state="success">
        <input v-model="value" type="email" class="w-full rounded-xl border border-emerald-300 px-4 py-3 text-sm" />
      </DXFormControl>
    `,
  }),
};

export const ValidationError = {
  render: () => ({
    components: { DXFormControl },
    setup() {
      const value = ref('invalid');
      return { value };
    },
    template: `
      <DXFormControl label="Email" validation-state="error" error="Invalid email format">
        <input v-model="value" type="email" class="w-full rounded-xl border border-rose-300 px-4 py-3 text-sm" />
      </DXFormControl>
    `,
  }),
};


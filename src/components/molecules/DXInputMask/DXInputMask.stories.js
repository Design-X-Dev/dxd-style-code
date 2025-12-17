import DXInputMask from './DXInputMask.vue';
import { ref } from 'vue';

export default {
  title: 'Molecules/DXInputMask',
  component: DXInputMask,
  tags: ['autodocs'],
};

export const Phone = {
  render: () => ({
    components: { DXInputMask },
    setup() {
      const phone = ref('');
      return { phone };
    },
    template: '<DXInputMask v-model="phone" mask="+7 (###) ###-##-##" label="Phone" placeholder="+7 (999) 123-45-67" />',
  }),
};

export const CreditCard = {
  render: () => ({
    components: { DXInputMask },
    setup() {
      const card = ref('');
      return { card };
    },
    template: '<DXInputMask v-model="card" mask="#### #### #### ####" label="Card Number" placeholder="0000 0000 0000 0000" />',
  }),
};

export const Date = {
  render: () => ({
    components: { DXInputMask },
    setup() {
      const date = ref('');
      return { date };
    },
    template: '<DXInputMask v-model="date" mask="##/##/####" label="Date" placeholder="DD/MM/YYYY" />',
  }),
};

export const SSN = {
  render: () => ({
    components: { DXInputMask },
    setup() {
      const ssn = ref('');
      return { ssn };
    },
    template: '<DXInputMask v-model="ssn" mask="###-##-####" label="SSN" placeholder="123-45-6789" />',
  }),
};


import DXRadioCard from './DXRadioCard.vue';
import { ref } from 'vue';

export default {
  title: 'Molecules/DXRadioCard',
  component: DXRadioCard,
  tags: ['autodocs'],
};

export const Default = {
  render: () => ({
    components: { DXRadioCard },
    setup() {
      const selected = ref('plan1');
      return { selected };
    },
    template: `
      <div class="space-y-3 max-w-md">
        <DXRadioCard 
          v-model="selected" 
          value="plan1"
          title="Basic Plan" 
          description="Perfect for getting started"
        />
        <DXRadioCard 
          v-model="selected" 
          value="plan2"
          title="Pro Plan" 
          description="For growing businesses"
        />
        <DXRadioCard 
          v-model="selected" 
          value="plan3"
          title="Enterprise" 
          description="For large organizations"
        />
      </div>
    `,
  }),
};

export const Disabled = {
  render: () => ({
    components: { DXRadioCard },
    setup() {
      const selected = ref('option1');
      return { selected };
    },
    template: `
      <DXRadioCard 
        v-model="selected" 
        value="option1"
        title="Disabled Option" 
        description="This option cannot be changed"
        disabled
      />
    `,
  }),
};


import DXRadio from './DXRadio.vue';
import { ref } from 'vue';

export default {
  title: 'Atoms/DXRadio',
  component: DXRadio,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'custom'],
      description: 'Radio variant'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Radio size'
    },
    color: {
      control: 'select',
      options: ['slate', 'primary', 'success', 'danger', 'warning', 'info'],
      description: 'Color for custom variant'
    },
  },
};

// Default native radio
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

// Disabled
export const Disabled = {
  render: () => ({
    components: { DXRadio },
    setup() {
      const selected = ref('option1');
      return { selected };
    },
    template: `
      <div class="space-y-2">
        <DXRadio v-model="selected" value="option1" label="Selected and disabled" disabled />
        <DXRadio v-model="selected" value="option2" label="Not selected and disabled" disabled />
      </div>
    `,
  }),
};

// Sizes (default variant)
export const Sizes = {
  render: () => ({
    components: { DXRadio },
    setup() {
      const selected = ref('md');
      return { selected };
    },
    template: `
      <div class="space-y-3">
        <DXRadio v-model="selected" value="sm" size="sm" label="Small radio" />
        <DXRadio v-model="selected" value="md" size="md" label="Medium radio (default)" />
        <DXRadio v-model="selected" value="lg" size="lg" label="Large radio" />
      </div>
    `,
  }),
};

// Inline layout (horizontal)
export const InlineLayout = {
  render: () => ({
    components: { DXRadio },
    setup() {
      const selected = ref('option2');
      return { selected };
    },
    template: `
      <div>
        <p class="text-sm font-medium text-slate-700 mb-2">Select one option:</p>
        <div class="flex flex-wrap items-center">
          <DXRadio v-model="selected" value="option1" label="Option 1" />
          <DXRadio v-model="selected" value="option2" label="Option 2" />
          <DXRadio v-model="selected" value="option3" label="Option 3" />
          <DXRadio v-model="selected" value="option4" label="Option 4" />
        </div>
      </div>
    `,
  }),
};

// Custom variant with default dot
export const CustomDefault = {
  render: () => ({
    components: { DXRadio },
    setup() {
      const selected = ref('option2');
      return { selected };
    },
    template: `
      <div class="space-y-2">
        <DXRadio v-model="selected" value="option1" variant="custom" label="Option 1" />
        <DXRadio v-model="selected" value="option2" variant="custom" label="Option 2 (selected)" />
        <DXRadio v-model="selected" value="option3" variant="custom" label="Option 3" />
      </div>
    `,
  }),
};

// Custom colors
export const CustomColors = {
  render: () => ({
    components: { DXRadio },
    setup() {
      const selected = ref('primary');
      return { selected };
    },
    template: `
      <div class="space-y-3">
        <DXRadio v-model="selected" value="slate" variant="custom" color="slate" label="Slate" />
        <DXRadio v-model="selected" value="primary" variant="custom" color="primary" label="Primary (default)" />
        <DXRadio v-model="selected" value="success" variant="custom" color="success" label="Success" />
        <DXRadio v-model="selected" value="danger" variant="custom" color="danger" label="Danger" />
        <DXRadio v-model="selected" value="warning" variant="custom" color="warning" label="Warning" />
        <DXRadio v-model="selected" value="info" variant="custom" color="info" label="Info" />
      </div>
    `,
  }),
};

// Custom sizes
export const CustomSizes = {
  render: () => ({
    components: { DXRadio },
    setup() {
      const selected = ref('md');
      return { selected };
    },
    template: `
      <div class="space-y-3">
        <DXRadio v-model="selected" value="sm" variant="custom" size="sm" label="Small custom" />
        <DXRadio v-model="selected" value="md" variant="custom" size="md" label="Medium custom" />
        <DXRadio v-model="selected" value="lg" variant="custom" size="lg" label="Large custom" />
      </div>
    `,
  }),
};

// Custom inline layout
export const CustomInlineLayout = {
  render: () => ({
    components: { DXRadio },
    setup() {
      const plan = ref('pro');
      return { plan };
    },
    template: `
      <div>
        <p class="text-sm font-medium text-slate-700 mb-2">Select your plan:</p>
        <div class="flex flex-wrap items-center">
          <DXRadio v-model="plan" value="free" variant="custom" color="slate" label="Free" />
          <DXRadio v-model="plan" value="basic" variant="custom" color="info" label="Basic" />
          <DXRadio v-model="plan" value="pro" variant="custom" color="success" label="Pro" />
          <DXRadio v-model="plan" value="enterprise" variant="custom" color="primary" label="Enterprise" />
        </div>
      </div>
    `,
  }),
};

// Real-world example: Payment method
export const PaymentMethod = {
  render: () => ({
    components: { DXRadio },
    setup() {
      const method = ref('card');
      return { method };
    },
    template: `
      <div class="bg-white p-6 rounded-xl border border-slate-200 max-w-md">
        <h3 class="text-lg font-semibold text-slate-900 mb-4">Payment Method</h3>
        <div class="space-y-3">
          <DXRadio v-model="method" value="card" variant="custom" color="primary" label="Credit Card" />
          <DXRadio v-model="method" value="paypal" variant="custom" color="info" label="PayPal" />
          <DXRadio v-model="method" value="bank" variant="custom" color="success" label="Bank Transfer" />
          <DXRadio v-model="method" value="crypto" variant="custom" color="warning" label="Cryptocurrency" />
        </div>
      </div>
    `,
  }),
};

// Real-world example: Shipping options
export const ShippingOptions = {
  render: () => ({
    components: { DXRadio },
    setup() {
      const shipping = ref('standard');
      return { shipping };
    },
    template: `
      <div class="bg-white p-6 rounded-xl border border-slate-200 max-w-md">
        <h3 class="text-lg font-semibold text-slate-900 mb-4">Shipping Options</h3>
        <div class="space-y-3">
          <DXRadio v-model="shipping" value="standard" variant="custom" color="slate" label="Standard (5-7 days) - Free" />
          <DXRadio v-model="shipping" value="express" variant="custom" color="info" label="Express (2-3 days) - $9.99" />
          <DXRadio v-model="shipping" value="overnight" variant="custom" color="danger" label="Overnight (1 day) - $24.99" />
        </div>
      </div>
    `,
  }),
};

// Real-world example: Difficulty level
export const DifficultyLevel = {
  render: () => ({
    components: { DXRadio },
    setup() {
      const difficulty = ref('medium');
      return { difficulty };
    },
    template: `
      <div class="bg-white p-6 rounded-xl border border-slate-200 max-w-md">
        <h3 class="text-lg font-semibold text-slate-900 mb-4">Select Difficulty</h3>
        <div class="space-y-3">
          <DXRadio v-model="difficulty" value="easy" variant="custom" color="success" label="Easy - Perfect for beginners" />
          <DXRadio v-model="difficulty" value="medium" variant="custom" color="warning" label="Medium - Some experience needed" />
          <DXRadio v-model="difficulty" value="hard" variant="custom" color="danger" label="Hard - For experts only" />
        </div>
      </div>
    `,
  }),
};

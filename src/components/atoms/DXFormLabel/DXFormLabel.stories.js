import DXFormLabel from './DXFormLabel.vue';

export default {
  title: 'Atoms/DXFormLabel',
  component: DXFormLabel,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text'
    },
    error: {
      control: 'text',
      description: 'Error message'
    },
    helper: {
      control: 'text',
      description: 'Helper text'
    },
    success: {
      control: 'text',
      description: 'Success message'
    },
    required: {
      control: 'boolean',
      description: 'Show required asterisk'
    },
    showValidationIcon: {
      control: 'boolean',
      description: 'Show validation icon in messages'
    },
    maxLength: {
      control: 'number',
      description: 'Maximum length for character count'
    },
    currentLength: {
      control: 'number',
      description: 'Current length for character count'
    },
    showCount: {
      control: 'boolean',
      description: 'Show character count'
    },
  },
};

// Default story with label and helper
export const Default = {
  args: {
    label: 'Email Address',
    helper: 'We will never share your email with anyone else.',
  },
  render: (args) => ({
    components: { DXFormLabel },
    setup() {
      return { args };
    },
    template: `
      <DXFormLabel v-bind="args">
        <input 
          type="email" 
          placeholder="Enter your email"
          class="w-full h-10 px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        />
      </DXFormLabel>
    `,
  }),
};

// With error message
export const WithError = {
  args: {
    label: 'Username',
    error: 'Username is already taken',
    showValidationIcon: true,
  },
  render: (args) => ({
    components: { DXFormLabel },
    setup() {
      return { args };
    },
    template: `
      <DXFormLabel v-bind="args">
        <input 
          type="text" 
          placeholder="Choose a username"
          class="w-full h-10 px-4 py-2.5 text-sm rounded-xl border border-rose-300 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500/10"
        />
      </DXFormLabel>
    `,
  }),
};

// With required indicator
export const Required = {
  args: {
    label: 'Full Name',
    required: true,
    helper: 'Please enter your legal name',
  },
  render: (args) => ({
    components: { DXFormLabel },
    setup() {
      return { args };
    },
    template: `
      <DXFormLabel v-bind="args">
        <input 
          type="text" 
          placeholder="John Doe"
          class="w-full h-10 px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        />
      </DXFormLabel>
    `,
  }),
};

// With character count
export const WithCharacterCount = {
  args: {
    label: 'Bio',
    helper: 'Tell us about yourself',
    maxLength: 150,
    currentLength: 45,
    showCount: true,
  },
  render: (args) => ({
    components: { DXFormLabel },
    setup() {
      return { args };
    },
    template: `
      <DXFormLabel v-bind="args">
        <textarea 
          placeholder="Write your bio..."
          rows="3"
          class="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        >This is my bio text that takes up some space...</textarea>
      </DXFormLabel>
    `,
  }),
};

// With success message
export const WithSuccess = {
  args: {
    label: 'Email Verification',
    success: 'Email verified successfully!',
    showValidationIcon: true,
  },
  render: (args) => ({
    components: { DXFormLabel },
    setup() {
      return { args };
    },
    template: `
      <DXFormLabel v-bind="args">
        <input 
          type="email" 
          value="user@example.com"
          class="w-full h-10 px-4 py-2.5 text-sm rounded-xl border border-emerald-300 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/10"
        />
      </DXFormLabel>
    `,
  }),
};

// All features combined
export const Complete = {
  args: {
    label: 'Description',
    required: true,
    helper: 'Provide a detailed description',
    maxLength: 200,
    currentLength: 125,
    showCount: true,
  },
  render: (args) => ({
    components: { DXFormLabel },
    setup() {
      return { args };
    },
    template: `
      <DXFormLabel v-bind="args">
        <textarea 
          placeholder="Enter description..."
          rows="4"
          class="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</textarea>
      </DXFormLabel>
    `,
  }),
};


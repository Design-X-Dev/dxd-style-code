import DXCheckbox from './DXCheckbox.vue';
import { ref } from 'vue';
import { 
  CheckIcon, 
  XMarkIcon, 
  MinusIcon,
  HeartIcon,
  StarIcon,
  BoltIcon,
} from '@heroicons/vue/24/solid';

export default {
  title: 'Atoms/DXCheckbox',
  component: DXCheckbox,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'custom'],
      description: 'Checkbox variant'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Checkbox size'
    },
    shape: {
      control: 'select',
      options: ['square', 'circle'],
      description: 'Shape for custom variant'
    },
    color: {
      control: 'select',
      options: ['slate', 'primary', 'success', 'danger', 'warning', 'info'],
      description: 'Color for custom variant'
    },
    iconAnimation: {
      control: 'select',
      options: ['none', 'scale', 'wiggle'],
      description: 'Icon animation'
    },
  },
};

// Default native checkbox
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

// Checked state
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

// Disabled
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

// Sizes (default variant)
export const Sizes = {
  render: () => ({
    components: { DXCheckbox },
    setup() {
      const xs = ref(true);
      const sm = ref(true);
      const md = ref(true);
      const lg = ref(true);
      const xl = ref(true);
      return { xs, sm, md, lg, xl };
    },
    template: `
      <div class="space-y-4">
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Extra Small (12px)</p>
          <DXCheckbox v-model="xs" size="xs" label="Extra small checkbox" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Small (16px)</p>
          <DXCheckbox v-model="sm" size="sm" label="Small checkbox" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Medium (20px) - Default</p>
          <DXCheckbox v-model="md" size="md" label="Medium checkbox (default)" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Large (24px)</p>
          <DXCheckbox v-model="lg" size="lg" label="Large checkbox" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Extra Large (24px)</p>
          <DXCheckbox v-model="xl" size="xl" label="Extra large checkbox" />
        </div>
      </div>
    `,
  }),
};

// Multiple checkboxes in a row (horizontal layout)
export const InlineLayout = {
  render: () => ({
    components: { DXCheckbox },
    setup() {
      const option1 = ref(true);
      const option2 = ref(false);
      const option3 = ref(true);
      const option4 = ref(false);
      return { option1, option2, option3, option4 };
    },
    template: `
      <div>
        <p class="text-sm font-medium text-slate-700 mb-2">Select options:</p>
        <div class="flex flex-wrap items-center">
          <DXCheckbox v-model="option1" label="Option 1" />
          <DXCheckbox v-model="option2" label="Option 2" />
          <DXCheckbox v-model="option3" label="Option 3" />
          <DXCheckbox v-model="option4" label="Option 4" />
        </div>
      </div>
    `,
  }),
};

// Custom inline layout
export const CustomInlineLayout = {
  render: () => ({
    components: { DXCheckbox },
    setup() {
      const feature1 = ref(true);
      const feature2 = ref(true);
      const feature3 = ref(false);
      const feature4 = ref(true);
      return { feature1, feature2, feature3, feature4 };
    },
    template: `
      <div>
        <p class="text-sm font-medium text-slate-700 mb-2">Select features:</p>
        <div class="flex flex-wrap items-center">
          <DXCheckbox v-model="feature1" variant="custom" color="success" label="Feature A" />
          <DXCheckbox v-model="feature2" variant="custom" color="info" label="Feature B" />
          <DXCheckbox v-model="feature3" variant="custom" color="warning" label="Feature C" />
          <DXCheckbox v-model="feature4" variant="custom" color="primary" label="Feature D" />
        </div>
      </div>
    `,
  }),
};

// Custom variants with different icons
export const CustomIcons = {
  render: () => ({
    components: { DXCheckbox },
    setup() {
      const defaultCheck = ref(true);
      const xMark = ref(true);
      const minus = ref(true);
      const heart = ref(true);
      return { 
        defaultCheck, 
        xMark, 
        minus, 
        heart,
        XMarkIcon, 
        MinusIcon, 
        HeartIcon 
      };
    },
    template: `
      <div class="space-y-4">
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Default check icon</p>
          <DXCheckbox v-model="defaultCheck" variant="custom" label="Custom checkbox with check icon" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">X mark icon</p>
          <DXCheckbox v-model="xMark" variant="custom" :checked-icon="XMarkIcon" label="Mark as deleted" color="danger" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Minus icon (indeterminate style)</p>
          <DXCheckbox v-model="minus" variant="custom" :checked-icon="MinusIcon" label="Partially selected" color="warning" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Heart icon (circle shape)</p>
          <DXCheckbox v-model="heart" variant="custom" :checked-icon="HeartIcon" label="Add to favorites" color="danger" shape="circle" />
        </div>
      </div>
    `,
  }),
};

// All custom shapes
export const CustomShapes = {
  render: () => ({
    components: { DXCheckbox },
    setup() {
      const square = ref(true);
      const circle = ref(true);
      return { square, circle, CheckIcon };
    },
    template: `
      <div class="space-y-3">
        <DXCheckbox v-model="square" variant="custom" shape="square" label="Square (default)" />
        <DXCheckbox v-model="circle" variant="custom" shape="circle" label="Circle" />
      </div>
    `,
  }),
};

// All custom colors
export const CustomColors = {
  render: () => ({
    components: { DXCheckbox },
    setup() {
      const slate = ref(true);
      const primary = ref(true);
      const success = ref(true);
      const danger = ref(true);
      const warning = ref(true);
      const info = ref(true);
      return { slate, primary, success, danger, warning, info };
    },
    template: `
      <div class="space-y-3">
        <DXCheckbox v-model="slate" variant="custom" color="slate" label="Slate" />
        <DXCheckbox v-model="primary" variant="custom" color="primary" label="Primary (default)" />
        <DXCheckbox v-model="success" variant="custom" color="success" label="Success" />
        <DXCheckbox v-model="danger" variant="custom" color="danger" label="Danger" />
        <DXCheckbox v-model="warning" variant="custom" color="warning" label="Warning" />
        <DXCheckbox v-model="info" variant="custom" color="info" label="Info" />
      </div>
    `,
  }),
};

// Custom sizes
export const CustomSizes = {
  render: () => ({
    components: { DXCheckbox },
    setup() {
      const xs = ref(true);
      const sm = ref(true);
      const md = ref(true);
      const lg = ref(true);
      const xl = ref(true);
      return { xs, sm, md, lg, xl };
    },
    template: `
      <div class="space-y-4">
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Extra Small (12px)</p>
          <DXCheckbox v-model="xs" variant="custom" size="xs" label="Extra small custom" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Small (16px)</p>
          <DXCheckbox v-model="sm" variant="custom" size="sm" label="Small custom" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Medium (20px) - Default</p>
          <DXCheckbox v-model="md" variant="custom" size="md" label="Medium custom" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Large (24px)</p>
          <DXCheckbox v-model="lg" variant="custom" size="lg" label="Large custom" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Extra Large (24px)</p>
          <DXCheckbox v-model="xl" variant="custom" size="xl" label="Extra large custom" />
        </div>
      </div>
    `,
  }),
};


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
      options: ['sm', 'md', 'lg'],
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
      const sm = ref(true);
      const md = ref(true);
      const lg = ref(true);
      return { sm, md, lg };
    },
    template: `
      <div class="space-y-3">
        <DXCheckbox v-model="sm" size="sm" label="Small checkbox" />
        <DXCheckbox v-model="md" size="md" label="Medium checkbox (default)" />
        <DXCheckbox v-model="lg" size="lg" label="Large checkbox" />
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

// Custom variant with default check icon
export const CustomDefault = {
  render: () => ({
    components: { DXCheckbox },
    setup() {
      const checked = ref(true);
      return { checked };
    },
    template: '<DXCheckbox v-model="checked" variant="custom" label="Custom checkbox with check icon" />',
  }),
};

// Custom with X mark icon
export const CustomWithXMark = {
  render: () => ({
    components: { DXCheckbox },
    setup() {
      const checked = ref(true);
      return { checked, XMarkIcon };
    },
    template: '<DXCheckbox v-model="checked" variant="custom" :checked-icon="XMarkIcon" label="Mark as deleted" color="danger" />',
  }),
};

// Custom with minus icon (indeterminate style)
export const CustomWithMinus = {
  render: () => ({
    components: { DXCheckbox },
    setup() {
      const checked = ref(true);
      return { checked, MinusIcon };
    },
    template: '<DXCheckbox v-model="checked" variant="custom" :checked-icon="MinusIcon" label="Partially selected" color="warning" />',
  }),
};

// Custom with heart icon
export const CustomWithHeart = {
  render: () => ({
    components: { DXCheckbox },
    setup() {
      const liked = ref(true);
      return { liked, HeartIcon };
    },
    template: '<DXCheckbox v-model="liked" variant="custom" :checked-icon="HeartIcon" label="Add to favorites" color="danger" shape="circle" />',
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
      const sm = ref(true);
      const md = ref(true);
      const lg = ref(true);
      return { sm, md, lg };
    },
    template: `
      <div class="space-y-3">
        <DXCheckbox v-model="sm" variant="custom" size="sm" label="Small custom" />
        <DXCheckbox v-model="md" variant="custom" size="md" label="Medium custom" />
        <DXCheckbox v-model="lg" variant="custom" size="lg" label="Large custom" />
      </div>
    `,
  }),
};

// Icon showcase
export const IconShowcase = {
  render: () => ({
    components: { DXCheckbox },
    setup() {
      const check = ref(true);
      const xmark = ref(true);
      const minus = ref(true);
      const heart = ref(true);
      const star = ref(true);
      const bolt = ref(true);
      return { 
        check, xmark, minus, heart, star, bolt,
        CheckIcon, XMarkIcon, MinusIcon, HeartIcon, StarIcon, BoltIcon
      };
    },
    template: `
      <div class="space-y-3">
        <h3 class="text-sm font-semibold text-slate-700 mb-3">Different Icons</h3>
        <DXCheckbox v-model="check" variant="custom" :checked-icon="CheckIcon" color="success" label="Completed" />
        <DXCheckbox v-model="xmark" variant="custom" :checked-icon="XMarkIcon" color="danger" label="Rejected" />
        <DXCheckbox v-model="minus" variant="custom" :checked-icon="MinusIcon" color="warning" label="Partial" />
        <DXCheckbox v-model="heart" variant="custom" :checked-icon="HeartIcon" color="danger" shape="circle" label="Favorite" />
        <DXCheckbox v-model="star" variant="custom" :checked-icon="StarIcon" color="warning" shape="circle" label="Featured" />
        <DXCheckbox v-model="bolt" variant="custom" :checked-icon="BoltIcon" color="info" label="Priority" />
      </div>
    `,
  }),
};

// Real-world example: Task list
export const TaskList = {
  render: () => ({
    components: { DXCheckbox },
    setup() {
      const tasks = ref([
        { id: 1, text: 'Design mockups', done: true },
        { id: 2, text: 'Implement components', done: true },
        { id: 3, text: 'Write tests', done: false },
        { id: 4, text: 'Deploy to production', done: false },
      ]);
      return { tasks, CheckIcon };
    },
    template: `
      <div class="bg-white p-6 rounded-xl border border-slate-200 max-w-md">
        <h3 class="text-lg font-semibold text-slate-900 mb-4">Project Tasks</h3>
        <div class="space-y-3">
          <DXCheckbox 
            v-for="task in tasks" 
            :key="task.id"
            v-model="task.done" 
            variant="custom"
            color="success"
            :label="task.text"
          />
        </div>
      </div>
    `,
  }),
};

// Real-world example: Filters
export const FilterExample = {
  render: () => ({
    components: { DXCheckbox },
    setup() {
      const filters = ref({
        inStock: true,
        onSale: false,
        freeShipping: true,
        newArrivals: false,
      });
      return { filters };
    },
    template: `
      <div class="bg-white p-6 rounded-xl border border-slate-200 max-w-md">
        <h3 class="text-lg font-semibold text-slate-900 mb-4">Filters</h3>
        <div class="space-y-3">
          <DXCheckbox v-model="filters.inStock" variant="custom" color="success" label="In Stock" />
          <DXCheckbox v-model="filters.onSale" variant="custom" color="danger" label="On Sale" />
          <DXCheckbox v-model="filters.freeShipping" variant="custom" color="info" label="Free Shipping" />
          <DXCheckbox v-model="filters.newArrivals" variant="custom" color="warning" label="New Arrivals" />
        </div>
      </div>
    `,
  }),
};

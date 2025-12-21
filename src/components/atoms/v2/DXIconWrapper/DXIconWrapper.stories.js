import DXIconWrapper from './DXIconWrapper.vue';
import { MagnifyingGlassIcon, UserIcon, EnvelopeIcon, LockClosedIcon } from '@heroicons/vue/24/outline';

export default {
  title: 'Atoms/v2/DXIconWrapper',
  component: DXIconWrapper,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Icon position'
    },
    icon: {
      control: false,
      description: 'Heroicon component'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Icon size'
    },
    animation: {
      control: 'select',
      options: ['none', 'wiggle', 'scale', 'rotate'],
      description: 'Icon animation on hover'
    },
    iconClass: {
      control: 'text',
      description: 'Additional icon classes'
    },
    verticalAlign: {
      control: 'select',
      options: ['center', 'top'],
      description: 'Vertical positioning'
    },
  },
};

// Left position (default)
export const LeftPosition = {
  args: {
    position: 'left',
    icon: MagnifyingGlassIcon,
    size: 'sm',
    animation: 'none',
  },
  render: (args) => ({
    components: { DXIconWrapper },
    setup() {
      return { args };
    },
    template: `
      <div class="relative w-64">
        <DXIconWrapper v-bind="args" />
        <input 
          type="text" 
          placeholder="Search..."
          class="w-full h-10 pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        />
      </div>
    `,
  }),
};

// Right position
export const RightPosition = {
  args: {
    position: 'right',
    icon: UserIcon,
    size: 'sm',
    animation: 'scale',
  },
  render: (args) => ({
    components: { DXIconWrapper },
    setup() {
      return { args };
    },
    template: `
      <div class="relative w-64">
        <DXIconWrapper v-bind="args" />
        <input 
          type="text" 
          placeholder="Username"
          class="w-full h-10 px-4 pr-10 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        />
      </div>
    `,
  }),
};

// Top vertical align (for textarea)
export const TopAlign = {
  args: {
    position: 'left',
    icon: EnvelopeIcon,
    size: 'sm',
    animation: 'none',
    verticalAlign: 'top',
  },
  render: (args) => ({
    components: { DXIconWrapper },
    setup() {
      return { args };
    },
    template: `
      <div class="relative w-64">
        <DXIconWrapper v-bind="args" />
        <textarea 
          placeholder="Message..."
          rows="4"
          class="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        ></textarea>
      </div>
    `,
  }),
};

// Different icon sizes
export const IconSizes = {
  render: () => ({
    components: { DXIconWrapper },
    setup() {
      return { 
        MagnifyingGlassIcon,
        UserIcon,
        EnvelopeIcon,
        LockClosedIcon
      };
    },
    template: `
      <div class="space-y-4">
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Extra Small (xs)</p>
          <div class="relative w-64">
            <DXIconWrapper position="left" :icon="MagnifyingGlassIcon" size="xs" />
            <input 
              type="text" 
              placeholder="XS icon"
              class="w-full h-10 pl-9 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white"
            />
          </div>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Small (sm)</p>
          <div class="relative w-64">
            <DXIconWrapper position="left" :icon="UserIcon" size="sm" />
            <input 
              type="text" 
              placeholder="SM icon"
              class="w-full h-10 pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white"
            />
          </div>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Medium (md)</p>
          <div class="relative w-64">
            <DXIconWrapper position="left" :icon="EnvelopeIcon" size="md" />
            <input 
              type="text" 
              placeholder="MD icon"
              class="w-full h-10 pl-11 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white"
            />
          </div>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Large (lg)</p>
          <div class="relative w-64">
            <DXIconWrapper position="left" :icon="LockClosedIcon" size="lg" />
            <input 
              type="text" 
              placeholder="LG icon"
              class="w-full h-12 pl-12 pr-4 py-3 text-base rounded-xl border border-slate-200 bg-white"
            />
          </div>
        </div>
      </div>
    `,
  }),
};

// With animations
export const WithAnimations = {
  render: () => ({
    components: { DXIconWrapper },
    setup() {
      return { 
        MagnifyingGlassIcon,
        UserIcon,
        EnvelopeIcon
      };
    },
    template: `
      <div class="space-y-4">
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Scale animation (hover to see)</p>
          <div class="relative w-64">
            <DXIconWrapper position="left" :icon="MagnifyingGlassIcon" size="sm" animation="scale" />
            <input 
              type="text" 
              placeholder="Hover over icon"
              class="w-full h-10 pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white"
            />
          </div>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Wiggle animation (hover to see)</p>
          <div class="relative w-64">
            <DXIconWrapper position="left" :icon="UserIcon" size="sm" animation="wiggle" />
            <input 
              type="text" 
              placeholder="Hover over icon"
              class="w-full h-10 pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white"
            />
          </div>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Rotate animation (hover to see)</p>
          <div class="relative w-64">
            <DXIconWrapper position="left" :icon="EnvelopeIcon" size="sm" animation="rotate" />
            <input 
              type="text" 
              placeholder="Hover over icon"
              class="w-full h-10 pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white"
            />
          </div>
        </div>
      </div>
    `,
  }),
};


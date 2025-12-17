import DXSegmentedControl from './DXSegmentedControl.vue';
import { ref } from 'vue';
import {
  Squares2X2Icon,
  ListBulletIcon,
  TableCellsIcon,
  HomeIcon,
  UserIcon,
  Cog6ToothIcon,
  BellIcon,
  EnvelopeIcon,
  ChatBubbleLeftIcon,
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
  ChartBarIcon,
  DocumentTextIcon,
  PhotoIcon,
  VideoCameraIcon,
  MusicalNoteIcon,
} from '@heroicons/vue/24/outline';

export default {
  title: 'Molecules/DXSegmentedControl',
  component: DXSegmentedControl,
  tags: ['autodocs'],
  argTypes: {
    iconAnimation: {
      control: 'select',
      options: ['none', 'wiggle', 'scale', 'rotate'],
    },
  },
};

export const Default = {
  render: () => ({
    components: { DXSegmentedControl },
    setup() {
      const selected = ref('all');
      const options = [
        { value: 'all', label: 'All' },
        { value: 'active', label: 'Active' },
        { value: 'inactive', label: 'Inactive' },
      ];
      return { selected, options };
    },
    template: '<DXSegmentedControl v-model="selected" :options="options" />',
  }),
};

export const WithCounts = {
  render: () => ({
    components: { DXSegmentedControl },
    setup() {
      const selected = ref('all');
      const options = [
        { value: 'all', label: 'All', count: 42 },
        { value: 'active', label: 'Active', count: 28 },
        { value: 'archived', label: 'Archived', count: 14 },
      ];
      return { selected, options };
    },
    template: '<DXSegmentedControl v-model="selected" :options="options" />',
  }),
};

export const WithIcons = {
  render: () => ({
    components: { DXSegmentedControl },
    setup() {
      const view = ref('grid');
      const options = [
        { value: 'grid', icon: Squares2X2Icon, label: 'Grid' },
        { value: 'list', icon: ListBulletIcon, label: 'List' },
        { value: 'table', icon: TableCellsIcon, label: 'Table' },
      ];
      return { view, options };
    },
    template: '<DXSegmentedControl v-model="view" :options="options" />',
  }),
};

export const IconsOnly = {
  render: () => ({
    components: { DXSegmentedControl },
    setup() {
      const view = ref('grid');
      const options = [
        { value: 'grid', icon: Squares2X2Icon },
        { value: 'list', icon: ListBulletIcon },
        { value: 'table', icon: TableCellsIcon },
      ];
      return { view, options };
    },
    template: '<DXSegmentedControl v-model="view" :options="options" />',
  }),
};

export const Navigation = {
  render: () => ({
    components: { DXSegmentedControl },
    setup() {
      const page = ref('home');
      const options = [
        { value: 'home', icon: HomeIcon, label: 'Home' },
        { value: 'profile', icon: UserIcon, label: 'Profile' },
        { value: 'settings', icon: Cog6ToothIcon, label: 'Settings' },
      ];
      return { page, options };
    },
    template: '<DXSegmentedControl v-model="page" :options="options" />',
  }),
};

export const NotificationTypes = {
  render: () => ({
    components: { DXSegmentedControl },
    setup() {
      const type = ref('all');
      const options = [
        { value: 'all', icon: BellIcon, label: 'All', count: 42 },
        { value: 'email', icon: EnvelopeIcon, label: 'Email', count: 12 },
        { value: 'chat', icon: ChatBubbleLeftIcon, label: 'Chat', count: 30 },
      ];
      return { type, options };
    },
    template: '<DXSegmentedControl v-model="type" :options="options" />',
  }),
};

export const ThemeSelector = {
  render: () => ({
    components: { DXSegmentedControl },
    setup() {
      const theme = ref('light');
      const options = [
        { value: 'light', icon: SunIcon, label: 'Light' },
        { value: 'dark', icon: MoonIcon, label: 'Dark' },
        { value: 'auto', icon: ComputerDesktopIcon, label: 'Auto' },
      ];
      return { theme, options };
    },
    template: '<DXSegmentedControl v-model="theme" :options="options" />',
  }),
};

export const MediaTypes = {
  render: () => ({
    components: { DXSegmentedControl },
    setup() {
      const media = ref('all');
      const options = [
        { value: 'all', icon: DocumentTextIcon, count: 156 },
        { value: 'photos', icon: PhotoIcon, count: 89 },
        { value: 'videos', icon: VideoCameraIcon, count: 45 },
        { value: 'audio', icon: MusicalNoteIcon, count: 22 },
      ];
      return { media, options };
    },
    template: '<DXSegmentedControl v-model="media" :options="options" icon-animation="scale" />',
  }),
};

export const AnimatedIcons = {
  render: () => ({
    components: { DXSegmentedControl },
    setup() {
      const wiggle = ref('grid');
      const scale = ref('grid');
      const rotate = ref('grid');
      const options = [
        { value: 'grid', icon: Squares2X2Icon },
        { value: 'list', icon: ListBulletIcon },
        { value: 'table', icon: TableCellsIcon },
      ];
      return { wiggle, scale, rotate, options };
    },
    template: `
      <div class="space-y-6">
        <div>
          <p class="text-xs text-slate-500 mb-2">Wiggle Animation</p>
          <DXSegmentedControl v-model="wiggle" :options="options" icon-animation="wiggle" />
        </div>
        
        <div>
          <p class="text-xs text-slate-500 mb-2">Scale Animation</p>
          <DXSegmentedControl v-model="scale" :options="options" icon-animation="scale" />
        </div>
        
        <div>
          <p class="text-xs text-slate-500 mb-2">Rotate Animation</p>
          <DXSegmentedControl v-model="rotate" :options="options" icon-animation="rotate" />
        </div>
      </div>
    `,
  }),
};

export const AnimateAll = {
  render: () => ({
    components: { DXSegmentedControl },
    setup() {
      const view = ref('grid');
      const options = [
        { value: 'grid', icon: Squares2X2Icon, label: 'Grid' },
        { value: 'list', icon: ListBulletIcon, label: 'List' },
        { value: 'table', icon: TableCellsIcon, label: 'Table' },
      ];
      return { view, options };
    },
    template: '<DXSegmentedControl v-model="view" :options="options" icon-animation="wiggle" :animate-active-only="false" />',
  }),
};

export const Disabled = {
  render: () => ({
    components: { DXSegmentedControl },
    setup() {
      const selected = ref('option1');
      const options = [
        { value: 'option1', icon: HomeIcon, label: 'Option 1' },
        { value: 'option2', icon: UserIcon, label: 'Option 2' },
      ];
      return { selected, options };
    },
    template: '<DXSegmentedControl v-model="selected" :options="options" disabled />',
  }),
};

export const Interactive = {
  render: () => ({
    components: { DXSegmentedControl },
    setup() {
      const tab = ref('data');
      const options = [
        { value: 'data', icon: ChartBarIcon, label: 'Analytics', count: 24 },
        { value: 'messages', icon: EnvelopeIcon, label: 'Messages', count: 5 },
        { value: 'notifications', icon: BellIcon, label: 'Alerts', count: 12 },
      ];
      return { tab, options };
    },
    template: `
      <div class="p-6 bg-slate-50 rounded-xl space-y-4">
        <h3 class="text-lg font-semibold text-slate-900">Dashboard Tabs</h3>
        <DXSegmentedControl 
          v-model="tab" 
          :options="options" 
          icon-animation="wiggle"
        />
        <div class="p-4 bg-white rounded-lg border border-slate-200">
          <p class="text-sm text-slate-600">
            Current tab: <strong class="text-slate-900">{{ tab }}</strong>
          </p>
        </div>
      </div>
    `,
  }),
};

export const AllVariants = {
  render: () => ({
    components: { DXSegmentedControl },
    setup() {
      const simple = ref('all');
      const withCounts = ref('all');
      const withIcons = ref('grid');
      const iconsOnly = ref('grid');
      const animated = ref('grid');
      
      const simpleOptions = [
        { value: 'all', label: 'All' },
        { value: 'active', label: 'Active' },
        { value: 'inactive', label: 'Inactive' },
      ];
      
      const countOptions = [
        { value: 'all', label: 'All', count: 42 },
        { value: 'active', label: 'Active', count: 28 },
        { value: 'archived', label: 'Archived', count: 14 },
      ];
      
      const iconOptions = [
        { value: 'grid', icon: Squares2X2Icon, label: 'Grid' },
        { value: 'list', icon: ListBulletIcon, label: 'List' },
        { value: 'table', icon: TableCellsIcon, label: 'Table' },
      ];
      
      const iconOnlyOptions = [
        { value: 'grid', icon: Squares2X2Icon },
        { value: 'list', icon: ListBulletIcon },
        { value: 'table', icon: TableCellsIcon },
      ];
      
      return { simple, withCounts, withIcons, iconsOnly, animated, simpleOptions, countOptions, iconOptions, iconOnlyOptions };
    },
    template: `
      <div class="space-y-6">
        <div>
          <p class="text-xs text-slate-500 mb-2">Simple</p>
          <DXSegmentedControl v-model="simple" :options="simpleOptions" />
        </div>
        
        <div>
          <p class="text-xs text-slate-500 mb-2">With Counts</p>
          <DXSegmentedControl v-model="withCounts" :options="countOptions" />
        </div>
        
        <div>
          <p class="text-xs text-slate-500 mb-2">With Icons</p>
          <DXSegmentedControl v-model="withIcons" :options="iconOptions" />
        </div>
        
        <div>
          <p class="text-xs text-slate-500 mb-2">Icons Only</p>
          <DXSegmentedControl v-model="iconsOnly" :options="iconOnlyOptions" />
        </div>
        
        <div>
          <p class="text-xs text-slate-500 mb-2">Animated Icons</p>
          <DXSegmentedControl v-model="animated" :options="iconOnlyOptions" icon-animation="scale" />
        </div>
      </div>
    `,
  }),
};


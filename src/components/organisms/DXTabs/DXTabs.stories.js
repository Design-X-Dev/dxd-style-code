import DXTabs from './DXTabs.vue';
import { ref } from 'vue';
import {
  HomeIcon,
  UserIcon,
  Cog6ToothIcon,
  BellIcon,
  EnvelopeIcon,
  ChartBarIcon,
  DocumentTextIcon,
  PhotoIcon,
  VideoCameraIcon,
  MusicalNoteIcon,
  ShoppingCartIcon,
  HeartIcon,
  ClipboardDocumentListIcon,
} from '@heroicons/vue/24/outline';

export default {
  title: 'Organisms/DXTabs',
  component: DXTabs,
  tags: ['autodocs'],
  argTypes: {
    iconAnimation: {
      control: 'select',
      options: ['none', 'wiggle', 'scale', 'rotate'],
    },
  },
};

const tabs = [
  { value: 'overview', label: 'Overview' },
  { value: 'features', label: 'Features' },
  { value: 'pricing', label: 'Pricing' },
  { value: 'faq', label: 'FAQ' },
];

export const Default = {
  render: () => ({
    components: { DXTabs },
    setup() {
      const activeTab = ref('overview');
      return { activeTab, tabs };
    },
    template: '<DXTabs v-model="activeTab" :tabs="tabs" />',
  }),
};

export const WithCounts = {
  render: () => ({
    components: { DXTabs },
    setup() {
      const activeTab = ref('all');
      const tabsWithCount = [
        { value: 'all', label: 'All', count: 42 },
        { value: 'active', label: 'Active', count: 28 },
        { value: 'archived', label: 'Archived', count: 14 },
      ];
      return { activeTab, tabsWithCount };
    },
    template: '<DXTabs v-model="activeTab" :tabs="tabsWithCount" />',
  }),
};

// С иконками
export const WithIcons = {
  render: () => ({
    components: { DXTabs },
    setup() {
      const activeTab = ref('home');
      const tabsWithIcons = [
        { value: 'home', label: 'Home', icon: HomeIcon },
        { value: 'profile', label: 'Profile', icon: UserIcon },
        { value: 'settings', label: 'Settings', icon: Cog6ToothIcon },
      ];
      return { activeTab, tabsWithIcons };
    },
    template: '<DXTabs v-model="activeTab" :tabs="tabsWithIcons" />',
  }),
};

// Только иконки
export const IconsOnly = {
  render: () => ({
    components: { DXTabs },
    setup() {
      const activeTab = ref('home');
      const iconTabs = [
        { value: 'home', label: 'Home', icon: HomeIcon },
        { value: 'notifications', label: 'Notifications', icon: BellIcon },
        { value: 'messages', label: 'Messages', icon: EnvelopeIcon },
        { value: 'settings', label: 'Settings', icon: Cog6ToothIcon },
      ];
      return { activeTab, iconTabs };
    },
    template: '<DXTabs v-model="activeTab" :tabs="iconTabs" />',
  }),
};

// Иконки + счетчики
export const IconsWithCounts = {
  render: () => ({
    components: { DXTabs },
    setup() {
      const activeTab = ref('all');
      const tabs = [
        { value: 'all', label: 'All', icon: ClipboardDocumentListIcon, count: 42 },
        { value: 'favorites', label: 'Favorites', icon: HeartIcon, count: 12 },
        { value: 'cart', label: 'Cart', icon: ShoppingCartIcon, count: 3 },
      ];
      return { activeTab, tabs };
    },
    template: '<DXTabs v-model="activeTab" :tabs="tabs" />',
  }),
};

// Медиа типы
export const MediaTabs = {
  render: () => ({
    components: { DXTabs },
    setup() {
      const activeTab = ref('all');
      const tabs = [
        { value: 'all', label: 'All', icon: DocumentTextIcon, count: 156 },
        { value: 'photos', label: 'Photos', icon: PhotoIcon, count: 89 },
        { value: 'videos', label: 'Videos', icon: VideoCameraIcon, count: 45 },
        { value: 'audio', label: 'Audio', icon: MusicalNoteIcon, count: 22 },
      ];
      return { activeTab, tabs };
    },
    template: '<DXTabs v-model="activeTab" :tabs="tabs" />',
  }),
};

// Анимации
export const AnimatedIcons = {
  render: () => ({
    components: { DXTabs },
    setup() {
      const wiggle = ref('home');
      const scale = ref('home');
      const rotate = ref('home');
      const tabs = [
        { value: 'home', label: 'Home', icon: HomeIcon },
        { value: 'analytics', label: 'Analytics', icon: ChartBarIcon },
        { value: 'settings', label: 'Settings', icon: Cog6ToothIcon },
      ];
      return { wiggle, scale, rotate, tabs };
    },
    template: `
      <div class="space-y-6">
        <div>
          <p class="text-xs text-slate-500 mb-2">Wiggle Animation (default)</p>
          <DXTabs v-model="wiggle" :tabs="tabs" icon-animation="wiggle" />
        </div>
        
        <div>
          <p class="text-xs text-slate-500 mb-2">Scale Animation</p>
          <DXTabs v-model="scale" :tabs="tabs" icon-animation="scale" />
        </div>
        
        <div>
          <p class="text-xs text-slate-500 mb-2">Rotate Animation</p>
          <DXTabs v-model="rotate" :tabs="tabs" icon-animation="rotate" />
        </div>
      </div>
    `,
  }),
};

// Анимация всех иконок
export const AnimateAll = {
  render: () => ({
    components: { DXTabs },
    setup() {
      const activeTab = ref('home');
      const tabs = [
        { value: 'home', label: 'Home', icon: HomeIcon },
        { value: 'profile', label: 'Profile', icon: UserIcon },
        { value: 'messages', label: 'Messages', icon: EnvelopeIcon },
        { value: 'notifications', label: 'Notifications', icon: BellIcon },
      ];
      return { activeTab, tabs };
    },
    template: `
      <DXTabs 
        v-model="activeTab" 
        :tabs="tabs" 
        icon-animation="scale"
        :animate-active-only="false"
      />
    `,
  }),
};

// Кастомные анимации для каждого таба
export const CustomIconAnimations = {
  render: () => ({
    components: { DXTabs },
    setup() {
      const activeTab = ref('home');
      const tabs = [
        { value: 'home', label: 'Home', icon: HomeIcon, iconAnimation: 'wiggle' },
        { value: 'profile', label: 'Profile', icon: UserIcon, iconAnimation: 'scale' },
        { value: 'settings', label: 'Settings', icon: Cog6ToothIcon, iconAnimation: 'rotate' },
      ];
      return { activeTab, tabs };
    },
    template: '<DXTabs v-model="activeTab" :tabs="tabs" />',
  }),
};

// Все варианты
export const AllVariants = {
  render: () => ({
    components: { DXTabs },
    setup() {
      const tab1 = ref('overview');
      const tab2 = ref('all');
      const tab3 = ref('home');
      const tab4 = ref('all');
      
      const simple = [
        { value: 'overview', label: 'Overview' },
        { value: 'features', label: 'Features' },
        { value: 'pricing', label: 'Pricing' },
      ];
      
      const withCounts = [
        { value: 'all', label: 'All', count: 42 },
        { value: 'active', label: 'Active', count: 28 },
        { value: 'archived', label: 'Archived', count: 14 },
      ];
      
      const withIcons = [
        { value: 'home', label: 'Home', icon: HomeIcon },
        { value: 'profile', label: 'Profile', icon: UserIcon },
        { value: 'settings', label: 'Settings', icon: Cog6ToothIcon },
      ];
      
      const iconsCounts = [
        { value: 'all', label: 'All', icon: DocumentTextIcon, count: 156 },
        { value: 'photos', label: 'Photos', icon: PhotoIcon, count: 89 },
        { value: 'videos', label: 'Videos', icon: VideoCameraIcon, count: 45 },
      ];
      
      return { tab1, tab2, tab3, tab4, simple, withCounts, withIcons, iconsCounts };
    },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Simple</h3>
          <DXTabs v-model="tab1" :tabs="simple" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">With Counts</h3>
          <DXTabs v-model="tab2" :tabs="withCounts" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">With Icons</h3>
          <DXTabs v-model="tab3" :tabs="withIcons" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Icons + Counts + Animation</h3>
          <DXTabs v-model="tab4" :tabs="iconsCounts" icon-animation="scale" />
        </div>
      </div>
    `,
  }),
};


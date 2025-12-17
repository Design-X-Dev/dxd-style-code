import DXBreadcrumb from './DXBreadcrumb.vue';
import {
  HomeIcon,
  FolderIcon,
  DocumentTextIcon,
  ShoppingBagIcon,
  TagIcon,
  UserIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  InboxIcon,
  PhotoIcon,
  BuildingStorefrontIcon,
  ShoppingCartIcon,
} from '@heroicons/vue/24/outline';

export default {
  title: 'Molecules/DXBreadcrumb',
  component: DXBreadcrumb,
  tags: ['autodocs'],
  argTypes: {
    separator: { control: { type: 'select' }, options: ['slash', 'chevron'] },
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
    iconAnimation: { control: { type: 'select' }, options: ['none', 'wiggle', 'scale', 'rotate'] },
  },
};

const items = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Category', href: '/products/category' },
  { label: 'Current Page' },
];

export const Default = {
  args: { items },
};

export const WithSlash = {
  args: { items, separator: 'slash' },
};

export const Short = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Page' },
    ],
  },
};

// С иконками
export const WithIcons = {
  args: {
    items: [
      { label: 'Home', href: '/', icon: HomeIcon },
      { label: 'Products', href: '/products', icon: ShoppingBagIcon },
      { label: 'Category', href: '/products/category', icon: TagIcon },
      { label: 'Product Details', icon: DocumentTextIcon },
    ],
  },
};

export const IconsOnly = {
  args: {
    items: [
      { label: 'Home', href: '/', icon: HomeIcon },
      { label: 'Folder', href: '/folder', icon: FolderIcon },
      { label: 'Document', icon: DocumentTextIcon },
    ],
  },
};

export const Navigation = {
  args: {
    items: [
      { label: 'Dashboard', href: '/dashboard', icon: ChartBarIcon },
      { label: 'Settings', href: '/settings', icon: Cog6ToothIcon },
      { label: 'Profile', href: '/settings/profile', icon: UserIcon },
      { label: 'Edit Profile', icon: UserIcon },
    ],
  },
};

export const ECommerce = {
  args: {
    items: [
      { label: 'Store', href: '/', icon: BuildingStorefrontIcon },
      { label: 'Products', href: '/products', icon: ShoppingBagIcon },
      { label: 'Electronics', href: '/products/electronics', icon: TagIcon },
      { label: 'Laptops', href: '/products/electronics/laptops', icon: FolderIcon },
      { label: 'MacBook Pro', icon: DocumentTextIcon },
    ],
  },
};

export const FileSystem = {
  args: {
    items: [
      { label: 'Home', href: '/', icon: HomeIcon },
      { label: 'Documents', href: '/documents', icon: FolderIcon },
      { label: 'Projects', href: '/documents/projects', icon: FolderIcon },
      { label: 'Images', href: '/documents/projects/images', icon: PhotoIcon },
      { label: 'photo.jpg', icon: PhotoIcon },
    ],
  },
};

// С анимацией
export const WithAnimation = {
  args: {
    items: [
      { label: 'Home', href: '/', icon: HomeIcon },
      { label: 'Products', href: '/products', icon: ShoppingBagIcon },
      { label: 'Cart', icon: ShoppingCartIcon },
    ],
    iconAnimation: 'wiggle',
  },
};

export const AnimateCurrentOnly = {
  args: {
    items: [
      { label: 'Home', href: '/', icon: HomeIcon },
      { label: 'Inbox', href: '/inbox', icon: InboxIcon },
      { label: 'Message', icon: DocumentTextIcon },
    ],
    iconAnimation: 'scale',
    animateCurrentOnly: true,
  },
};

export const CustomIconAnimations = {
  args: {
    items: [
      { label: 'Home', href: '/', icon: HomeIcon, iconAnimation: 'wiggle' },
      { label: 'Products', href: '/products', icon: ShoppingBagIcon, iconAnimation: 'scale' },
      { label: 'Details', icon: DocumentTextIcon, iconAnimation: 'rotate' },
    ],
  },
};

export const Sizes = {
  render: () => ({
    components: { DXBreadcrumb },
    setup() { 
      const itemsWithIcons = [
        { label: 'Home', href: '/', icon: HomeIcon },
        { label: 'Products', href: '/products', icon: ShoppingBagIcon },
        { label: 'Details', icon: DocumentTextIcon },
      ];
      return { items, itemsWithIcons };
    },
    template: `
      <div class="space-y-6">
        <div>
          <p class="text-xs text-slate-500 mb-2">Small</p>
          <DXBreadcrumb :items="itemsWithIcons" size="sm" />
        </div>
        <div>
          <p class="text-xs text-slate-500 mb-2">Medium (default)</p>
          <DXBreadcrumb :items="itemsWithIcons" size="md" />
        </div>
        <div>
          <p class="text-xs text-slate-500 mb-2">Large</p>
          <DXBreadcrumb :items="itemsWithIcons" size="lg" />
        </div>
      </div>
    `,
  }),
};

export const AllVariants = {
  render: () => ({
    components: { DXBreadcrumb },
    setup() { 
      const simple = [
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'Current' },
      ];
      
      const withIcons = [
        { label: 'Home', href: '/', icon: HomeIcon },
        { label: 'Products', href: '/products', icon: ShoppingBagIcon },
        { label: 'Current', icon: DocumentTextIcon },
      ];
      
      const animated = [
        { label: 'Dashboard', href: '/', icon: ChartBarIcon },
        { label: 'Settings', href: '/settings', icon: Cog6ToothIcon },
        { label: 'Profile', icon: UserIcon },
      ];
      
      return { simple, withIcons, animated };
    },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Simple</h3>
          <DXBreadcrumb :items="simple" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">With Icons</h3>
          <DXBreadcrumb :items="withIcons" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">With Icons & Animation</h3>
          <DXBreadcrumb :items="animated" icon-animation="scale" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Slash Separator</h3>
          <DXBreadcrumb :items="withIcons" separator="slash" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Animate Current Only</h3>
          <DXBreadcrumb :items="animated" icon-animation="wiggle" animate-current-only />
        </div>
      </div>
    `,
  }),
};


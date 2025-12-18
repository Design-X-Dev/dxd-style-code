import { ref } from 'vue';
import DXSidebarMenu from './DXSidebarMenu.vue';
import DXButton from '../../atoms/DXButton/DXButton.vue';
import {
  HomeIcon,
  ChartBarIcon,
  UsersIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  FolderIcon,
  InboxIcon,
  CalendarIcon,
  BellIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/vue/24/outline';

export default {
  title: 'Organisms/DXSidebarMenu',
  component: DXSidebarMenu,
  tags: ['autodocs'],
  argTypes: {
    width: { control: { type: 'select' }, options: ['sm', 'md', 'lg', 'full'] },
  },
};

const menuSections = [
  {
    items: [
      { 
        id: 'home',
        label: 'Главная', 
        icon: HomeIcon, 
        to: '/home',
        badge: '5',
        badgeVariant: 'danger'
      },
      { 
        id: 'analytics',
        label: 'Аналитика', 
        icon: ChartBarIcon, 
        to: '/analytics',
      },
      { 
        id: 'users',
        label: 'Пользователи', 
        icon: UsersIcon, 
        to: '/users',
        badge: '12',
        badgeVariant: 'info'
      },
    ],
  },
  {
    title: 'Контент',
    items: [
      { 
        id: 'documents',
        label: 'Документы', 
        icon: DocumentTextIcon,
        children: [
          { id: 'all-docs', label: 'Все документы', to: '/documents/all' },
          { id: 'my-docs', label: 'Мои документы', to: '/documents/my' },
          { id: 'shared', label: 'Общие', to: '/documents/shared', badge: '3' },
        ]
      },
      { 
        id: 'folders',
        label: 'Папки', 
        icon: FolderIcon, 
        to: '/folders'
      },
      { 
        id: 'inbox',
        label: 'Входящие', 
        icon: InboxIcon, 
        to: '/inbox',
        badge: '25',
        badgeVariant: 'success'
      },
    ],
  },
  {
    title: 'Управление',
    items: [
      { 
        id: 'calendar',
        label: 'Календарь', 
        icon: CalendarIcon, 
        to: '/calendar'
      },
      { 
        id: 'notifications',
        label: 'Уведомления', 
        icon: BellIcon, 
        to: '/notifications',
        badge: '99+',
        badgeVariant: 'warning'
      },
      { 
        id: 'settings',
        label: 'Настройки', 
        icon: Cog6ToothIcon,
        children: [
          { id: 'profile', label: 'Профиль', to: '/settings/profile' },
          { id: 'security', label: 'Безопасность', to: '/settings/security' },
          { id: 'notifications-settings', label: 'Уведомления', to: '/settings/notifications' },
        ]
      },
    ],
  },
];

const ecommerceSections = [
  {
    items: [
      { id: 'home', label: 'Главная', icon: HomeIcon, to: '/' },
      { 
        id: 'orders', 
        label: 'Заказы', 
        icon: ShoppingCartIcon, 
        to: '/orders',
        badge: '8',
        badgeVariant: 'danger'
      },
    ],
  },
  {
    title: 'Продажи',
    items: [
      { id: 'products', label: 'Товары', icon: InboxIcon, to: '/products' },
      { 
        id: 'customers', 
        label: 'Клиенты', 
        icon: UsersIcon, 
        to: '/customers',
        badge: '156'
      },
      { id: 'payments', label: 'Платежи', icon: CreditCardIcon, to: '/payments' },
    ],
  },
  {
    title: 'Отчеты',
    items: [
      { id: 'analytics', label: 'Аналитика', icon: ChartBarIcon, to: '/analytics' },
      { id: 'reports', label: 'Отчеты', icon: DocumentTextIcon, to: '/reports' },
    ],
  },
];

export const Default = {
  render: (args) => ({
    components: { DXSidebarMenu },
    setup() {
      const activeItem = ref('/home');
      
      const handleItemClick = (item) => {
        console.log('Clicked:', item);
        activeItem.value = item.to || item.id;
      };
      
      return { args, menuSections, activeItem, handleItemClick };
    },
    template: `
      <div class="h-screen flex">
        <DXSidebarMenu 
          v-bind="args"
          :sections="menuSections"
          :activeItem="activeItem"
          @item-click="handleItemClick"
        />
        <div class="flex-1 p-8 bg-slate-50">
          <h1 class="text-2xl font-bold mb-4">Основной контент</h1>
          <p class="text-slate-600">Активный элемент: {{ activeItem }}</p>
        </div>
      </div>
    `,
  }),
  args: {
    title: 'Меню',
    width: 'md',
    collapsible: true,
    searchable: false,
    fixed: false,
    bordered: true,
  },
};

export const WithSearch = {
  render: () => ({
    components: { DXSidebarMenu },
    setup() {
      const activeItem = ref('/home');
      return { menuSections, activeItem };
    },
    template: `
      <div class="h-screen flex">
        <DXSidebarMenu 
          title="Навигация"
          :sections="menuSections"
          :activeItem="activeItem"
          searchable
        />
        <div class="flex-1 p-8 bg-slate-50">
          <h1 class="text-2xl font-bold">Контент страницы</h1>
        </div>
      </div>
    `,
  }),
};

export const Compact = {
  render: () => ({
    components: { DXSidebarMenu },
    setup() {
      const activeItem = ref('/home');
      const compact = ref(true);
      return { menuSections, activeItem, compact };
    },
    template: `
      <div class="h-screen flex">
        <DXSidebarMenu 
          :sections="menuSections"
          :activeItem="activeItem"
          :compact="compact"
          collapsible
          @update:compact="compact = $event"
        />
        <div class="flex-1 p-8 bg-slate-50">
          <h1 class="text-2xl font-bold">Компактный режим</h1>
          <p class="text-slate-600 mt-2">Кликните на иконку стрелки, чтобы развернуть</p>
        </div>
      </div>
    `,
  }),
};

export const EcommerceExample = {
  render: () => ({
    components: { DXSidebarMenu, DXButton },
    setup() {
      const activeItem = ref('/');
      
      const handleItemClick = (item) => {
        activeItem.value = item.to || item.id;
      };
      
      return { ecommerceSections, activeItem, handleItemClick, UserCircleIcon, ArrowRightOnRectangleIcon };
    },
    template: `
      <div class="h-screen flex">
        <DXSidebarMenu 
          :sections="ecommerceSections"
          :activeItem="activeItem"
          width="md"
          searchable
          @item-click="handleItemClick"
        >
          <template #header>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <div class="flex-1">
                <h2 class="text-sm font-bold text-slate-900">Shop Admin</h2>
                <p class="text-xs text-slate-500">v1.0.0</p>
              </div>
            </div>
          </template>
          
          <template #footer>
            <div class="space-y-2">
              <button class="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">
                <component :is="UserCircleIcon" class="w-5 h-5" />
                <span class="text-sm font-medium">Профиль</span>
              </button>
              <button class="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-rose-600 hover:bg-rose-50 transition-colors">
                <component :is="ArrowRightOnRectangleIcon" class="w-5 h-5" />
                <span class="text-sm font-medium">Выйти</span>
              </button>
            </div>
          </template>
        </DXSidebarMenu>
        
        <div class="flex-1 p-8 bg-slate-50">
          <h1 class="text-2xl font-bold mb-4">E-commerce Dashboard</h1>
          <p class="text-slate-600">Активная страница: <code class="bg-white px-2 py-1 rounded">{{ activeItem }}</code></p>
        </div>
      </div>
    `,
  }),
};

export const WithCustomHeader = {
  render: () => ({
    components: { DXSidebarMenu },
    setup() {
      const activeItem = ref('/home');
      return { menuSections, activeItem };
    },
    template: `
      <div class="h-screen flex">
        <DXSidebarMenu 
          :sections="menuSections"
          :activeItem="activeItem"
        >
          <template #header>
            <div class="flex items-center gap-3 w-full">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <span class="text-white font-bold text-lg">D</span>
              </div>
              <div class="flex-1">
                <h2 class="text-sm font-bold text-slate-900">DXD System</h2>
                <p class="text-xs text-slate-500">Design & Development</p>
              </div>
            </div>
          </template>
        </DXSidebarMenu>
        <div class="flex-1 p-8 bg-slate-50">
          <h1 class="text-2xl font-bold">Кастомный заголовок</h1>
        </div>
      </div>
    `,
  }),
};

export const DifferentWidths = {
  render: () => ({
    components: { DXSidebarMenu },
    setup() {
      const activeItem = ref('/home');
      const width = ref('sm');
      
      const widthOptions = ['sm', 'md', 'lg'];
      
      const toggleWidth = () => {
        const currentIndex = widthOptions.indexOf(width.value);
        width.value = widthOptions[(currentIndex + 1) % widthOptions.length];
      };
      
      return { menuSections, activeItem, width, toggleWidth };
    },
    template: `
      <div class="h-screen flex">
        <DXSidebarMenu 
          title="Меню"
          :sections="menuSections"
          :activeItem="activeItem"
          :width="width"
        />
        <div class="flex-1 p-8 bg-slate-50">
          <h1 class="text-2xl font-bold mb-4">Разные размеры</h1>
          <p class="text-slate-600 mb-4">Текущая ширина: <strong>{{ width }}</strong></p>
          <button 
            @click="toggleWidth"
            class="px-4 py-2 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition"
          >
            Изменить ширину
          </button>
        </div>
      </div>
    `,
  }),
};


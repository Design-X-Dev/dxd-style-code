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

export const Default = {
  render: () => ({
    components: { DXSidebarMenu },
    setup() {
      const activeItem = ref('/home');
      
      // Данные меню - видны в "Show code"
      const sections = [
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
          ],
        },
      ];
      
      const handleItemClick = (item) => {
        console.log('Clicked:', item);
        activeItem.value = item.to || item.id;
      };
      
      return { sections, activeItem, handleItemClick };
    },
    template: `
      <div class="h-screen flex">
        <DXSidebarMenu 
          title="Меню"
          width="md"
          :collapsible="true"
          :searchable="false"
          :bordered="true"
          :sections="sections"
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
};

export const WithSearch = {
  render: () => ({
    components: { DXSidebarMenu },
    setup() {
      const activeItem = ref('/home');
      
      const sections = [
        {
          items: [
            { id: 'home', label: 'Главная', icon: HomeIcon, to: '/home' },
            { id: 'analytics', label: 'Аналитика', icon: ChartBarIcon, to: '/analytics' },
            { id: 'users', label: 'Пользователи', icon: UsersIcon, to: '/users', badge: '12' },
          ],
        },
        {
          title: 'Контент',
          items: [
            { id: 'documents', label: 'Документы', icon: DocumentTextIcon, to: '/documents' },
            { id: 'folders', label: 'Папки', icon: FolderIcon, to: '/folders' },
            { id: 'inbox', label: 'Входящие', icon: InboxIcon, to: '/inbox', badge: '25' },
          ],
        },
      ];
      
      return { sections, activeItem };
    },
    template: `
      <div class="h-screen flex">
        <DXSidebarMenu 
          title="Навигация"
          :sections="sections"
          :activeItem="activeItem"
          searchable
        />
        <div class="flex-1 p-8 bg-slate-50">
          <h1 class="text-2xl font-bold">Поиск по меню</h1>
          <p class="text-slate-600 mt-2">Начните вводить название пункта меню</p>
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
      
      const sections = [
        {
          items: [
            { id: 'home', label: 'Главная', icon: HomeIcon, to: '/home' },
            { id: 'analytics', label: 'Аналитика', icon: ChartBarIcon, to: '/analytics' },
            { id: 'users', label: 'Пользователи', icon: UsersIcon, to: '/users' },
          ],
        },
        {
          title: 'Настройки',
          items: [
            { id: 'calendar', label: 'Календарь', icon: CalendarIcon, to: '/calendar' },
            { id: 'settings', label: 'Настройки', icon: Cog6ToothIcon, to: '/settings' },
          ],
        },
      ];
      
      return { sections, activeItem, compact };
    },
    template: `
      <div class="h-screen flex">
        <DXSidebarMenu 
          :sections="sections"
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

export const SimpleExample = {
  render: () => ({
    components: { DXSidebarMenu },
    setup() {
      const activeItem = ref('/');
      
      // Минимальный пример данных
      const sections = [
        {
          items: [
            { id: 'home', label: 'Главная', icon: HomeIcon, to: '/' },
            { id: 'users', label: 'Пользователи', icon: UsersIcon, to: '/users' },
            { id: 'settings', label: 'Настройки', icon: Cog6ToothIcon, to: '/settings' },
          ]
        }
      ];
      
      return { sections, activeItem };
    },
    template: `
      <div class="h-screen flex">
        <DXSidebarMenu 
          title="Простое меню"
          :sections="sections"
          :activeItem="activeItem"
        />
        <main class="flex-1 p-8 bg-slate-50">
          <h1 class="text-2xl font-bold">Минимальный пример</h1>
        </main>
      </div>
    `,
  }),
};

export const WithBadges = {
  render: () => ({
    components: { DXSidebarMenu },
    setup() {
      const activeItem = ref('/home');
      
      const sections = [
        {
          items: [
            { 
              id: 'home', 
              label: 'Главная', 
              icon: HomeIcon, 
              to: '/home' 
            },
            { 
              id: 'inbox', 
              label: 'Входящие', 
              icon: InboxIcon, 
              to: '/inbox',
              badge: '25',
              badgeVariant: 'danger'
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
              id: 'users', 
              label: 'Пользователи', 
              icon: UsersIcon, 
              to: '/users',
              badge: '156',
              badgeVariant: 'info'
            },
          ]
        }
      ];
      
      return { sections, activeItem };
    },
    template: `
      <div class="h-screen flex">
        <DXSidebarMenu 
          title="Со счетчиками"
          :sections="sections"
          :activeItem="activeItem"
        />
        <div class="flex-1 p-8 bg-slate-50">
          <h1 class="text-2xl font-bold">Badges/Счетчики</h1>
          <p class="text-slate-600 mt-2">Варианты: info, success, warning, danger</p>
        </div>
      </div>
    `,
  }),
};

export const WithSubmenu = {
  render: () => ({
    components: { DXSidebarMenu },
    setup() {
      const activeItem = ref('/home');
      
      const sections = [
        {
          items: [
            { id: 'home', label: 'Главная', icon: HomeIcon, to: '/home' },
            { 
              id: 'settings',
              label: 'Настройки', 
              icon: Cog6ToothIcon,
              children: [
                { id: 'profile', label: 'Профиль', to: '/settings/profile' },
                { id: 'security', label: 'Безопасность', to: '/settings/security' },
                { id: 'notifications', label: 'Уведомления', to: '/settings/notifications' },
              ]
            },
          ]
        }
      ];
      
      return { sections, activeItem };
    },
    template: `
      <div class="h-screen flex">
        <DXSidebarMenu 
          title="С подменю"
          :sections="sections"
          :activeItem="activeItem"
        />
        <div class="flex-1 p-8 bg-slate-50">
          <h1 class="text-2xl font-bold">Вложенное меню</h1>
          <p class="text-slate-600 mt-2">Кликните на "Настройки" чтобы раскрыть подменю</p>
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
      
      const sections = [
        {
          items: [
            { id: 'home', label: 'Главная', icon: HomeIcon, to: '/home' },
            { id: 'analytics', label: 'Аналитика', icon: ChartBarIcon, to: '/analytics' },
            { id: 'users', label: 'Пользователи', icon: UsersIcon, to: '/users' },
          ]
        }
      ];
      
      return { sections, activeItem };
    },
    template: `
      <div class="h-screen flex">
        <DXSidebarMenu 
          :sections="sections"
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

export const EcommerceExample = {
  render: () => ({
    components: { DXSidebarMenu, DXButton },
    setup() {
      const activeItem = ref('/');
      
      const sections = [
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
          ]
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
          ]
        },
        {
          title: 'Отчеты',
          items: [
            { id: 'analytics', label: 'Аналитика', icon: ChartBarIcon, to: '/analytics' },
            { id: 'reports', label: 'Отчеты', icon: DocumentTextIcon, to: '/reports' },
          ]
        }
      ];
      
      const handleItemClick = (item) => {
        activeItem.value = item.to || item.id;
      };
      
      return { sections, activeItem, handleItemClick, UserCircleIcon, ArrowRightOnRectangleIcon };
    },
    template: `
      <div class="h-screen flex">
        <DXSidebarMenu 
          :sections="sections"
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

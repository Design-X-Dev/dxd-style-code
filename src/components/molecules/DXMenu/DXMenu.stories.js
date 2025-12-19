import { ref } from 'vue';
import DXMenu from './DXMenu.vue';
import {
  HomeIcon,
  ChartBarIcon,
  UsersIcon,
  DocumentTextIcon,
  FolderIcon,
  Cog6ToothIcon,
} from '@heroicons/vue/24/outline';

export default {
  title: 'Molecules/DXMenu',
  component: DXMenu,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['vertical', 'horizontal'],
      description: 'Направление меню: vertical, horizontal'
    },
    showHeader: {
      control: { type: 'boolean' },
      description: 'Показывать header (undefined = автоматически)'
    },
    headerSize: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    },
    cardVariant: {
      control: { type: 'select' },
      options: ['default', 'bordered', 'elevated', 'flat']
    },
    cardPadding: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg']
    },
  },
};

// Общие данные меню для примеров
const menuSections = [
  {
    items: [
      { 
        id: 'home',
        label: 'Главная', 
        icon: HomeIcon, 
        to: '/home',
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
          { id: 'shared', label: 'Общие', to: '/documents/shared', badge: '3', badgeVariant: 'warning' },
        ]
      },
      { 
        id: 'folders',
        label: 'Папки', 
        icon: FolderIcon, 
        to: '/folders'
      },
      { 
        id: 'settings',
        label: 'Настройки', 
        icon: Cog6ToothIcon, 
        to: '/settings'
      },
    ],
  },
];

// Контентный блок-заглушка
const ContentPlaceholder = `
  <div class="flex-1 bg-slate-50 rounded-xl border-2 border-dashed border-slate-300 p-8 flex items-center justify-center">
    <div class="text-center">
      <div class="text-4xl mb-2">📄</div>
      <h3 class="text-lg font-semibold text-slate-700">Content Area</h3>
      <p class="text-sm text-slate-500">Main content goes here</p>
    </div>
  </div>
`;

// 1. Playground (интерактивный с контентом)
export const Playground = {
  args: {
    title: 'Навигация',
    sections: menuSections,
    direction: 'vertical',
    compact: false,
    collapsible: true,
    searchable: true,
    showHeader: undefined,
    headerSize: 'md',
    cardPadding: 'none',
    cardVariant: 'default',
  },
  render: (args) => ({
    components: { DXMenu },
    setup() {
      const activeItem = ref('/home');
      const handleItemClick = (item) => {
        console.log('Clicked:', item);
        activeItem.value = item.to || item.id;
      };
      return { args, activeItem, handleItemClick };
    },
    template: `
      <div :class="args.direction === 'horizontal' ? 'flex flex-col gap-4' : 'flex gap-4'" class="h-[600px] bg-white p-4">
        <DXMenu 
          v-bind="args"
          :activeItem="activeItem"
          :class="args.direction === 'horizontal' ? 'w-full' : 'w-80'"
          @item-click="handleItemClick"
          @update:compact="args.compact = $event"
        />
        ${ContentPlaceholder}
      </div>
    `,
  }),
};

// 2. Vertical (базовый вертикальный с submenu)
export const Vertical = {
  render: () => ({
    components: { DXMenu },
    setup() {
      const activeItem = ref('/home');
      const handleItemClick = (item) => {
        activeItem.value = item.to || item.id;
      };
      return { menuSections, activeItem, handleItemClick };
    },
    template: `
      <div class="flex gap-4 h-[600px] bg-white p-4">
        <DXMenu 
          title="Меню"
          :sections="menuSections"
          :activeItem="activeItem"
          class="w-80"
          @item-click="handleItemClick"
        />
        ${ContentPlaceholder}
      </div>
    `,
  }),
};

// 3. VerticalCompact (компактный)
export const VerticalCompact = {
  render: () => ({
    components: { DXMenu },
    setup() {
      const activeItem = ref('/home');
      const handleItemClick = (item) => {
        activeItem.value = item.to || item.id;
      };
      return { menuSections, activeItem, handleItemClick };
    },
    template: `
      <div class="flex gap-4 h-[600px] bg-white p-4">
        <DXMenu 
          :sections="menuSections"
          :activeItem="activeItem"
          :compact="true"
          @item-click="handleItemClick"
        />
        ${ContentPlaceholder}
      </div>
    `,
  }),
};

// 4. VerticalCollapsible (переключаемый)
export const VerticalCollapsible = {
  render: () => ({
    components: { DXMenu },
    setup() {
      const activeItem = ref('/home');
      const compact = ref(false);
      const handleItemClick = (item) => {
        activeItem.value = item.to || item.id;
      };
      return { menuSections, activeItem, compact, handleItemClick };
    },
    template: `
      <div class="flex gap-4 h-[600px] bg-white p-4">
        <DXMenu 
          title="Панель"
          :sections="menuSections"
          :activeItem="activeItem"
          :compact="compact"
          collapsible
          searchable
          @update:compact="compact = $event"
          @item-click="handleItemClick"
        />
        ${ContentPlaceholder}
      </div>
    `,
  }),
};

// 5. VerticalWithSubmenu (акцент на submenu)
export const VerticalWithSubmenu = {
  render: () => ({
    components: { DXMenu },
    setup() {
      const activeItem = ref('/documents/my');
      const sections = [
        {
          title: 'Файлы',
          items: [
            { 
              id: 'documents',
              label: 'Документы', 
              icon: DocumentTextIcon,
              children: [
                { id: 'all-docs', label: 'Все документы', to: '/documents/all' },
                { id: 'my-docs', label: 'Мои документы', to: '/documents/my' },
                { id: 'shared', label: 'Общие', to: '/documents/shared', badge: '5', badgeVariant: 'info' },
                { id: 'archived', label: 'Архив', to: '/documents/archived' },
              ]
            },
            { 
              id: 'folders',
              label: 'Папки', 
              icon: FolderIcon,
              children: [
                { id: 'work', label: 'Рабочие', to: '/folders/work' },
                { id: 'personal', label: 'Личные', to: '/folders/personal' },
              ]
            },
          ],
        },
      ];
      const handleItemClick = (item) => {
        activeItem.value = item.to || item.id;
      };
      return { sections, activeItem, handleItemClick };
    },
    template: `
      <div class="flex gap-4 h-[600px] bg-white p-4">
        <DXMenu 
          title="Submenu Demo"
          :sections="sections"
          :activeItem="activeItem"
          class="w-80"
          @item-click="handleItemClick"
        />
        ${ContentPlaceholder}
      </div>
    `,
  }),
};

// 6. Horizontal (базовый горизонтальный)
export const Horizontal = {
  render: () => ({
    components: { DXMenu },
    setup() {
      const activeItem = ref('/home');
      const handleItemClick = (item) => {
        activeItem.value = item.to || item.id;
      };
      return { menuSections, activeItem, handleItemClick };
    },
    template: `
      <div class="flex flex-col gap-4 h-[600px] bg-white p-4">
        <DXMenu 
          title="Навигация"
          :sections="menuSections"
          :activeItem="activeItem"
          direction="horizontal"
          class="w-full"
          @item-click="handleItemClick"
        />
        ${ContentPlaceholder}
      </div>
    `,
  }),
};

// 7. HorizontalWithSubmenu (с dropdown)
export const HorizontalWithSubmenu = {
  render: () => ({
    components: { DXMenu },
    setup() {
      const activeItem = ref('/home');
      const sections = [
        {
          items: [
            { id: 'home', label: 'Главная', icon: HomeIcon, to: '/home' },
            { 
              id: 'documents',
              label: 'Документы', 
              icon: DocumentTextIcon,
              children: [
                { id: 'all-docs', label: 'Все документы', to: '/documents/all' },
                { id: 'my-docs', label: 'Мои документы', to: '/documents/my' },
                { id: 'shared', label: 'Общие', to: '/documents/shared', badge: '3', badgeVariant: 'info' },
              ]
            },
            { id: 'users', label: 'Пользователи', icon: UsersIcon, to: '/users' },
            { id: 'settings', label: 'Настройки', icon: Cog6ToothIcon, to: '/settings' },
          ],
        },
      ];
      const handleItemClick = (item) => {
        activeItem.value = item.to || item.id;
      };
      return { sections, activeItem, handleItemClick };
    },
    template: `
      <div class="flex flex-col gap-4 h-[600px] bg-white p-4">
        <DXMenu 
          title="Dropdown Demo"
          :sections="sections"
          :activeItem="activeItem"
          direction="horizontal"
          class="w-full"
          @item-click="handleItemClick"
        />
        ${ContentPlaceholder}
      </div>
    `,
  }),
};

// 8. NavbarStyle (чистый navbar)
export const NavbarStyle = {
  render: () => ({
    components: { DXMenu },
    setup() {
      const activeItem = ref('/home');
      const handleItemClick = (item) => {
        activeItem.value = item.to || item.id;
      };
      return { menuSections, activeItem, handleItemClick };
    },
    template: `
      <div class="flex flex-col gap-4 h-[600px] bg-white p-4">
        <DXMenu 
          :sections="menuSections"
          :activeItem="activeItem"
          direction="horizontal"
          :showHeader="false"
          cardVariant="flat"
          class="w-full"
          @item-click="handleItemClick"
        />
        ${ContentPlaceholder}
      </div>
    `,
  }),
};

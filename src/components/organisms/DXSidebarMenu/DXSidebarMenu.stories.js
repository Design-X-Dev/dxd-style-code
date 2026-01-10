import { ref } from 'vue';
import DXSidebarMenu from './DXSidebarMenu.vue';
import DXButton from '../../atoms/DXButton/DXButton.vue';
import DXCard from '../../atoms/DXCard/DXCard.vue';
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
  tags: ['autodocs', 'category:navigation', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Компонент меню боковой панели с поддержкой секций, вложенных элементов, поиска и compact режима.

## Назначение

DXSidebarMenu предоставляет полнофункциональное меню для боковой панели с поддержкой
секций, вложенных элементов (children), иконок, badges, поиска и компактного режима.
Компонент автоматически управляет активным элементом и поддерживает роутинг.

## Архитектура

### Использует
- \`DXNav\` - для обертки навигации
- \`DXSidebarMenuItem\` - для элементов меню
- \`DXInput\` - для поиска
- \`DXIcon\` - для иконок
- \`DXDivider\` - для разделителей
- \`DXHeading\` - для заголовка
- \`useMenu\` composable - для логики меню

### Используется в
- \`DXSidebar\` - для боковой панели
- \`DXAppLayout\` - для навигации приложения
- Самостоятельные боковые меню

## Внутренняя логика

### Структура данных
Меню состоит из секций, каждая секция содержит массив элементов:
\`\`\`
[{
  title?: 'Section Title',
  items: [{
    id: 'item-id',
    label: 'Item Label',
    icon?: Icon,
    to?: '/path',
    badge?: '5',
    badgeVariant?: 'danger',
    children?: [...]
  }]
}]
\`\`\`

### Поиск
При \`searchable={true}\` и \`!compact\`:
- Отображается поисковая строка
- Фильтруются элементы меню по \`label\`
- Поиск нечувствителен к регистру

### Compact режим
При \`compact={true}\`:
- Скрывается текст, показываются только иконки
- Скрываются заголовки секций (показываются разделители)
- Скрывается поиск
- Скрывается футер
- Меню становится компактным

### Collapsible
При \`collapsible={true}\`:
- Отображается кнопка для переключения compact режима
- Кнопка автоматически позиционируется

### Активный элемент
Активный элемент определяется через:
- \`activeItem\` prop (приоритет)
- \`$route.path\` (если используется Vue Router)
- Сравнение \`to\` с текущим маршрутом

### Вложенные элементы
Элементы могут иметь \`children\` для создания вложенной структуры:
- Вложенные элементы отображаются при клике на родительский
- Поддерживается многоуровневая вложенность

## Особенности

### Слоты
- **header** - кастомный заголовок
- **footer** - кастомный футер (скрывается в compact режиме)

### Ширина
Поддерживает 4 варианта ширины:
- **sm** - маленькая
- **md** - средняя (по умолчанию)
- **lg** - большая
- **full** - на всю ширину

### Badges
Элементы могут иметь badges для отображения счетчиков:
- \`badge\` - текст badge
- \`badgeVariant\` - вариант badge (danger, info, success и т.д.)

### Роутинг
Поддерживает интеграцию с Vue Router через \`to\` prop в элементах меню.
        `,
      },
    },
  },
  argTypes: {
    showHeader: {
      control: { type: 'boolean' },
      description: 'Показывать header (undefined = автоматически)'
    },
    headerSize: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    },
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

export const InsideCard = {
  render: () => ({
    components: { DXSidebarMenu, DXCard },
    setup() {
      const activeItem = ref('/home');
      
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
          title: 'Настройки',
          items: [
            { 
              id: 'calendar',
              label: 'Календарь', 
              icon: CalendarIcon, 
              to: '/calendar'
            },
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
          ],
        },
      ];
      
      const handleItemClick = (item) => {
        activeItem.value = item.to || item.id;
      };
      
      return { sections, activeItem, handleItemClick };
    },
    template: `
      <div class="p-8 bg-slate-50 min-h-screen">
        <h1 class="text-2xl font-bold mb-6">Меню внутри карточки</h1>
        
        <div class="grid grid-cols-3 gap-6">
          <!-- Меню в карточке -->
          <DXCard class="col-span-1">
            <DXSidebarMenu 
              title="Навигация"
              :sections="sections"
              :activeItem="activeItem"
              variant="embedded"
              :collapsible="false"
              :bordered="false"
              @item-click="handleItemClick"
            />
          </DXCard>
          
          <!-- Основной контент -->
          <div class="col-span-2">
            <DXCard>
              <h2 class="text-xl font-semibold mb-4">Контент страницы</h2>
              <p class="text-slate-600 mb-4">
                Меню находится в карточке слева. Используйте <code class="bg-slate-100 px-2 py-1 rounded">variant="embedded"</code> 
                для встраивания меню в контейнеры.
              </p>
              <div class="p-4 bg-slate-50 rounded-lg">
                <p class="text-sm font-medium text-slate-700 mb-2">Активный элемент:</p>
                <code class="text-sm bg-white px-3 py-2 rounded border border-slate-200">{{ activeItem }}</code>
              </div>
            </DXCard>
          </div>
        </div>
      </div>
    `,
  }),
};

// 10. NoHeader - без header
export const NoHeader = {
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
          ],
        },
      ];
      const handleItemClick = (item) => {
        activeItem.value = item.to || item.id;
      };
      return { sections, activeItem, handleItemClick };
    },
    template: `
      <div class="h-screen flex">
        <DXSidebarMenu 
          :sections="sections"
          :activeItem="activeItem"
          :showHeader="false"
          @item-click="handleItemClick"
        />
        <div class="flex-1 p-8">
          <h2 class="text-2xl font-bold">Sidebar без header</h2>
        </div>
      </div>
    `,
  }),
};

// 11. SmallHeader - компактный header
export const SmallHeader = {
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
          ],
        },
      ];
      const handleItemClick = (item) => {
        activeItem.value = item.to || item.id;
      };
      return { sections, activeItem, handleItemClick };
    },
    template: `
      <div class="h-screen flex">
        <DXSidebarMenu 
          title="Компактный"
          :sections="sections"
          :activeItem="activeItem"
          headerSize="sm"
          @item-click="handleItemClick"
        />
        <div class="flex-1 p-8">
          <h2 class="text-2xl font-bold">Маленький header (sm)</h2>
        </div>
      </div>
    `,
  }),
};

// 12. LargeHeader - большой header
export const LargeHeader = {
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
          ],
        },
      ];
      const handleItemClick = (item) => {
        activeItem.value = item.to || item.id;
      };
      return { sections, activeItem, handleItemClick };
    },
    template: `
      <div class="h-screen flex">
        <DXSidebarMenu 
          title="Большой заголовок"
          :sections="sections"
          :activeItem="activeItem"
          headerSize="lg"
          @item-click="handleItemClick"
        />
        <div class="flex-1 p-8">
          <h2 class="text-2xl font-bold">Большой header (lg)</h2>
        </div>
      </div>
    `,
  }),
};

// 13. AutoHideHeader - автоматическое скрытие header
export const AutoHideHeader = {
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
          ],
        },
      ];
      const handleItemClick = (item) => {
        activeItem.value = item.to || item.id;
      };
      return { sections, activeItem, handleItemClick };
    },
    template: `
      <div class="h-screen flex">
        <DXSidebarMenu 
          :sections="sections"
          :activeItem="activeItem"
          :collapsible="false"
          @item-click="handleItemClick"
        />
        <div class="flex-1 p-8">
          <h2 class="text-2xl font-bold">Header скрывается автоматически</h2>
          <p class="text-slate-600 mt-2">Нет title, слота header и collapsible=false</p>
        </div>
      </div>
    `,
  }),
};

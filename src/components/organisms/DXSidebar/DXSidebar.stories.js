import { ref } from 'vue';
import DXSidebar from './DXSidebar.vue';
import DXSidebarMenu from '../DXSidebarMenu/DXSidebarMenu.vue';
import DXButton from '../../atoms/DXButton/DXButton.vue';
import DXIcon from '../../atoms/DXIcon/DXIcon.vue';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';

export default {
  title: 'Organisms/DXSidebar',
  component: DXSidebar,
  tags: ['autodocs', 'category:navigation', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Обертка для боковой панели с поддержкой различных режимов отображения и анимаций.

## Назначение

DXSidebar предоставляет гибкую обертку для боковой панели навигации с поддержкой
различных режимов отображения, коллапсирования и адаптивного поведения.

## Архитектура

### Использует
- \`DXBackdrop\` - для overlay режима
- \`DXSidebarMenu\` - для меню (через slot)
- \`useClassComposition\` composable - для стилей
- \`useAnimation\` composable - для transitions

### Используется в
- \`DXAppLayout\` - для боковой навигации
- Самостоятельные боковые панели
- Панели фильтров

## Внутренняя логика

### Режимы отображения
- **overlay**: Сайдбар накладывается поверх контента с backdrop
- **push**: Сайдбар сдвигает контент вправо
- **static**: Сайдбар в обычном потоке документа

### Коллапсирование
При \`collapsed={true}\` сайдбар уменьшается до минимальной ширины,
показывая только иконки (если используется DXSidebarMenu).

### Адаптивность
На мобильных устройствах сайдбар скрывается (кроме overlay режима).

## Особенности

### Slots
- \`header\` - заголовок сайдбара
- \`content\` - основной контент (обычно DXSidebarMenu)
- \`footer\` - нижняя секция

### Анимации
Переходы между состояниями анимируются через CSS transitions.
        `,
      },
    },
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Открыт ли сайдбар.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Behavior',
      },
    },
    mode: {
      control: 'select',
      options: ['overlay', 'push', 'static'],
      description: 'Режим отображения: overlay (поверх контента) | push (сдвигает контент) | static (в потоке).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'static' },
        category: 'Layout',
      },
    },
    width: {
      control: 'number',
      min: 200,
      max: 400,
      step: 10,
      description: 'Ширина сайдбара в пикселях (когда развернут).',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '256' },
        category: 'Layout',
      },
    },
    collapsedWidth: {
      control: 'number',
      min: 50,
      max: 100,
      step: 5,
      description: 'Ширина сайдбара в пикселях (когда свернут).',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '64' },
        category: 'Layout',
      },
    },
    collapsed: {
      control: 'boolean',
      description: 'Свернут ли сайдбар.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
  },
};

const menuSections = [
  {
    title: 'Основное',
    items: [
      { id: 1, label: 'Главная', href: '/', icon: 'HomeIcon' },
      { id: 2, label: 'Проекты', href: '/projects', icon: 'FolderIcon' },
      { id: 3, label: 'Задачи', href: '/tasks', icon: 'CheckIcon' },
    ],
  },
  {
    title: 'Настройки',
    items: [
      { id: 4, label: 'Профиль', href: '/profile', icon: 'UserIcon' },
      { id: 5, label: 'Настройки', href: '/settings', icon: 'CogIcon' },
    ],
  },
];

export const Default = {
  args: {
    mode: 'static',
    open: true,
    collapsed: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовый сайдбар в static режиме с меню.',
      },
    },
  },
  render: (args) => ({
    components: { DXSidebar, DXSidebarMenu },
    setup() {
      return { args, menuSections };
    },
    template: `
      <DXSidebar v-bind="args">
        <template #header>
          <h2 class="text-lg font-semibold text-slate-900">Меню</h2>
        </template>
        <template #content>
          <DXSidebarMenu :sections="menuSections" />
        </template>
      </DXSidebar>
    `,
  }),
};

export const OverlayMode = {
  args: {
    mode: 'overlay',
    open: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Сайдбар в overlay режиме. Накладывается поверх контента с backdrop.',
      },
    },
  },
  render: (args) => ({
    components: { DXSidebar, DXSidebarMenu, DXButton },
    setup() {
      const open = ref(args.open);
      return { open, args, menuSections };
    },
    template: `
      <div>
        <DXButton @click="open = !open">
          {{ open ? 'Закрыть' : 'Открыть' }} сайдбар
        </DXButton>
        <DXSidebar v-model:open="open" v-bind="args">
          <template #header>
            <h2 class="text-lg font-semibold text-slate-900">Меню</h2>
          </template>
          <template #content>
            <DXSidebarMenu :sections="menuSections" />
          </template>
        </DXSidebar>
      </div>
    `,
  }),
};

export const Collapsible = {
  args: {
    mode: 'static',
    open: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Коллапсируемый сайдбар. Используйте контролы для переключения состояния.',
      },
    },
  },
  render: (args) => ({
    components: { DXSidebar, DXSidebarMenu, DXButton, DXIcon },
    setup() {
      const collapsed = ref(false);
      return { collapsed, args, menuSections, ChevronLeftIcon, ChevronRightIcon };
    },
    template: `
      <DXSidebar v-bind="args" :collapsed="collapsed">
        <template #header>
          <div class="flex items-center justify-between">
            <h2 v-if="!collapsed" class="text-lg font-semibold text-slate-900">Меню</h2>
            <DXButton
              variant="ghost"
              size="sm"
              @click="collapsed = !collapsed"
            >
              <template #icon>
                <DXIcon :icon="collapsed ? ChevronRightIcon : ChevronLeftIcon" size="sm" />
              </template>
            </DXButton>
          </div>
        </template>
        <template #content>
          <DXSidebarMenu :sections="menuSections" :compact="collapsed" />
        </template>
      </DXSidebar>
    `,
  }),
};

export const WithFooter = {
  args: {
    mode: 'static',
    open: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Сайдбар с footer секцией.',
      },
    },
  },
  render: (args) => ({
    components: { DXSidebar, DXSidebarMenu },
    setup() {
      return { args, menuSections };
    },
    template: `
      <DXSidebar v-bind="args">
        <template #header>
          <h2 class="text-lg font-semibold text-slate-900">Меню</h2>
        </template>
        <template #content>
          <DXSidebarMenu :sections="menuSections" />
        </template>
        <template #footer>
          <p class="text-xs text-slate-500">© 2024 My App</p>
        </template>
      </DXSidebar>
    `,
  }),
};

export const PushMode = {
  args: {
    mode: 'push',
    open: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Сайдбар в push режиме. Сдвигает контент вправо при открытии.',
      },
    },
  },
  render: (args) => ({
    components: { DXSidebar, DXSidebarMenu },
    setup() {
      return { args, menuSections };
    },
    template: `
      <div class="flex">
        <DXSidebar v-bind="args">
          <template #header>
            <h2 class="text-lg font-semibold text-slate-900">Меню</h2>
          </template>
          <template #content>
            <DXSidebarMenu :sections="menuSections" />
          </template>
        </DXSidebar>
        <div class="flex-1 p-8 bg-slate-50">
          <h1 class="text-2xl font-bold mb-4">Контент</h1>
          <p class="text-slate-600">Этот контент сдвигается вправо при открытии сайдбара.</p>
        </div>
      </div>
    `,
  }),
};


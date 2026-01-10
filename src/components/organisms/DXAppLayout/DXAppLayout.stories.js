import { ref } from 'vue';
import DXAppLayout from './DXAppLayout.vue';
import DXHeaderBar from '../DXHeaderBar/DXHeaderBar.vue';
import DXSidebarMenu from '../DXSidebarMenu/DXSidebarMenu.vue';
import DXContainer from '../../atoms/DXContainer/DXContainer.vue';
import DXLink from '../../atoms/DXLink/DXLink.vue';
import DXButton from '../../atoms/DXButton/DXButton.vue';
import DXAvatar from '../../atoms/DXAvatar/DXAvatar.vue';
import DXDropdown from '../DXDropdown/DXDropdown.vue';
import DXInput from '../../molecules/DXInput/DXInput.vue';
import DXIcon from '../../atoms/DXIcon/DXIcon.vue';
import DXTabs from '../DXTabs/DXTabs.vue';
import DXHeading from '../../atoms/DXHeading/DXHeading.vue';
import DXText from '../../atoms/DXText/DXText.vue';
import { MagnifyingGlassIcon, BellIcon, Bars3Icon } from '@heroicons/vue/24/outline';

export default {
  title: 'Organisms/DXAppLayout',
  component: DXAppLayout,
  tags: ['autodocs', 'category:navigation'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      inlineStories: false,
      iframeHeight: 800,
      description: {
        component: `
Основной макет приложения, объединяющий header, sidebar, content и footer с поддержкой различных вариантов для разных задач.

## Назначение

DXAppLayout предоставляет стандартизированную структуру для приложений с:
- Верхней панелью (header)
- Боковой навигацией (sidebar)
- Основным контентом (content)
- Нижним колонтитулом (footer)

## Варианты Layout

### Dashboard (по умолчанию)
Для дашбордов с множеством виджетов. Полнофункциональный header и sidebar, grid-based контентная область.

### Content-Focused
Для блогов, статей, документации. Минималистичный header, широкий контент без sidebar (или скрываемый), фокус на читаемости.

### Minimal
Для простых приложений. Только header и content, без sidebar и footer. Максимальная простота.

### Split
Для приложений с двумя панелями (редакторы, сравнение). Два контентных слота (content-left, content-right) с разделителем.

### Tabbed
Для приложений с вкладками. Header с табами (используется DXTabs), контент переключается через табы.

## Архитектура

### Использует
- \`useClassComposition\` - для композиции классов
- \`useSpacing\` - для управления отступами
- \`useCustomDataAttributes\` - для data-атрибутов
- \`DXHeaderBar\` - для верхней панели
- \`DXSidebarMenu\` - для боковой навигации
- \`DXContainer\` - для контентной области
- \`DXBackdrop\` - для overlay режима сайдбара

### Используется в
- Основной макет всех страниц приложения
- Админ-панели и дашборды
- Приложения с боковой навигацией
- Блоги и документация
- Редакторы и инструменты разработки

## Внутренняя логика

### Режимы сайдбара
- **overlay**: Сайдбар накладывается поверх контента с backdrop
- **push**: Сайдбар сдвигает контент вправо
- **static**: Сайдбар в обычном потоке документа

### Адаптивность
- На мобильных устройствах сайдбар скрывается (кроме overlay режима)
- В overlay режиме сайдбар открывается поверх контента
- Использует \`useSpacing\` для адаптивных отступов

### Управление состоянием
- \`sidebarCollapsed\` - управляет свернутым состоянием
- \`sidebarMode\` - определяет режим отображения
- \`variant\` - определяет вариант layout
- События \`sidebar-toggle\` и \`sidebar-collapse\` для синхронизации состояния

## Особенности

### Slots
- \`header\` - верхняя панель (обычно DXHeaderBar)
- \`sidebar\` - боковая панель (обычно DXSidebarMenu)
- \`content\` - основной контент страницы (для всех вариантов кроме split)
- \`content-left\` - левая панель (только для split варианта)
- \`content-right\` - правая панель (только для split варианта)
- \`footer\` - нижний колонтитул (скрыт для minimal варианта)

### Семантическая структура
Использует семантические HTML теги: \`<header>\`, \`<aside>\`, \`<main>\`, \`<footer>\`.

### Spacing Props
Все отступы управляются через props (\`headerPadding\`, \`contentPadding\`, \`sidebarPadding\`, \`footerPadding\`) с использованием \`useSpacing\` composable.
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['dashboard', 'content', 'minimal', 'split', 'tabbed'],
      description: 'Вариант layout для разных задач приложения.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'dashboard' },
        category: 'Layout',
      },
    },
    sidebarMode: {
      control: 'select',
      options: ['overlay', 'push', 'static'],
      description: 'Режим отображения сайдбара: overlay (поверх контента), push (сдвигает контент), static (в потоке).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'static' },
        category: 'Sidebar',
      },
    },
    sidebarCollapsed: {
      control: 'boolean',
      description: 'Свернут ли сайдбар.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Sidebar',
      },
    },
    sidebarWidth: {
      control: 'number',
      description: 'Ширина сайдбара в пикселях (когда развернут).',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '256' },
        category: 'Sidebar',
      },
    },
    sidebarCollapsedWidth: {
      control: 'number',
      description: 'Ширина сайдбара в пикселях (когда свернут).',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '64' },
        category: 'Sidebar',
      },
    },
    showSidebarOnMobile: {
      control: 'boolean',
      description: 'Показывать сайдбар на мобильных устройствах.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Sidebar',
      },
    },
    backdropBlur: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
      description: 'Уровень размытия backdrop для overlay режима.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'sm' },
        category: 'Sidebar',
      },
    },
    headerPadding: {
      control: 'select',
      options: ['', 'none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Отступы header секции.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Spacing',
      },
    },
    contentPadding: {
      control: 'select',
      options: ['', 'none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Отступы контентной области.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Spacing',
      },
    },
    sidebarPadding: {
      control: 'select',
      options: ['', 'none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Отступы sidebar секции.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Spacing',
      },
    },
    footerPadding: {
      control: 'select',
      options: ['', 'none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Отступы footer секции.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Spacing',
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
    variant: 'dashboard',
    sidebarMode: 'static',
    sidebarCollapsed: false,
  },
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 800,
      description: {
        story: 'Базовый layout с header, sidebar и content в static режиме.',
      },
    },
  },
  render: (args) => ({
    components: { DXAppLayout, DXHeaderBar, DXSidebarMenu, DXContainer },
    setup() {
      return { args, menuSections };
    },
    template: `
      <DXAppLayout v-bind="args">
        <template #header>
          <DXHeaderBar app-name="My Application" />
        </template>
        <template #sidebar>
          <DXSidebarMenu :sections="menuSections" />
        </template>
        <template #content>
          <DXContainer>
            <DXHeading level="1" size="2xl" weight="bold" class="mb-4">Добро пожаловать</DXHeading>
            <DXText tag="p" color="muted">Это основной контент страницы.</DXText>
          </DXContainer>
        </template>
      </DXAppLayout>
    `,
  }),
};

export const WithFullHeader = {
  args: {
    sidebarMode: 'static',
    sidebarCollapsed: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Layout с полнофункциональным header (навигация, поиск, действия).',
      },
    },
  },
  render: (args) => ({
    components: { DXAppLayout, DXHeaderBar, DXSidebarMenu, DXContainer, DXLink, DXInput, DXButton, DXAvatar, DXDropdown, DXIcon },
    setup() {
      const searchQuery = ref('');
      return { args, menuSections, searchQuery, MagnifyingGlassIcon, BellIcon };
    },
    template: `
      <DXAppLayout v-bind="args">
        <template #header>
          <DXHeaderBar app-name="My Application">
            <template #navigation>
              <DXLink href="/dashboard" variant="ghost">Дашборд</DXLink>
              <DXLink href="/projects" variant="ghost">Проекты</DXLink>
            </template>
            <template #search>
              <DXInput
                v-model="searchQuery"
                placeholder="Поиск..."
                size="sm"
              >
                <template #prefix>
                  <DXIcon :icon="MagnifyingGlassIcon" size="sm" class="text-slate-400" />
                </template>
              </DXInput>
            </template>
            <template #actions>
              <DXButton variant="ghost" size="sm">
                <template #icon>
                  <DXIcon :icon="BellIcon" size="md" />
                </template>
              </DXButton>
              <DXDropdown>
                <template #trigger>
                  <DXAvatar src="https://via.placeholder.com/40x40" size="sm" />
                </template>
                <div class="p-2">
                  <div class="px-3 py-2 text-sm text-slate-700">Профиль</div>
                  <div class="px-3 py-2 text-sm text-slate-700">Настройки</div>
                  <div class="px-3 py-2 text-sm text-slate-700">Выйти</div>
                </div>
              </DXDropdown>
            </template>
          </DXHeaderBar>
        </template>
        <template #sidebar>
          <DXSidebarMenu :sections="menuSections" />
        </template>
        <template #content>
          <DXContainer>
            <DXHeading level="1" size="2xl" weight="bold" class="mb-4">Дашборд</DXHeading>
            <DXText tag="p" color="muted">Основной контент страницы.</DXText>
          </DXContainer>
        </template>
      </DXAppLayout>
    `,
  }),
};

export const OverlayMode = {
  args: {
    sidebarMode: 'overlay',
    sidebarCollapsed: false,
  },
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 800,
      description: {
        story: 'Layout с overlay режимом сайдбара. Сайдбар накладывается поверх контента с backdrop.',
      },
    },
  },
  render: (args) => ({
    components: { DXAppLayout, DXHeaderBar, DXSidebarMenu, DXContainer },
    setup() {
      return { args, menuSections };
    },
    template: `
      <DXAppLayout v-bind="args">
        <template #header>
          <DXHeaderBar app-name="My Application" />
        </template>
        <template #sidebar>
          <DXSidebarMenu :sections="menuSections" />
        </template>
        <template #content>
          <DXContainer>
            <DXHeading level="1" size="2xl" weight="bold" class="mb-4">Overlay Mode</DXHeading>
            <DXText tag="p" color="muted">Сайдбар накладывается поверх контента.</DXText>
          </DXContainer>
        </template>
      </DXAppLayout>
    `,
  }),
};

export const PushMode = {
  args: {
    sidebarMode: 'push',
    sidebarCollapsed: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Layout с push режимом сайдбара. Сайдбар сдвигает контент вправо.',
      },
    },
  },
  render: (args) => ({
    components: { DXAppLayout, DXHeaderBar, DXSidebarMenu, DXContainer },
    setup() {
      return { args, menuSections };
    },
    template: `
      <DXAppLayout v-bind="args">
        <template #header>
          <DXHeaderBar app-name="My Application" />
        </template>
        <template #sidebar>
          <DXSidebarMenu :sections="menuSections" />
        </template>
        <template #content>
          <DXContainer>
            <DXHeading level="1" size="2xl" weight="bold" class="mb-4">Push Mode</DXHeading>
            <DXText tag="p" color="muted">Сайдбар сдвигает контент вправо.</DXText>
          </DXContainer>
        </template>
      </DXAppLayout>
    `,
  }),
};

export const WithFooter = {
  args: {
    sidebarMode: 'static',
    sidebarCollapsed: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Layout с footer секцией.',
      },
    },
  },
  render: (args) => ({
    components: { DXAppLayout, DXHeaderBar, DXSidebarMenu, DXContainer },
    setup() {
      return { args, menuSections };
    },
    template: `
      <DXAppLayout v-bind="args">
        <template #header>
          <DXHeaderBar app-name="My Application" />
        </template>
        <template #sidebar>
          <DXSidebarMenu :sections="menuSections" />
        </template>
        <template #content>
          <DXContainer>
            <DXHeading level="1" size="2xl" weight="bold" class="mb-4">Контент</DXHeading>
            <DXText tag="p" color="muted">Основной контент страницы.</DXText>
          </DXContainer>
        </template>
        <template #footer>
          <footer class="bg-white border-t border-slate-200 py-4">
            <DXContainer>
              <p class="text-sm text-slate-500 text-center">© 2024 My Application. Все права защищены.</p>
            </DXContainer>
          </footer>
        </template>
      </DXAppLayout>
    `,
  }),
};

export const CollapsibleSidebar = {
  args: {
    sidebarMode: 'static',
    sidebarCollapsed: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Layout с коллапсируемым сайдбаром. Используйте контролы для переключения состояния.',
      },
    },
  },
  render: (args) => ({
    components: { DXAppLayout, DXHeaderBar, DXSidebarMenu, DXContainer, DXButton },
    setup() {
      const collapsed = ref(false);
      return { args, menuSections, collapsed };
    },
    template: `
      <DXAppLayout v-bind="args" :sidebar-collapsed="collapsed">
        <template #header>
          <DXHeaderBar app-name="My Application">
            <template #actions>
              <DXButton @click="collapsed = !collapsed" variant="ghost" size="sm">
                {{ collapsed ? 'Развернуть' : 'Свернуть' }}
              </DXButton>
            </template>
          </DXHeaderBar>
        </template>
        <template #sidebar>
          <DXSidebarMenu :sections="menuSections" :compact="collapsed" />
        </template>
        <template #content>
          <DXContainer>
            <DXHeading level="1" size="2xl" weight="bold" class="mb-4">Коллапсируемый сайдбар</DXHeading>
            <DXText tag="p" color="muted">Используйте кнопку в header для переключения состояния сайдбара.</DXText>
          </DXContainer>
        </template>
      </DXAppLayout>
    `,
  }),
};

export const ContentFocused = {
  args: {
    variant: 'content',
    sidebarMode: 'overlay',
    sidebarCollapsed: true,
    contentPadding: 'lg',
  },
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 800,
      description: {
        story: 'Content-focused вариант для блогов, статей и документации. Минималистичный header, широкий контент, sidebar скрыт по умолчанию.',
      },
    },
  },
  render: (args) => ({
    components: { DXAppLayout, DXHeaderBar, DXSidebarMenu, DXContainer },
    setup() {
      return { args, menuSections };
    },
    template: `
      <DXAppLayout v-bind="args">
        <template #header>
          <DXHeaderBar app-name="My Blog" />
        </template>
        <template #sidebar>
          <DXSidebarMenu :sections="menuSections" />
        </template>
        <template #content>
          <DXContainer size="lg">
            <article class="prose prose-slate max-w-none">
              <h1>Заголовок статьи</h1>
              <p>Это пример content-focused layout для блогов и документации. Контент имеет максимальную ширину для лучшей читаемости.</p>
              <p>Sidebar скрыт по умолчанию и может быть открыт через overlay режим.</p>
            </article>
          </DXContainer>
        </template>
      </DXAppLayout>
    `,
  }),
};

export const Minimal = {
  args: {
    variant: 'minimal',
    contentPadding: 'md',
  },
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 800,
      description: {
        story: 'Minimal вариант для простых приложений. Только header и content, без sidebar и footer.',
      },
    },
  },
  render: (args) => ({
    components: { DXAppLayout, DXHeaderBar, DXContainer },
    setup() {
      return { args };
    },
    template: `
      <DXAppLayout v-bind="args">
        <template #header>
          <DXHeaderBar app-name="Simple App" />
        </template>
        <template #content>
          <DXContainer>
            <DXHeading level="1" size="2xl" weight="bold" class="mb-4">Простое приложение</DXHeading>
            <DXText tag="p" color="muted">Это минималистичный layout без sidebar и footer.</DXText>
          </DXContainer>
        </template>
      </DXAppLayout>
    `,
  }),
};

export const Split = {
  args: {
    variant: 'split',
    sidebarMode: 'static',
    sidebarCollapsed: false,
    contentPadding: 'md',
  },
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 800,
      description: {
        story: 'Split вариант для приложений с двумя панелями (редакторы, сравнение). Использует слоты content-left и content-right.',
      },
    },
  },
  render: (args) => ({
    components: { DXAppLayout, DXHeaderBar, DXSidebarMenu, DXContainer },
    setup() {
      return { args, menuSections };
    },
    template: `
      <DXAppLayout v-bind="args">
        <template #header>
          <DXHeaderBar app-name="Code Editor" />
        </template>
        <template #sidebar>
          <DXSidebarMenu :sections="menuSections" />
        </template>
        <template #content-left>
          <div class="h-full bg-slate-50 p-4">
            <DXHeading level="2" size="lg" weight="semibold" class="mb-2">Левая панель</DXHeading>
            <DXText tag="p" size="sm" color="muted">Здесь может быть редактор кода или файловый менеджер.</DXText>
          </div>
        </template>
        <template #content-right>
          <div class="h-full bg-white p-4">
            <DXHeading level="2" size="lg" weight="semibold" class="mb-2">Правая панель</DXHeading>
            <DXText tag="p" size="sm" color="muted">Здесь может быть предпросмотр или результат.</DXText>
          </div>
        </template>
      </DXAppLayout>
    `,
  }),
};

export const Tabbed = {
  args: {
    variant: 'tabbed',
    sidebarMode: 'static',
    sidebarCollapsed: false,
  },
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 800,
      description: {
        story: 'Tabbed вариант для приложений с вкладками. Header содержит табы (используется DXTabs), контент переключается через табы.',
      },
    },
  },
  render: (args) => ({
    components: { DXAppLayout, DXHeaderBar, DXSidebarMenu, DXContainer, DXTabs },
    setup() {
      const activeTab = ref('dashboard');
      const tabs = [
        { value: 'dashboard', label: 'Дашборд' },
        { value: 'analytics', label: 'Аналитика' },
        { value: 'settings', label: 'Настройки' },
      ];
      return { args, menuSections, activeTab, tabs };
    },
    template: `
      <DXAppLayout v-bind="args">
        <template #header>
          <DXHeaderBar app-name="Dashboard">
            <template #navigation>
              <DXTabs v-model="activeTab" :tabs="tabs" variant="tabs-top" />
            </template>
          </DXHeaderBar>
        </template>
        <template #sidebar>
          <DXSidebarMenu :sections="menuSections" />
        </template>
        <template #content>
          <DXContainer>
            <div v-if="activeTab === 'dashboard'">
              <DXHeading level="1" size="2xl" weight="bold" class="mb-4">Дашборд</DXHeading>
              <DXText tag="p" color="muted">Контент дашборда.</DXText>
            </div>
            <div v-else-if="activeTab === 'analytics'">
              <DXHeading level="1" size="2xl" weight="bold" class="mb-4">Аналитика</DXHeading>
              <DXText tag="p" color="muted">Контент аналитики.</DXText>
            </div>
            <div v-else-if="activeTab === 'settings'">
              <DXHeading level="1" size="2xl" weight="bold" class="mb-4">Настройки</DXHeading>
              <DXText tag="p" color="muted">Контент настроек.</DXText>
            </div>
          </DXContainer>
        </template>
      </DXAppLayout>
    `,
  }),
};


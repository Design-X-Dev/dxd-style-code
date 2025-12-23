import { ref } from 'vue';
import DXHeaderBar from './DXHeaderBar.vue';
import DXLink from '../../atoms/DXLink/DXLink.vue';
import DXButton from '../../atoms/DXButton/DXButton.vue';
import DXAvatar from '../../atoms/DXAvatar/DXAvatar.vue';
import DXInput from '../../molecules/DXInput/DXInput.vue';
import DXDropdown from '../DXDropdown/DXDropdown.vue';
import DXIcon from '../../atoms/DXIcon/DXIcon.vue';
import {
  MagnifyingGlassIcon,
  BellIcon,
  Cog6ToothIcon,
  Bars3Icon,
  UserIcon,
} from '@heroicons/vue/24/outline';

export default {
  title: 'Organisms/DXHeaderBar',
  component: DXHeaderBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# DXHeaderBar

Верхняя панель приложения с навигацией, поиском и действиями.

## Назначение

DXHeaderBar предоставляет стандартизированную верхнюю панель для приложений с:
- Логотипом и названием приложения
- Навигационными ссылками
- Поисковой строкой
- Действиями (уведомления, настройки, профиль)
- Адаптивным мобильным меню

## Архитектура

### Использует
- \`DXContainer\` - для ограничения ширины контента
- \`DXLink\` - для навигационных ссылок
- \`DXButton\` - для действий
- \`DXAvatar\` - для профиля пользователя
- \`DXInput\` - для поиска (через slot)
- \`DXDropdown\` - для меню профиля

### Используется в
- \`DXAppLayout\` - как верхняя панель приложения
- Любые приложения, требующие навигационную панель

## Внутренняя логика

### Адаптивность
- Desktop: показывает навигацию, поиск и действия
- Mobile: скрывает навигацию и поиск, показывает мобильное меню

### Позиционирование
- \`sticky\`: header остается видимым при скролле
- \`fixed\`: header зафиксирован вверху страницы

### Мобильное меню
- Drawer меню, открывается по клику на кнопку мобильного меню
- Закрывается по клику на кнопку закрытия или вне меню

## Особенности

### Slots
- \`logo\` - кастомный логотип
- \`navigation\` - навигационные ссылки (desktop)
- \`search\` - поисковая строка (desktop)
- \`actions\` - действия (desktop)
- \`mobile-menu\` - кнопка мобильного меню
- \`mobile-navigation\` - навигация для мобильного меню
        `,
      },
    },
  },
  argTypes: {
    logo: {
      control: 'text',
      description: 'URL логотипа приложения.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
        category: 'Branding',
      },
    },
    appName: {
      control: 'text',
      description: 'Название приложения.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Branding',
      },
    },
    sticky: {
      control: 'boolean',
      description: 'Sticky позиционирование (остается видимым при скролле).',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Layout',
      },
    },
    fixed: {
      control: 'boolean',
      description: 'Fixed позиционирование (зафиксирован вверху).',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Layout',
      },
    },
    height: {
      control: 'select',
      options: ['auto', 'sm', 'md', 'lg'],
      description: 'Высота header.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'auto' },
        category: 'Layout',
      },
    },
  },
};

export const Default = {
  args: {
    appName: 'My Application',
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовый header с названием приложения.',
      },
    },
  },
  render: (args) => ({
    components: { DXHeaderBar },
    setup() {
      return { args };
    },
    template: '<DXHeaderBar v-bind="args" />',
  }),
};

export const WithLogo = {
  args: {
    appName: 'My Application',
    logo: 'https://via.placeholder.com/32x32',
  },
  parameters: {
    docs: {
      description: {
        story: 'Header с логотипом и названием приложения.',
      },
    },
  },
  render: (args) => ({
    components: { DXHeaderBar },
    setup() {
      return { args };
    },
    template: '<DXHeaderBar v-bind="args" />',
  }),
};

export const WithNavigation = {
  args: {
    appName: 'My Application',
    logo: 'https://via.placeholder.com/32x32',
  },
  parameters: {
    docs: {
      description: {
        story: 'Header с навигационными ссылками.',
      },
    },
  },
  render: (args) => ({
    components: { DXHeaderBar, DXLink },
    setup() {
      return { args };
    },
    template: `
      <DXHeaderBar v-bind="args">
        <template #navigation>
          <DXLink href="/dashboard" variant="ghost">Дашборд</DXLink>
          <DXLink href="/projects" variant="ghost">Проекты</DXLink>
          <DXLink href="/analytics" variant="ghost">Аналитика</DXLink>
        </template>
      </DXHeaderBar>
    `,
  }),
};

export const WithSearch = {
  args: {
    appName: 'My Application',
    logo: 'https://via.placeholder.com/32x32',
  },
  parameters: {
    docs: {
      description: {
        story: 'Header с поисковой строкой.',
      },
    },
  },
  render: (args) => ({
    components: { DXHeaderBar, DXInput, DXIcon },
    setup() {
      const searchQuery = ref('');
      return { args, searchQuery, MagnifyingGlassIcon };
    },
    template: `
      <DXHeaderBar v-bind="args">
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
      </DXHeaderBar>
    `,
  }),
};

export const WithActions = {
  args: {
    appName: 'My Application',
    logo: 'https://via.placeholder.com/32x32',
  },
  parameters: {
    docs: {
      description: {
        story: 'Header с действиями (уведомления, настройки, профиль).',
      },
    },
  },
  render: (args) => ({
    components: { DXHeaderBar, DXButton, DXAvatar, DXDropdown, DXIcon },
    setup() {
      const unreadCount = ref(5);
      return {
        args,
        unreadCount,
        BellIcon,
        Cog6ToothIcon,
        UserIcon,
      };
    },
    template: `
      <DXHeaderBar v-bind="args">
        <template #navigation>
          <DXLink href="/dashboard" variant="ghost">Дашборд</DXLink>
          <DXLink href="/projects" variant="ghost">Проекты</DXLink>
        </template>
        <template #actions>
          <DXButton variant="ghost" size="sm">
            <template #icon>
              <DXIcon :icon="BellIcon" size="md" />
            </template>
          </DXButton>
          <DXButton variant="ghost" size="sm">
            <template #icon>
              <DXIcon :icon="Cog6ToothIcon" size="md" />
            </template>
          </DXButton>
          <DXDropdown>
            <template #trigger>
              <DXAvatar
                src="https://via.placeholder.com/40x40"
                size="sm"
              />
            </template>
            <div class="p-2">
              <div class="px-3 py-2 text-sm text-slate-700">Профиль</div>
              <div class="px-3 py-2 text-sm text-slate-700">Настройки</div>
              <div class="px-3 py-2 text-sm text-slate-700">Выйти</div>
            </div>
          </DXDropdown>
        </template>
      </DXHeaderBar>
    `,
  }),
};

export const FullFeatured = {
  args: {
    appName: 'My Application',
    logo: 'https://via.placeholder.com/32x32',
    sticky: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Полнофункциональный header с навигацией, поиском, действиями и мобильным меню.',
      },
    },
  },
  render: (args) => ({
    components: { DXHeaderBar, DXLink, DXInput, DXButton, DXAvatar, DXDropdown, DXIcon },
    setup() {
      const searchQuery = ref('');
      const headerBarRef = ref(null);
      const showMobileMenu = ref(false);

      const toggleMobileMenu = () => {
        showMobileMenu.value = !showMobileMenu.value;
        if (headerBarRef.value) {
          if (showMobileMenu.value) {
            headerBarRef.value.openMobileMenu();
          } else {
            headerBarRef.value.closeMobileMenu();
          }
        }
      };

      return {
        args,
        searchQuery,
        headerBarRef,
        showMobileMenu,
        toggleMobileMenu,
        MagnifyingGlassIcon,
        BellIcon,
        Bars3Icon,
      };
    },
    template: `
      <DXHeaderBar ref="headerBarRef" v-bind="args">
        <template #navigation>
          <DXLink href="/dashboard" variant="ghost">Дашборд</DXLink>
          <DXLink href="/projects" variant="ghost">Проекты</DXLink>
          <DXLink href="/analytics" variant="ghost">Аналитика</DXLink>
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
              <DXAvatar
                src="https://via.placeholder.com/40x40"
                size="sm"
              />
            </template>
            <div class="p-2">
              <div class="px-3 py-2 text-sm text-slate-700">Профиль</div>
              <div class="px-3 py-2 text-sm text-slate-700">Настройки</div>
              <div class="px-3 py-2 text-sm text-slate-700">Выйти</div>
            </div>
          </DXDropdown>
        </template>
        <template #mobile-menu>
          <DXButton variant="ghost" size="sm" @click="toggleMobileMenu">
            <template #icon>
              <DXIcon :icon="Bars3Icon" size="md" />
            </template>
          </DXButton>
        </template>
        <template #mobile-navigation>
          <DXLink href="/dashboard" variant="ghost" class="block py-2">Дашборд</DXLink>
          <DXLink href="/projects" variant="ghost" class="block py-2">Проекты</DXLink>
          <DXLink href="/analytics" variant="ghost" class="block py-2">Аналитика</DXLink>
        </template>
      </DXHeaderBar>
    `,
  }),
};

export const Sticky = {
  args: {
    appName: 'My Application',
    logo: 'https://via.placeholder.com/32x32',
    sticky: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Sticky header, который остается видимым при скролле страницы.',
      },
    },
  },
  render: (args) => ({
    components: { DXHeaderBar, DXLink },
    setup() {
      return { args };
    },
    template: `
      <div>
        <DXHeaderBar v-bind="args">
          <template #navigation>
            <DXLink href="/dashboard" variant="ghost">Дашборд</DXLink>
            <DXLink href="/projects" variant="ghost">Проекты</DXLink>
          </template>
        </DXHeaderBar>
        <div class="h-screen bg-slate-50 p-8">
          <p class="text-slate-600">Прокрутите страницу вниз, чтобы увидеть sticky header</p>
        </div>
      </div>
    `,
  }),
};

export const Sizes = {
  parameters: {
    docs: {
      description: {
        story: 'Различные размеры header (высота).',
      },
    },
  },
  render: () => ({
    components: { DXHeaderBar },
    setup() {
      return {};
    },
    template: `
      <div class="space-y-4">
        <DXHeaderBar app-name="Small" height="sm" />
        <DXHeaderBar app-name="Medium" height="md" />
        <DXHeaderBar app-name="Large" height="lg" />
      </div>
    `,
  }),
};


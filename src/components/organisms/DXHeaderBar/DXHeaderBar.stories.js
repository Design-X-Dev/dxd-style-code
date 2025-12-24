import { ref, onMounted, watch } from 'vue';
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
import DXSegmentedControl from '../../molecules/DXSegmentedControl/DXSegmentedControl.vue';
import DXHeading from '../../atoms/DXHeading/DXHeading.vue';
import DXText from '../../atoms/DXText/DXText.vue';
import DXCard from '../../atoms/DXCard/DXCard.vue';
import DXBreakpointProvider from '../../utilities/DXBreakpointProvider/DXBreakpointProvider.vue';

export default {
  title: 'Organisms/DXHeaderBar',
  component: DXHeaderBar,
  tags: ['autodocs', 'category:navigation'],
  parameters: {
    docs: {
      description: {
        component: `


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
- \`DXBreakpointProvider\` (опционально) - для получения данных о breakpoint через \`inject\`

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

### Breakpoint данные
Компонент автоматически получает данные о breakpoint через \`inject\`, если \`DXBreakpointProvider\` обернут вокруг приложения:
- \`currentBreakpoint\` - текущий breakpoint (xs, sm, md, lg, xl, 2xl)
- \`screenWidth\` - ширина экрана в пикселях
- \`screenHeight\` - высота экрана в пикселях
- \`breakpoints\` - объект с определением всех breakpoint
- \`isMobile\` - computed свойство, true если breakpoint < md (768px)
- \`isDesktop\` - computed свойство, true если breakpoint >= md (768px)

Эти данные доступны через \`defineExpose\` для использования в родительских компонентах.

### Стилизация
Компонент поддерживает гибкую стилизацию через пропсы, аналогично \`DXCard\` и \`DXBox\`:

- **\`variant\`**: Вариант стилизации (опционально)
  - \`null\` - базовый стиль (по умолчанию, без дополнительных стилей)
  - \`bordered\` - более выраженная рамка (\`border-slate-300\`)
  - \`elevated\` - с тенью (автоматически применяется \`shadow-sm\`, если \`shadow\` не указан)
  - \`flat\` - без рамки (\`border-0\`)

- **\`bg\`**: Фон header
  - \`white\` - белый фон (по умолчанию)
  - \`slate\` - светло-серый фон (\`bg-slate-50\`)
  - \`transparent\` - прозрачный фон

- **\`shadow\`**: Тень header
  - \`null\` - без тени (по умолчанию)
  - \`none\` - явно без тени
  - \`sm\`, \`md\`, \`lg\`, \`xl\` - различные уровни тени

- **\`border\`**: Рамка header
  - \`bottom\` - только нижняя рамка (по умолчанию)
  - \`none\` - без рамки
  - \`full\` - рамка со всех сторон

- **\`height\`**: Высота header
  - \`auto\` - автоматическая высота (по умолчанию)
  - \`sm\` - 56px (\`h-14\`)
  - \`md\` - 64px (\`h-16\`)
  - \`lg\` - 80px (\`h-20\`)

## Особенности

### Slots
- \`logo\` - кастомный логотип
- \`navigation\` - навигационные ссылки (desktop)
- \`search\` - поисковая строка (desktop)
- \`actions\` - действия (desktop)
- \`center\` - центральный контент с абсолютным позиционированием (desktop)
- \`mobile-menu\` - кнопка мобильного меню
- \`mobile-navigation\` - навигация для мобильного меню

### Примеры использования

\`\`\`vue
<!-- Стандартный header -->
<DXHeaderBar app-name="My App" />

<!-- С тенью и полной рамкой -->
<DXHeaderBar 
  app-name="My App" 
  variant="elevated"
  shadow="lg"
  border="full"
/>

<!-- Плоский прозрачный -->
<DXHeaderBar 
  app-name="My App" 
  variant="flat"
  bg="transparent"
  border="none"
/>

<!-- Светлый фон с тенью -->
<DXHeaderBar 
  app-name="My App" 
  bg="slate"
  shadow="md"
/>
\`\`\`
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
    variant: {
      control: 'select',
      options: [null, 'bordered', 'elevated', 'flat'],
      description: 'Вариант стилизации header. Если не указан, применяется базовый стиль.',
      table: {
        type: { summary: 'string | null' },
        defaultValue: { summary: 'null' },
        category: 'Styling',
      },
    },
    bg: {
      control: 'select',
      options: ['white', 'slate', 'transparent'],
      description: 'Фон header.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'white' },
        category: 'Styling',
      },
    },
    shadow: {
      control: 'select',
      options: [null, 'none', 'sm', 'md', 'lg', 'xl'],
      description: 'Тень header.',
      table: {
        type: { summary: 'string | null' },
        defaultValue: { summary: 'null' },
        category: 'Styling',
      },
    },
    border: {
      control: 'select',
      options: ['none', 'bottom', 'full'],
      description: 'Рамка header.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'bottom' },
        category: 'Styling',
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

export const WithCenterContent = {
  args: {
    appName: 'My Application',
    logo: 'https://via.placeholder.com/32x32',
    sticky: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Header с центральным контентом (DXSegmentedControl) с абсолютным позиционированием. Центральный контент позиционируется абсолютно по центру header и не влияет на layout остальных элементов.',
      },
    },
  },
  render: (args) => ({
    components: { DXHeaderBar, DXSegmentedControl, DXButton, DXAvatar, DXDropdown, DXIcon },
    setup() {
      const currentMode = ref('list');
      const isAuthenticated = ref(true);
      const modeOptions = [
        { value: 'list', label: 'Список' },
        { value: 'grid', label: 'Сетка' },
        { value: 'card', label: 'Карточки' },
      ];

      const handleModeChange = (value) => {
        currentMode.value = value;
        console.log('Mode changed to:', value);
      };

      return {
        args,
        currentMode,
        isAuthenticated,
        modeOptions,
        handleModeChange,
        UserIcon,
      };
    },
    template: `
      <DXHeaderBar v-bind="args">
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
        <template #center>
          <DXSegmentedControl
            v-if="isAuthenticated"
            v-model="currentMode"
            :options="modeOptions"
            size="sm"
            @update:model-value="handleModeChange"
          />
        </template>
      </DXHeaderBar>
    `,
  }),
};

export const Variants = {
  parameters: {
    docs: {
      description: {
        story: 'Различные варианты стилизации header (variant).',
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
        <DXHeaderBar app-name="Default (no variant)" />
        <DXHeaderBar app-name="Bordered" variant="bordered" />
        <DXHeaderBar app-name="Elevated" variant="elevated" />
        <DXHeaderBar app-name="Flat" variant="flat" />
      </div>
    `,
  }),
};

export const Backgrounds = {
  parameters: {
    docs: {
      description: {
        story: 'Различные варианты фона header (bg).',
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
        <DXHeaderBar app-name="White Background" bg="white" />
        <DXHeaderBar app-name="Slate Background" bg="slate" />
        <DXHeaderBar app-name="Transparent Background" bg="transparent" />
      </div>
    `,
  }),
};

export const Shadows = {
  parameters: {
    docs: {
      description: {
        story: 'Различные варианты тени header (shadow).',
      },
    },
  },
  render: () => ({
    components: { DXHeaderBar },
    setup() {
      return {};
    },
    template: `
      <div class="space-y-4 bg-slate-50 p-4">
        <DXHeaderBar app-name="No Shadow" shadow="none" />
        <DXHeaderBar app-name="Small Shadow" shadow="sm" />
        <DXHeaderBar app-name="Medium Shadow" shadow="md" />
        <DXHeaderBar app-name="Large Shadow" shadow="lg" />
        <DXHeaderBar app-name="Extra Large Shadow" shadow="xl" />
      </div>
    `,
  }),
};

export const Borders = {
  parameters: {
    docs: {
      description: {
        story: 'Различные варианты рамки header (border).',
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
        <DXHeaderBar app-name="No Border" border="none" />
        <DXHeaderBar app-name="Bottom Border" border="bottom" />
        <DXHeaderBar app-name="Full Border" border="full" />
      </div>
    `,
  }),
};

export const StylingCombinations = {
  parameters: {
    docs: {
      description: {
        story: 'Комбинации различных вариантов стилизации.',
      },
    },
  },
  render: () => ({
    components: { DXHeaderBar },
    setup() {
      return {};
    },
    template: `
      <div class="space-y-4 bg-slate-50 p-4">
        <DXHeaderBar 
          app-name="Elevated with Shadow" 
          variant="elevated" 
          shadow="lg"
        />
        <DXHeaderBar 
          app-name="Flat Transparent" 
          variant="flat" 
          bg="transparent"
          border="none"
        />
        <DXHeaderBar 
          app-name="Bordered Slate" 
          variant="bordered" 
          bg="slate"
          border="full"
        />
      </div>
    `,
  }),
};

export const WithBreakpointProvider = {
  parameters: {
    docs: {
      description: {
        story: 'DXHeaderBar автоматически получает данные о breakpoint через inject, если DXBreakpointProvider обернут вокруг приложения. Эти данные доступны через defineExpose.',
      },
    },
  },
  render: () => ({
    components: { DXHeaderBar, DXBreakpointProvider, DXCard },
    setup() {
      const headerRef = ref(null);
      const breakpointInfo = ref({
        currentBreakpoint: null,
        screenWidth: null,
        isMobile: false,
        isDesktop: false,
      });

      const updateInfo = () => {
        if (headerRef.value) {
          breakpointInfo.value = {
            currentBreakpoint: headerRef.value.currentBreakpoint?.value || 'unknown',
            screenWidth: headerRef.value.screenWidth?.value || null,
            isMobile: headerRef.value.isMobile?.value || false,
            isDesktop: headerRef.value.isDesktop?.value || false,
          };
        }
      };

      onMounted(() => {
        updateInfo();
      });

      // Отслеживаем изменения breakpoint данных
      watch(() => headerRef.value?.currentBreakpoint?.value, () => {
        updateInfo();
      }, { immediate: true });

      watch(() => headerRef.value?.screenWidth?.value, () => {
        updateInfo();
      }, { immediate: true });

      return { headerRef, breakpointInfo };
    },
    template: `
      <DXBreakpointProvider>
        <div class="space-y-4">
          <DXHeaderBar 
            ref="headerRef"
            app-name="Breakpoint Demo"
            sticky
          >
            <template #actions>
              <DXButton variant="ghost" size="sm">
                <template #icon>
                  <DXIcon :icon="BellIcon" size="md" />
                </template>
              </DXButton>
            </template>
          </DXHeaderBar>
          
          <div class="p-4">
            <DXCard padding="md">
              <DXHeading level="3" weight="semibold" class="mb-4">Breakpoint данные из DXHeaderBar:</DXHeading>
              <div class="space-y-2">
                <DXText tag="p" size="sm"><strong>Текущий breakpoint:</strong> {{ breakpointInfo.currentBreakpoint }}</DXText>
                <DXText tag="p" size="sm"><strong>Ширина экрана:</strong> {{ breakpointInfo.screenWidth }}px</DXText>
                <DXText tag="p" size="sm"><strong>Мобильный режим:</strong> {{ breakpointInfo.isMobile ? 'Да' : 'Нет' }}</DXText>
                <DXText tag="p" size="sm"><strong>Десктопный режим:</strong> {{ breakpointInfo.isDesktop ? 'Да' : 'Нет' }}</DXText>
              </div>
              <DXText tag="p" size="xs" color="muted" class="mt-4">
                Измените размер окна, чтобы увидеть обновление breakpoint данных.
              </DXText>
            </DXCard>
          </div>
        </div>
      </DXBreakpointProvider>
    `,
  }),
};


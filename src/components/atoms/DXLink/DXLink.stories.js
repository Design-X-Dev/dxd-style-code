import DXLink from './DXLink.vue';
import DXIcon from '../DXIcon/DXIcon.vue';
import { HomeIcon } from '@heroicons/vue/24/outline';

export default {
  title: 'Atoms/DXLink',
  component: DXLink,
  tags: ['autodocs', 'category:navigation', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Компонент ссылки с поддержкой обычных ссылок и Vue Router.

## Назначение

DXLink - атомарный компонент для создания ссылок с различными вариантами стилизации.
Поддерживает как обычные HTML ссылки, так и навигацию через Vue Router.

## Архитектура

### Использует
- \`useSize\` composable - для размеров текста (xs, sm, md, lg, xl)
- \`useVariantButton\` composable - для вариантов стилизации (primary, secondary, ghost, link)
- \`useClassComposition\` composable - для объединения классов
- \`DXIcon\` - для иконки внешних ссылок (ArrowTopRightOnSquareIcon)

### Используется в
- \`DXBreadcrumb\` - ссылки в хлебных крошках
- \`DXHeaderBar\` - навигационные ссылки в шапке
- Навигационные меню
- Footer ссылки

## Внутренняя логика

### Автоматическое определение типа ссылки
- Если указан \`to\` prop → использует \`router-link\`
- Если указан \`href\` prop → использует обычный \`<a>\` тег
- Если ничего не указано → использует \`<span>\` (fallback)

### Автоматическое определение внешних ссылок
Компонент автоматически определяет внешние ссылки по префиксам:
- \`http://\`
- \`https://\`
- \`//\` (protocol-relative)

### Безопасность
Для внешних ссылок с \`target="_blank"\` автоматически добавляется:
- \`rel="noopener noreferrer"\` - для защиты от tabnabbing атак
- Иконка внешней ссылки (если \`showExternalIcon={true}\`)

### Варианты стилизации
- \`link\` (по умолчанию) - обычные текстовые ссылки без padding и border-radius
- \`primary\`, \`secondary\`, \`ghost\`, \`outline\` - варианты с небольшими отступами (padding) и скруглениями (rounded-lg)

### Состояния
- **disabled**: Полностью отключает ссылку - блокирует клик, применяет визуальные стили (opacity, cursor-not-allowed), отключает pointer-events
- **inactive**: Визуально приглушенная ссылка, но остается кликабельной. Используется для текущих страниц, неактивных элементов навигации

## Особенности

### Vue Router интеграция
При использовании \`to\` prop требуется установленный Vue Router:
\`\`\`vue
<DXLink :to="{ name: 'home' }">Главная</DXLink>
<DXLink :to="/dashboard">Дашборд</DXLink>
\`\`\`

### Обычные ссылки
Для внешних или обычных ссылок используйте \`href\`:
\`\`\`vue
<DXLink href="https://example.com" target="_blank">Внешний сайт</DXLink>
<DXLink href="/about">О нас</DXLink>
\`\`\`

## Особенности

### Padding и Border-radius
Варианты (кроме \`link\`) автоматически получают:
- Небольшие отступы в зависимости от размера (xs: px-2 py-0.5, sm: px-2.5 py-1, md: px-3 py-1.5, lg: px-3.5 py-2, xl: px-4 py-2.5)
- Скругления \`rounded-lg\`

### Разница между disabled и inactive
- **disabled**: Ссылка полностью неактивна, не кликабельна, визуально затемнена
- **inactive**: Ссылка визуально приглушена, но остается кликабельной. Подходит для текущих страниц в навигации

## Ограничения

- Не используйте одновременно \`href\` и \`to\` - приоритет у \`to\`
- Для Vue Router требуется установленный \`vue-router\`
- Disabled ссылки не кликабельны, но остаются в DOM
- Inactive ссылки кликабельны, но визуально приглушены
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['link', 'primary', 'secondary', 'ghost', 'outline'],
      description: 'Вариант стилизации ссылки. "link" - обычная ссылка без padding, остальные - с padding и border-radius.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'link' },
        category: 'Appearance',
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Размер ссылки. Влияет на размер текста.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
        category: 'Appearance',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключенное состояние. Блокирует клик и применяет визуальные стили. Ссылка не кликабельна.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    inactive: {
      control: 'boolean',
      description: 'Неактивное состояние. Визуально приглушенная ссылка, но остается кликабельной. Используется для текущих страниц.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    href: {
      control: 'text',
      description: 'URL для обычной HTML ссылки. Используется для внешних или обычных ссылок.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
        category: 'Navigation',
      },
    },
    to: {
      control: 'text',
      description: 'Путь для Vue Router. Может быть строкой или объектом с параметрами маршрута.',
      table: {
        type: { summary: 'string | object' },
        defaultValue: { summary: 'null' },
        category: 'Navigation',
      },
    },
    target: {
      control: 'select',
      options: ['_blank', '_self', '_parent', '_top'],
      description: 'Target атрибут для ссылки. Для внешних ссылок с _blank автоматически добавляется rel="noopener noreferrer".',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
        category: 'Navigation',
      },
    },
    rel: {
      control: 'text',
      description: 'Rel атрибут для ссылки. Если не указан, для внешних ссылок с target="_blank" автоматически добавляется "noopener noreferrer".',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
        category: 'Navigation',
      },
    },
    ariaLabel: {
      control: 'text',
      description: 'Кастомный aria-label для улучшения доступности.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
        category: 'Accessibility',
      },
    },
    showExternalIcon: {
      control: 'boolean',
      description: 'Показывать иконку для внешних ссылок. Автоматически определяется по префиксу URL.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Accessibility',
      },
    },
  },
};

export const Default = {
  args: {
    href: '/about',
    variant: 'link',
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовая ссылка с вариантом "link". Это стандартный вариант для обычных текстовых ссылок.',
      },
    },
  },
  render: (args) => ({
    components: { DXLink },
    setup() { return { args }; },
    template: '<DXLink v-bind="args">О нас</DXLink>',
  }),
};

export const Variants = {
  parameters: {
    docs: {
      description: {
        story: 'Все доступные варианты стилизации ссылок. Вариант "link" - стандартный для текстовых ссылок без padding и border-radius. Остальные варианты имеют небольшие отступы и скругления, делая ссылку похожей на кнопку.',
      },
    },
  },
  render: () => ({
    components: { DXLink },
    template: `
      <div class="flex flex-col items-start gap-6">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Варианты стилизации</h3>
          <div class="flex items-center gap-4 flex-wrap">
            <DXLink href="/link" variant="link">Link</DXLink>
            <DXLink href="/primary" variant="primary">Primary</DXLink>
            <DXLink href="/secondary" variant="secondary">Secondary</DXLink>
            <DXLink href="/ghost" variant="ghost">Ghost</DXLink>
            <DXLink href="/outline" variant="outline">Outline</DXLink>
          </div>
        </div>
        <div class="text-sm text-slate-600">
          Все варианты: link | primary | secondary | ghost | outline
        </div>
        <div class="text-xs text-slate-500">
          Варианты (кроме link) имеют padding и border-radius
        </div>
      </div>
    `,
  }),
};

export const Sizes = {
  parameters: {
    docs: {
      description: {
        story: 'Все доступные размеры ссылок. Размер влияет на размер текста и соответствующих элементов.',
      },
    },
  },
  render: () => ({
    components: { DXLink },
    template: `
      <div class="flex flex-col items-start gap-4">
        <div class="flex items-center gap-4 flex-wrap">
          <DXLink href="/xs" size="xs">Extra Small</DXLink>
          <DXLink href="/sm" size="sm">Small</DXLink>
          <DXLink href="/md" size="md">Medium</DXLink>
          <DXLink href="/lg" size="lg">Large</DXLink>
          <DXLink href="/xl" size="xl">Extra Large</DXLink>
        </div>
        <div class="text-sm text-slate-600">
          Все размеры: xs | sm | md | lg | xl
        </div>
      </div>
    `,
  }),
};

export const ExternalLinks = {
  parameters: {
    docs: {
      description: {
        story: 'Внешние ссылки автоматически определяются по префиксам http://, https:// или //. Для ссылок с target="_blank" автоматически добавляется rel="noopener noreferrer" для защиты от tabnabbing атак, а также иконка внешней ссылки.',
      },
    },
  },
  render: () => ({
    components: { DXLink },
    template: `
      <div class="flex flex-col items-start gap-4">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Внешние ссылки</h3>
          <div class="flex flex-col gap-2">
            <DXLink 
              href="https://example.com" 
              target="_blank"
              variant="link"
            >
              Внешний сайт
            </DXLink>
            <DXLink 
              href="https://vuejs.org" 
              target="_blank"
              variant="primary"
            >
              Vue.js документация
            </DXLink>
            <DXLink 
              href="https://github.com" 
              target="_blank"
              variant="ghost"
            >
              GitHub
            </DXLink>
          </div>
          <div class="text-sm text-slate-600">
            Внешние ссылки автоматически получают иконку и rel="noopener noreferrer" для безопасности
          </div>
        </div>
      </div>
    `,
  }),
};

export const RouterLinks = {
  parameters: {
    docs: {
      description: {
        story: 'Интеграция с Vue Router. При использовании prop "to" компонент автоматически использует router-link вместо обычного тега <a>. Поддерживает как строковые пути, так и объекты с параметрами маршрута. Требуется установленный vue-router.',
      },
    },
  },
  render: () => ({
    components: { DXLink },
    setup() {
      return {
        userId: 123,
      };
    },
    template: `
      <div class="flex flex-col items-start gap-4">
        <div class="flex flex-col gap-2">
          <DXLink :to="{ name: 'home' }" variant="link">
            Главная страница
          </DXLink>
          <DXLink :to="{ name: 'profile', params: { id: userId } }" variant="primary">
            Профиль пользователя
          </DXLink>
          <DXLink to="/dashboard" variant="secondary">
            Дашборд
          </DXLink>
        </div>
        <div class="text-sm text-slate-600">
          Используется router-link для навигации внутри приложения
        </div>
      </div>
    `,
  }),
};

export const Disabled = {
  parameters: {
    docs: {
      description: {
        story: 'Отключенное состояние ссылки. Блокирует клик через preventDefault и stopPropagation, применяет визуальные стили (opacity, cursor-not-allowed) и отключает pointer-events. Ссылка остается в DOM, но не интерактивна.',
      },
    },
  },
  render: () => ({
    components: { DXLink },
    template: `
      <div class="flex flex-col items-start gap-4">
        <div class="flex items-center gap-4 flex-wrap">
          <DXLink href="/disabled" disabled variant="link">
            Отключенная ссылка
          </DXLink>
          <DXLink href="/disabled" disabled variant="primary">
            Отключенная Primary
          </DXLink>
          <DXLink href="/disabled" disabled variant="secondary">
            Отключенная Secondary
          </DXLink>
        </div>
        <div class="text-sm text-slate-600">
          Отключенные ссылки не кликабельны и имеют визуальную индикацию
        </div>
      </div>
    `,
  }),
};

export const Inactive = {
  parameters: {
    docs: {
      description: {
        story: 'Неактивное состояние ссылки. Визуально приглушенная ссылка (opacity, приглушенные цвета), но остается кликабельной. Используется для текущих страниц в навигации, breadcrumb и других случаях, когда нужно показать неактивный элемент, но сохранить возможность клика.',
      },
    },
  },
  render: () => ({
    components: { DXLink },
    template: `
      <div class="flex flex-col items-start gap-4">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Неактивные ссылки</h3>
          <div class="flex items-center gap-4 flex-wrap">
            <DXLink href="/current" inactive variant="link">
              Текущая страница (link)
            </DXLink>
            <DXLink href="/current" inactive variant="primary">
              Текущая страница (primary)
            </DXLink>
            <DXLink href="/current" inactive variant="ghost">
              Текущая страница (ghost)
            </DXLink>
          </div>
          <div class="text-sm text-slate-600">
            Неактивные ссылки визуально приглушены, но остаются кликабельными
          </div>
          <div class="text-xs text-slate-500">
            Используется для текущих страниц в breadcrumb и навигации
          </div>
        </div>
      </div>
    `,
  }),
};

export const WithIcons = {
  parameters: {
    docs: {
      description: {
        story: 'Ссылки с иконками. Можно добавлять иконки через слот. Для внешних ссылок автоматически добавляется дополнительная иконка ArrowTopRightOnSquareIcon справа от текста.',
      },
    },
  },
  render: () => ({
    components: { DXLink, DXIcon },
    setup() {
      return { HomeIcon };
    },
    template: `
      <div class="flex flex-col items-start gap-4">
        <div class="flex items-center gap-4 flex-wrap">
          <DXLink href="/home" variant="link">
            <DXIcon :icon="HomeIcon" size="sm" />
            Главная
          </DXLink>
          <DXLink href="/about" variant="primary">
            <DXIcon :icon="HomeIcon" size="sm" />
            О нас
          </DXLink>
          <DXLink href="https://example.com" target="_blank" variant="ghost">
            <DXIcon :icon="HomeIcon" size="sm" />
            Внешняя ссылка
          </DXLink>
        </div>
        <div class="text-sm text-slate-600">
          Ссылки с иконками и автоматической иконкой для внешних ссылок
        </div>
      </div>
    `,
  }),
};

export const LinkAsButton = {
  parameters: {
    docs: {
      description: {
        story: 'Ссылки с вариантами кнопок (primary, secondary, ghost). Используются для действий, которые семантически должны быть ссылками (например, скачивание файла, переход на другую страницу), но визуально выглядят как кнопки.',
      },
    },
  },
  render: () => ({
    components: { DXLink },
    template: `
      <div class="flex flex-col items-start gap-4">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Ссылки-кнопки</h3>
          <div class="flex items-center gap-4 flex-wrap">
            <DXLink href="/download" variant="primary" size="md">
              Скачать файл
            </DXLink>
            <DXLink href="/action" variant="secondary" size="md">
              Выполнить действие
            </DXLink>
            <DXLink href="/cancel" variant="ghost" size="md">
              Отмена
            </DXLink>
          </div>
          <div class="text-sm text-slate-600">
            Ссылки с вариантами кнопок для действий, которые должны быть ссылками семантически
          </div>
        </div>
      </div>
    `,
  }),
};

export const Accessibility = {
  parameters: {
    docs: {
      description: {
        story: 'Поддержка доступности через aria-label. Компонент автоматически добавляет rel="noopener noreferrer" для внешних ссылок с target="_blank" для защиты от tabnabbing атак. Иконка внешней ссылки имеет aria-hidden="true" для screen readers.',
      },
    },
  },
  render: () => ({
    components: { DXLink },
    template: `
      <div class="flex flex-col items-start gap-4">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Доступность</h3>
          <div class="flex flex-col gap-2">
            <DXLink 
              href="/about" 
              aria-label="Перейти на страницу о нас"
            >
              О нас
            </DXLink>
            <DXLink 
              href="https://example.com" 
              target="_blank"
              aria-label="Открыть внешний сайт в новой вкладке"
            >
              Внешний сайт
            </DXLink>
            <DXLink 
              href="/download" 
              variant="primary"
              aria-label="Скачать файл"
            >
              Скачать
            </DXLink>
          </div>
          <div class="text-sm text-slate-600">
            Поддержка aria-label для улучшения доступности. Внешние ссылки автоматически получают rel="noopener noreferrer"
          </div>
        </div>
      </div>
    `,
  }),
};


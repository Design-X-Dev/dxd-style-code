import DXNav from './DXNav.vue';
import DXLink from '../DXLink/DXLink.vue';
import DXButton from '../DXButton/DXButton.vue';

export default {
  title: 'Atoms/DXNav',
  component: DXNav,
  tags: ['autodocs', 'category:navigation'],
  parameters: {
    docs: {
      description: {
        component: `
# DXNav

Универсальный компонент для обертки навигационных элементов с автоматическим управлением accessibility.

## Назначение

DXNav - атомарный компонент для создания семантически правильных навигационных элементов.
Автоматически добавляет правильные \`aria-label\` атрибуты на основе типа навигации,
что улучшает accessibility и соответствие стандартам.

## Архитектура

### Используется в
- \`DXBreadcrumb\` - для хлебных крошек
- \`DXPagination\` - для пагинации
- \`DXMenu\` - для навигационных меню
- \`DXSidebarMenu\` - для боковых меню
- \`DXHeaderBar\` - для основной навигации в шапке
- Любые другие компоненты, требующие навигации

## Внутренняя логика

### Автоматические aria-label
Компонент автоматически добавляет \`aria-label\` на основе типа:
- \`breadcrumb\` → \`aria-label="Breadcrumb"\`
- \`pagination\` → \`aria-label="Pagination"\`
- \`menu\` → \`aria-label="Navigation menu"\`
- \`main\` → \`aria-label="Main navigation"\`
- \`custom\` → без автоматического label (требует \`ariaLabel\` prop)

### Приоритет aria-label
1. Если передан \`ariaLabel\` prop → используется он (переопределяет тип)
2. Если \`type !== 'custom'\` → используется автоматический label
3. Если \`type === 'custom'\` и нет \`ariaLabel\` → aria-label не добавляется

### Передача атрибутов
Все атрибуты (кроме \`class\` и \`aria-label\`) автоматически передаются через \`$attrs\`:
- HTML атрибуты (id, data-*, и т.д.)
- События (@click, @input, и т.д.)

## Особенности

### Типы навигации
- **breadcrumb**: Для хлебных крошек (показывает путь к текущей странице)
- **pagination**: Для пагинации (навигация по страницам)
- **menu**: Для навигационных меню (боковые панели, выпадающие меню)
- **main**: Для основной навигации (главное меню сайта)
- **custom**: Для кастомных случаев (требует явного \`ariaLabel\`)

### Accessibility
Компонент автоматически обеспечивает правильную семантику и accessibility:
- Семантический \`<nav>\` тег
- Правильные \`aria-label\` для screen readers
- Поддержка всех стандартных HTML атрибутов
- Совместимость с клавиатурной навигацией

## Ограничения

- Для \`custom\` типа рекомендуется всегда указывать \`ariaLabel\` для accessibility
- Компонент не добавляет стили - используйте \`class\` prop для стилизации
- Все атрибуты передаются как есть (кроме \`class\` и \`aria-label\`)
        `,
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['breadcrumb', 'pagination', 'menu', 'main', 'custom'],
      description: 'Тип навигации',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'main' },
      },
    },
    ariaLabel: {
      control: { type: 'text' },
      description: 'Кастомный aria-label (переопределяет автоматический)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      },
    },
    class: {
      control: { type: 'text' },
      description: 'Дополнительные CSS классы',
      table: {
        type: { summary: 'string | array | object' },
        defaultValue: { summary: 'null' },
      },
    },
  },
};

export const Default = {
  args: {
    type: 'main',
  },
  render: (args) => ({
    components: { DXNav, DXLink },
    setup() {
      return { args };
    },
    template: `
      <DXNav v-bind="args" class="flex gap-4">
        <DXLink href="/">Home</DXLink>
        <DXLink href="/about">About</DXLink>
        <DXLink href="/contact">Contact</DXLink>
      </DXNav>
    `,
  }),
};

export const Breadcrumb = {
  args: {
    type: 'breadcrumb',
  },
  render: (args) => ({
    components: { DXNav, DXLink },
    setup() {
      return { args };
    },
    template: `
      <DXNav v-bind="args" class="flex items-center gap-2">
        <DXLink href="/">Home</DXLink>
        <span class="text-slate-400">/</span>
        <DXLink href="/products">Products</DXLink>
        <span class="text-slate-400">/</span>
        <DXLink href="/products/current" inactive>Current Page</DXLink>
      </DXNav>
    `,
  }),
};

export const Pagination = {
  args: {
    type: 'pagination',
  },
  render: (args) => ({
    components: { DXNav, DXButton },
    setup() {
      return { args };
    },
    template: `
      <DXNav v-bind="args" class="flex items-center gap-1">
        <DXButton variant="ghost" size="sm">Previous</DXButton>
        <DXButton variant="primary" size="sm">1</DXButton>
        <DXButton variant="ghost" size="sm">2</DXButton>
        <DXButton variant="ghost" size="sm">3</DXButton>
        <DXButton variant="ghost" size="sm">Next</DXButton>
      </DXNav>
    `,
  }),
};

export const Menu = {
  args: {
    type: 'menu',
  },
  render: (args) => ({
    components: { DXNav, DXLink },
    setup() {
      return { args };
    },
    template: `
      <DXNav v-bind="args" class="flex flex-col gap-1">
        <DXLink href="/dashboard" variant="ghost">Dashboard</DXLink>
        <DXLink href="/settings" variant="ghost">Settings</DXLink>
        <DXLink href="/profile" variant="ghost">Profile</DXLink>
      </DXNav>
    `,
  }),
};

export const CustomAriaLabel = {
  args: {
    type: 'custom',
    ariaLabel: 'Site navigation',
  },
  render: (args) => ({
    components: { DXNav, DXLink },
    setup() {
      return { args };
    },
    template: `
      <DXNav v-bind="args" class="flex gap-4">
        <DXLink href="/">Home</DXLink>
        <DXLink href="/about">About</DXLink>
        <DXLink href="/contact">Contact</DXLink>
      </DXNav>
      <p class="text-sm text-slate-600 mt-4">
        Используется кастомный aria-label: "Site navigation"
      </p>
    `,
  }),
};

export const WithAttributes = {
  args: {
    type: 'main',
  },
  render: (args) => ({
    components: { DXNav, DXLink },
    setup() {
      return { args };
    },
    template: `
      <DXNav 
        v-bind="args" 
        id="main-nav"
        class="flex gap-4 p-4 bg-slate-50 rounded-lg"
        data-testid="navigation"
      >
        <DXLink href="/">Home</DXLink>
        <DXLink href="/about">About</DXLink>
        <DXLink href="/contact">Contact</DXLink>
      </DXNav>
      <p class="text-sm text-slate-600 mt-4">
        Все атрибуты (id, data-testid, class) передаются корректно
      </p>
    `,
  }),
};


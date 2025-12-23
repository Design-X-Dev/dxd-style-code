import { ref, inject } from 'vue';
import DXThemeProvider from './DXThemeProvider.vue';
import DXCard from '../../atoms/DXCard/DXCard.vue';
import DXButton from '../../atoms/DXButton/DXButton.vue';

export default {
  title: 'Utilities/DXThemeProvider',
  component: DXThemeProvider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# DXThemeProvider

Провайдер для управления темами и цветовыми схемами приложения.

## Назначение

DXThemeProvider предоставляет систему управления темами через provide/inject и CSS переменные.
Позволяет переключаться между темами, сохранять выбор пользователя и использовать системную тему.

## Архитектура

### Использует
- Vue provide/inject - для доступа к теме в компонентах
- CSS переменные - для применения цветов темы
- localStorage - для сохранения выбранной темы (опционально)
- prefers-color-scheme - для определения системной темы (опционально)

### Используется в
- Корневой компонент приложения
- Любые компоненты, требующие доступа к теме

## Внутренняя логика

### CSS переменные
Цвета темы применяются как CSS переменные с префиксом \`--color-\`:
- \`--color-primary\`
- \`--color-background\`
- \`--color-text\`
- И другие цвета из объекта темы

### Provide/Inject
Компоненты могут получить доступ к теме через inject:
\`\`\`javascript
const theme = inject('theme');
theme.setTheme('dark');
\`\`\`

### Сохранение темы
Если \`persist={true}\`, тема сохраняется в localStorage и восстанавливается при загрузке.

## Особенности

### Системная тема
При \`useSystemTheme={true}\` автоматически определяется системная тема через \`prefers-color-scheme\`.

### Динамическое переключение
Тема может быть изменена динамически, все CSS переменные обновляются автоматически.
        `,
      },
    },
  },
  argTypes: {
    theme: {
      control: 'text',
      description: 'Текущая тема.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'light' },
        category: 'Theme',
      },
    },
    persist: {
      control: 'boolean',
      description: 'Сохранять тему в localStorage.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    useSystemTheme: {
      control: 'boolean',
      description: 'Использовать системную тему (prefers-color-scheme).',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
  },
};

const defaultThemes = {
  light: {
    name: 'Светлая',
    colors: {
      primary: '#007bff',
      background: '#ffffff',
      text: '#000000',
      border: '#e5e7eb',
      surface: '#f9fafb',
    },
  },
  dark: {
    name: 'Темная',
    colors: {
      primary: '#0d6efd',
      background: '#1a1a1a',
      text: '#ffffff',
      border: '#374151',
      surface: '#2d2d2d',
    },
  },
};

export const Default = {
  args: {
    theme: 'light',
    themes: defaultThemes,
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовое использование провайдера тем с переключением между светлой и темной темой.',
      },
    },
  },
  render: (args) => ({
    components: { DXThemeProvider, DXCard, DXButton },
    setup() {
      const theme = ref(args.theme);
      const themes = ref(args.themes);
      
      const toggleTheme = () => {
        theme.value = theme.value === 'light' ? 'dark' : 'light';
      };
      
      return { theme, themes, toggleTheme };
    },
    template: `
      <DXThemeProvider :theme="theme" :themes="themes">
        <div class="min-h-screen p-8" style="background-color: var(--color-background, #ffffff); color: var(--color-text, #000000);">
          <div class="space-y-4">
            <DXButton @click="toggleTheme">
              Переключить тему ({{ theme === 'light' ? 'Темная' : 'Светлая' }})
            </DXButton>
            <DXCard class="p-4" style="background-color: var(--color-surface, #f9fafb); border-color: var(--color-border, #e5e7eb);">
              <h2 class="text-xl font-semibold mb-2">Текущая тема: {{ theme }}</h2>
              <p>Этот контент использует цвета текущей темы через CSS переменные.</p>
              <div class="mt-4 p-3 rounded" style="background-color: var(--color-primary, #007bff); color: white;">
                Primary цвет темы
              </div>
            </DXCard>
          </div>
        </div>
      </DXThemeProvider>
    `,
  }),
};

export const WithPersistence = {
  args: {
    theme: 'light',
    themes: defaultThemes,
    persist: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Провайдер с сохранением темы в localStorage. Тема сохраняется и восстанавливается при перезагрузке.',
      },
    },
  },
  render: (args) => ({
    components: { DXThemeProvider, DXCard, DXButton },
    setup() {
      const theme = ref(args.theme);
      const themes = ref(args.themes);
      
      const toggleTheme = () => {
        theme.value = theme.value === 'light' ? 'dark' : 'light';
      };
      
      return { theme, themes, toggleTheme };
    },
    template: `
      <DXThemeProvider :theme="theme" :themes="themes" :persist="true">
        <div class="min-h-screen p-8" style="background-color: var(--color-background, #ffffff); color: var(--color-text, #000000);">
          <div class="space-y-4">
            <DXCard class="p-4" style="background-color: var(--color-surface, #f9fafb);">
              <p class="mb-2">Тема сохраняется в localStorage</p>
              <p class="text-sm text-slate-500">Перезагрузите страницу, чтобы увидеть сохранение</p>
            </DXCard>
            <DXButton @click="toggleTheme">
              Переключить тему ({{ theme === 'light' ? 'Темная' : 'Светлая' }})
            </DXButton>
          </div>
        </div>
      </DXThemeProvider>
    `,
  }),
};

export const WithInject = {
  parameters: {
    docs: {
      description: {
        story: 'Использование темы через inject в дочерних компонентах.',
      },
    },
  },
  render: () => ({
    components: { DXThemeProvider, DXCard, DXButton },
    setup() {
      const themes = ref(defaultThemes);
      
      // Компонент, использующий inject
      const ThemedComponent = {
        setup() {
          const theme = inject('theme');
          return { theme };
        },
        template: `
          <DXCard class="p-4" style="background-color: var(--color-surface, #f9fafb);">
            <h3 class="font-semibold mb-2">Доступ к теме через inject</h3>
            <p class="mb-2">Текущая тема: {{ theme.currentTheme.value }}</p>
            <p class="mb-2">Доступные темы: {{ theme.availableThemes.value.join(', ') }}</p>
            <DXButton @click="theme.setTheme()" size="sm">
              Переключить тему
            </DXButton>
          </DXCard>
        `,
      };
      
      return { themes, ThemedComponent };
    },
    template: `
      <DXThemeProvider :themes="themes">
        <div class="min-h-screen p-8" style="background-color: var(--color-background, #ffffff); color: var(--color-text, #000000);">
          <ThemedComponent />
        </div>
      </DXThemeProvider>
    `,
  }),
};

export const CustomThemes = {
  parameters: {
    docs: {
      description: {
        story: 'Кастомные темы с дополнительными цветами.',
      },
    },
  },
  render: () => ({
    components: { DXThemeProvider, DXCard, DXButton },
    setup() {
      const theme = ref('blue');
      const themes = ref({
        blue: {
          name: 'Синяя',
          colors: {
            primary: '#3b82f6',
            background: '#eff6ff',
            text: '#1e3a8a',
            border: '#93c5fd',
            surface: '#dbeafe',
          },
        },
        green: {
          name: 'Зеленая',
          colors: {
            primary: '#10b981',
            background: '#ecfdf5',
            text: '#065f46',
            border: '#6ee7b7',
            surface: '#d1fae5',
          },
        },
        purple: {
          name: 'Фиолетовая',
          colors: {
            primary: '#8b5cf6',
            background: '#f5f3ff',
            text: '#5b21b6',
            border: '#c4b5fd',
            surface: '#e9d5ff',
          },
        },
      });
      
      const setTheme = (themeName) => {
        theme.value = themeName;
      };
      
      return { theme, themes, setTheme };
    },
    template: `
      <DXThemeProvider :theme="theme" :themes="themes">
        <div class="min-h-screen p-8" style="background-color: var(--color-background, #ffffff); color: var(--color-text, #000000);">
          <div class="space-y-4">
            <div class="flex gap-2">
              <DXButton
                v-for="(themeData, themeName) in themes"
                :key="themeName"
                :variant="theme === themeName ? 'primary' : 'ghost'"
                @click="setTheme(themeName)"
              >
                {{ themeData.name }}
              </DXButton>
            </div>
            <DXCard class="p-4" style="background-color: var(--color-surface, #f9fafb); border-color: var(--color-border, #e5e7eb);">
              <h2 class="text-xl font-semibold mb-2">Текущая тема: {{ theme }}</h2>
              <div class="mt-4 p-3 rounded" style="background-color: var(--color-primary, #007bff); color: white;">
                Primary цвет темы
              </div>
            </DXCard>
          </div>
        </div>
      </DXThemeProvider>
    `,
  }),
};


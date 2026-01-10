import { ref } from 'vue';
import DXSettingsPanel from './DXSettingsPanel.vue';

export default {
  title: 'Organisms/DXSettingsPanel',
  component: DXSettingsPanel,
  tags: ['autodocs', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Панель настроек с категориями, группами настроек и сохранением изменений.

## Назначение

DXSettingsPanel предоставляет полнофункциональную панель настроек с поддержкой
категорий, групп настроек, различных типов полей и поиска.

## Архитектура

### Использует
- \`DXTabs\` - для категорий (в режиме tabs)
- \`DXInput\` - для текстовых полей
- \`DXSelect\` - для полей выбора
- \`DXToggle\` - для переключателей
- \`DXButton\` - для действий
- \`useClassComposition\` composable - для стилей
- \`useSpacing\` composable - для отступов

### Используется в
- Настройки приложения
- Настройки профиля пользователя
- Конфигурация системы
- Панели администратора

## Внутренняя логика

### Макеты
- **tabs**: Категории в виде вкладок
- **sidebar**: Категории в боковой панели

### Типы настроек
- **input**: Текстовое поле
- **select**: Поле выбора
- **toggle**: Переключатель

### Поиск
При \`searchable={true}\` можно искать настройки по названию и описанию.

## Особенности

### Группировка
Настройки могут быть сгруппированы внутри категорий.

### Валидация
Поддерживает валидацию через обработку событий.
        `,
      },
    },
  },
};

const defaultCategories = [
  {
    id: 'general',
    label: 'Общие',
    groups: [
      {
        title: 'Язык и регион',
        settings: [
          {
            id: 'language',
            label: 'Язык',
            type: 'select',
            options: [
              { value: 'ru', label: 'Русский' },
              { value: 'en', label: 'English' },
            ],
          },
          {
            id: 'timezone',
            label: 'Часовой пояс',
            type: 'select',
            options: [
              { value: 'Europe/Moscow', label: 'Москва (UTC+3)' },
              { value: 'Europe/London', label: 'Лондон (UTC+0)' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'notifications',
    label: 'Уведомления',
    groups: [
      {
        title: 'Типы уведомлений',
        settings: [
          {
            id: 'emailNotifications',
            label: 'Email уведомления',
            type: 'toggle',
            description: 'Получать уведомления на email',
          },
          {
            id: 'pushNotifications',
            label: 'Push уведомления',
            type: 'toggle',
            description: 'Получать push уведомления',
          },
          {
            id: 'smsNotifications',
            label: 'SMS уведомления',
            type: 'toggle',
            description: 'Получать SMS уведомления',
          },
        ],
      },
    ],
  },
  {
    id: 'privacy',
    label: 'Приватность',
    groups: [
      {
        title: 'Настройки приватности',
        settings: [
          {
            id: 'publicProfile',
            label: 'Публичный профиль',
            type: 'toggle',
            description: 'Ваш профиль виден всем пользователям',
          },
          {
            id: 'showEmail',
            label: 'Показывать email',
            type: 'toggle',
            description: 'Показывать email в профиле',
          },
        ],
      },
    ],
  },
];

const defaultSettings = {
  language: 'ru',
  timezone: 'Europe/Moscow',
  emailNotifications: true,
  pushNotifications: false,
  smsNotifications: false,
  publicProfile: true,
  showEmail: false,
};

export const Default = {
  args: {
    settings: defaultSettings,
    categories: defaultCategories,
    layout: 'tabs',
    searchable: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовая панель настроек с категориями в виде вкладок.',
      },
    },
  },
  render: (args) => ({
    components: { DXSettingsPanel },
    setup() {
      const settings = ref(args.settings);
      const handleSave = (data) => {
        console.log('Настройки сохранены:', data);
        settings.value = { ...data };
      };
      const handleReset = () => {
        console.log('Настройки сброшены');
        settings.value = { ...defaultSettings };
      };
      return { args, settings, handleSave, handleReset };
    },
    template: `
      <DXSettingsPanel
        v-model:settings="settings"
        v-bind="args"
        @save="handleSave"
        @reset="handleReset"
      />
    `,
  }),
};

export const WithSidebar = {
  parameters: {
    docs: {
      description: {
        story: 'Панель настроек с боковой панелью категорий.',
      },
    },
  },
  render: () => ({
    components: { DXSettingsPanel },
    setup() {
      const settings = ref(defaultSettings);
      return { settings, defaultCategories };
    },
    template: `
      <DXSettingsPanel
        v-model:settings="settings"
        :categories="defaultCategories"
        layout="sidebar"
      />
    `,
  }),
};

export const WithSearch = {
  parameters: {
    docs: {
      description: {
        story: 'Панель настроек с поиском по настройкам.',
      },
    },
  },
  render: () => ({
    components: { DXSettingsPanel },
    setup() {
      const settings = ref(defaultSettings);
      return { settings, defaultCategories };
    },
    template: `
      <DXSettingsPanel
        v-model:settings="settings"
        :categories="defaultCategories"
        :searchable="true"
      />
    `,
  }),
};


import { ref } from 'vue';
import DXUserProfileCard from './DXUserProfileCard.vue';

export default {
  title: 'Organisms/DXUserProfileCard',
  component: DXUserProfileCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# DXUserProfileCard

Карточка профиля пользователя с информацией, действиями и настройками.

## Назначение

DXUserProfileCard предоставляет карточку профиля пользователя с отображением
аватара, основной информации, статистики, badges и действий.

## Архитектура

### Использует
- \`DXCard\` - как базовый контейнер
- \`DXAvatar\` - для аватара
- \`DXButton\` - для действий
- \`DXBadge\` - для badges
- \`useSize\` composable - для размеров
- \`useClassComposition\` composable - для стилей

### Используется в
- Профили пользователей
- Карточки в списках пользователей
- Виджеты профиля
- Панели управления профилем

## Внутренняя логика

### Размеры
Поддерживает размеры: sm, md, lg.

### Статистика
Отображает статистику пользователя (посты, подписчики, подписки и т.д.).

### Badges
Поддерживает отображение badges для статусов пользователя.

## Особенности

### Слоты
- **avatar**: Кастомный аватар
- **info**: Кастомная информация
- **stats**: Кастомная статистика
- **badges**: Кастомные badges
- **actions**: Кастомные действия

### Кликабельность
При \`clickable={true}\` карточка становится кликабельной.
        `,
      },
    },
  },
};

const defaultUser = {
  id: 1,
  name: 'John Doe',
  role: 'Senior Developer',
  bio: 'Passionate about web development and design',
  avatar: '/avatar.jpg',
  stats: {
    posts: 125,
    followers: 1250,
    following: 340,
  },
  badges: [
    { id: 1, label: 'Верифицирован', variant: 'success' },
    { id: 2, label: 'Премиум', variant: 'info' },
  ],
};

export const Default = {
  args: {
    user: defaultUser,
    showActions: true,
    showStats: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовая карточка профиля с аватаром, информацией, статистикой и действиями.',
      },
    },
  },
  render: (args) => ({
    components: { DXUserProfileCard },
    setup() {
      return { args };
    },
    template: `
      <div class="max-w-sm">
        <DXUserProfileCard v-bind="args" />
      </div>
    `,
  }),
};

export const WithActions = {
  parameters: {
    docs: {
      description: {
        story: 'Карточка профиля с действиями (написать, редактировать).',
      },
    },
  },
  render: () => ({
    components: { DXUserProfileCard },
    setup() {
      const user = ref(defaultUser);
      const handleEdit = () => {
        console.log('Редактирование профиля');
      };
      const handleMessage = () => {
        console.log('Отправка сообщения');
      };
      return { user, handleEdit, handleMessage };
    },
    template: `
      <div class="max-w-sm">
        <DXUserProfileCard
          :user="user"
          :show-actions="true"
          :editable="true"
          @edit="handleEdit"
          @message="handleMessage"
        />
      </div>
    `,
  }),
};

export const Clickable = {
  parameters: {
    docs: {
      description: {
        story: 'Кликабельная карточка профиля.',
      },
    },
  },
  render: () => ({
    components: { DXUserProfileCard },
    setup() {
      const user = ref(defaultUser);
      const handleClick = () => {
        console.log('Клик по карточке:', user.value);
      };
      return { user, handleClick };
    },
    template: `
      <div class="max-w-sm">
        <DXUserProfileCard
          :user="user"
          :clickable="true"
          @click="handleClick"
        />
      </div>
    `,
  }),
};

export const DifferentSizes = {
  parameters: {
    docs: {
      description: {
        story: 'Карточки профиля разных размеров.',
      },
    },
  },
  render: () => ({
    components: { DXUserProfileCard },
    setup() {
      const user = ref(defaultUser);
      return { user };
    },
    template: `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DXUserProfileCard :user="user" size="sm" />
        <DXUserProfileCard :user="user" size="md" />
        <DXUserProfileCard :user="user" size="lg" />
      </div>
    `,
  }),
};


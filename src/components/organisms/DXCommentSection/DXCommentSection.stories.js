import { ref } from 'vue';
import DXCommentSection from './DXCommentSection.vue';

export default {
  title: 'Organisms/DXCommentSection',
  component: DXCommentSection,
  tags: ['autodocs', 'category:feedback'],
  parameters: {
    docs: {
      description: {
        component: `
Секция комментариев с поддержкой вложенности, ответов и модерации.

## Назначение

DXCommentSection предоставляет полнофункциональную систему комментариев с поддержкой
вложенности (threading), ответов, редактирования, удаления и реакций.

## Архитектура

### Использует
- \`DXTextarea\` - для ввода комментария
- \`DXButton\` - для действий
- \`DXAvatar\` - для аватаров
- \`DXPagination\` - для пагинации
- \`useClassComposition\` composable - для стилей
- \`useSpacing\` composable - для отступов

### Используется в
- Статьи и блоги
- Обсуждения
- Отзывы с ответами
- Системы обратной связи

## Внутренняя логика

### Вложенность
При \`threading={true}\` комментарии могут иметь вложенные ответы.

### Сортировка
Поддерживает сортировку: newest (новые), oldest (старые), popular (популярные).

### Пагинация
При \`paginated={true}\` комментарии разбиваются на страницы.

## Особенности

### Редактирование и удаление
При \`editable={true}\` и \`deletable={true}\` показываются соответствующие кнопки.

### Реакции
При \`showReactions={true}\` показываются лайки.
        `,
      },
    },
  },
};

const defaultComments = [
  {
    id: 1,
    text: 'Отличная статья! Очень полезная информация.',
    author: { name: 'John Doe', avatar: '/avatar1.jpg' },
    date: new Date(),
    likes: 5,
    canEdit: true,
    canDelete: true,
  },
  {
    id: 2,
    text: 'Спасибо за подробное объяснение.',
    author: { name: 'Jane Smith', avatar: '/avatar2.jpg' },
    date: new Date(Date.now() - 3600000),
    likes: 2,
    replies: [
      {
        id: 3,
        text: 'Пожалуйста!',
        author: { name: 'Author', avatar: '/avatar3.jpg' },
        date: new Date(Date.now() - 1800000),
        likes: 1,
        parentId: 2,
      },
    ],
    canEdit: false,
    canDelete: false,
  },
];

export const Default = {
  parameters: {
    docs: {
      description: {
        story: 'Базовая секция комментариев с формой добавления.',
      },
    },
  },
  render: () => ({
    components: { DXCommentSection },
    setup() {
      const comments = ref(defaultComments);
      const handleAddComment = (data) => {
        console.log('Добавлен комментарий:', data);
        comments.value.push({
          id: comments.value.length + 1,
          text: data.text,
          author: { name: 'Current User', avatar: '/avatar.jpg' },
          date: new Date(),
          likes: 0,
          canEdit: true,
          canDelete: true,
        });
      };
      return { comments, handleAddComment };
    },
    template: `
      <DXCommentSection
        :comments="comments"
        @add-comment="handleAddComment"
      />
    `,
  }),
};

export const WithThreading = {
  parameters: {
    docs: {
      description: {
        story: 'Секция комментариев с поддержкой вложенности (ответы на комментарии).',
      },
    },
  },
  render: () => ({
    components: { DXCommentSection },
    setup() {
      const comments = ref(defaultComments);
      return { comments };
    },
    template: `
      <DXCommentSection
        :comments="comments"
        :threading="true"
      />
    `,
  }),
};

export const WithModeration = {
  parameters: {
    docs: {
      description: {
        story: 'Секция комментариев с возможностью редактирования и удаления.',
      },
    },
  },
  render: () => ({
    components: { DXCommentSection },
    setup() {
      const comments = ref(defaultComments);
      return { comments };
    },
    template: `
      <DXCommentSection
        :comments="comments"
        :editable="true"
        :deletable="true"
      />
    `,
  }),
};


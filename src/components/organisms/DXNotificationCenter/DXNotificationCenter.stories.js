import { ref } from 'vue';
import DXNotificationCenter from './DXNotificationCenter.vue';

export default {
  title: 'Organisms/DXNotificationCenter',
  component: DXNotificationCenter,
  tags: ['autodocs', 'category:feedback', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Центр уведомлений с фильтрацией, группировкой и управлением уведомлениями.

## Назначение

DXNotificationCenter предоставляет полнофункциональный центр уведомлений с поддержкой
фильтрации, группировки, отметки как прочитанные и удаления уведомлений.

## Архитектура

### Использует
- \`DXDropdown\` - для выпадающего списка
- \`DXButton\` - для действий
- \`DXIcon\` - для иконок
- \`DXBadge\` - для счетчика непрочитанных
- \`useClassComposition\` composable - для стилей
- \`useSpacing\` composable - для отступов

### Используется в
- \`DXHeaderBar\` - для иконки уведомлений
- Центры уведомлений в приложениях
- Панели уведомлений

## Внутренняя логика

### Группировка
Поддерживает группировку: date (по дате), type (по типу), none (без группировки).

### Фильтрация
Поддерживает фильтрацию по типу и статусу (все/непрочитанные).

### Типы уведомлений
- info: Информация
- success: Успех
- warning: Предупреждение
- error: Ошибка

## Особенности

### Автоматическое обновление
Можно настроить автоматическое обновление уведомлений.

### Индикация непрочитанных
Показывает количество непрочитанных уведомлений через Badge.
        `,
      },
    },
  },
};

const defaultNotifications = [
  {
    id: 1,
    type: 'info',
    title: 'Новое сообщение',
    message: 'У вас новое сообщение от John Doe',
    date: new Date(),
    read: false,
  },
  {
    id: 2,
    type: 'success',
    title: 'Задача выполнена',
    message: 'Задача "Обновить документацию" выполнена',
    date: new Date(Date.now() - 3600000),
    read: false,
  },
  {
    id: 3,
    type: 'warning',
    title: 'Предупреждение',
    message: 'Истекает срок подписки через 7 дней',
    date: new Date(Date.now() - 7200000),
    read: true,
  },
];

export const Default = {
  parameters: {
    docs: {
      description: {
        story: 'Базовый центр уведомлений с триггером и выпадающим списком.',
      },
    },
  },
  render: () => ({
    components: { DXNotificationCenter },
    setup() {
      const notifications = ref(defaultNotifications);
      const unreadCount = ref(2);
      
      const handleMarkRead = (id) => {
        const notification = notifications.value.find((n) => n.id === id);
        if (notification) {
          notification.read = true;
          unreadCount.value = Math.max(0, unreadCount.value - 1);
        }
      };
      
      const handleMarkAllRead = () => {
        notifications.value.forEach((n) => (n.read = true));
        unreadCount.value = 0;
      };
      
      return { notifications, unreadCount, handleMarkRead, handleMarkAllRead };
    },
    template: `
      <div class="p-8">
        <DXNotificationCenter
          :notifications="notifications"
          :unread-count="unreadCount"
          @mark-read="handleMarkRead"
          @mark-all-read="handleMarkAllRead"
        />
      </div>
    `,
  }),
};

export const WithGrouping = {
  parameters: {
    docs: {
      description: {
        story: 'Центр уведомлений с группировкой по дате.',
      },
    },
  },
  render: () => ({
    components: { DXNotificationCenter },
    setup() {
      const notifications = ref(defaultNotifications);
      return { notifications };
    },
    template: `
      <div class="p-8">
        <DXNotificationCenter
          :notifications="notifications"
          :unread-count="2"
          group-by="date"
        />
      </div>
    `,
  }),
};

export const WithFilters = {
  parameters: {
    docs: {
      description: {
        story: 'Центр уведомлений с фильтрами для просмотра всех или только непрочитанных.',
      },
    },
  },
  render: () => ({
    components: { DXNotificationCenter },
    setup() {
      const notifications = ref(defaultNotifications);
      return { notifications };
    },
    template: `
      <div class="p-8">
        <DXNotificationCenter
          :notifications="notifications"
          :unread-count="2"
          :filterable="true"
        />
      </div>
    `,
  }),
};


# DXNotificationCenter

Центр уведомлений с группировкой и действиями.

## Import

```javascript
import { DXNotificationCenter } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `notifications` | `Array` | `[]` | Список уведомлений |
| `groupBy` | `String` | `null` | Группировка: `'date'`, `'type'`, `'category'` |
| `showUnreadOnly` | `Boolean` | `false` | Показывать только непрочитанные |
| `maxVisible` | `Number` | `10` | Максимум видимых уведомлений |
| `loading` | `Boolean` | `false` | Состояние загрузки |
| `showMarkAllRead` | `Boolean` | `true` | Показать "Прочитать все" |
| `showSettings` | `Boolean` | `false` | Показать кнопку настроек |
| `emptyTitle` | `String` | `'Нет уведомлений'` | Заголовок пустого состояния |
| `emptyDescription` | `String` | `''` | Описание пустого состояния |

## Notification Structure

```typescript
interface Notification {
  id: string | number;
  title: string;
  message?: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  category?: string;
  read?: boolean;
  timestamp: Date | string;
  icon?: Component;
  avatar?: string;
  action?: {
    label: string;
    href?: string;
    to?: string;
    onClick?: () => void;
  };
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `notification-click` | `Notification` | Клик по уведомлению |
| `mark-read` | `string \| number` | Пометить как прочитанное |
| `mark-all-read` | - | Прочитать все |
| `delete` | `string \| number` | Удалить уведомление |
| `settings` | - | Клик по настройкам |
| `load-more` | - | Загрузить ещё |

## Slots

| Slot | Props | Description |
|------|-------|-------------|
| `notification` | `{ notification }` | Кастомное уведомление |
| `empty` | - | Пустое состояние |
| `footer` | - | Футер центра |

## Usage

### Basic

```vue
<DXNotificationCenter
  :notifications="notifications"
  @notification-click="handleClick"
  @mark-read="handleMarkRead"
/>
```

### Grouped by Date

```vue
<DXNotificationCenter
  :notifications="notifications"
  groupBy="date"
/>
```

### With Actions

```vue
<DXNotificationCenter
  :notifications="notifications"
  showSettings
  @mark-all-read="markAllAsRead"
  @settings="openNotificationSettings"
/>
```

### In Dropdown

```vue
<DXDropdown width="lg" position="right">
  <template #trigger>
    <div class="relative">
      <DXIcon :icon="BellIcon" />
      <span v-if="unreadCount" class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
        {{ unreadCount }}
      </span>
    </div>
  </template>
  
  <DXNotificationCenter
    :notifications="notifications"
    :maxVisible="5"
    @notification-click="handleClick"
  >
    <template #footer>
      <DXLink to="/notifications">Все уведомления</DXLink>
    </template>
  </DXNotificationCenter>
</DXDropdown>
```

### Custom Notification Render

```vue
<DXNotificationCenter :notifications="notifications">
  <template #notification="{ notification }">
    <div class="flex gap-3 p-3 hover:bg-slate-50">
      <img 
        v-if="notification.avatar"
        :src="notification.avatar"
        class="w-10 h-10 rounded-full"
      />
      <div class="flex-1">
        <p class="font-medium">{{ notification.title }}</p>
        <p class="text-sm text-slate-500">{{ notification.message }}</p>
        <p class="text-xs text-slate-400 mt-1">
          {{ formatDate(notification.timestamp) }}
        </p>
      </div>
    </div>
  </template>
</DXNotificationCenter>
```

### Unread Only

```vue
<DXNotificationCenter
  :notifications="notifications"
  showUnreadOnly
/>
```

### With Loading

```vue
<DXNotificationCenter
  :notifications="notifications"
  :loading="isLoading"
  @load-more="loadMoreNotifications"
/>
```

### Empty State

```vue
<DXNotificationCenter
  :notifications="[]"
  emptyTitle="Всё прочитано!"
  emptyDescription="У вас нет новых уведомлений"
/>
```

### Full Page

```vue
<DXCard>
  <DXNotificationCenter
    :notifications="allNotifications"
    groupBy="date"
    :maxVisible="50"
    showSettings
    @mark-all-read="markAllAsRead"
    @delete="deleteNotification"
    @settings="showSettings = true"
  />
</DXCard>
```

## See Also

- [DXDropdown](./DXDropdown.md)
- [DXToast](../atoms/DXToast.md)
- [DXAlert](../molecules/DXAlert.md)


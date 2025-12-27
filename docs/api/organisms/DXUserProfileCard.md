# DXUserProfileCard

Карточка профиля пользователя с аватаром, информацией и действиями.

## Import

```javascript
import { DXUserProfileCard } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `user` | `Object` | `required` | Данные пользователя |
| `variant` | `String` | `'default'` | Вариант: `'default'`, `'compact'`, `'horizontal'` |
| `showStatus` | `Boolean` | `false` | Показывать статус онлайн |
| `showStats` | `Boolean` | `false` | Показывать статистику |
| `showActions` | `Boolean` | `true` | Показывать действия |
| `editable` | `Boolean` | `false` | Можно редактировать |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |

## User Structure

```typescript
interface User {
  id: string | number;
  name: string;
  email?: string;
  avatar?: string;
  role?: string;
  status?: 'online' | 'offline' | 'away' | 'busy';
  bio?: string;
  location?: string;
  website?: string;
  stats?: {
    posts?: number;
    followers?: number;
    following?: number;
  };
  socialLinks?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `action` | `string` | Клик по действию |
| `edit` | - | Клик "Редактировать" |
| `avatar-click` | - | Клик по аватару |

## Slots

| Slot | Description |
|------|-------------|
| `avatar` | Кастомный аватар |
| `actions` | Кастомные действия |
| `stats` | Кастомная статистика |
| `footer` | Футер карточки |

## Usage

### Basic

```vue
<DXUserProfileCard
  :user="{
    name: 'Иван Иванов',
    email: 'ivan@example.com',
    avatar: '/avatar.jpg',
    role: 'Администратор'
  }"
/>
```

### With Status

```vue
<DXUserProfileCard
  :user="user"
  showStatus
/>
```

### With Stats

```vue
<DXUserProfileCard
  :user="{
    name: 'Иван Иванов',
    avatar: '/avatar.jpg',
    stats: {
      posts: 42,
      followers: 1234,
      following: 567
    }
  }"
  showStats
/>
```

### Compact Variant

```vue
<DXUserProfileCard
  :user="user"
  variant="compact"
/>
```

### Horizontal Variant

```vue
<DXUserProfileCard
  :user="user"
  variant="horizontal"
/>
```

### Editable

```vue
<DXUserProfileCard
  :user="currentUser"
  editable
  @edit="openEditModal"
/>
```

### Sizes

```vue
<DXUserProfileCard :user="user" size="sm" />
<DXUserProfileCard :user="user" size="md" />
<DXUserProfileCard :user="user" size="lg" />
```

### With Actions

```vue
<DXUserProfileCard :user="user">
  <template #actions>
    <DXButton size="sm">Подписаться</DXButton>
    <DXButton size="sm" variant="ghost">Сообщение</DXButton>
  </template>
</DXUserProfileCard>
```

### With Bio and Links

```vue
<DXUserProfileCard
  :user="{
    name: 'Иван Иванов',
    avatar: '/avatar.jpg',
    bio: 'Frontend разработчик. Люблю Vue.js и TypeScript.',
    location: 'Москва, Россия',
    website: 'https://ivan.dev',
    socialLinks: {
      twitter: 'ivan_dev',
      github: 'ivan-dev'
    }
  }"
  showStats
/>
```

### In Sidebar

```vue
<DXSidebar>
  <template #footer>
    <DXUserProfileCard
      :user="currentUser"
      variant="compact"
      @action="handleUserAction"
    />
  </template>
</DXSidebar>
```

### Team Member Card

```vue
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  <DXUserProfileCard
    v-for="member in team"
    :key="member.id"
    :user="member"
    variant="default"
    showStatus
  />
</div>
```

## See Also

- [DXCard](../atoms/DXCard.md)
- [DXDropdown](./DXDropdown.md)


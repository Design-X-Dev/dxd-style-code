# DXCommentSection

Секция комментариев с вложенными ответами.

## Import

```javascript
import { DXCommentSection } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `comments` | `Array` | `[]` | Список комментариев |
| `currentUserId` | `String\|Number` | `null` | ID текущего пользователя |
| `allowReplies` | `Boolean` | `true` | Разрешить ответы |
| `allowEdit` | `Boolean` | `true` | Разрешить редактирование своих комментариев |
| `allowDelete` | `Boolean` | `true` | Разрешить удаление своих комментариев |
| `maxDepth` | `Number` | `3` | Максимальная глубина вложенности |
| `showForm` | `Boolean` | `true` | Показывать форму добавления |
| `placeholder` | `String` | `'Написать комментарий...'` | Placeholder |
| `loading` | `Boolean` | `false` | Состояние загрузки |

## Comment Structure

```typescript
interface Comment {
  id: string | number;
  userId: string | number;
  userName: string;
  userAvatar?: string;
  content: string;
  timestamp: Date | string;
  likes?: number;
  isLiked?: boolean;
  replies?: Comment[];
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `add` | `{ content, parentId? }` | Добавление комментария |
| `edit` | `{ id, content }` | Редактирование |
| `delete` | `id` | Удаление |
| `like` | `id` | Лайк |
| `reply` | `{ parentId, content }` | Ответ |
| `load-more` | - | Загрузить ещё |

## Slots

| Slot | Props | Description |
|------|-------|-------------|
| `comment` | `{ comment, depth }` | Кастомный комментарий |
| `form` | `{ submit }` | Кастомная форма |
| `empty` | - | Пустое состояние |

## Usage

### Basic

```vue
<DXCommentSection
  :comments="comments"
  :currentUserId="currentUser.id"
  @add="addComment"
/>
```

### With Likes

```vue
<DXCommentSection
  :comments="comments"
  :currentUserId="userId"
  @like="handleLike"
/>
```

### With Nested Replies

```vue
<DXCommentSection
  :comments="[
    {
      id: 1,
      userName: 'Иван',
      content: 'Отличная статья!',
      replies: [
        {
          id: 2,
          userName: 'Мария',
          content: 'Согласна!'
        }
      ]
    }
  ]"
  :maxDepth="3"
/>
```

### Without Form

```vue
<DXCommentSection
  :comments="comments"
  :showForm="false"
/>
```

### Read-only

```vue
<DXCommentSection
  :comments="comments"
  :allowReplies="false"
  :allowEdit="false"
  :allowDelete="false"
  :showForm="false"
/>
```

### Blog Post Example

```vue
<DXCard>
  <article>
    <h1>{{ post.title }}</h1>
    <div v-html="post.content"></div>
  </article>
  
  <DXDivider />
  
  <DXCommentSection
    :comments="post.comments"
    :currentUserId="currentUser?.id"
    @add="addComment"
    @reply="addReply"
    @like="likeComment"
    @delete="deleteComment"
  />
</DXCard>
```

## See Also

- [DXChatInterface](./DXChatInterface.md)
- [DXTextarea](../molecules/DXTextarea.md)


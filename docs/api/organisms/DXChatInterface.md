# DXChatInterface

Интерфейс чата с сообщениями и полем ввода.

## Import

```javascript
import { DXChatInterface } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `messages` | `Array` | `[]` | Список сообщений |
| `currentUserId` | `String\|Number` | `null` | ID текущего пользователя |
| `placeholder` | `String` | `'Введите сообщение...'` | Placeholder ввода |
| `loading` | `Boolean` | `false` | Состояние загрузки |
| `showTypingIndicator` | `Boolean` | `false` | Показать индикатор печати |
| `typingUsers` | `Array` | `[]` | Пользователи, которые печатают |
| `showAvatars` | `Boolean` | `true` | Показывать аватары |
| `showTimestamps` | `Boolean` | `true` | Показывать время |
| `groupMessages` | `Boolean` | `true` | Группировать последовательные сообщения |

## Message Structure

```typescript
interface Message {
  id: string | number;
  userId: string | number;
  userName: string;
  userAvatar?: string;
  content: string;
  timestamp: Date | string;
  type?: 'text' | 'image' | 'file' | 'system';
  status?: 'sending' | 'sent' | 'delivered' | 'read';
  attachments?: Attachment[];
}

interface Attachment {
  id: string;
  type: 'image' | 'file';
  url: string;
  name?: string;
  size?: number;
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `send` | `{ content, attachments }` | Отправка сообщения |
| `scroll-top` | - | Прокрутка вверх (для загрузки истории) |
| `message-click` | `Message` | Клик по сообщению |
| `attachment-click` | `Attachment` | Клик по вложению |

## Slots

| Slot | Props | Description |
|------|-------|-------------|
| `message` | `{ message, isOwn }` | Кастомное сообщение |
| `header` | - | Шапка чата |
| `empty` | - | Пустой чат |
| `input` | `{ send }` | Кастомный ввод |

## Usage

### Basic

```vue
<DXChatInterface
  :messages="messages"
  :currentUserId="currentUser.id"
  @send="sendMessage"
/>
```

### With Header

```vue
<DXChatInterface :messages="messages" :currentUserId="userId">
  <template #header>
    <div class="flex items-center gap-3 p-4 border-b">
      <img :src="chatPartner.avatar" class="w-10 h-10 rounded-full" />
      <div>
        <div class="font-medium">{{ chatPartner.name }}</div>
        <div class="text-sm text-slate-500">Онлайн</div>
      </div>
    </div>
  </template>
</DXChatInterface>
```

### With Typing Indicator

```vue
<DXChatInterface
  :messages="messages"
  :currentUserId="userId"
  showTypingIndicator
  :typingUsers="typingUsers"
/>
```

### Load History

```vue
<DXChatInterface
  :messages="messages"
  :currentUserId="userId"
  :loading="isLoadingHistory"
  @scroll-top="loadMoreHistory"
/>
```

### With Attachments

```vue
<DXChatInterface
  :messages="messagesWithAttachments"
  :currentUserId="userId"
  @attachment-click="openAttachment"
/>
```

### Custom Message Render

```vue
<DXChatInterface :messages="messages" :currentUserId="userId">
  <template #message="{ message, isOwn }">
    <div
      :class="[
        'max-w-xs px-4 py-2 rounded-2xl',
        isOwn ? 'bg-blue-500 text-white ml-auto' : 'bg-slate-100'
      ]"
    >
      <p>{{ message.content }}</p>
      <span class="text-xs opacity-70">
        {{ formatTime(message.timestamp) }}
      </span>
    </div>
  </template>
</DXChatInterface>
```

### Support Chat Widget

```vue
<template>
  <div class="fixed bottom-4 right-4">
    <DXButton v-if="!showChat" @click="showChat = true">
      <DXIcon :icon="ChatBubbleLeftIcon" />
      Чат с поддержкой
    </DXButton>
    
    <DXCard v-else class="w-96 h-[500px] flex flex-col">
      <DXChatInterface
        :messages="supportMessages"
        :currentUserId="'user'"
        class="flex-1"
        @send="sendSupportMessage"
      >
        <template #header>
          <div class="flex justify-between items-center p-4 border-b">
            <span class="font-medium">Поддержка</span>
            <DXCloseButton @click="showChat = false" />
          </div>
        </template>
      </DXChatInterface>
    </DXCard>
  </div>
</template>
```

### Empty State

```vue
<DXChatInterface :messages="[]" :currentUserId="userId">
  <template #empty>
    <div class="flex flex-col items-center justify-center h-full text-slate-500">
      <DXIcon :icon="ChatBubbleLeftRightIcon" size="xl" />
      <p class="mt-2">Начните диалог</p>
    </div>
  </template>
</DXChatInterface>
```

## Message Status Icons

| Status | Description |
|--------|-------------|
| `sending` | Отправляется (часики) |
| `sent` | Отправлено (одна галочка) |
| `delivered` | Доставлено (две галочки) |
| `read` | Прочитано (две синие галочки) |

## See Also

- [DXTextarea](../molecules/DXTextarea.md)
- [DXAvatar](../atoms/DXAvatar.md)


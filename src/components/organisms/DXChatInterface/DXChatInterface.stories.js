import { ref } from 'vue';
import DXChatInterface from './DXChatInterface.vue';

export default {
  title: 'Organisms/DXChatInterface',
  component: DXChatInterface,
  tags: ['autodocs', 'category:feedback', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Интерфейс чата с сообщениями, вводом текста и поддержкой различных типов сообщений.

## Назначение

DXChatInterface предоставляет полнофункциональный интерфейс чата с поддержкой
отправки сообщений, загрузки файлов, группировки сообщений по времени и статусов доставки.

## Архитектура

### Использует
- \`DXTextarea\` - для ввода сообщений
- \`DXButton\` - для отправки
- \`DXAvatar\` - для аватаров
- \`DXIcon\` - для иконок
- \`useClassComposition\` composable - для стилей
- \`useSpacing\` composable - для отступов

### Используется в
- Чат-интерфейсы в приложениях
- Системы поддержки
- Мессенджеры
- Командные чаты

## Внутренняя логика

### Группировка сообщений
Сообщения группируются по дате и времени для удобного отображения.

### Статусы сообщений
Поддерживает статусы: sent (отправлено), delivered (доставлено), read (прочитано).

### Автоматический скролл
При \`autoScroll={true}\` автоматически прокручивается к новым сообщениям.

## Особенности

### Загрузка файлов
При \`allowFileUpload={true}\` можно загружать файлы к сообщениям.

### Горячие клавиши
- Enter - отправить сообщение
- Shift+Enter - новая строка
        `,
      },
    },
  },
};

const defaultMessages = [
  {
    id: 1,
    text: 'Привет! Как дела?',
    userId: 2,
    user: { id: 2, name: 'John Doe', avatar: '/avatar1.jpg' },
    date: new Date(Date.now() - 3600000),
    status: 'read',
  },
  {
    id: 2,
    text: 'Отлично, спасибо! А у тебя?',
    userId: 1,
    user: { id: 1, name: 'Вы', avatar: '/avatar2.jpg' },
    date: new Date(Date.now() - 1800000),
    status: 'read',
  },
  {
    id: 3,
    text: 'Тоже хорошо!',
    userId: 2,
    user: { id: 2, name: 'John Doe', avatar: '/avatar1.jpg' },
    date: new Date(),
    status: 'delivered',
  },
];

const currentUser = {
  id: 1,
  name: 'Вы',
  avatar: '/avatar2.jpg',
};

export const Default = {
  parameters: {
    docs: {
      description: {
        story: 'Базовый интерфейс чата с сообщениями и полем ввода.',
      },
    },
  },
  render: () => ({
    components: { DXChatInterface },
    setup() {
      const messages = ref(defaultMessages);
      const chatInfo = ref({ name: 'John Doe', status: 'В сети' });
      
      const handleSendMessage = (data) => {
        console.log('Отправлено сообщение:', data);
        messages.value.push({
          id: messages.value.length + 1,
          ...data,
          user: currentUser,
        });
      };
      
      return { messages, chatInfo, handleSendMessage };
    },
    template: `
      <div class="h-[600px] border border-slate-200 rounded-lg overflow-hidden">
        <DXChatInterface
          :messages="messages"
          :current-user="{ id: 1, name: 'Вы' }"
          :chat-info="chatInfo"
          @send-message="handleSendMessage"
        />
      </div>
    `,
  }),
};

export const WithFileUpload = {
  parameters: {
    docs: {
      description: {
        story: 'Интерфейс чата с поддержкой загрузки файлов.',
      },
    },
  },
  render: () => ({
    components: { DXChatInterface },
    setup() {
      const messages = ref(defaultMessages);
      
      const handleUploadFile = (files) => {
        console.log('Загружены файлы:', files);
      };
      
      return { messages, handleUploadFile };
    },
    template: `
      <div class="h-[600px] border border-slate-200 rounded-lg overflow-hidden">
        <DXChatInterface
          :messages="messages"
          :current-user="{ id: 1, name: 'Вы' }"
          :allow-file-upload="true"
          @upload-file="handleUploadFile"
        />
      </div>
    `,
  }),
};


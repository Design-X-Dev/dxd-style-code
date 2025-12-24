import DXTextarea from './DXTextarea.vue';
import { ref } from 'vue';
import {
  ChatBubbleLeftIcon,
  DocumentTextIcon,
  PencilIcon,
  StarIcon,
} from '@heroicons/vue/24/outline';

export default {
  title: 'Molecules/DXTextarea',
  component: DXTextarea,
  tags: ['autodocs', 'category:form'],
  parameters: {
    docs: {
      description: {
        component: `
# DXTextarea

Компонент многострочного текстового поля с поддержкой иконок, валидации, счетчика символов и интеграции с группами полей.

## Назначение

DXTextarea предоставляет стандартизированное многострочное текстовое поле для ввода длинных текстов.
Компонент поддерживает иконки, валидацию, ограничение длины, счетчик символов и автоматическую адаптацию
при использовании внутри DXInputGroup.

## Архитектура

### Использует
- \`DXFormLabel\` - для отображения лейбла, ошибок, вспомогательного текста и счетчика символов
- \`DXIconWrapper\` - для отображения иконок слева и справа
- \`useClassComposition\` composable - для объединения CSS классов
- \`provide/inject\` - для интеграции с DXInputGroup

### Используется в
- \`DXInputGroup\` - группы полей с аддонами
- Формы с длинными текстовыми полями
- Комментарии и описания
- Любые места, требующие многострочного ввода

## Внутренняя логика

### Интеграция с DXInputGroup
При использовании внутри \`DXInputGroup\`:
- Поле автоматически регистрируется в группе через \`provide/inject\`
- Размер синхронизируется с размером группы
- Состояние \`disabled\` наследуется от группы
- Состояние \`error\` синхронизируется с группой
- Border-radius адаптируется в зависимости от наличия аддонов слева/справа

### Иконки
- **prefixIcon**: Иконка слева от textarea (Heroicon компонент)
- **suffixIcon**: Иконка справа от textarea (Heroicon компонент)
- Иконки выравниваются по верху (\`verticalAlign="top"\`) для многострочного поля

### Счетчик символов
- При \`maxLength > 0\` и \`showCount={true}\` отображается счетчик символов
- Формат: "текущее / максимальное" (например, "150 / 500")
- Отображается через \`DXFormLabel\`

### Валидация
- При наличии \`error\` prop, поле получает красную рамку
- Текст ошибки отображается через \`DXFormLabel\`
- Состояние ошибки синхронизируется с \`DXInputGroup\`

## Особенности

### v-model
Полностью поддерживает двустороннее связывание через \`v-model\` для String значений.

### Количество строк
- Настраивается через \`rows\` prop (по умолчанию 4)
- Поле автоматически расширяется при вводе текста

### Ограничение длины
- При \`maxLength > 0\` ограничивает количество вводимых символов
- Нативный атрибут \`maxlength\` применяется к textarea

### Состояния
- **disabled** - отключает поле
- **error** - визуально выделяет ошибку (красная рамка)
- **required** - отмечает поле как обязательное

### Лейбл и вспомогательный текст
- \`label\` - отображается над полем
- \`helper\` - вспомогательный текст под полем
- \`error\` - текст ошибки (заменяет helper при наличии)
- \`showCount\` - показывать счетчик символов

### Нативный textarea
Компонент использует нативный HTML \`<textarea>\` элемент, что обеспечивает:
- Нативную доступность
- Работу с клавиатурой
- Автоматическое изменение размера
        `,
      },
    },
  },
};

export const Default = {
  render: () => ({
    components: { DXTextarea },
    setup() {
      const value = ref('');
      return { value };
    },
    template: '<DXTextarea v-model="value" label="Description" placeholder="Enter description..." />',
  }),
};

export const WithValue = {
  render: () => ({
    components: { DXTextarea },
    setup() {
      const value = ref('This is some sample text in the textarea.');
      return { value };
    },
    template: '<DXTextarea v-model="value" label="Notes" />',
  }),
};

export const WithHelper = {
  render: () => ({
    components: { DXTextarea },
    setup() {
      const value = ref('');
      return { value };
    },
    template: '<DXTextarea v-model="value" label="Bio" helper="Maximum 500 characters" />',
  }),
};

export const Disabled = {
  render: () => ({
    components: { DXTextarea },
    setup() {
      const value = ref('Disabled content');
      return { value };
    },
    template: '<DXTextarea v-model="value" label="Disabled" disabled />',
  }),
};

export const WithError = {
  render: () => ({
    components: { DXTextarea },
    setup() {
      const value = ref('Invalid content');
      return { value };
    },
    template: '<DXTextarea v-model="value" label="Description" error="This field is required" />',
  }),
};

// С иконками
export const WithPrefixIcon = {
  render: () => ({
    components: { DXTextarea },
    setup() {
      const message = ref('');
      return { message, ChatBubbleLeftIcon };
    },
    template: `
      <DXTextarea
        v-model="message"
        label="Message"
        placeholder="Write your message..."
        :prefix-icon="ChatBubbleLeftIcon"
        :rows="4"
      />
    `,
  }),
};

export const WithSuffixIcon = {
  render: () => ({
    components: { DXTextarea },
    setup() {
      const note = ref('');
      return { note, StarIcon };
    },
    template: `
      <DXTextarea
        v-model="note"
        label="Note"
        placeholder="Add a note..."
        :suffix-icon="StarIcon"
        :rows="3"
      />
    `,
  }),
};

export const WithBothIcons = {
  render: () => ({
    components: { DXTextarea },
    setup() {
      const text = ref('');
      return { text, ChatBubbleLeftIcon, StarIcon };
    },
    template: `
      <DXTextarea
        v-model="text"
        label="Message with Icons"
        placeholder="Type your message..."
        :prefix-icon="ChatBubbleLeftIcon"
        :suffix-icon="StarIcon"
        :rows="4"
      />
    `,
  }),
};

export const WithCharacterCount = {
  render: () => ({
    components: { DXTextarea },
    setup() {
      const description = ref('');
      return { description, PencilIcon };
    },
    template: `
      <DXTextarea
        v-model="description"
        label="Description"
        placeholder="Describe your product..."
        :prefix-icon="PencilIcon"
        :max-length="500"
        :show-count="true"
        :rows="6"
      />
    `,
  }),
};

export const Review = {
  render: () => ({
    components: { DXTextarea },
    setup() {
      const review = ref('');
      return { review, StarIcon };
    },
    template: `
      <DXTextarea
        v-model="review"
        label="Your Review"
        placeholder="Share your experience..."
        :prefix-icon="StarIcon"
        :max-length="1000"
        :show-count="true"
        :rows="5"
        helper="Write a detailed review to help others"
      />
    `,
  }),
};

export const WithAutoResize = {
  render: () => ({
    components: { DXTextarea },
    setup() {
      const text = ref('');
      return { text, DocumentTextIcon };
    },
    template: `
      <DXTextarea
        v-model="text"
        label="Auto-resize Textarea"
        placeholder="Start typing and watch it grow..."
        :prefix-icon="DocumentTextIcon"
        :auto-resize="true"
        :rows="3"
        helper="This textarea will automatically expand as you type"
      />
    `,
  }),
};

export const AllIconTypes = {
  render: () => ({
    components: { DXTextarea },
    setup() {
      const message = ref('');
      const description = ref('');
      const review = ref('');
      return { 
        message, description, review,
        ChatBubbleLeftIcon, DocumentTextIcon, StarIcon 
      };
    },
    template: `
      <div class="space-y-6 max-w-2xl">
        <DXTextarea
          v-model="message"
          label="Message"
          placeholder="Write your message..."
          :prefix-icon="ChatBubbleLeftIcon"
          :rows="3"
        />
        
        <DXTextarea
          v-model="description"
          label="Description"
          placeholder="Describe it..."
          :prefix-icon="DocumentTextIcon"
          :max-length="300"
          :show-count="true"
          :rows="4"
        />
        
        <DXTextarea
          v-model="review"
          label="Review"
          placeholder="Your feedback..."
          :prefix-icon="StarIcon"
          :max-length="500"
          :show-count="true"
          :rows="5"
        />
      </div>
    `,
  }),
};


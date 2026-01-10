import DXFormLabel from './DXFormLabel.vue';

export default {
  title: 'Atoms/DXFormLabel',
  component: DXFormLabel,
  tags: ['autodocs', 'category:form', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Компонент обертки для полей форм с поддержкой лейбла, ошибок, вспомогательного текста и счетчика символов.

## Назначение

DXFormLabel предоставляет комплексную обертку для полей форм, объединяя лейбл, поле ввода,
сообщения об ошибках, вспомогательный текст, сообщения об успехе и счетчик символов в единый компонент.

## Архитектура

### Использует
- \`DXIcon\` - для иконок валидации (ошибка, успех)

### Используется в
- \`DXInput\` - обертка для полей ввода
- \`DXSelect\` - обертка для выпадающих списков
- \`DXTextarea\` - обертка для многострочных полей
- Любые поля форм, требующие полную структуру с лейблом и сообщениями

## Внутренняя логика

### Структура
Компонент состоит из:
1. **Лейбл** - отображается над полем (если указан \`label\`)
2. **Счетчик символов** - отображается справа от лейбла (если \`showCount={true}\`)
3. **Поле** - слот для input/textarea/select
4. **Сообщение об ошибке** - отображается под полем (если указан \`error\`)
5. **Вспомогательный текст** - отображается под полем (если нет ошибки и указан \`helper\`)
6. **Сообщение об успехе** - отображается под полем (если нет ошибки и указан \`success\`)

### Приоритет сообщений
Приоритет отображения сообщений:
1. Ошибка (если есть) - всегда показывается
2. Успех (если нет ошибки) - показывается вместо helper
3. Helper (если нет ошибки и успеха) - показывается как вспомогательный текст

### Счетчик символов
При \`showCount={true}\` и указанном \`maxLength\`:
- Отображается в формате "текущее / максимальное" (например, "150 / 500")
- Показывается справа от лейбла

### Иконки валидации
При \`showValidationIcon={true}\` (по умолчанию):
- Иконка ошибки (ExclamationCircleIcon) для сообщений об ошибке
- Иконка успеха (CheckCircleIcon) для сообщений об успехе

## Особенности

### Обязательное поле
При \`required={true}\` автоматически добавляется красная звездочка (*) справа от лейбла.

### Валидация
Компонент поддерживает три состояния валидации:
- **error** - ошибка (красный цвет, иконка)
- **success** - успех (зеленый цвет, иконка)
- **helper** - вспомогательный текст (серый цвет)

### Слоты
- **default** - поле ввода (input/textarea/select)
- **label** - кастомный лейбл (если нужно)
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text'
    },
    error: {
      control: 'text',
      description: 'Error message'
    },
    helper: {
      control: 'text',
      description: 'Helper text'
    },
    success: {
      control: 'text',
      description: 'Success message'
    },
    required: {
      control: 'boolean',
      description: 'Show required asterisk'
    },
    showValidationIcon: {
      control: 'boolean',
      description: 'Show validation icon in messages'
    },
    maxLength: {
      control: 'number',
      description: 'Maximum length for character count'
    },
    currentLength: {
      control: 'number',
      description: 'Current length for character count'
    },
    showCount: {
      control: 'boolean',
      description: 'Show character count'
    },
  },
};

// Default story with label and helper
export const Default = {
  args: {
    label: 'Email Address',
    helper: 'We will never share your email with anyone else.',
  },
  render: (args) => ({
    components: { DXFormLabel },
    setup() {
      return { args };
    },
    template: `
      <DXFormLabel v-bind="args">
        <input 
          type="email" 
          placeholder="Enter your email"
          class="w-full h-10 px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        />
      </DXFormLabel>
    `,
  }),
};

// With error message
export const WithError = {
  args: {
    label: 'Username',
    error: 'Username is already taken',
    showValidationIcon: true,
  },
  render: (args) => ({
    components: { DXFormLabel },
    setup() {
      return { args };
    },
    template: `
      <DXFormLabel v-bind="args">
        <input 
          type="text" 
          placeholder="Choose a username"
          class="w-full h-10 px-4 py-2.5 text-sm rounded-xl border border-rose-300 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500/10"
        />
      </DXFormLabel>
    `,
  }),
};

// With required indicator
export const Required = {
  args: {
    label: 'Full Name',
    required: true,
    helper: 'Please enter your legal name',
  },
  render: (args) => ({
    components: { DXFormLabel },
    setup() {
      return { args };
    },
    template: `
      <DXFormLabel v-bind="args">
        <input 
          type="text" 
          placeholder="John Doe"
          class="w-full h-10 px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        />
      </DXFormLabel>
    `,
  }),
};

// With character count
export const WithCharacterCount = {
  args: {
    label: 'Bio',
    helper: 'Tell us about yourself',
    maxLength: 150,
    currentLength: 45,
    showCount: true,
  },
  render: (args) => ({
    components: { DXFormLabel },
    setup() {
      return { args };
    },
    template: `
      <DXFormLabel v-bind="args">
        <textarea 
          placeholder="Write your bio..."
          rows="3"
          class="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        >This is my bio text that takes up some space...</textarea>
      </DXFormLabel>
    `,
  }),
};

// With success message
export const WithSuccess = {
  args: {
    label: 'Email Verification',
    success: 'Email verified successfully!',
    showValidationIcon: true,
  },
  render: (args) => ({
    components: { DXFormLabel },
    setup() {
      return { args };
    },
    template: `
      <DXFormLabel v-bind="args">
        <input 
          type="email" 
          value="user@example.com"
          class="w-full h-10 px-4 py-2.5 text-sm rounded-xl border border-emerald-300 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/10"
        />
      </DXFormLabel>
    `,
  }),
};

// All features combined
export const Complete = {
  args: {
    label: 'Description',
    required: true,
    helper: 'Provide a detailed description',
    maxLength: 200,
    currentLength: 125,
    showCount: true,
  },
  render: (args) => ({
    components: { DXFormLabel },
    setup() {
      return { args };
    },
    template: `
      <DXFormLabel v-bind="args">
        <textarea 
          placeholder="Enter description..."
          rows="4"
          class="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</textarea>
      </DXFormLabel>
    `,
  }),
};


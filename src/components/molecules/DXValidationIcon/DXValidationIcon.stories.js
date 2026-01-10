import DXValidationIcon from './DXValidationIcon.vue';

export default {
  title: 'Molecules/DXValidationIcon',
  component: DXValidationIcon,
  tags: ['autodocs', 'category:form', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Компонент иконки валидации для отображения состояния валидации полей форм.

## Назначение

DXValidationIcon предоставляет стандартизированный способ отображения состояния валидации
через иконки. Компонент автоматически выбирает соответствующую иконку и цвет в зависимости
от состояния валидации.

## Архитектура

### Использует
- \`DXIcon\` - для отображения иконок
- Heroicons solid иконки - для различных состояний

### Используется в
- \`DXFormControl\` - для индикации валидации
- \`DXFormLabel\` - для иконок в сообщениях
- Любые поля форм, требующие визуальной индикации валидации

## Внутренняя логика

### Состояния

| Значение | Описание |
|----------|----------|
| \`success\` | Успешная валидация (CheckCircleIcon, зеленый цвет) |
| \`error\` | Ошибка валидации (ExclamationCircleIcon, красный цвет) |
| \`warning\` | Предупреждение (ExclamationTriangleIcon, желтый цвет) |
| \`info\` | Информационное сообщение (InformationCircleIcon, синий цвет) |

### Размеры

| Значение | Описание |
|----------|----------|
| \`sm\` | Маленький |
| \`md\` | Средний (по умолчанию) |
| \`lg\` | Большой |

### Цвета
Каждое состояние имеет свой цвет:
- success → \`text-emerald-500\`
- error → \`text-rose-500\`
- warning → \`text-amber-500\`
- info → \`text-blue-500\`

## Особенности

### Анимация
Иконка использует анимацию \`scale\` для визуального эффекта при появлении.

### Иконки
Все иконки из библиотеки Heroicons solid для единообразия и четкости отображения.
        `,
      },
    },
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export const Default = {
  args: {
    state: 'success',
    size: 'md',
  },
};

export const States = () => ({
  components: { DXValidationIcon },
  template: `
    <div class="flex items-center gap-8">
      <div class="text-center">
        <DXValidationIcon state="success" size="lg" />
        <p class="text-xs mt-2 text-slate-600">Success</p>
      </div>
      <div class="text-center">
        <DXValidationIcon state="error" size="lg" />
        <p class="text-xs mt-2 text-slate-600">Error</p>
      </div>
      <div class="text-center">
        <DXValidationIcon state="warning" size="lg" />
        <p class="text-xs mt-2 text-slate-600">Warning</p>
      </div>
      <div class="text-center">
        <DXValidationIcon state="info" size="lg" />
        <p class="text-xs mt-2 text-slate-600">Info</p>
      </div>
    </div>
  `,
});

export const Sizes = () => ({
  components: { DXValidationIcon },
  template: `
    <div class="flex items-center gap-4">
      <DXValidationIcon state="success" size="sm" />
      <DXValidationIcon state="success" size="md" />
      <DXValidationIcon state="success" size="lg" />
    </div>
  `,
});


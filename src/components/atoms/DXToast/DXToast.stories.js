import DXToast from "./DXToast.vue";

export default {
  title: "Atoms/DXToast",
  component: DXToast,
  tags: ["autodocs", "category:feedback"],
  parameters: {
    docs: {
      description: {
        component: `
# DXToast

Компонент уведомления (toast) с поддержкой различных вариантов и иконок.

## Назначение

DXToast предоставляет стандартизированный способ отображения временных уведомлений.
Компонент поддерживает различные варианты (info, success, warning, danger) и автоматически
отображает соответствующие иконки.

## Архитектура

### Использует
- \`DXIcon\` - для отображения иконок вариантов
- \`useVariantConfig\` composable - для конфигурации вариантов

### Используется в
- Уведомления об успешных операциях
- Сообщения об ошибках
- Предупреждения
- Информационные сообщения
- Любые места, требующие временных уведомлений

## Внутренняя логика

### Варианты
Поддерживает 4 варианта:
- **info** (по умолчанию) - информационное сообщение (синий цвет)
- **success** - успешная операция (зеленый цвет)
- **warning** - предупреждение (желтый цвет)
- **danger** - ошибка (красный цвет)

### Иконки
Каждый вариант автоматически получает соответствующую иконку:
- info → InformationCircleIcon
- success → CheckCircleIcon
- warning → ExclamationTriangleIcon
- danger → XCircleIcon

Иконки можно скрыть через \`showIcon={false}\`.

### Визуальное оформление
- Скругленные углы (\`rounded-2xl\`)
- Рамка для визуального выделения
- Padding для контента
- Иконка слева, текст справа

## Особенности

### Слоты
- **default** - основной контент (текст сообщения)

### Использование
Обычно используется в составе toast-менеджера для отображения уведомлений в определенной
области экрана (обычно сверху или снизу).
        `,
      },
    },
  },
};

export const Success = {
  args: { variant: "success", message: "Operation completed successfully!" },
};

export const Error = {
  args: {
    variant: "error",
    message: "Something went wrong. Please try again.",
  },
};

export const Warning = {
  args: { variant: "warning", message: "Please review before continuing." },
};

export const Info = {
  args: { variant: "info", message: "New features are available." },
};

export const AllVariants = {
  render: () => ({
    components: { DXToast },
    template: `
      <div class="space-y-4">
        <DXToast variant="success" message="Success toast message" />
        <DXToast variant="error" message="Error toast message" />
        <DXToast variant="warning" message="Warning toast message" />
        <DXToast variant="info" message="Info toast message" />
      </div>
    `,
  }),
};

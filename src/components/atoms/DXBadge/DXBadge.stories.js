import DXBadge from './DXBadge.vue';
import { 
  CheckCircleIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  ClockIcon,
  FireIcon,
  BoltIcon,
  SparklesIcon,
  StarIcon,
  XMarkIcon,
} from '@heroicons/vue/24/solid';

export default {
  title: 'Atoms/DXBadge',
  component: DXBadge,
  tags: ['autodocs', 'category:data-display', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Компонент бейджа для отображения статусов, меток и индикаторов с поддержкой иконок.

## Назначение

DXBadge предоставляет компактный способ отображения статусов, меток, счетчиков и других индикаторов.
Компонент поддерживает различные цветовые варианты, размеры и возможность добавления иконок слева и справа.

## Архитектура

### Использует
- \`DXIcon\` - для отображения иконок слева и справа
- \`useSize\` composable - для унификации размеров (sm, md)
- \`useVariantBadge\` composable - для вариантов оформления
- \`useClassComposition\` composable - для объединения CSS классов

### Используется в
- Статусы элементов (активен, неактивен, в ожидании)
- Счетчики уведомлений
- Метки категорий и тегов
- Индикаторы состояния
- Бейджи в таблицах и списках
- Элементы меню с счетчиками

## Внутренняя логика

### Варианты оформления

| Значение | Описание |
|----------|----------|
| \`slate\` | Нейтральный серый цвет (по умолчанию) |
| \`success\` | Зеленый цвет для успешных состояний |
| \`warning\` | Желтый цвет для предупреждений |
| \`danger\` | Красный цвет для ошибок и критических состояний |
| \`info\` | Синий цвет для информационных меток |

### Размеры

| Значение | Описание |
|----------|----------|
| \`sm\` | Маленький размер (по умолчанию) |
| \`md\` | Средний размер |

### Иконки
- **iconLeft** - иконка слева от текста (Heroicon компонент)
- **iconRight** - иконка справа от текста (Heroicon компонент)
- Размер иконок автоматически адаптируется к размеру бейджа (xs)

## Особенности

### Форма
Все бейджи имеют форму \`rounded-full\` (полностью скругленные углы) для единообразного внешнего вида.

### Структура
Бейдж состоит из:
1. Иконка слева (опционально)
2. Текст (через default slot)
3. Иконка справа (опционально)

### Использование
Бейджи обычно используются для:
- Статусов: "Активен", "Неактивен", "В ожидании"
- Счетчиков: количество уведомлений, элементов
- Меток: категории, теги, типы
- Индикаторов: "Новое", "Горячее", "Популярное"

### Комбинации
Можно комбинировать:
- Только текст
- Текст + иконка слева
- Текст + иконка справа
- Текст + обе иконки
- Только иконки (без текста)

### Стилизация
- Все варианты имеют рамку (\`border\`)
- Фон и текст автоматически подбираются для каждого варианта
- Шрифт: \`font-semibold\` для лучшей читаемости
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['slate', 'success', 'warning', 'danger', 'info'],
      description: 'Вариант оформления',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Размер бейджа',
    },
  },
};

export const Default = {
  args: {
    variant: 'slate',
  },
  render: (args) => ({
    components: { DXBadge },
    setup() { return { args }; },
    template: '<DXBadge v-bind="args">Статус</DXBadge>',
  }),
};

export const Success = {
  args: {
    variant: 'success',
  },
  render: (args) => ({
    components: { DXBadge },
    setup() { return { args }; },
    template: '<DXBadge v-bind="args">Активен</DXBadge>',
  }),
};

export const Warning = {
  args: {
    variant: 'warning',
  },
  render: (args) => ({
    components: { DXBadge },
    setup() { return { args }; },
    template: '<DXBadge v-bind="args">Ожидание</DXBadge>',
  }),
};

export const Danger = {
  args: {
    variant: 'danger',
  },
  render: (args) => ({
    components: { DXBadge },
    setup() { return { args }; },
    template: '<DXBadge v-bind="args">Ошибка</DXBadge>',
  }),
};

export const Info = {
  args: {
    variant: 'info',
  },
  render: (args) => ({
    components: { DXBadge },
    setup() { return { args }; },
    template: '<DXBadge v-bind="args">Информация</DXBadge>',
  }),
};

export const AllVariants = {
  render: () => ({
    components: { DXBadge },
    template: `
      <div class="flex flex-wrap gap-2">
        <DXBadge variant="slate">Slate</DXBadge>
        <DXBadge variant="success">Success</DXBadge>
        <DXBadge variant="warning">Warning</DXBadge>
        <DXBadge variant="danger">Danger</DXBadge>
        <DXBadge variant="info">Info</DXBadge>
      </div>
    `,
  }),
};

export const WithIconLeft = {
  render: () => ({
    components: { DXBadge },
    setup() {
      return { CheckCircleIcon, ExclamationTriangleIcon, XCircleIcon, InformationCircleIcon };
    },
    template: `
      <div class="flex flex-wrap gap-2">
        <DXBadge variant="success" :icon-left="CheckCircleIcon">Активен</DXBadge>
        <DXBadge variant="warning" :icon-left="ExclamationTriangleIcon">Ожидание</DXBadge>
        <DXBadge variant="danger" :icon-left="XCircleIcon">Ошибка</DXBadge>
        <DXBadge variant="info" :icon-left="InformationCircleIcon">Новое</DXBadge>
      </div>
    `,
  }),
};

export const WithIconRight = {
  render: () => ({
    components: { DXBadge },
    setup() {
      return { ClockIcon, FireIcon, BoltIcon, StarIcon };
    },
    template: `
      <div class="flex flex-wrap gap-2">
        <DXBadge variant="slate" :icon-right="ClockIcon">Скоро</DXBadge>
        <DXBadge variant="danger" :icon-right="FireIcon">Горячее</DXBadge>
        <DXBadge variant="warning" :icon-right="BoltIcon">Быстро</DXBadge>
        <DXBadge variant="info" :icon-right="StarIcon">Новинка</DXBadge>
      </div>
    `,
  }),
};

export const WithBothIcons = {
  render: () => ({
    components: { DXBadge },
    setup() {
      return { CheckCircleIcon, XMarkIcon, SparklesIcon };
    },
    template: `
      <div class="flex flex-wrap gap-2">
        <DXBadge variant="success" :icon-left="CheckCircleIcon" :icon-right="XMarkIcon">
          Закрываемый
        </DXBadge>
        <DXBadge variant="info" :icon-left="SparklesIcon" :icon-right="SparklesIcon">
          Премиум
        </DXBadge>
      </div>
    `,
  }),
};

export const Sizes = {
  render: () => ({
    components: { DXBadge },
    setup() {
      return { CheckCircleIcon };
    },
    template: `
      <div class="space-y-4">
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Small (sm, default)</p>
          <div class="flex flex-wrap gap-2 items-center">
            <DXBadge variant="slate" size="sm">Slate</DXBadge>
            <DXBadge variant="success" size="sm" :icon-left="CheckCircleIcon">Success</DXBadge>
            <DXBadge variant="warning" size="sm">Warning</DXBadge>
            <DXBadge variant="danger" size="sm">Danger</DXBadge>
            <DXBadge variant="info" size="sm">Info</DXBadge>
          </div>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Medium (md)</p>
          <div class="flex flex-wrap gap-2 items-center">
            <DXBadge variant="slate" size="md">Slate</DXBadge>
            <DXBadge variant="success" size="md" :icon-left="CheckCircleIcon">Success</DXBadge>
            <DXBadge variant="warning" size="md">Warning</DXBadge>
            <DXBadge variant="danger" size="md">Danger</DXBadge>
            <DXBadge variant="info" size="md">Info</DXBadge>
          </div>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Size Comparison</p>
          <div class="flex flex-wrap gap-3 items-center">
            <DXBadge variant="info" size="sm">Small Badge</DXBadge>
            <DXBadge variant="info" size="md">Medium Badge</DXBadge>
          </div>
        </div>
      </div>
    `,
  }),
};

export const IconsShowcase = {
  render: () => ({
    components: { DXBadge },
    setup() {
      return { 
        CheckCircleIcon, 
        XCircleIcon, 
        ExclamationTriangleIcon,
        InformationCircleIcon,
        FireIcon,
        BoltIcon,
        ClockIcon,
        StarIcon,
        SparklesIcon,
      };
    },
    template: `
      <div class="space-y-4">
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-2">Статусы</h3>
          <div class="flex flex-wrap gap-2">
            <DXBadge variant="success" :icon-left="CheckCircleIcon">Завершено</DXBadge>
            <DXBadge variant="warning" :icon-left="ClockIcon">В процессе</DXBadge>
            <DXBadge variant="danger" :icon-left="XCircleIcon">Отклонено</DXBadge>
            <DXBadge variant="info" :icon-left="InformationCircleIcon">Новый</DXBadge>
          </div>
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-2">Специальные</h3>
          <div class="flex flex-wrap gap-2">
            <DXBadge variant="danger" :icon-left="FireIcon">Популярное</DXBadge>
            <DXBadge variant="warning" :icon-left="BoltIcon">Срочно</DXBadge>
            <DXBadge variant="info" :icon-left="StarIcon">Избранное</DXBadge>
            <DXBadge variant="success" :icon-left="SparklesIcon">Новинка</DXBadge>
          </div>
        </div>
      </div>
    `,
  }),
};


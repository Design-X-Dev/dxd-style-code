import DXCloseButton from './DXCloseButton.vue';

export default {
  title: 'Molecules/DXCloseButton',
  component: DXCloseButton,
  tags: ['autodocs', 'category:navigation'],
  parameters: {
    docs: {
      description: {
        component: `
Компонент кнопки закрытия с поддержкой различных размеров и вариантов оформления.

## Назначение

DXCloseButton предоставляет стандартизированную кнопку закрытия для модальных окон, алертов,
панелей и других компонентов, требующих возможность закрытия. Компонент поддерживает различные
размеры и варианты оформления для адаптации под различные контексты использования.

## Архитектура

### Использует
- \`DXIcon\` - для отображения иконки закрытия (XMarkIcon)
- \`useSize\` composable - для унификации размеров (sm, md, lg)

### Используется в
- \`DXModal\` - кнопка закрытия модальных окон
- \`DXAlert\` - кнопка закрытия уведомлений
- \`DXSidebar\` - кнопка закрытия боковой панели
- Панели и панели настроек
- Любые компоненты, требующие кнопку закрытия

## Внутренняя логика

### Варианты оформления

| Значение | Описание |
|----------|----------|
| \`default\` | Стандартная кнопка для светлого фона (по умолчанию) |
| \`light\` | Кнопка для темного фона (светлая иконка) |
| \`danger\` | Кнопка с красным цветом для критических действий |

### Размеры

| Значение | Описание |
|----------|----------|
| \`sm\` | Маленький размер |
| \`md\` | Средний размер (по умолчанию) |
| \`lg\` | Большой размер |

### Иконка
Всегда использует \`XMarkIcon\` из Heroicons для единообразия.

## Особенности

### События
- Событие \`click\` при клике на кнопку
- Обычно обрабатывается родительским компонентом для закрытия

### Доступность
- Использует \`aria-label\` для описания действия
- Поддержка клавиатурной навигации
- Правильные семантические атрибуты

### Визуальное оформление
- Круглая форма кнопки
- Иконка по центру
- Hover эффекты для интерактивности
- Transition для плавных переходов
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['default', 'light', 'danger'],
    },
  },
};

export const Default = {
  args: {
    size: 'md',
    variant: 'default',
  },
};

export const Sizes = () => ({
  components: { DXCloseButton },
  template: `
    <div class="flex items-center gap-4">
      <DXCloseButton size="sm" />
      <DXCloseButton size="md" />
      <DXCloseButton size="lg" />
    </div>
  `,
});

export const Variants = () => ({
  components: { DXCloseButton },
  template: `
    <div class="flex items-center gap-4">
      <div class="p-4 bg-white border rounded">
        <DXCloseButton variant="default" />
      </div>
      <div class="p-4 bg-slate-800 rounded">
        <DXCloseButton variant="light" />
      </div>
      <div class="p-4 bg-white border rounded">
        <DXCloseButton variant="danger" />
      </div>
    </div>
  `,
});


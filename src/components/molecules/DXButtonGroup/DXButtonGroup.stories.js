import DXButtonGroup from './DXButtonGroup.vue';
import DXButton from '../../atoms/DXButton/DXButton.vue';
import DXFlex from '../../atoms/DXFlex/DXFlex.vue';
import DXIcon from '../../atoms/DXIcon/DXIcon.vue';
import { ref } from 'vue';
import { Squares2X2Icon, ListBulletIcon, TableCellsIcon, SquaresPlusIcon } from '@heroicons/vue/24/outline';

export default {
  title: 'Molecules/DXButtonGroup',
  component: DXButtonGroup,
  tags: ['autodocs', 'category:form', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Группа связанных кнопок для выбора одного или нескольких значений с поддержкой v-model.

## Назначение

DXButtonGroup предоставляет способ группировки кнопок для создания интерфейсов выбора,
аналогичных segmented controls или toggle groups. Компонент автоматически управляет
состоянием выбора, визуальным оформлением и синхронизацией размеров кнопок.

## Архитектура

### Использует
- \`DXButton\` - кнопки в группе (автоматически адаптируются при использовании внутри группы)
- \`provide/inject\` - для передачи контекста группы к дочерним компонентам
- Система регистрации компонентов - для отслеживания позиции кнопок и правильного применения стилей

### Используется в
- Фильтры и сортировка
- Переключение режимов отображения
- Выбор опций форматирования
- Навигационные элементы
- Настройки с переключателями

## Внутренняя логика

### Режимы выбора

| Значение | Описание |
|----------|----------|
| \`single\` | Выбор одного значения, \`modelValue\` - String или Number (по умолчанию) |
| \`multiple\` | Множественный выбор, \`modelValue\` - Array |

### Система регистрации компонентов
Компонент отслеживает порядок регистрации дочерних \`DXButton\` компонентов для:
- Правильного применения border-radius (первая/последняя/средние кнопки)
- Корректного отображения разделителей между кнопками
- Синхронизации размеров всех кнопок в группе

### Интеграция с DXButton
При использовании \`DXButton\` внутри группы:
- Кнопка автоматически регистрируется в группе
- Размер кнопки синхронизируется с размером группы
- Состояние disabled синхронизируется с группой
- Применяется правильный border-radius в зависимости от позиции
- Автоматически применяется состояние selected (bg-slate-900 text-white)
- Убираются индивидуальные границы (группа обрабатывает их через divide-x)

## Особенности

### Размеры
Поддерживает три размера: \`sm\` (h-8), \`md\` (h-10), \`lg\` (h-12).
Размер применяется ко всем кнопкам в группе автоматически.

### Label
Label отображается над группой кнопок, аналогично другим компонентам форм (DXInputGroup).

### Состояния
- **disabled**: Отключает всю группу и все кнопки внутри
- **selected**: Визуально выделяет выбранные кнопки темным фоном

### Разделители
Между кнопками автоматически отображаются вертикальные разделители (border-left),
кроме первой кнопки.

### v-model
Полностью поддерживает двустороннее связывание через \`v-model\`:
- Для single mode: значение - String или Number
- Для multiple mode: значение - Array
        `,
      },
    },
  },
};

export const Default = {
  render: () => ({
    components: { DXButtonGroup, DXButton },
    setup() {
      const selected = ref('left');
      return { selected };
    },
    template: `
      <DXButtonGroup v-model="selected" label="Select alignment">
        <DXButton value="left">Left</DXButton>
        <DXButton value="center">Center</DXButton>
        <DXButton value="right">Right</DXButton>
      </DXButtonGroup>
    `,
  }),
};

export const Multiple = {
  render: () => ({
    components: { DXButtonGroup, DXButton },
    setup() {
      const selected = ref(['bold', 'italic']);
      return { selected };
    },
    template: `
      <DXButtonGroup v-model="selected" multiple label="Text formatting">
        <DXButton value="bold">Bold</DXButton>
        <DXButton value="italic">Italic</DXButton>
        <DXButton value="underline">Underline</DXButton>
      </DXButtonGroup>
    `,
  }),
};

export const Sizes = {
  render: () => ({
    components: { DXButtonGroup, DXButton, DXFlex },
    setup() {
      const small = ref('left');
      const medium = ref('left');
      const large = ref('left');
      return { small, medium, large };
    },
    template: `
      <DXFlex direction="col" gap="md" align="start">
        <DXButtonGroup v-model="small" size="sm" label="Small">
          <DXButton value="left">Left</DXButton>
          <DXButton value="center">Center</DXButton>
          <DXButton value="right">Right</DXButton>
        </DXButtonGroup>
        
        <DXButtonGroup v-model="medium" size="md" label="Medium (default)">
          <DXButton value="left">Left</DXButton>
          <DXButton value="center">Center</DXButton>
          <DXButton value="right">Right</DXButton>
        </DXButtonGroup>
        
        <DXButtonGroup v-model="large" size="lg" label="Large">
          <DXButton value="left">Left</DXButton>
          <DXButton value="center">Center</DXButton>
          <DXButton value="right">Right</DXButton>
        </DXButtonGroup>
      </DXFlex>
    `,
  }),
};

export const Disabled = {
  render: () => ({
    components: { DXButtonGroup, DXButton },
    setup() {
      const selected = ref('left');
      return { selected };
    },
    template: `
      <DXButtonGroup v-model="selected" disabled label="Disabled group">
        <DXButton value="left">Left</DXButton>
        <DXButton value="center">Center</DXButton>
        <DXButton value="right">Right</DXButton>
      </DXButtonGroup>
    `,
  }),
};

export const WithIcons = {
  parameters: {
    docs: {
      description: {
        story: 'Пример группы кнопок с иконками. Иконки размещаются внутри DXButton компонентов и автоматически адаптируются к стилю группы.',
      },
    },
  },
  render: () => ({
    components: { DXButtonGroup, DXButton, DXIcon },
    setup() {
      const selected = ref('grid');
      return { 
        selected,
        Squares2X2Icon,
        ListBulletIcon,
        TableCellsIcon,
        SquaresPlusIcon,
      };
    },
    template: `
      <DXButtonGroup v-model="selected" label="View mode">
        <DXButton value="grid">
          <DXIcon :icon="Squares2X2Icon" size="sm" />
          Grid
        </DXButton>
        <DXButton value="list">
          <DXIcon :icon="ListBulletIcon" size="sm" />
          List
        </DXButton>
        <DXButton value="table">
          <DXIcon :icon="TableCellsIcon" size="sm" />
          Table
        </DXButton>
        <DXButton value="cards">
          <DXIcon :icon="SquaresPlusIcon" size="sm" />
          Cards
        </DXButton>
      </DXButtonGroup>
    `,
  }),
};


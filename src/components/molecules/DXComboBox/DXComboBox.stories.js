import DXComboBox from './DXComboBox.vue';
import { ref } from 'vue';

export default {
  title: 'Molecules/DXComboBox',
  component: DXComboBox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Компонент комбобокса с поиском и возможностью выбора из списка или ввода кастомного значения.

## Назначение

DXComboBox предоставляет гибридный компонент, объединяющий возможности input и select.
Компонент поддерживает поиск по опциям, выбор из списка и возможность ввода кастомного значения.

## Архитектура

### Использует
- Нативный input - для ввода текста
- Динамический dropdown - для отображения опций

### Используется в
- Выбор с поиском
- Ввод с автодополнением
- Кастомные значения
- Любые места, требующие гибкий выбор/ввод

## Внутренняя логика

### Поиск
При \`filterable={true}\` (по умолчанию):
- Опции фильтруются по введенному тексту
- Поиск нечувствителен к регистру
- Фильтрация происходит в реальном времени

### Кастомные значения
При \`allowCustom={true}\`:
- Можно ввести значение, которого нет в списке
- При нажатии Enter создается новое значение
- Отображается подсказка "Нажмите Enter для ..."

### Клавиатурная навигация
- **ArrowDown/ArrowUp** - навигация по опциям
- **Enter** - выбор выделенной опции или создание кастомного значения
- **Escape** - закрытие dropdown

## Особенности

### v-model
Полностью поддерживает двустороннее связывание через \`v-model\` для String или Number значений.

### Структура опций
Опции передаются через массив объектов:
\`\`\`
[{ value: 'value', label: 'Label', icon?: Icon }]
\`\`\`

### Иконки
Каждая опция может иметь иконку через \`icon\` свойство.

### Визуальная индикация
- Выбранная опция отмечена галочкой
- Выделенная опция имеет серый фон
- Chevron поворачивается при открытии dropdown
        `,
      },
    },
  },
};

const countries = [
  { value: 'ru', label: 'Russia' },
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
];

export const Default = {
  render: () => ({
    components: { DXComboBox },
    setup() {
      const value = ref('');
      return { value, countries };
    },
    template: '<DXComboBox v-model="value" :options="countries" label="Country" placeholder="Search country..." />',
  }),
};

export const WithValue = {
  render: () => ({
    components: { DXComboBox },
    setup() {
      const value = ref('ru');
      return { value, countries };
    },
    template: '<DXComboBox v-model="value" :options="countries" label="Country" />',
  }),
};

export const AllowCustom = {
  render: () => ({
    components: { DXComboBox },
    setup() {
      const value = ref('');
      return { value, countries };
    },
    template: '<DXComboBox v-model="value" :options="countries" label="Country" placeholder="Type or select..." allow-custom helper="You can type a custom value" />',
  }),
};

export const Disabled = {
  render: () => ({
    components: { DXComboBox },
    setup() {
      const value = ref('us');
      return { value, countries };
    },
    template: '<DXComboBox v-model="value" :options="countries" label="Country" disabled />',
  }),
};


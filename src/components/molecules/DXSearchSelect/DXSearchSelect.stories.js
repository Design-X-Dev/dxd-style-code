import DXSearchSelect from './DXSearchSelect.vue';
import { ref } from 'vue';

export default {
  title: 'Molecules/DXSearchSelect',
  component: DXSearchSelect,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Компонент выбора с поиском, поддерживающий одиночный и множественный выбор.

## Назначение

DXSearchSelect предоставляет расширенный select с встроенным поиском, поддержкой
множественного выбора и возможностью создания новых опций. Компонент идеально подходит
для больших списков опций.

## Архитектура

### Использует
- Динамический dropdown - для отображения опций
- Поисковая строка - для фильтрации опций

### Используется в
- Выбор пользователей
- Выбор тегов и категорий
- Множественный выбор из больших списков
- Любые места, требующие выбор с поиском

## Внутренняя логика

### Режимы выбора
- **single** (по умолчанию): Выбор одного значения
- **multiple**: Выбор нескольких значений

### Поиск
- Фильтрация опций происходит в реальном времени
- Поиск нечувствителен к регистру
- При отсутствии результатов показывается "Не найдено"

### Множественный выбор
При \`multiple={true}\`:
- Выбранные опции отображаются как теги над полем
- Каждый тег можно удалить отдельно
- Отображается количество выбранных элементов

### Создание новых опций
При \`creatable={true}\`:
- Можно создать новую опцию из поискового запроса
- Отображается кнопка "Создать ..." при отсутствии результатов

## Особенности

### v-model
Полностью поддерживает двустороннее связывание через \`v-model\`:
- Для single: String или Number
- Для multiple: Array значений

### Структура опций
Опции передаются через массив объектов:
\`\`\`
[{ value: 'value', label: 'Label', icon?: Icon }]
\`\`\`

### Иконки
Каждая опция может иметь иконку через \`icon\` свойство.

### Клавиатурная навигация
- **Escape** - закрытие dropdown
- Поисковая строка не закрывает dropdown при вводе
        `,
      },
    },
  },
};

const users = [
  { value: '1', label: 'John Doe' },
  { value: '2', label: 'Jane Smith' },
  { value: '3', label: 'Bob Johnson' },
  { value: '4', label: 'Alice Williams' },
  { value: '5', label: 'Charlie Brown' },
];

export const Default = {
  render: () => ({
    components: { DXSearchSelect },
    setup() {
      const value = ref('');
      return { value, users };
    },
    template: '<DXSearchSelect v-model="value" :options="users" label="Select User" placeholder="Search users..." />',
  }),
};

export const WithValue = {
  render: () => ({
    components: { DXSearchSelect },
    setup() {
      const value = ref('2');
      return { value, users };
    },
    template: '<DXSearchSelect v-model="value" :options="users" label="Assigned To" />',
  }),
};

export const Multiple = {
  render: () => ({
    components: { DXSearchSelect },
    setup() {
      const value = ref([]);
      return { value, users };
    },
    template: '<DXSearchSelect v-model="value" :options="users" label="Team Members" multiple />',
  }),
};


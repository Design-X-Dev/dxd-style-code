import { ref } from 'vue';
import DXDataTable from './DXDataTable.vue';

export default {
  title: 'Organisms/DXDataTable',
  component: DXDataTable,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# DXDataTable

Расширенная таблица с редактированием ячеек, inline-редактированием и расширенными возможностями.

## Назначение

DXDataTable расширяет функциональность DXTable, добавляя возможность редактирования
ячеек и строк прямо в таблице. Поддерживает различные типы редакторов и валидацию.

## Архитектура

### Использует
- \`DXTable\` - как базовую таблицу
- \`DXInput\` - для текстовых редакторов
- \`DXSelect\` - для редакторов выбора
- \`DXDatePicker\` - для редакторов даты
- \`DXButton\` - для действий
- \`useClassComposition\` composable - для стилей

### Используется в
- Административные панели
- Таблицы с массовым редактированием
- Таблицы с inline-редактированием

## Внутренняя логика

### Режимы редактирования
- **cell**: Редактирование отдельных ячеек
- **row**: Редактирование всей строки

### Типы редакторов
- **input**: Текстовый редактор
- **select**: Редактор выбора
- **date**: Редактор даты
- Кастомные редакторы через slots

### Валидация
Поддерживает валидацию через prop \`validation\`.

## Особенности

### Автоматическое сохранение
В режиме cell изменения сохраняются при потере фокуса или нажатии Enter.

### Отмена изменений
Изменения можно отменить нажатием Escape или кнопкой "Отмена" (в режиме row).
        `,
      },
    },
  },
  argTypes: {
    editable: {
      control: 'boolean',
      description: 'Редактируемая таблица.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    editMode: {
      control: 'select',
      options: ['cell', 'row'],
      description: 'Режим редактирования: cell (ячейки) | row (строки).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'cell' },
        category: 'Behavior',
      },
    },
  },
};

const defaultColumns = [
  { key: 'id', label: 'ID', editable: false },
  { key: 'name', label: 'Имя', editable: true, editor: 'input' },
  {
    key: 'email',
    label: 'Email',
    editable: true,
    editor: 'input',
    type: 'email',
  },
  {
    key: 'role',
    label: 'Роль',
    editable: true,
    editor: 'select',
    options: [
      { value: 'admin', label: 'Администратор' },
      { value: 'user', label: 'Пользователь' },
      { value: 'guest', label: 'Гость' },
    ],
  },
  { key: 'created', label: 'Создан', editable: true, editor: 'date' },
];

const defaultData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin',
    created: '2024-01-15',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'user',
    created: '2024-01-20',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    role: 'guest',
    created: '2024-01-25',
  },
];

export const CellEditing = {
  args: {
    columns: defaultColumns,
    data: defaultData,
    editable: true,
    editMode: 'cell',
  },
  parameters: {
    docs: {
      description: {
        story: 'Редактирование отдельных ячеек. Кликните на ячейку для редактирования.',
      },
    },
  },
  render: (args) => ({
    components: { DXDataTable },
    setup() {
      const data = ref(args.data);
      const handleCellEdit = ({ row, column, value }) => {
        console.log('Ячейка отредактирована:', row, column, value);
        // Обновляем данные
        const rowIndex = data.value.findIndex((r) => r.id === row.id);
        if (rowIndex !== -1) {
          data.value[rowIndex][column] = value;
        }
      };
      return { args, data, handleCellEdit };
    },
    template: `
      <DXDataTable
        v-bind="args"
        v-model:data="data"
        @cell-edit="handleCellEdit"
      />
    `,
  }),
};

export const RowEditing = {
  args: {
    columns: defaultColumns,
    data: defaultData,
    editable: true,
    editMode: 'row',
  },
  parameters: {
    docs: {
      description: {
        story: 'Редактирование целых строк. Нажмите "Редактировать" для начала редактирования строки.',
      },
    },
  },
  render: (args) => ({
    components: { DXDataTable },
    setup() {
      const data = ref(args.data);
      const handleRowSave = ({ row, editedRow }) => {
        console.log('Строка сохранена:', row, editedRow);
        const rowIndex = data.value.findIndex((r) => r.id === row.id);
        if (rowIndex !== -1) {
          data.value[rowIndex] = { ...data.value[rowIndex], ...editedRow };
        }
      };
      const handleRowCancel = (row) => {
        console.log('Редактирование отменено:', row);
      };
      return { args, data, handleRowSave, handleRowCancel };
    },
    template: `
      <DXDataTable
        v-bind="args"
        v-model:data="data"
        @row-save="handleRowSave"
        @row-cancel="handleRowCancel"
      />
    `,
  }),
};

export const WithValidation = {
  parameters: {
    docs: {
      description: {
        story: 'Таблица с валидацией. Email должен быть валидным.',
      },
    },
  },
  render: () => ({
    components: { DXDataTable },
    setup() {
      const columns = ref(defaultColumns);
      const data = ref(defaultData);
      const validation = ref({
        email: (value) => {
          if (!value) return 'Email обязателен';
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            return 'Неверный формат email';
          }
          return true;
        },
      });
      return { columns, data, validation };
    },
    template: `
      <DXDataTable
        :columns="columns"
        :data="data"
        :editable="true"
        :validation="validation"
        edit-mode="cell"
      />
    `,
  }),
};


import { ref } from 'vue';
import DXReportGenerator from './DXReportGenerator.vue';

export default {
  title: 'Organisms/DXReportGenerator',
  component: DXReportGenerator,
  tags: ['autodocs', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Генератор отчетов с фильтрацией, настройками параметров и экспортом в различные форматы.

## Назначение

DXReportGenerator предоставляет полнофункциональный генератор отчетов с поддержкой
фильтрации данных, настройки параметров, предпросмотра и экспорта в различные форматы.

## Архитектура

### Использует
- \`DXDataFilter\` - для фильтрации данных
- \`DXTable\` - для предпросмотра
- \`DXCard\` - для контейнеров
- \`DXButton\` - для действий
- \`DXSelect\` - для выбора формата
- \`DXDatePicker\` - для выбора периода
- \`useClassComposition\` composable - для стилей
- \`useSpacing\` composable - для отступов

### Используется в
- Аналитические панели
- Системы отчетности
- Экспорт данных
- Административные панели

## Внутренняя логика

### Фильтрация
Использует \`DXDataFilter\` для фильтрации данных перед генерацией отчета.

### Форматы экспорта
Поддерживает экспорт в PDF, Excel, CSV и другие форматы.

### Предпросмотр
Показывает предпросмотр данных перед экспортом.

## Особенности

### Слоты
- **filters**: Кастомные фильтры
- **settings**: Кастомные настройки
- **preview**: Кастомный предпросмотр
- **actions**: Кастомные действия

### Гибкость
Все секции можно кастомизировать через slots.
        `,
      },
    },
  },
};

const defaultColumns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Название' },
  { key: 'amount', label: 'Сумма' },
  { key: 'date', label: 'Дата' },
];

const defaultData = [
  { id: 1, name: 'Товар 1', amount: 1000, date: '2024-01-15' },
  { id: 2, name: 'Товар 2', amount: 2000, date: '2024-01-20' },
  { id: 3, name: 'Товар 3', amount: 1500, date: '2024-01-25' },
];

const defaultFilterDefinitions = [
  {
    id: 'name',
    label: 'Название',
    type: 'text',
  },
  {
    id: 'date',
    label: 'Дата',
    type: 'date',
    range: true,
  },
];

export const Default = {
  args: {
    columns: defaultColumns,
    data: defaultData,
    filterDefinitions: defaultFilterDefinitions,
    showFilters: true,
    showSettings: true,
    showPreview: true,
    showActions: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовый генератор отчетов с фильтрами, настройками, предпросмотром и экспортом.',
      },
    },
  },
  render: (args) => ({
    components: { DXReportGenerator },
    setup() {
      const generating = ref(false);
      const exporting = ref(false);
      
      const handleGenerate = (data) => {
        console.log('Генерация отчета:', data);
        generating.value = true;
        setTimeout(() => {
          generating.value = false;
        }, 2000);
      };
      
      const handleExport = (data) => {
        console.log('Экспорт отчета:', data);
        exporting.value = true;
        setTimeout(() => {
          exporting.value = false;
        }, 2000);
      };
      
      return { args, generating, exporting, handleGenerate, handleExport };
    },
    template: `
      <DXReportGenerator
        v-bind="args"
        :generating="generating"
        :exporting="exporting"
        @generate="handleGenerate"
        @export="handleExport"
      />
    `,
  }),
};

export const WithCustomFilters = {
  parameters: {
    docs: {
      description: {
        story: 'Генератор отчетов с кастомными фильтрами через slot.',
      },
    },
  },
  render: () => ({
    components: { DXReportGenerator, DXCard },
    setup() {
      return { defaultColumns, defaultData };
    },
    template: `
      <DXReportGenerator
        :columns="defaultColumns"
        :data="defaultData"
        :show-filters="false"
      >
        <template #filters>
          <DXCard class="p-4">
            <p class="text-sm text-slate-600">Кастомные фильтры</p>
          </DXCard>
        </template>
      </DXReportGenerator>
    `,
  }),
};

export const ExportOnly = {
  parameters: {
    docs: {
      description: {
        story: 'Генератор отчетов только с экспортом (без фильтров и настроек).',
      },
    },
  },
  render: () => ({
    components: { DXReportGenerator },
    setup() {
      return { defaultColumns, defaultData };
    },
    template: `
      <DXReportGenerator
        :columns="defaultColumns"
        :data="defaultData"
        :show-filters="false"
        :show-settings="false"
        :show-preview="false"
      />
    `,
  }),
};


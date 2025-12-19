# DXBaseTable

Базовый компонент таблицы для отображения табличных данных. Предоставляет основную функциональность без дополнительных элементов управления (toolbar, pagination, фильтры).

## Когда использовать

- **Простые таблицы**: Когда не нужны поиск, фильтрация или пагинация
- **Кастомная композиция**: Когда вы хотите создать свою собственную композицию с другими компонентами
- **Встроенные таблицы**: Когда таблица является частью более крупного компонента
- **Производительность**: Для легковесного отображения данных без лишней логики

## Основное использование

```vue
<DXBaseTable
  :columns="columns"
  :data="data"
/>
```

## Props

### Data Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `Array` | **required** | Массив конфигураций столбцов |
| `data` | `Array` | `[]` | Массив данных для отображения |

### Sorting Props (Controlled)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sortBy` | `String` | `''` | Текущий столбец сортировки |
| `sortDirection` | `String` | `'asc'` | Направление сортировки: `'asc'` или `'desc'` |

### Selection Props (Controlled)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `selectable` | `Boolean` | `false` | Показать чекбоксы для выделения |
| `selectedRows` | `Array` | `[]` | Массив ID выбранных строк |

### Feature Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `actions` | `Boolean` | `false` | Показать колонку действий |
| `groupBy` | `String` | - | Ключ столбца для группировки |

### UI Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `height` | `String` | - | Максимальная высота таблицы (например, `'400px'`) |
| `stickyHeader` | `Boolean` | `true` | Закрепить заголовок при скролле |
| `striped` | `Boolean` | `false` | Зебра-стиль для строк |
| `bordered` | `Boolean` | `false` | Показать границы |
| `hoverable` | `Boolean` | `true` | Подсветка строк при наведении |
| `dense` | `Boolean` | `false` | Компактный режим (меньше отступы) |
| `loading` | `Boolean` | `false` | Показать состояние загрузки |

## Column Configuration

Каждый объект в массиве `columns`:

```javascript
{
  key: 'name',           // Ключ данных (обязательно)
  label: 'Имя',          // Заголовок столбца (обязательно)
  sortable: true,        // Можно ли сортировать (по умолчанию true)
  width: '200px',        // Ширина столбца
  align: 'left',         // Выравнивание: 'left', 'center', 'right'
  format: (value) => {}, // Функция форматирования значения
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `sort` | `{ column, direction }` | Клик по заголовку столбца для сортировки |
| `row-click` | `row` | Клик по строке |
| `row-select` | `{ id, selected }` | Изменение выделения строки |
| `select-all` | `selected` | Выделение/снятие всех строк |
| `edit` | `row` | Кнопка "Редактировать" (дефолтный action) |
| `delete` | `row` | Кнопка "Удалить" (дефолтный action) |

## Slots

### `cell-{key}`

Кастомизация ячейки для конкретного столбца:

```vue
<DXBaseTable :columns="columns" :data="data">
  <template #cell-status="{ row, value, column }">
    <DXBadge :variant="getStatusVariant(value)">
      {{ value }}
    </DXBadge>
  </template>
</DXBaseTable>
```

### `actions`

Кастомная колонка действий:

```vue
<DXBaseTable :columns="columns" :data="data" :actions="true">
  <template #actions="{ row }">
    <DXButton size="sm" @click="handleEdit(row)">Изменить</DXButton>
  </template>
</DXBaseTable>
```

### `empty`

Кастомное пустое состояние:

```vue
<DXBaseTable :columns="columns" :data="data">
  <template #empty>
    <div class="text-center py-8">
      <p class="text-lg font-semibold">Нет данных</p>
      <p class="text-sm text-slate-500">Попробуйте изменить фильтры</p>
    </div>
  </template>
</DXBaseTable>
```

## Примеры

### Базовая таблица

```vue
<template>
  <DXBaseTable
    :columns="columns"
    :data="data"
  />
</template>

<script setup>
const columns = [
  { key: 'name', label: 'Имя' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Роль' },
];

const data = [
  { id: 1, name: 'Иван', email: 'ivan@example.com', role: 'Admin' },
  { id: 2, name: 'Мария', email: 'maria@example.com', role: 'User' },
];
</script>
```

### С контролируемой сортировкой

```vue
<template>
  <DXBaseTable
    :columns="columns"
    :data="sortedData"
    :sortBy="sortBy"
    :sortDirection="sortDirection"
    @sort="handleSort"
  />
</template>

<script setup>
import { ref, computed } from 'vue';

const sortBy = ref('name');
const sortDirection = ref('asc');
const data = ref([...rawData]);

const sortedData = computed(() => {
  return [...data.value].sort((a, b) => {
    const aVal = a[sortBy.value];
    const bVal = b[sortBy.value];
    const modifier = sortDirection.value === 'asc' ? 1 : -1;
    
    if (aVal < bVal) return -1 * modifier;
    if (aVal > bVal) return 1 * modifier;
    return 0;
  });
});

const handleSort = ({ column, direction }) => {
  sortBy.value = column;
  sortDirection.value = direction;
};
</script>
```

### С выделением строк

```vue
<template>
  <DXBaseTable
    :columns="columns"
    :data="data"
    :selectable="true"
    :selectedRows="selectedRows"
    @row-select="handleRowSelect"
    @select-all="handleSelectAll"
  />
</template>

<script setup>
import { ref } from 'vue';

const selectedRows = ref([]);

const handleRowSelect = ({ id, selected }) => {
  if (selected) {
    selectedRows.value.push(id);
  } else {
    selectedRows.value = selectedRows.value.filter(rowId => rowId !== id);
  }
};

const handleSelectAll = (selected) => {
  if (selected) {
    selectedRows.value = data.map(row => row.id);
  } else {
    selectedRows.value = [];
  }
};
</script>
```

### С кастомными ячейками

```vue
<template>
  <DXBaseTable :columns="columns" :data="data">
    <template #cell-status="{ value }">
      <DXBadge :variant="getStatusVariant(value)">
        {{ value }}
      </DXBadge>
    </template>
    <template #cell-role="{ value }">
      <span class="font-semibold">{{ value }}</span>
    </template>
  </DXBaseTable>
</template>

<script setup>
const getStatusVariant = (status) => {
  const map = {
    'Active': 'success',
    'Inactive': 'neutral',
    'Pending': 'warning',
  };
  return map[status] || 'neutral';
};
</script>
```

### С группировкой

```vue
<DXBaseTable
  :columns="columns"
  :data="data"
  groupBy="category"
/>
```

### С фиксированной высотой

```vue
<DXBaseTable
  :columns="columns"
  :data="largeDataset"
  height="400px"
  :stickyHeader="true"
/>
```

## Controlled vs Uncontrolled

`DXBaseTable` является **контролируемым** компонентом:

- **Сортировка**: Вы управляете `sortBy` и `sortDirection`, обрабатываете событие `@sort`
- **Выделение**: Вы управляете `selectedRows`, обрабатываете `@row-select` и `@select-all`
- **Данные**: Вы передаете уже обработанные данные через prop `data`

Это дает вам полный контроль над состоянием и логикой.

## Сравнение с DXTable

| Функция | DXBaseTable | DXTable |
|---------|-------------|---------|
| Отображение данных | ✅ | ✅ |
| Сортировка | ✅ (контролируемая) | ✅ (встроенная) |
| Выделение строк | ✅ (контролируемое) | ✅ (встроенное) |
| Действия | ✅ | ✅ |
| Группировка | ✅ | ✅ |
| Toolbar | ❌ | ✅ |
| Поиск | ❌ | ✅ |
| Фильтрация | ❌ | ✅ |
| Пагинация | ❌ | ✅ |
| API режим | ❌ | ✅ |

**Используйте DXBaseTable когда:**
- Нужна простая таблица без дополнительных элементов
- Хотите создать свою композицию
- Нужен полный контроль над состоянием

**Используйте DXTable когда:**
- Нужны поиск, фильтрация, пагинация
- Хотите готовое решение "из коробки"
- Работаете с большими объемами данных

## Accessibility

- Используется семантический `<table>` элемент
- Чекбоксы имеют правильные ARIA атрибуты
- Сортируемые заголовки имеют `cursor-pointer` для индикации интерактивности
- Состояние загрузки объявляется через текст

## Best Practices

1. **Всегда указывайте `key`**: Каждая строка должна иметь уникальный `id`
2. **Контролируйте состояние**: Управляйте сортировкой и выделением через состояние
3. **Форматируйте данные**: Используйте `format` в конфигурации столбца или слоты для форматирования
4. **Оптимизируйте большие данные**: Используйте `height` и `stickyHeader` для больших таблиц
5. **Кастомизируйте действия**: Используйте слот `#actions` для специфичных действий

## Composition Pattern

`DXBaseTable` следует паттерну композиции:

```vue
<!-- Создайте свою композицию -->
<div class="my-custom-table">
  <div class="toolbar">
    <DXInput placeholder="Поиск..." />
    <DXButton>Добавить</DXButton>
  </div>
  
  <DXBaseTable
    :columns="columns"
    :data="filteredData"
    :sortBy="sortBy"
    :sortDirection="sortDirection"
    @sort="handleSort"
  />
  
  <DXPagination
    v-model="currentPage"
    :totalPages="totalPages"
  />
</div>
```

Это дает вам максимальную гибкость в создании таблиц под ваши нужды.


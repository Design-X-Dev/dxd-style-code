# DXTable

**Категория:** Organism  
**Импорт:** `import { DXTable } from 'dxd-style-code'`

## Назначение

Полнофункциональная таблица данных с поддержкой сортировки, фильтрации, поиска, пагинации и выбора строк. Поддерживает локальный и API режимы работы с данными.

## Props

### Данные

| Prop      | Тип     | По умолчанию | Описание                                                                                                  |
| --------- | ------- | ------------ | --------------------------------------------------------------------------------------------------------- |
| `columns` | `Array` | **required** | Конфигурация колонок: `[{ key, label, sortable?, filterable?, filterOptions?, width?, align?, format? }]` |
| `data`    | `Array` | `[]`         | Данные таблицы                                                                                            |

### Режим работы

| Prop        | Тип                | По умолчанию | Описание                                     |
| ----------- | ------------------ | ------------ | -------------------------------------------- |
| `mode`      | `'local' \| 'api'` | `'local'`    | Режим работы с данными                       |
| `apiUrl`    | `string`           | -            | URL API для загрузки данных (для mode='api') |
| `apiMethod` | `string`           | `'GET'`      | HTTP метод                                   |
| `apiParams` | `Object`           | `{}`         | Параметры API запроса                        |

### Функциональность

| Prop         | Тип       | По умолчанию | Описание               |
| ------------ | --------- | ------------ | ---------------------- |
| `searchable` | `boolean` | `false`      | Включить поиск         |
| `filterable` | `boolean` | `false`      | Включить фильтрацию    |
| `sortable`   | `boolean` | `true`       | Включить сортировку    |
| `paginated`  | `boolean` | `true`       | Включить пагинацию     |
| `selectable` | `boolean` | `false`      | Включить выбор строк   |
| `groupBy`    | `string`  | -            | Группировка по колонке |

### Внешний вид

| Prop           | Тип                    | По умолчанию | Описание                |
| -------------- | ---------------------- | ------------ | ----------------------- |
| `size`         | `'sm' \| 'md' \| 'lg'` | `'md'`       | Размер таблицы          |
| `height`       | `string`               | -            | Высота таблицы          |
| `stickyHeader` | `boolean`              | `true`       | Закрепленный заголовок  |
| `striped`      | `boolean`              | `false`      | Полосатая таблица       |
| `bordered`     | `boolean`              | `false`      | С границами             |
| `hoverable`    | `boolean`              | `true`       | Подсветка при наведении |
| `dense`        | `boolean`              | `false`      | Плотный режим           |

### Toolbar и действия

| Prop           | Тип       | По умолчанию | Описание                       |
| -------------- | --------- | ------------ | ------------------------------ |
| `showToolbar`  | `boolean` | `true`       | Показывать toolbar             |
| `columnToggle` | `boolean` | `false`      | Переключение видимости колонок |
| `actions`      | `boolean` | `false`      | Показывать действия            |

### Пагинация

| Prop              | Тип       | По умолчанию        | Описание                                                     |
| ----------------- | --------- | ------------------- | ------------------------------------------------------------ |
| `defaultPageSize` | `number`  | `10`                | Размер страницы по умолчанию                                 |
| `pageSizeOptions` | `Array`   | `[10, 25, 50, 100]` | Опции размера страницы                                       |
| `defaultSort`     | `Object`  | -                   | Начальная сортировка: `{ column: 'name', direction: 'asc' }` |
| `loading`         | `boolean` | `false`             | Состояние загрузки                                           |

## Events

| Event              | Параметры                    | Описание                   |
| ------------------ | ---------------------------- | -------------------------- |
| `row-click`        | `{ row, index }`             | Клик по строке             |
| `row-select`       | `{ id, selected }`           | Выбор строки               |
| `select-all`       | `boolean`                    | Выбрать все                |
| `sort`             | `{ column, direction }`      | Сортировка                 |
| `filter`           | `{ column, value, filters }` | Фильтрация                 |
| `filter-clear`     | -                            | Очистка фильтров           |
| `page-change`      | `number`                     | Изменение страницы         |
| `page-size-change` | `number`                     | Изменение размера страницы |
| `edit`             | `{ row, index }`             | Редактирование             |
| `delete`           | `{ row, index }`             | Удаление                   |
| `data-loaded`      | `Array`                      | Данные загружены           |
| `error`            | `Error`                      | Ошибка                     |
| `column-toggle`    | `{ column, visible }`        | Переключение колонки       |
| `selection-clear`  | -                            | Очистка выбора             |

## Slots

| Slot              | Параметры               | Описание                             |
| ----------------- | ----------------------- | ------------------------------------ |
| `toolbar-actions` | -                       | Дополнительные действия в toolbar    |
| `[columnKey]`     | `{ row, value, index }` | Кастомизация ячейки по ключу колонки |

## Примеры использования

### Базовая таблица

```vue
<template>
  <DXTable :columns="columns" :data="data" />
</template>

<script setup>
const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Название" },
  { key: "status", label: "Статус" },
];

const data = [
  { id: 1, name: "Товар 1", status: "active" },
  { id: 2, name: "Товар 2", status: "inactive" },
];
</script>
```

### Таблица с сортировкой и фильтрацией

```vue
<template>
  <DXTable :columns="columns" :data="data" searchable filterable sortable />
</template>

<script setup>
const columns = [
  { key: "id", label: "ID", sortable: true },
  { key: "name", label: "Название", sortable: true, filterable: true },
  {
    key: "status",
    label: "Статус",
    filterable: true,
    filterOptions: ["active", "inactive", "pending"],
  },
];
</script>
```

### Таблица с выбором строк

```vue
<template>
  <DXTable
    :columns="columns"
    :data="data"
    selectable
    @row-select="handleRowSelect"
  />
</template>
```

### Таблица с API режимом

```vue
<template>
  <DXTable
    :columns="columns"
    mode="api"
    api-url="/api/users"
    :api-params="{ status: 'active' }"
    searchable
    filterable
    paginated
  />
</template>
```

## Особенности

- **Два режима работы:** локальный (все операции на клиенте) и API (операции на сервере)
- **Автоматическая фильтрация:** опции фильтра собираются автоматически из данных, если не указаны явно
- **Группировка:** поддержка группировки данных по колонке
- **Кастомизация:** слоты для кастомизации ячеек по ключу колонки
- **Производительность:** оптимизирована для работы с большими объемами данных

## Использует

- `DXBaseTable` - базовая таблица
- `DXTableToolbar` - панель инструментов
- `DXTablePagination` - пагинация
- `DXTableFiltersPanel` - панель фильтров
- Composables: `useTableData`, `useTableSort`, `useTableFilter`, `useTablePagination`, `useTableSelection`, `useTableColumns`

## Используется в

- Административные панели
- Списки пользователей, товаров, заказов
- Отчеты и аналитика
- Любые места, требующие отображения структурированных данных

# DXDataTable

Таблица данных с расширенными возможностями (алиас для DXTable).

## Import

```javascript
import { DXDataTable } from 'dxd-style-code';
```

## Description

DXDataTable является алиасом для DXTable и предоставляет те же функции:
- Сортировка
- Фильтрация
- Пагинация
- Выбор строк
- Группировка

Для полной документации смотрите [DXTable](./DXTable.md).

## Usage

```vue
<DXDataTable
  :columns="columns"
  :data="data"
  searchable
  filterable
  paginated
/>
```

## See Also

- [DXTable](./DXTable.md)
- [DXBaseTable](./DXBaseTable.md)


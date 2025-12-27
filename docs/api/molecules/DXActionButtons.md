# DXActionButtons

Компонент для отображения группы действий над элементом (просмотр, редактирование, удаление).

## Import

```javascript
import { DXActionButtons } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showView` | `Boolean` | `true` | Показывать кнопку просмотра |
| `showEdit` | `Boolean` | `true` | Показывать кнопку редактирования |
| `showDelete` | `Boolean` | `true` | Показывать кнопку удаления |
| `size` | `String` | `'md'` | Размер кнопок: `'sm'`, `'md'`, `'lg'` |
| `viewLabel` | `String` | `'Просмотр'` | Текст tooltip для просмотра |
| `editLabel` | `String` | `'Редактировать'` | Текст tooltip для редактирования |
| `deleteLabel` | `String` | `'Удалить'` | Текст tooltip для удаления |
| `confirmDelete` | `Boolean` | `false` | Запрашивать подтверждение удаления |
| `confirmMessage` | `String` | `'Вы уверены?'` | Сообщение подтверждения |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `view` | - | Клик по кнопке просмотра |
| `edit` | - | Клик по кнопке редактирования |
| `delete` | - | Клик по кнопке удаления (после подтверждения если включено) |

## Slots

| Slot | Description |
|------|-------------|
| `before` | Контент перед стандартными кнопками |
| `after` | Контент после стандартных кнопок |

## Usage

### Basic

```vue
<DXActionButtons
  @view="handleView"
  @edit="handleEdit"
  @delete="handleDelete"
/>
```

### Only View and Edit

```vue
<DXActionButtons
  :showDelete="false"
  @view="handleView"
  @edit="handleEdit"
/>
```

### With Delete Confirmation

```vue
<DXActionButtons
  :confirmDelete="true"
  confirmMessage="Удалить этот элемент?"
  @delete="handleDelete"
/>
```

### Custom Labels

```vue
<DXActionButtons
  viewLabel="Открыть"
  editLabel="Изменить"
  deleteLabel="Убрать"
  @view="handleView"
  @edit="handleEdit"
  @delete="handleDelete"
/>
```

### In Table Row

```vue
<DXTable :data="items" :columns="columns">
  <template #cell-actions="{ row }">
    <DXActionButtons
      size="sm"
      @view="viewItem(row)"
      @edit="editItem(row)"
      @delete="deleteItem(row)"
    />
  </template>
</DXTable>
```

## See Also

- [DXButton](../atoms/DXButton.md)
- [DXTable](../organisms/DXTable.md)


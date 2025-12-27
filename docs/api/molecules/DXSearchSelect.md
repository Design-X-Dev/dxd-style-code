# DXSearchSelect

Селект с поиском, мультивыбором и возможностью создания новых опций.

## Import

```javascript
import { DXSearchSelect } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `any` | `null` | Выбранное значение (v-model) |
| `options` | `Array` | `[]` | Список опций |
| `placeholder` | `String` | `'Выберите...'` | Placeholder |
| `label` | `String` | `''` | Лейбл поля |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `error` | `String` | `''` | Текст ошибки |
| `helper` | `String` | `''` | Вспомогательный текст |
| `required` | `Boolean` | `false` | Обязательное поле |
| `multiple` | `Boolean` | `false` | Мультивыбор |
| `searchable` | `Boolean` | `true` | Включить поиск |
| `clearable` | `Boolean` | `true` | Кнопка очистки |
| `creatable` | `Boolean` | `false` | Разрешить создание новых опций |
| `createText` | `String` | `'Создать'` | Текст кнопки создания |
| `loading` | `Boolean` | `false` | Состояние загрузки |
| `labelField` | `String` | `'label'` | Поле для отображения |
| `valueField` | `String` | `'value'` | Поле для значения |
| `groupBy` | `String` | `null` | Поле для группировки |
| `maxItems` | `Number` | `0` | Максимум выбранных (0 = неограничено) |
| `closeOnSelect` | `Boolean` | `true` | Закрывать при выборе |
| `noOptionsText` | `String` | `'Нет опций'` | Текст при пустом списке |
| `noResultsText` | `String` | `'Ничего не найдено'` | Текст при пустом поиске |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `any` | Изменение выбора |
| `search` | `String` | Изменение поиска |
| `create` | `String` | Создание новой опции |
| `open` | - | Открытие dropdown |
| `close` | - | Закрытие dropdown |
| `clear` | - | Очистка |

## Slots

| Slot | Props | Description |
|------|-------|-------------|
| `option` | `{ option, selected }` | Кастомная опция |
| `selected` | `{ option }` | Выбранное значение |
| `tag` | `{ option, remove }` | Тег при мультивыборе |
| `no-options` | - | Пустой список |
| `no-results` | `{ search }` | Нет результатов поиска |
| `create-option` | `{ search }` | Кнопка создания |

## Usage

### Basic

```vue
<DXSearchSelect
  v-model="selectedCity"
  :options="cities"
  label="Город"
  placeholder="Выберите город"
/>
```

### Multiple Selection

```vue
<DXSearchSelect
  v-model="selectedTags"
  :options="tags"
  multiple
  label="Теги"
  placeholder="Выберите теги"
/>
```

### With Object Options

```vue
<DXSearchSelect
  v-model="selectedUser"
  :options="users"
  labelField="name"
  valueField="id"
  label="Пользователь"
/>
```

### Creatable

```vue
<DXSearchSelect
  v-model="selectedTags"
  :options="existingTags"
  multiple
  creatable
  createText="Добавить тег"
  @create="handleCreateTag"
/>

<script setup>
async function handleCreateTag(value) {
  const newTag = await api.createTag(value);
  existingTags.value.push(newTag);
}
</script>
```

### Async Options

```vue
<DXSearchSelect
  v-model="selected"
  :options="searchResults"
  :loading="isLoading"
  @search="handleSearch"
  searchable
/>

<script setup>
const searchResults = ref([]);
const isLoading = ref(false);

async function handleSearch(query) {
  if (query.length < 2) return;
  isLoading.value = true;
  searchResults.value = await api.search(query);
  isLoading.value = false;
}
</script>
```

### Grouped Options

```vue
<DXSearchSelect
  v-model="selected"
  :options="[
    { value: 'js', label: 'JavaScript', category: 'Frontend' },
    { value: 'vue', label: 'Vue.js', category: 'Frontend' },
    { value: 'node', label: 'Node.js', category: 'Backend' },
    { value: 'python', label: 'Python', category: 'Backend' }
  ]"
  groupBy="category"
  label="Технология"
/>
```

### Custom Option Render

```vue
<DXSearchSelect v-model="selected" :options="users">
  <template #option="{ option, selected }">
    <div class="flex items-center gap-3">
      <img :src="option.avatar" class="w-8 h-8 rounded-full" />
      <div>
        <div class="font-medium">{{ option.name }}</div>
        <div class="text-xs text-slate-500">{{ option.email }}</div>
      </div>
      <DXIcon v-if="selected" :icon="CheckIcon" class="ml-auto text-green-500" />
    </div>
  </template>
</DXSearchSelect>
```

### Custom Tags

```vue
<DXSearchSelect v-model="selected" :options="options" multiple>
  <template #tag="{ option, remove }">
    <DXTags size="sm" variant="primary" closable @close="remove">
      {{ option.label }}
    </DXTags>
  </template>
</DXSearchSelect>
```

### With Max Items

```vue
<DXSearchSelect
  v-model="selected"
  :options="options"
  multiple
  :maxItems="3"
  helper="Максимум 3 элемента"
/>
```

### Sizes

```vue
<DXSearchSelect size="sm" :options="options" v-model="val" />
<DXSearchSelect size="md" :options="options" v-model="val" />
<DXSearchSelect size="lg" :options="options" v-model="val" />
```

### With Validation

```vue
<DXSearchSelect
  v-model="form.category"
  :options="categories"
  label="Категория"
  required
  :error="errors.category"
/>
```

## Keyboard Navigation

- `↓` / `↑` - навигация по опциям
- `Enter` - выбор опции
- `Esc` - закрыть dropdown
- `Backspace` - удалить последний тег (multiple)

## See Also

- [DXSelect](./DXSelect.md)
- [DXComboBox](./DXComboBox.md)
- [DXTags](../atoms/DXTags.md)


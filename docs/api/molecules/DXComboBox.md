# DXComboBox

Комбинированный input с выпадающим списком предложений (autocomplete).

## Import

```javascript
import { DXComboBox } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `String\|Object` | `''` | Выбранное значение (v-model) |
| `options` | `Array` | `[]` | Список опций |
| `placeholder` | `String` | `''` | Placeholder для input |
| `label` | `String` | `''` | Лейбл поля |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `error` | `String` | `''` | Текст ошибки |
| `helper` | `String` | `''` | Вспомогательный текст |
| `required` | `Boolean` | `false` | Обязательное поле |
| `clearable` | `Boolean` | `true` | Показать кнопку очистки |
| `filterable` | `Boolean` | `true` | Включить фильтрацию по вводу |
| `displayField` | `String` | `'label'` | Поле объекта для отображения |
| `valueField` | `String` | `'value'` | Поле объекта для значения |
| `filterFunction` | `Function` | `null` | Кастомная функция фильтрации |
| `minSearchLength` | `Number` | `0` | Минимум символов для показа списка |
| `maxHeight` | `String` | `'300px'` | Максимальная высота dropdown |
| `loading` | `Boolean` | `false` | Состояние загрузки |
| `noOptionsText` | `String` | `'Нет опций'` | Текст при пустом списке |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `String\|Object` | Изменение значения |
| `search` | `String` | Изменение поискового запроса |
| `select` | `Object` | Выбор опции |
| `clear` | - | Очистка значения |
| `focus` | `Event` | Фокус на input |
| `blur` | `Event` | Потеря фокуса |

## Slots

| Slot | Props | Description |
|------|-------|-------------|
| `option` | `{ option, selected }` | Кастомный рендер опции |
| `selected` | `{ option }` | Кастомный рендер выбранного значения |
| `no-options` | - | Контент при отсутствии опций |
| `loading` | - | Контент при загрузке |

## Usage

### Basic with String Options

```vue
<DXComboBox
  v-model="city"
  :options="['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск']"
  placeholder="Выберите город"
  label="Город"
/>
```

### With Object Options

```vue
<DXComboBox
  v-model="selectedUser"
  :options="users"
  displayField="name"
  valueField="id"
  placeholder="Найти пользователя"
  label="Пользователь"
/>

<script setup>
const users = [
  { id: 1, name: 'Иван Иванов' },
  { id: 2, name: 'Петр Петров' },
  { id: 3, name: 'Анна Сидорова' }
];
</script>
```

### With Custom Filter

```vue
<DXComboBox
  v-model="selected"
  :options="products"
  :filterFunction="(option, query) => 
    option.name.toLowerCase().includes(query.toLowerCase()) ||
    option.sku.includes(query)
  "
  displayField="name"
/>
```

### With Async Search

```vue
<DXComboBox
  v-model="selected"
  :options="searchResults"
  :loading="isSearching"
  :minSearchLength="2"
  @search="handleSearch"
  placeholder="Введите минимум 2 символа"
/>

<script setup>
const searchResults = ref([]);
const isSearching = ref(false);

async function handleSearch(query) {
  isSearching.value = true;
  searchResults.value = await api.search(query);
  isSearching.value = false;
}
</script>
```

### Custom Option Template

```vue
<DXComboBox v-model="selected" :options="users">
  <template #option="{ option, selected }">
    <div class="flex items-center gap-3">
      <img :src="option.avatar" class="w-8 h-8 rounded-full" />
      <div>
        <div class="font-medium">{{ option.name }}</div>
        <div class="text-xs text-slate-500">{{ option.email }}</div>
      </div>
      <DXIcon v-if="selected" :icon="CheckIcon" class="ml-auto" />
    </div>
  </template>
</DXComboBox>
```

### With Validation

```vue
<DXComboBox
  v-model="category"
  :options="categories"
  label="Категория"
  required
  :error="errors.category"
  helper="Выберите категорию товара"
/>
```

## See Also

- [DXSearchSelect](./DXSearchSelect.md)
- [DXSelect](./DXSelect.md)
- [DXInput](./DXInput.md)


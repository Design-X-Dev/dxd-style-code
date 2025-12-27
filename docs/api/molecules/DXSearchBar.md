# DXSearchBar

Расширенная поисковая строка с историей, подсказками и фильтрами.

## Import

```javascript
import { DXSearchBar } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `String` | `''` | Поисковый запрос (v-model) |
| `placeholder` | `String` | `'Поиск...'` | Placeholder |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `loading` | `Boolean` | `false` | Состояние загрузки |
| `suggestions` | `Array` | `[]` | Список подсказок |
| `history` | `Array` | `[]` | История поиска |
| `showHistory` | `Boolean` | `true` | Показывать историю |
| `maxHistory` | `Number` | `5` | Максимум элементов истории |
| `showClear` | `Boolean` | `true` | Показать кнопку очистки |
| `showSubmitButton` | `Boolean` | `false` | Показать кнопку поиска |
| `submitButtonText` | `String` | `'Найти'` | Текст кнопки |
| `debounce` | `Number` | `300` | Задержка перед событием search (мс) |
| `minLength` | `Number` | `1` | Минимум символов для поиска |
| `autofocus` | `Boolean` | `false` | Автофокус |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `String` | Изменение запроса |
| `search` | `String` | Выполнение поиска (с debounce) |
| `submit` | `String` | Отправка формы (Enter или кнопка) |
| `clear` | - | Очистка поля |
| `select-suggestion` | `Object` | Выбор подсказки |
| `select-history` | `String` | Выбор из истории |
| `remove-history` | `String` | Удаление из истории |
| `focus` | `Event` | Фокус |
| `blur` | `Event` | Потеря фокуса |

## Slots

| Slot | Props | Description |
|------|-------|-------------|
| `prefix` | - | Контент перед input |
| `suffix` | - | Контент после input |
| `suggestion` | `{ item, index }` | Кастомная подсказка |
| `history-item` | `{ item, index }` | Элемент истории |
| `no-results` | - | Контент при отсутствии результатов |
| `loading` | - | Контент загрузки |

## Usage

### Basic

```vue
<DXSearchBar
  v-model="query"
  placeholder="Поиск товаров..."
  @search="handleSearch"
/>
```

### With Suggestions

```vue
<DXSearchBar
  v-model="query"
  :suggestions="searchSuggestions"
  @search="fetchSuggestions"
  @select-suggestion="handleSelect"
/>
```

### With History

```vue
<DXSearchBar
  v-model="query"
  :history="searchHistory"
  @submit="addToHistory"
  @remove-history="removeFromHistory"
/>
```

### With Submit Button

```vue
<DXSearchBar
  v-model="query"
  showSubmitButton
  submitButtonText="Искать"
  @submit="performSearch"
/>
```

### Loading State

```vue
<DXSearchBar
  v-model="query"
  :loading="isSearching"
  :suggestions="results"
  @search="searchProducts"
>
  <template #loading>
    <div class="p-4 text-center text-slate-500">
      <DXLoader size="sm" />
      <span class="ml-2">Поиск...</span>
    </div>
  </template>
</DXSearchBar>
```

### Custom Suggestions

```vue
<DXSearchBar v-model="query" :suggestions="products">
  <template #suggestion="{ item }">
    <div class="flex items-center gap-3 p-2">
      <img :src="item.image" class="w-10 h-10 rounded" />
      <div>
        <div class="font-medium">{{ item.name }}</div>
        <div class="text-sm text-slate-500">{{ item.price }} ₽</div>
      </div>
    </div>
  </template>
</DXSearchBar>
```

### With Filters

```vue
<div class="flex gap-2">
  <DXSearchBar
    v-model="query"
    class="flex-1"
    @search="search"
  />
  <DXSelect v-model="category" :options="categories" />
  <DXButton @click="openAdvanced">
    <DXIcon :icon="AdjustmentsHorizontalIcon" />
  </DXButton>
</div>
```

### Global Search (Spotlight)

```vue
<DXSearchBar
  v-model="query"
  size="lg"
  :suggestions="globalResults"
  placeholder="Поиск по всему сайту..."
  autofocus
  @search="globalSearch"
>
  <template #suggestion="{ item }">
    <div class="flex items-center gap-3">
      <DXIcon :icon="item.icon" size="sm" />
      <div>
        <div>{{ item.title }}</div>
        <div class="text-xs text-slate-400">{{ item.category }}</div>
      </div>
    </div>
  </template>
</DXSearchBar>
```

### No Results

```vue
<DXSearchBar v-model="query" :suggestions="results">
  <template #no-results>
    <div class="p-4 text-center text-slate-500">
      <DXIcon :icon="MagnifyingGlassIcon" size="lg" class="mb-2" />
      <p>Ничего не найдено</p>
      <p class="text-sm">Попробуйте изменить запрос</p>
    </div>
  </template>
</DXSearchBar>
```

### Sizes

```vue
<DXSearchBar size="sm" v-model="query" />
<DXSearchBar size="md" v-model="query" />
<DXSearchBar size="lg" v-model="query" />
```

## See Also

- [DXInput](./DXInput.md)
- [DXSearchSelect](./DXSearchSelect.md)
- [DXComboBox](./DXComboBox.md)


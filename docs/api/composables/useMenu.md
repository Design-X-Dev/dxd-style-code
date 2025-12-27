# useMenu

Composable для управления меню (sidebar и embedded).

## Import

```javascript
import { useMenu } from 'dxd-style-code';
```

## Signature

```typescript
function useMenu(props, emit): {
  searchQuery: Ref<string>;
  internalCompact: Ref<boolean>;
  compact: ComputedRef<boolean>;
  filteredSections: ComputedRef<Section[]>;
  isItemActive: (item: MenuItem) => boolean;
  toggleCompact: () => void;
  handleItemClick: (item: MenuItem, event: Event) => void;
  hasRouter: boolean;
}
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `props` | `Object` | Props компонента меню |
| `emit` | `Function` | Emit функция компонента |

### Expected Props

```typescript
interface MenuProps {
  sections: Section[];
  activeItem: string | null;
  compact: boolean;
}

interface Section {
  title?: string;
  items: MenuItem[];
}

interface MenuItem {
  id?: string;
  label: string;
  to?: string;
  icon?: Component;
  children?: MenuItem[];
}
```

## Returns

| Property | Type | Description |
|----------|------|-------------|
| `searchQuery` | `Ref<string>` | Поисковый запрос |
| `internalCompact` | `Ref<boolean>` | Внутреннее состояние compact |
| `compact` | `ComputedRef<boolean>` | Computed compact mode |
| `filteredSections` | `ComputedRef<Section[]>` | Отфильтрованные секции |
| `isItemActive` | `Function` | Проверка активности элемента |
| `toggleCompact` | `Function` | Переключение compact mode |
| `handleItemClick` | `Function` | Обработчик клика по элементу |
| `hasRouter` | `boolean` | Доступен ли vue-router |

## Usage

### In Custom Menu Component

```vue
<script setup>
import { useMenu } from 'dxd-style-code';

const props = defineProps({
  sections: { type: Array, required: true },
  activeItem: { type: String, default: null },
  compact: { type: Boolean, default: false }
});

const emit = defineEmits(['update:compact', 'item-click']);

const {
  searchQuery,
  compact,
  filteredSections,
  isItemActive,
  toggleCompact,
  handleItemClick
} = useMenu(props, emit);
</script>

<template>
  <nav>
    <input v-model="searchQuery" placeholder="Поиск..." />
    
    <div v-for="section in filteredSections" :key="section.title">
      <h3>{{ section.title }}</h3>
      <ul>
        <li 
          v-for="item in section.items" 
          :key="item.id || item.label"
          :class="{ active: isItemActive(item) }"
          @click="handleItemClick(item, $event)"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
    
    <button @click="toggleCompact">
      {{ compact ? 'Развернуть' : 'Свернуть' }}
    </button>
  </nav>
</template>
```

### Search Filtering

```vue
<script setup>
const { searchQuery, filteredSections } = useMenu(props, emit);
</script>

<template>
  <DXInput 
    v-model="searchQuery" 
    placeholder="Поиск по меню..."
  />
  
  <div v-if="filteredSections.length === 0">
    Ничего не найдено
  </div>
</template>
```

## Notes

- Автоматически фильтрует секции и элементы по поисковому запросу
- Поддерживает вложенные элементы (children)
- Проверяет доступность vue-router и предоставляет `hasRouter`
- Используется в DXSidebarMenu и DXMenu

## See Also

- [DXSidebarMenu](../organisms/DXSidebarMenu.md)
- [DXMenu](../molecules/DXMenu.md)


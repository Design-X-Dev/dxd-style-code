# DXTags

**Категория:** Atom  
**Импорт:** `import { DXTags } from 'dxd-style-code'`

## Назначение

Компонент для отображения набора тегов с поддержкой иконок, удаления и цветовых вариантов.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `tags` | `Array<string \| TagObject>` | `[]` | Массив тегов |
| `variant` | `'default' \| 'large'` | `'default'` | Размер тегов |
| `color` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'default'` | Цвет по умолчанию |
| `closable` | `boolean` | `false` | Все теги удаляемые |

### TagObject

```ts
interface TagObject {
  label: string;
  icon?: Component;
  closable?: boolean;
  color?: string;
  iconAnimation?: 'none' | 'wiggle' | 'scale' | 'rotate';
}
```

## Events

| Event | Параметры | Описание |
|-------|-----------|----------|
| `remove` | `{ tag, index }` | Удаление тега |

## Примеры использования

### Простые теги

```vue
<template>
  <DXTags :tags="['Vue', 'React', 'Angular']" />
</template>
```

### Удаляемые теги

```vue
<template>
  <DXTags 
    :tags="selectedTags" 
    closable
    @remove="handleRemove"
  />
</template>

<script setup>
const selectedTags = ref(['JavaScript', 'TypeScript', 'Node.js']);

const handleRemove = ({ tag, index }) => {
  selectedTags.value.splice(index, 1);
};
</script>
```

### Теги с иконками

```vue
<template>
  <DXTags :tags="[
    { label: 'Vue', icon: VueIcon, color: 'success' },
    { label: 'React', icon: ReactIcon, color: 'info' },
  ]" />
</template>
```

### Цветные теги

```vue
<template>
  <DXTags 
    :tags="['Important', 'Urgent']" 
    color="danger"
  />
</template>
```

### Смешанные теги

```vue
<template>
  <DXTags :tags="[
    'Simple tag',
    { label: 'With icon', icon: StarIcon },
    { label: 'Closable', closable: true },
    { label: 'Colored', color: 'success' },
  ]" />
</template>
```

## Использует

- `useSize` - для размеров
- `useVariantTag` - для цветов
- `useClassComposition` - для объединения классов
- `DXIcon` - для иконок

## Особенности

- Автоматическая нормализация: строки преобразуются в объекты
- Flex wrap для переноса тегов на новую строку
- Анимация иконки при hover (group-hover)
- Кнопка удаления с hover эффектом


# DXIcon

**Категория:** Atom  
**Импорт:** `import { DXIcon } from 'dxd-style-code'`

## Назначение

Компонент для отображения иконок из библиотеки Heroicons с поддержкой анимаций.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `icon` | `Component` | **required** | Компонент Heroicon |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Размер иконки |
| `animation` | `'none' \| 'wiggle' \| 'scale' \| 'rotate'` | `'none'` | Анимация при hover |
| `groupHover` | `boolean` | `false` | Использовать group-hover вместо обычного hover |
| `class` | `string \| Array \| Object` | `''` | Дополнительные классы |

## Примеры использования

### Базовая иконка

```vue
<template>
  <DXIcon :icon="UserIcon" size="md" />
</template>
```

### Иконка с анимацией

```vue
<template>
  <DXIcon :icon="HeartIcon" size="lg" animation="wiggle" />
</template>
```

### Иконка с group-hover

```vue
<template>
  <div class="group">
    <DXIcon :icon="StarIcon" animation="scale" :group-hover="true" />
    <span>Наведите на группу</span>
  </div>
</template>
```

## Особенности

- **Heroicons:** Использует компоненты из библиотеки @heroicons/vue
- **Анимации:** Поддерживает анимации при hover (wiggle, scale, rotate)
- **Group hover:** Может реагировать на hover родительского элемента

## Используется в

- Практически во всех компонентах библиотеки
- Кнопки, ссылки, меню
- Формы и интерактивные элементы


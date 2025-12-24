# DXAvatar

**Категория:** Atom  
**Импорт:** `import { DXAvatar } from 'dxd-style-code'`

## Назначение

Аватар пользователя с поддержкой изображений, инициалов и fallback-иконки.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `src` | `string` | `''` | URL изображения |
| `alt` | `string` | `'Avatar'` | Alt текст |
| `initials` | `string` | `''` | Инициалы (если нет изображения) |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Размер аватара |
| `shape` | `'circle' \| 'square'` | `'circle'` | Форма аватара |
| `icon` | `Component` | `null` | Кастомная иконка для fallback |
| `iconAnimation` | `'none' \| 'wiggle' \| 'scale' \| 'rotate'` | `'wiggle'` | Анимация иконки |

## Примеры использования

### Аватар с изображением

```vue
<template>
  <DXAvatar src="/avatar.jpg" alt="User" size="lg" />
</template>
```

### Аватар с инициалами

```vue
<template>
  <DXAvatar initials="JD" size="md" />
</template>
```

### Квадратный аватар

```vue
<template>
  <DXAvatar src="/avatar.jpg" shape="square" size="lg" />
</template>
```

### Аватар с fallback иконкой

```vue
<template>
  <DXAvatar :icon="UserIcon" size="md" />
</template>
```

## Особенности

- **Приоритет отображения:** Изображение → Инициалы → Fallback иконка
- **Формы:** Поддерживает круглую и квадратную формы
- **Fallback:** Автоматически показывает инициалы или иконку при отсутствии изображения

## Используется в

- Профили пользователей
- Комментарии и отзывы
- Списки участников
- Карточки пользователей


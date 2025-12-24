# DXNav

**Категория:** Atom  
**Импорт:** `import { DXNav } from 'dxd-style-code'`

## Назначение

Универсальная обертка для навигации с автоматической установкой aria-label в зависимости от типа навигации.

## Props

| Prop        | Тип                                                            | По умолчанию | Описание                                             |
| ----------- | -------------------------------------------------------------- | ------------ | ---------------------------------------------------- |
| `type`      | `'breadcrumb' \| 'pagination' \| 'menu' \| 'main' \| 'custom'` | `'main'`     | Тип навигации                                        |
| `ariaLabel` | `string`                                                       | `null`       | Кастомный aria-label (переопределяет автоматический) |
| `class`     | `string \| Array \| Object`                                    | `null`       | Дополнительные CSS классы                            |

## Примеры использования

### Основная навигация

```vue
<template>
  <DXNav type="main">
    <DXLink to="/">Главная</DXLink>
    <DXLink to="/about">О нас</DXLink>
    <DXLink to="/contact">Контакты</DXLink>
  </DXNav>
</template>
```

### Хлебные крошки

```vue
<template>
  <DXNav type="breadcrumb" aria-label="Навигационная цепочка">
    <DXBreadcrumb :items="breadcrumbItems" />
  </DXNav>
</template>
```

### Пагинация

```vue
<template>
  <DXNav type="pagination">
    <DXPagination :current-page="page" :total-pages="10" />
  </DXNav>
</template>
```

### Кастомная навигация

```vue
<template>
  <DXNav type="custom" aria-label="Кастомное меню">
    <!-- Кастомный контент -->
  </DXNav>
</template>
```

## Особенности

- **Автоматические aria-label:** Устанавливает правильные aria-label в зависимости от типа
- **Доступность:** Улучшает доступность навигационных элементов
- **Гибкость:** Поддерживает кастомный aria-label через prop

## Используется в

- Основная навигация сайта
- Хлебные крошки
- Пагинация
- Меню навигации

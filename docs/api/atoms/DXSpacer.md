# DXSpacer

**Категория:** Atom  
**Импорт:** `import { DXSpacer } from 'dxd-style-code'`

## Назначение

Компонент для создания отступов между элементами. Может быть фиксированного размера или занимать всё доступное пространство (flex-grow).

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| number` | `'md'` | Размер или число в пикселях |
| `direction` | `'vertical' \| 'horizontal' \| 'both'` | `'vertical'` | Направление |
| `grow` | `boolean` | `false` | Занять всё доступное пространство |

## Примеры использования

### Вертикальный отступ

```vue
<template>
  <h1>Заголовок</h1>
  <DXSpacer size="lg" />
  <p>Параграф с отступом</p>
</template>
```

### Горизонтальный отступ

```vue
<template>
  <DXFlex>
    <span>Слева</span>
    <DXSpacer direction="horizontal" size="xl" />
    <span>Справа</span>
  </DXFlex>
</template>
```

### Flex grow (заполнение пространства)

```vue
<template>
  <DXFlex height="full">
    <header>Шапка</header>
    <DXSpacer grow />
    <footer>Подвал</footer>
  </DXFlex>
</template>
```

### Точный размер в пикселях

```vue
<template>
  <div>Элемент 1</div>
  <DXSpacer :size="32" />
  <div>Элемент 2 с отступом 32px</div>
</template>
```

### Двунаправленный отступ

```vue
<template>
  <DXSpacer direction="both" size="lg" />
</template>
```

## Размеры

| Size | Height/Width |
|------|--------------|
| `xs` | 4px (0.25rem) |
| `sm` | 8px (0.5rem) |
| `md` | 16px (1rem) |
| `lg` | 32px (2rem) |
| `xl` | 48px (3rem) |

## Использует

- `useClassComposition` - для объединения классов

## Особенности

- `aria-hidden="true"` для скрытия от screen readers
- Числовые значения применяются через inline стили
- При `grow` игнорирует размер
- Работает в flex и обычных контейнерах


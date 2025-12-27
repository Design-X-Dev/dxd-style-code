# DXInputAddon

**Категория:** Atom  
**Импорт:** `import { DXInputAddon } from 'dxd-style-code'`

## Назначение

Аддон для input-групп. Отображает статичный текст или иконку рядом с полем ввода. Синхронизируется с состоянием группы через provide/inject.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `icon` | `Component` | `null` | Иконка (Heroicon) |

## Slots

| Slot | Описание |
|------|----------|
| `default` | Текст аддона (например, валюта, домен) |

## Примеры использования

### Текстовый аддон

```vue
<template>
  <DXInputGroup>
    <DXInputAddon>https://</DXInputAddon>
    <DXInput v-model="domain" placeholder="example.com" />
  </DXInputGroup>
</template>
```

### Аддон справа

```vue
<template>
  <DXInputGroup>
    <DXInput v-model="price" type="number" />
    <DXInputAddon>₽</DXInputAddon>
  </DXInputGroup>
</template>
```

### С иконкой

```vue
<template>
  <DXInputGroup>
    <DXInputAddon :icon="GlobeAltIcon" />
    <DXInput v-model="url" placeholder="Введите URL" />
  </DXInputGroup>
</template>
```

### Двусторонний

```vue
<template>
  <DXInputGroup>
    <DXInputAddon>$</DXInputAddon>
    <DXInput v-model="amount" type="number" />
    <DXInputAddon>.00</DXInputAddon>
  </DXInputGroup>
</template>
```

## Интеграция с DXInputGroup

Компонент автоматически:
- Получает `size` из группы
- Синхронизирует состояние `disabled`
- Меняет цвет границы при `error`

## Стилизация

- Фон: `bg-slate-50`
- Текст: `text-slate-600`
- Скругление: автоматическое для первого/последнего элемента
- Граница: синхронизируется с input

## Особенности

- Требует использования внутри `DXInputGroup`
- Автоматическая регистрация в группе через provide/inject
- Размер иконки: `w-4 h-4`


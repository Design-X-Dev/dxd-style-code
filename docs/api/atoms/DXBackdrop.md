# DXBackdrop

**Категория:** Atom  
**Импорт:** `import { DXBackdrop } from 'dxd-style-code'`

## Назначение

Компонент затемнения фона с размытием. Используется для модальных окон, сайдбаров и других overlay-элементов. Автоматически телепортируется в body и блокирует скролл.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `show` | `boolean` | `false` | Показать/скрыть backdrop |
| `blur` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'sm'` | Уровень размытия фона |
| `backgroundColor` | `string` | `'bg-slate-900/40'` | Tailwind класс цвета фона |
| `zIndex` | `'0' \| '10' \| '20' \| '30' \| '40' \| '50' \| 'auto'` | `'50'` | z-index слоя |
| `dismissible` | `boolean` | `true` | Можно ли закрыть кликом |
| `lockScroll` | `boolean` | `true` | Блокировать скролл body |

## Events

| Event | Параметры | Описание |
|-------|-----------|----------|
| `click` | `Event` | Клик по backdrop |
| `close` | - | Закрытие (при dismissible=true) |

## Slots

| Slot | Описание |
|------|----------|
| `default` | Контент поверх backdrop |

## Примеры использования

### Базовый backdrop

```vue
<template>
  <DXBackdrop :show="isOpen" @close="isOpen = false" />
</template>
```

### С кастомным размытием

```vue
<template>
  <DXBackdrop 
    :show="isOpen" 
    blur="lg"
    background-color="bg-black/60"
    @close="isOpen = false"
  />
</template>
```

### Backdrop с контентом

```vue
<template>
  <DXBackdrop :show="showModal" @close="showModal = false">
    <div class="fixed inset-0 flex items-center justify-center">
      <DXCard padding="lg">
        Модальное содержимое
      </DXCard>
    </div>
  </DXBackdrop>
</template>
```

## Особенности

- **Teleport:** Компонент автоматически телепортируется в `<body>`
- **Анимация:** Плавное появление/исчезновение с fade transition
- **Блокировка скролла:** При `lockScroll=true` добавляет `overflow-hidden` к body
- **Очистка:** Автоматически снимает блокировку скролла при размонтировании

## Используется в

- `DXModal` - модальные окна
- `DXSidebar` - боковые панели
- `DXDropdown` - выпадающие меню (опционально)


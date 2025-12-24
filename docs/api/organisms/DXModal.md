# DXModal

**Категория:** Organism  
**Импорт:** `import { DXModal } from 'dxd-style-code'`

## Назначение

Модальное окно с различными вариантами отображения: стандартное модальное окно, полноэкранный режим, боковая панель.

## Props

| Prop                 | Тип                                                          | По умолчанию  | Описание                                     |
| -------------------- | ------------------------------------------------------------ | ------------- | -------------------------------------------- |
| `open`               | `boolean`                                                    | `false`       | Состояние открытия/закрытия                  |
| `variant`            | `'modal' \| 'fullscreen' \| 'sidebar-right' \| 'half-right'` | `'modal'`     | Вариант отображения                          |
| `width`              | `'sm' \| 'md' \| 'lg' \| 'xl'`                               | `'md'`        | Ширина модального окна (для variant='modal') |
| `closable`           | `boolean`                                                    | `true`        | Показывать кнопку закрытия                   |
| `showModeSwitcher`   | `boolean`                                                    | `false`       | Показывать переключатель режимов             |
| `backdropBlur`       | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                     | `'sm'`        | Уровень размытия backdrop                    |
| `backdropOpacity`    | `string \| number`                                           | `'40'`        | Прозрачность backdrop (0-100)                |
| `backdropColor`      | `'slate-900' \| 'gray-900' \| 'black' \| 'white'`            | `'slate-900'` | Цвет backdrop                                |
| `backdropLockScroll` | `boolean`                                                    | `true`        | Блокировать скролл body при открытии         |

## Events

| Event            | Параметры | Описание                 |
| ---------------- | --------- | ------------------------ |
| `close`          | -         | Закрытие модального окна |
| `opened`         | -         | Модальное окно открыто   |
| `closed`         | -         | Модальное окно закрыто   |
| `update:variant` | `string`  | Изменение варианта       |

## Slots

| Slot      | Описание                       |
| --------- | ------------------------------ |
| `default` | Контент модального окна        |
| `title`   | Заголовок модального окна      |
| `actions` | Кнопки действий (обычно внизу) |

## Примеры использования

### Базовое модальное окно

```vue
<template>
  <DXButton @click="showModal = true">Открыть</DXButton>

  <DXModal
    :open="showModal"
    variant="modal"
    width="md"
    @close="showModal = false"
  >
    <template #title>Заголовок</template>
    <p>Контент модального окна</p>
    <template #actions>
      <DXButton variant="ghost" @click="showModal = false">Отмена</DXButton>
      <DXButton @click="save">Сохранить</DXButton>
    </template>
  </DXModal>
</template>
```

### Полноэкранное модальное окно

```vue
<template>
  <DXModal :open="showModal" variant="fullscreen" @close="showModal = false">
    <template #title>Полноэкранный режим</template>
    <div>Контент на весь экран</div>
  </DXModal>
</template>
```

### Боковая панель

```vue
<template>
  <DXModal
    :open="showSidebar"
    variant="sidebar-right"
    @close="showSidebar = false"
  >
    <template #title>Боковая панель</template>
    <div>Контент боковой панели</div>
  </DXModal>
</template>
```

### Модальное окно с переключателем режимов

```vue
<template>
  <DXModal
    :open="showModal"
    variant="modal"
    :show-mode-switcher="true"
    @close="showModal = false"
  >
    <template #title>Адаптивное окно</template>
    <p>Можно переключать режимы отображения</p>
  </DXModal>
</template>
```

## Особенности

- Автоматически блокирует скролл body при открытии
- Поддерживает клавиатурную навигацию (ESC для закрытия)
- Автоматически фокусируется на открытии
- Поддерживает различные варианты отображения для адаптивности

## Использует

- `DXBackdrop` - затемнение фона
- `DXButton` или `DXCloseButton` - кнопка закрытия

## Используется в

- Различных формах подтверждения
- Детальных просмотрах
- Настройках и конфигурациях

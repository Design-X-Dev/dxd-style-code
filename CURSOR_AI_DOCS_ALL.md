# DX Design System - Документация для Cursor AI

## Обзор библиотеки

**Название:** dxd-style-code  
**Версия:** 0.1.12  
**Фреймворк:** Vue 3.4+  
**Стилизация:** Tailwind CSS 4.1+  
**Иконки:** @heroicons/vue 2.2+  
**Репозиторий:** https://github.com/Design-X-Dev/dxd-style-code

Vue 3 UI библиотека компонентов, построенная на принципах Atomic Design и использующая Tailwind CSS для стилизации.

## Установка

```bash
npm install dxd-style-code
```

## Быстрый старт

### Глобальная регистрация (Plugin)

```js
import { createApp } from "vue";
import App from "./App.vue";
import DXComponents from "dxd-style-code";
import "dxd-style-code/style.css";

const app = createApp(App);
app.use(DXComponents);
app.mount("#app");
```

### Импорт отдельных компонентов

```js
import { DXButton, DXInput, DXModal } from "dxd-style-code";
import "dxd-style-code/style.css";
```

## Архитектура компонентов

Библиотека следует принципам **Atomic Design** и разделяет компоненты на уровни:

- **Atoms (39)** - Базовые, неделимые компоненты
- **Molecules (34)** - Композиции атомов
- **Organisms (27)** - Сложные UI структуры
- **Utilities (7)** - Утилитарные компоненты

---

## Atoms (Атомы) - 39 компонентов

Базовые, неделимые компоненты. Не зависят от других компонентов библиотеки.

**Категория:** Atom  
**Импорт:** `import { DX } from 'dxd-style-code'`

## Назначение

Polymorphic компонент - универсальная обертка, которая может рендериться как любой HTML элемент. Полезен для создания семантически правильной разметки без создания отдельных компонентов.

## Props

| `class` | `string \| Array \| Object` | `null`       | Дополнительные CSS классы                                                      |

## Примеры использования

### Базовое использование

```vue
<template>
  <DX as="section" class="container">
    <h2>Заголовок</h2>
    <p>Контент</p>
  </DX>
</template>
```

### Семантическая разметка

```vue
<template>
  <DX as="header" class="bg-white shadow">
    <DX as="nav" class="flex items-center">
      <DX as="a" href="/" class="logo">Logo</DX>
    </DX>
  </DX>
</template>
```

### Кнопка как ссылка

```vue
<template>
  <DX as="a" href="/home" class="btn btn-primary"> Перейти на главную </DX>
</template>
```

## Особенности

- **Polymorphic:** Может рендериться как любой HTML элемент
- **Гибкость:** Позволяет создавать семантически правильную разметку
- **Передача атрибутов:** Автоматически передает все атрибуты на рендерящийся элемент
- **Классы:** Объединяет prop `class` с классами из `$attrs`

## Используется в

- Семантическая разметка
- Создание кастомных компонентов на основе DX
- Универсальные обертки

---

**Категория:** Atom  
**Импорт:** `import { DXButton } from 'dxd-style-code'`

## Назначение

Универсальная кнопка с различными вариантами оформления. Поддерживает работу как обычная кнопка, ссылка или router-link.

## Props

| `size`     | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                                                                                 | `'md'`       | Размер кнопки                              |
| `block`    | `boolean`                                                                                                              | `false`      | Растянуть на всю ширину                    |
| `iconOnly` | `boolean`                                                                                                              | `false`      | Квадратная кнопка только с иконкой         |
| `disabled` | `boolean`                                                                                                              | `false`      | Отключенное состояние                      |
| `type`     | `'button' \| 'submit' \| 'reset'`                                                                                      | `'button'`   | Тип кнопки для формы                       |
| `to`       | `string \| Object`                                                                                                     | `null`       | Vue Router путь (превращает в router-link) |
| `href`     | `string`                                                                                                               | `null`       | Обычная ссылка (превращает в `<a>`)        |
| `target`   | `string`                                                                                                               | `null`       | Target для ссылки                          |
| `rel`      | `string`                                                                                                               | `null`       | Rel для ссылки                             |
| `value`    | `string \| number`                                                                                                     | `null`       | Значение для использования в DXButtonGroup |

## Events

## Slots

## Примеры использования

### Базовая кнопка

```vue
<template>
  <DXButton variant="primary" size="md">Сохранить</DXButton>
</template>
```

### Кнопка с действием

```vue
<template>
  <DXButton variant="danger" @click="handleDelete">
    <TrashIcon class="w-4 h-4" />
    Удалить
  </DXButton>
</template>
```

### Кнопка как router-link

```vue
<template>
  <DXButton :to="{ name: 'home' }" variant="ghost"> На главную </DXButton>
</template>
```

### Кнопка как обычная ссылка

```vue
<template>
  <DXButton href="https://example.com" target="_blank" variant="link">
    Внешняя ссылка
  </DXButton>
</template>
```

### Кнопка только с иконкой

```vue
<template>
  <DXButton icon-only variant="ghost" size="md" @click="handleEdit">
    <PencilIcon class="w-5 h-5" />
  </DXButton>
</template>
```

### Кнопка на всю ширину

```vue
<template>
  <DXButton block variant="primary"> Полная ширина </DXButton>
</template>
```

## Особенности

- **Автоматическое определение тега:** Компонент автоматически становится `<a>` при наличии `href`, `router-link` при наличии `to`, или `<button>` в остальных случаях
- **Интеграция с DXButtonGroup:** Поддерживает интеграцию с `DXButtonGroup` через provide/inject. При использовании в группе автоматически применяются стили группы
- **Доступность:** Поддерживает все стандартные ARIA атрибуты для кнопок и ссылок

## Использует

- `useSize` - для управления размерами
- `useVariantButton` - для вариантов оформления
- `useClassComposition` - для объединения классов

## Используется в

- `DXButtonGroup` - группа кнопок
- `DXActionButtons` - кнопки действий
- Практически во всех компонентах библиотеки

---

**Категория:** Atom  
**Импорт:** `import { DXIcon } from 'dxd-style-code'`

## Назначение

Компонент для отображения иконок из библиотеки Heroicons с поддержкой анимаций.

## Props

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

---

**Категория:** Atom  
**Импорт:** `import { DXBadge } from 'dxd-style-code'`

## Назначение

Бейдж для отображения статусов и меток с поддержкой иконок.

## Props

| `size` | `'sm' \| 'md'` | `'sm'` | Размер бейджа |
| `iconLeft` | `Component` | `null` | Иконка слева |
| `iconRight` | `Component` | `null` | Иконка справа |

## Примеры использования

### Базовый бейдж

```vue
<template>
  <DXBadge variant="success">Активен</DXBadge>
</template>
```

### Бейдж с иконкой

```vue
<template>
  <DXBadge variant="success" :icon-left="CheckIcon">
    Активен
  </DXBadge>
</template>
```

### Бейдж с иконкой справа

```vue
<template>
  <DXBadge variant="info" :icon-right="InformationCircleIcon">
    Новое
  </DXBadge>
</template>
```

## Используется в

- Статусы элементов
- Метки и теги
- Уведомления и счетчики

---

**Категория:** Atom  
**Импорт:** `import { DXCard } from 'dxd-style-code'`

## Назначение

Базовый компонент карточки с вариантами оформления. Используется как контейнер для группировки контента.

## Props

| `padding` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Внутренний отступ |

## Slots

## Примеры использования

### Базовая карточка

```vue
<template>
  <DXCard>
    <h3>Заголовок карточки</h3>
    <p>Содержимое карточки</p>
  </DXCard>
</template>
```

### Карточка с тенью

```vue
<template>
  <DXCard variant="elevated" padding="lg">
    <h3>Выделенная карточка</h3>
    <p>С тенью для визуального выделения</p>
  </DXCard>
</template>
```

### Плоская карточка

```vue
<template>
  <DXCard variant="flat" padding="sm">
    Минималистичная карточка без границ
  </DXCard>
</template>
```

### Карточка без отступов

```vue
<template>
  <DXCard padding="none">
    <img src="/image.jpg" class="w-full rounded-t-2xl" />
    <div class="p-4">
      <h3>Карточка с изображением</h3>
    </div>
  </DXCard>
</template>
```

## Варианты стилизации

- **bordered** - с тонкой рамкой (по умолчанию)
- **elevated** - с тенью и едва заметной рамкой
- **flat** - без рамки и тени

## Использует

- `useSpacing` - для вычисления padding классов

## Особенности

- Всегда белый фон (`bg-white`)
- Фиксированное скругление `rounded-2xl`
- Интегрируется с дизайн-системой через composables

---

**Категория:** Atom  
**Импорт:** `import { DXAvatar } from 'dxd-style-code'`

## Назначение

Аватар пользователя с поддержкой изображений, инициалов и fallback-иконки.

## Props

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

---

**Категория:** Atom  
**Импорт:** `import { DXImage } from 'dxd-style-code'`

## Назначение

Компонент изображения с поддержкой lazy loading, fallback изображений и адаптивных размеров.

## Props

| `alt`          | `string`                                                   | `''`         | Alt текст                                 |
| `fallback`     | `string`                                                   | -            | URL fallback изображения                  |
| `size`         | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'`           | `'md'`       | Размер изображения                        |
| `objectFit`    | `'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down'` | `'cover'`    | Способ заполнения контейнера              |
| `rounded`      | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'`         | `'none'`     | Скругление углов                          |
| `lazy`         | `boolean`                                                  | `false`      | Lazy loading                              |
| `srcset`       | `string`                                                   | -            | Атрибут srcset для адаптивных изображений |
| `sizes`        | `string`                                                   | -            | Атрибут sizes для адаптивных изображений  |
| `width`        | `string \| number`                                         | -            | Ширина изображения                        |
| `height`       | `string \| number`                                         | -            | Высота изображения                        |
| `showSkeleton` | `boolean`                                                  | `true`       | Показывать скелетон при lazy loading      |

## Slots

| `placeholder` | Кастомный placeholder при lazy loading |

## Примеры использования

### Базовое изображение

```vue
<template>
  <DXImage src="/image.jpg" alt="Описание" />
</template>
```

### Изображение с fallback

```vue
<template>
  <DXImage src="/image.jpg" fallback="/fallback.jpg" alt="Описание" />
</template>
```

### Lazy loading

```vue
<template>
  <DXImage src="/image.jpg" :lazy="true" alt="Описание" />
</template>
```

### Адаптивное изображение

```vue
<template>
  <DXImage
    src="/image.jpg"
    srcset="/image-400.jpg 400w, /image-800.jpg 800w"
    sizes="(max-width: 600px) 400px, 800px"
    alt="Описание"
  />
</template>
```

## Особенности

- **Lazy loading:** Поддерживает отложенную загрузку через Intersection Observer
- **Fallback:** Автоматически показывает fallback изображение при ошибке загрузки
- **Адаптивность:** Поддерживает srcset и sizes для адаптивных изображений
- **Скелетон:** Показывает placeholder при lazy loading

## Использует

- `DXObserver` - для lazy loading
- `DXIcon` - для fallback иконки

## Используется в

- Галереи изображений
- Карточки товаров
- Аватары и профили
- Медиа контент

---

**Категория:** Atom  
**Импорт:** `import { DXNav } from 'dxd-style-code'`

## Назначение

Универсальная обертка для навигации с автоматической установкой aria-label в зависимости от типа навигации.

## Props

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

---

**Категория:** Atom  
**Импорт:** `import { DXQuote } from 'dxd-style-code'`

## Назначение

Inline цитата с поддержкой различных стилей кавычек и вариантов оформления.

## Props

| `variant`    | `'default' \| 'highlighted'`        | `'default'`  | Вариант стилизации   |
| `quoteStyle` | `'default' \| 'french' \| 'german'` | `'default'`  | Стиль кавычек        |

## Примеры использования

### Базовая цитата

```vue
<template>
  <p>
    Как сказал
    <DXQuote cite="https://example.com">один мудрый человек</DXQuote>, это
    важно.
  </p>
</template>
```

### Выделенная цитата

```vue
<template>
  <DXQuote variant="highlighted"> Важная цитата </DXQuote>
</template>
```

### Французские кавычки

```vue
<template>
  <DXQuote quote-style="french"> Текст с французскими кавычками </DXQuote>
</template>
```

## Особенности

- **Семантическая разметка:** Использует HTML тег `<q>` для цитат
- **Стили кавычек:** Поддерживает разные стили кавычек (обычные, французские, немецкие)
- **Варианты:** Поддерживает обычный и выделенный варианты

## Используется в

- Текстовый контент с цитатами
- Выделение важных фраз
- Документация и статьи

---

**Категория:** Atom  
**Импорт:** `import { DXToggleButton } from 'dxd-style-code'`

## Назначение

Кнопка-переключатель с иконками для активного/неактивного состояний. Полезен для действий типа "лайк", "избранное", "закрепить".

## Props

| `activeIcon`      | `Component`                                 | **required** | Иконка для активного состояния    |
| `inactiveIcon`    | `Component`                                 | **required** | Иконка для неактивного состояния  |
| `activeLabel`     | `string`                                    | `null`       | Текст для активного состояния     |
| `inactiveLabel`   | `string`                                    | `null`       | Текст для неактивного состояния   |
| `activeVariant`   | `string`                                    | `'primary'`  | Вариант для активного состояния   |
| `inactiveVariant` | `string`                                    | `'ghost'`    | Вариант для неактивного состояния |
| `size`            | `'sm' \| 'md' \| 'lg'`                      | `'md'`       | Размер кнопки                     |
| `iconAnimation`   | `'none' \| 'wiggle' \| 'scale' \| 'rotate'` | `'wiggle'`   | Анимация иконки                   |
| `block`           | `boolean`                                   | `false`      | Растянуть на всю ширину           |
| `disabled`        | `boolean`                                   | `false`      | Отключенное состояние             |
| `ariaLabel`       | `string`                                    | `null`       | Aria-label для доступности        |

## Events

| `change`            | `boolean` | Изменение состояния  |

## Примеры использования

### Кнопка "лайк"

```vue
<template>
  <DXToggleButton
    v-model="liked"
    :activeIcon="HeartSolidIcon"
    :inactiveIcon="HeartOutlineIcon"
  />
</template>
```

### Кнопка с текстом

```vue
<template>
  <DXToggleButton
    v-model="pinned"
    :activeIcon="PinSolidIcon"
    :inactiveIcon="PinOutlineIcon"
    active-label="Закреплено"
    inactive-label="Закрепить"
  />
</template>
```

### Кнопка на всю ширину

```vue
<template>
  <DXToggleButton
    v-model="favorite"
    :activeIcon="StarSolidIcon"
    :inactiveIcon="StarOutlineIcon"
    block
  />
</template>
```

## Особенности

- **Два состояния:** Автоматически переключается между активным и неактивным состоянием
- **Разные варианты:** Может иметь разные варианты оформления для разных состояний
- **Доступность:** Поддерживает aria-pressed и aria-label для доступности

## Использует

- `DXIcon` - для отображения иконок
- `useSize` - для управления размерами
- `useVariantButton` - для вариантов оформления

## Используется в

- Кнопки "лайк", "избранное"
- Переключатели состояния
- Интерактивные элементы с двумя состояниями

---

**Категория:** Atom  
**Импорт:** `import { DXBackdrop } from 'dxd-style-code'`

## Назначение

Компонент затемнения фона с размытием. Используется для модальных окон, сайдбаров и других overlay-элементов. Автоматически телепортируется в body и блокирует скролл.

## Props

| `blur` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'sm'` | Уровень размытия фона |
| `backgroundColor` | `string` | `'bg-slate-900/40'` | Tailwind класс цвета фона |
| `zIndex` | `'0' \| '10' \| '20' \| '30' \| '40' \| '50' \| 'auto'` | `'50'` | z-index слоя |
| `dismissible` | `boolean` | `true` | Можно ли закрыть кликом |
| `lockScroll` | `boolean` | `true` | Блокировать скролл body |

## Events

| `close` | - | Закрытие (при dismissible=true) |

## Slots

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

---

**Категория:** Atom  
**Импорт:** `import { DXBlockquote } from 'dxd-style-code'`

## Назначение

Компонент для отображения блочных цитат с поддержкой различных стилей оформления и указанием источника.

## Props

| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Размер текста |
| `cite` | `string` | `''` | Источник цитаты |

## Slots

| `cite` | Кастомный источник (переопределяет prop cite) |

## Примеры использования

### Базовая цитата

```vue
<template>
  <DXBlockquote>
    Лучший способ предсказать будущее — создать его.
  </DXBlockquote>
</template>
```

### Цитата с источником

```vue
<template>
  <DXBlockquote cite="Питер Друкер">
    Лучший способ предсказать будущее — создать его.
  </DXBlockquote>
</template>
```

### Выделенная цитата

```vue
<template>
  <DXBlockquote variant="highlighted" size="lg">
    Важная мысль, которую нужно выделить.
  </DXBlockquote>
</template>
```

### С кастомным источником

```vue
<template>
  <DXBlockquote>
    Цитата из книги.
    <template #cite>
      <a href="/books/example">Название книги</a>, стр. 42
    </template>
  </DXBlockquote>
</template>
```

## Варианты стилизации

- **default** - простой курсивный текст
- **bordered** - с левой вертикальной границей (по умолчанию)
- **highlighted** - с фоновой заливкой и скруглением

## Особенности

- Использует семантический тег `<blockquote>`
- Источник отображается в теге `<cite>` для SEO
- Адаптивный размер текста через prop `size`

---

**Категория:** Atom  
**Импорт:** `import { DXBox } from 'dxd-style-code'`

## Назначение

Универсальный контейнер с гибкой настройкой отступов, фона, тени, рамки и позиционирования. Базовый строительный блок для создания layouts.

## Props

| `p` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `''` | Padding со всех сторон |
| `px` | `string` | `''` | Горизонтальный padding |
| `py` | `string` | `''` | Вертикальный padding |
| `m` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'auto'` | `''` | Margin со всех сторон |
| `mx` | `string` | `''` | Горизонтальный margin |
| `my` | `string` | `''` | Вертикальный margin |
| `rounded` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| 'full'` | `''` | Скругление углов |
| `bg` | `'white' \| 'slate' \| 'transparent'` | `''` | Цвет фона |
| `shadow` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `''` | Тень |
| `border` | `boolean` | `false` | Показывать рамку |
| `position` | `'static' \| 'relative' \| 'absolute' \| 'fixed' \| 'sticky'` | `null` | CSS position |
| `zIndex` | `'0' \| '10' \| '20' \| '30' \| '40' \| '50' \| 'auto'` | `null` | z-index |
| `inset` | `boolean` | `false` | Применить inset-0 (заполнить родителя) |

## Slots

## Примеры использования

### Простой контейнер с отступами

```vue
<template>
  <DXBox p="md" bg="white" rounded="lg">
    Контент с отступами
  </DXBox>
</template>
```

### Карточка с тенью

```vue
<template>
  <DXBox p="lg" bg="white" rounded="xl" shadow="lg" border>
    Карточка с тенью и рамкой
  </DXBox>
</template>
```

### Центрированный контейнер

```vue
<template>
  <DXBox mx="auto" p="md" bg="slate" rounded="md">
    Центрированный контент
  </DXBox>
</template>
```

### Абсолютно позиционированный overlay

```vue
<template>
  <DXBox position="relative">
    <img src="/image.jpg" />
    <DXBox position="absolute" inset bg="slate" rounded="lg">
      Overlay поверх изображения
    </DXBox>
  </DXBox>
</template>
```

## Использует

- `useSpacing` - для вычисления padding/margin классов
- `useClassComposition` - для объединения классов

## Особенности

- Поддерживает любой HTML тег через prop `tag`
- Гибкая система отступов с раздельными осями (px, py, mx, my)
- Интегрируется с дизайн-токенами через composables

---

**Категория:** Atom  
**Импорт:** `import { DXCheckbox } from 'dxd-style-code'`

## Назначение

Компонент чекбокса с поддержкой нативного и кастомного вариантов. Поддерживает работу как с boolean значением, так и с массивом значений.

## Props

| `value` | `string \| number` | `undefined` | Значение для массива |
| `label` | `string` | `''` | Текст лейбла |
| `disabled` | `boolean` | `false` | Отключенное состояние |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Размер |
| `variant` | `'default' \| 'custom'` | `'default'` | Вариант отображения |
| `checkedIcon` | `Component` | `CheckIcon` | Иконка для checked (custom variant) |
| `uncheckedIcon` | `Component` | `null` | Иконка для unchecked (custom variant) |
| `shape` | `'square' \| 'circle'` | `'square'` | Форма (custom variant) |
| `iconAnimation` | `'none' \| 'scale' \| 'wiggle'` | `'scale'` | Анимация иконки |
| `color` | `'slate' \| 'primary' \| 'success' \| 'danger' \| 'warning' \| 'info'` | `'primary'` | Цвет (custom variant) |

## Events

## Примеры использования

### Базовый чекбокс

```vue
<template>
  <DXCheckbox v-model="agreed" label="Я согласен с условиями" />
</template>
```

### Группа чекбоксов

```vue
<template>
  <DXCheckbox v-model="selected" value="option1" label="Опция 1" />
  <DXCheckbox v-model="selected" value="option2" label="Опция 2" />
  <DXCheckbox v-model="selected" value="option3" label="Опция 3" />
</template>

<script setup>
import { ref } from 'vue';
const selected = ref([]); // ['option1', 'option3']
</script>
```

### Кастомный чекбокс

```vue
<template>
  <DXCheckbox 
    v-model="isActive"
    variant="custom"
    color="success"
    shape="circle"
    label="Активировать"
  />
</template>
```

### С кастомной иконкой

```vue
<template>
  <DXCheckbox 
    v-model="isFavorite"
    variant="custom"
    :checked-icon="HeartIcon"
    :unchecked-icon="HeartOutlineIcon"
    color="danger"
    icon-animation="wiggle"
  />
</template>
```

## Варианты

- **default** - нативный HTML checkbox с Tailwind стилями
- **custom** - полностью кастомный с анимированной иконкой

## Использует

- `useSize` - для размеров
- `useVariantCheckbox` - для цветов custom варианта
- `DXIcon` - для отображения иконок

## Особенности

- **v-model с массивом:** При передаче массива работает как checkbox-группа
- **Keyboard accessible:** Поддерживает Space для переключения
- **ARIA:** Правильные aria-атрибуты для доступности

---

**Категория:** Atom  
**Импорт:** `import { DXCode } from 'dxd-style-code'`

## Назначение

Компонент для отображения кода. Поддерживает inline и block режимы с соответствующей стилизацией.

## Props

| `size` | `'xs' \| 'sm' \| 'md'` | `'sm'` | Размер шрифта |
| `lineNumbers` | `boolean` | `false` | Показывать номера строк (только block) |

## Slots

## Примеры использования

### Inline код

```vue
<template>
  <p>
    Используйте функцию <DXCode>console.log()</DXCode> для отладки.
  </p>
</template>
```

### Блок кода

```vue
<template>
  <DXCode block>
const greeting = 'Hello, World!';
console.log(greeting);
  </DXCode>
</template>
```

### Разные размеры

```vue
<template>
  <DXCode size="xs">маленький код</DXCode>
  <DXCode size="sm">средний код</DXCode>
  <DXCode size="md">большой код</DXCode>
</template>
```

## Стилизация

### Inline режим
- Светло-серый фон (`bg-slate-100`)
- Тёмный текст (`text-slate-800`)
- Небольшие отступы и скругление

### Block режим
- Тёмный фон (`bg-slate-900`)
- Светлый текст (`text-slate-100`)
- Полная ширина с прокруткой
- Большее скругление (`rounded-xl`)

## Особенности

- Моноширинный шрифт (`font-mono`)
- Горизонтальная прокрутка для длинных строк в block режиме
- Семантические теги: `<code>` для inline, `<pre><code>` для block

---

**Категория:** Atom  
**Импорт:** `import { DXContainer } from 'dxd-style-code'`

## Назначение

Контейнер с ограниченной шириной для центрирования контента. Используется как обёртка для секций страницы.

## Props

| `center` | `boolean` | `true` | Центрировать контейнер |
| `padding` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Горизонтальные отступы |
| `position` | `'static' \| 'relative' \| 'absolute' \| 'fixed' \| 'sticky'` | `null` | CSS position |

## Slots

## Примеры использования

### Базовый контейнер

```vue
<template>
  <DXContainer>
    <h1>Заголовок страницы</h1>
    <p>Контент ограничен по ширине и центрирован</p>
  </DXContainer>
</template>
```

### Узкий контейнер для статей

```vue
<template>
  <DXContainer size="md" padding="lg">
    <article>
      <h1>Заголовок статьи</h1>
      <p>Текст статьи с комфортной шириной для чтения</p>
    </article>
  </DXContainer>
</template>
```

### Широкий контейнер

```vue
<template>
  <DXContainer size="2xl">
    <DXGrid cols="4" gap="md">
      <!-- Сетка на всю ширину -->
    </DXGrid>
  </DXContainer>
</template>
```

### Контейнер на полную ширину

```vue
<template>
  <DXContainer size="full" padding="lg">
    Контент на всю ширину с боковыми отступами
  </DXContainer>
</template>
```

## Размеры

| `md` | `max-w-screen-md` (768px) |
| `lg` | `max-w-screen-lg` (1024px) |
| `xl` | `max-w-screen-xl` (1280px) |
| `2xl` | `max-w-screen-2xl` (1536px) |
| `full` | `max-w-full` (100%) |

## Использует

- `useSpacing` - для горизонтальных отступов
- `useClassComposition` - для объединения классов

## Особенности

- Автоматическое центрирование через `mx-auto`
- Всегда `width: 100%` с ограничением `max-width`
- Адаптивные горизонтальные отступы

---

**Категория:** Atom  
**Импорт:** `import { DXDivider } from 'dxd-style-code'`

## Назначение

Разделитель для визуального отделения секций контента. Поддерживает горизонтальную и вертикальную ориентацию, а также текст посередине.

## Props

| `color` | `'light' \| 'default' \| 'dark'` | `'default'` | Цвет линии |
| `thickness` | `'thin' \| 'default' \| 'thick'` | `'default'` | Толщина линии |
| `spacing` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Отступы вокруг |

## Slots

## Примеры использования

### Простой разделитель

```vue
<template>
  <div>Секция 1</div>
  <DXDivider />
  <div>Секция 2</div>
</template>
```

### Разделитель с текстом

```vue
<template>
  <DXDivider>или</DXDivider>
</template>
```

### Вертикальный разделитель

```vue
<template>
  <div class="flex items-center gap-4">
    <span>Опция 1</span>
    <DXDivider orientation="vertical" />
    <span>Опция 2</span>
    <DXDivider orientation="vertical" />
    <span>Опция 3</span>
  </div>
</template>
```

### Толстый тёмный разделитель

```vue
<template>
  <DXDivider color="dark" thickness="thick" spacing="lg" />
</template>
```

## Варианты цвета

- **light** - `border-slate-100`
- **default** - `border-slate-200`
- **dark** - `border-slate-300`

## Варианты толщины

- **thin** - 1px
- **default** - 1px с более насыщенным цветом
- **thick** - 2px

## Использует

- `useSpacing` - для отступов
- `useVariantDividerBorder` - для стилей границы

## Особенности

- Текст в слоте автоматически центрируется между двумя линиями
- Вертикальный разделитель требует контейнер с `display: flex`
- Минимальная высота для вертикального варианта `min-h-[1rem]`

---

**Категория:** Atom  
**Импорт:** `import { DXDropdownItem } from 'dxd-style-code'`

## Назначение

Элемент выпадающего меню с поддержкой иконок, бейджей и подменю. Работает в связке с `DXDropdown` через provide/inject.

## Props

| `variant` | `'default' \| 'danger' \| 'success'` | `'default'` | Вариант стилизации |
| `size` | `'sm' \| 'md'` | `'md'` | Размер элемента |
| `disabled` | `boolean` | `false` | Отключенное состояние |
| `submenu` | `boolean` | `false` | Показать индикатор подменю |
| `closeOnClick` | `boolean` | `true` | Закрыть dropdown при клике |
| `badge` | `string \| number` | `null` | Текст бейджа справа |
| `badgeVariant` | `string` | `'slate'` | Вариант бейджа |
| `iconAnimation` | `'none' \| 'wiggle' \| 'scale' \| 'rotate'` | `'wiggle'` | Анимация иконки при hover |

## Events

## Slots

## Примеры использования

### Базовый элемент

```vue
<template>
  <DXDropdown>
    <DXDropdownItem @click="handleEdit">Редактировать</DXDropdownItem>
    <DXDropdownItem @click="handleCopy">Копировать</DXDropdownItem>
    <DXDropdownItem @click="handleDelete" variant="danger">Удалить</DXDropdownItem>
  </DXDropdown>
</template>
```

### С иконками

```vue
<template>
  <DXDropdown>
    <DXDropdownItem :icon="PencilIcon">Редактировать</DXDropdownItem>
    <DXDropdownItem :icon="DocumentDuplicateIcon">Дублировать</DXDropdownItem>
    <DXDropdownItem :icon="TrashIcon" variant="danger">Удалить</DXDropdownItem>
  </DXDropdown>
</template>
```

### С бейджем

```vue
<template>
  <DXDropdownItem :icon="InboxIcon" badge="12">
    Входящие
  </DXDropdownItem>
</template>
```

### Элемент с подменю

```vue
<template>
  <DXDropdownItem :icon="ShareIcon" submenu :close-on-click="false">
    Поделиться
  </DXDropdownItem>
</template>
```

## Варианты

- **default** - стандартный серый hover
- **danger** - красный для опасных действий
- **success** - зелёный для позитивных действий

## Использует

- `useSize` - для размеров
- `useVariantDropdownItem` - для цветов
- `DXIcon` - для иконок
- `DXBadge` - для бейджей

## Особенности

- Автоматически закрывает dropdown при клике (настраивается)
- Интегрируется с `DXDropdown` через inject
- Анимация иконки при наведении через `group-hover`

---

**Категория:** Atom  
**Импорт:** `import { DXFlex } from 'dxd-style-code'`

## Назначение

Flexbox контейнер с полным контролем над направлением, выравниванием, переносом и отступами.

## Props

| `justify` | `'start' \| 'center' \| 'end' \| 'between' \| 'around' \| 'evenly'` | `'start'` | Выравнивание по главной оси |
| `align` | `'start' \| 'center' \| 'end' \| 'stretch' \| 'baseline'` | `'center'` | Выравнивание по поперечной оси |
| `wrap` | `'nowrap' \| 'wrap' \| 'wrap-reverse'` | `'nowrap'` | Перенос элементов |
| `gap` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Отступ между элементами |
| `inline` | `boolean` | `false` | Использовать inline-flex |
| `height` | `'full' \| 'auto' \| 'fit'` | `null` | Высота контейнера |
| `shrink` | `'0' \| '1' \| 'auto' \| boolean` | `null` | Flex shrink |

## Slots

## Примеры использования

### Горизонтальное выравнивание

```vue
<template>
  <DXFlex justify="between" align="center">
    <span>Слева</span>
    <span>Справа</span>
  </DXFlex>
</template>
```

### Вертикальный stack

```vue
<template>
  <DXFlex direction="col" gap="lg" align="stretch">
    <DXInput label="Email" />
    <DXInput label="Password" type="password" />
    <DXButton block>Войти</DXButton>
  </DXFlex>
</template>
```

### Центрирование контента

```vue
<template>
  <DXFlex justify="center" align="center" height="full">
    <div>Центрированный контент</div>
  </DXFlex>
</template>
```

### Flex wrap

```vue
<template>
  <DXFlex wrap="wrap" gap="sm">
    <DXBadge v-for="tag in tags" :key="tag">{{ tag }}</DXBadge>
  </DXFlex>
</template>
```

### Space between

```vue
<template>
  <DXFlex justify="between">
    <DXButton variant="ghost">Отмена</DXButton>
    <DXButton>Сохранить</DXButton>
  </DXFlex>
</template>
```

## Использует

- `useSize` - для gap
- `useClassComposition` - для объединения классов

## Особенности

- Поддерживает все стандартные flexbox свойства
- Интегрируется с дизайн-токенами для gap
- Prop `shrink` может быть boolean (true = shrink-0) или string

---

**Категория:** Atom  
**Импорт:** `import { DXFormLabel } from 'dxd-style-code'`

## Назначение

Обёртка для полей формы с label, сообщениями об ошибках, успехе, вспомогательным текстом и счётчиком символов.

## Props

| `error` | `string` | `''` | Сообщение об ошибке |
| `helper` | `string` | `''` | Вспомогательный текст |
| `success` | `string` | `''` | Сообщение об успехе |
| `required` | `boolean` | `false` | Показать звёздочку обязательного поля |
| `showValidationIcon` | `boolean` | `true` | Показывать иконки валидации |
| `maxLength` | `number` | `0` | Максимальная длина для счётчика |
| `currentLength` | `number` | `0` | Текущая длина для счётчика |
| `showCount` | `boolean` | `false` | Показывать счётчик символов |

## Slots

## Примеры использования

### Базовое использование

```vue
<template>
  <DXFormLabel label="Email" required>
    <input type="email" class="..." />
  </DXFormLabel>
</template>
```

### С ошибкой

```vue
<template>
  <DXFormLabel 
    label="Email" 
    error="Введите корректный email"
    required
  >
    <input type="email" class="..." />
  </DXFormLabel>
</template>
```

### С успехом

```vue
<template>
  <DXFormLabel 
    label="Username" 
    success="Имя пользователя доступно"
  >
    <input type="text" class="..." />
  </DXFormLabel>
</template>
```

### Со счётчиком символов

```vue
<template>
  <DXFormLabel 
    label="Описание" 
    :max-length="200"
    :current-length="description.length"
    show-count
    helper="Краткое описание проекта"
  >
    <textarea v-model="description" />
  </DXFormLabel>
</template>
```

## Поведение сообщений

1. **Error** имеет приоритет над helper
2. **Success** показывается только если нет error
3. **Helper** показывается только если нет error

## Использует

- `DXIcon` - для иконок валидации

## Особенности

- Иконки ExclamationCircleIcon (ошибка) и CheckCircleIcon (успех)
- Звёздочка обязательного поля красного цвета
- Счётчик показывает `currentLength / maxLength`

---

**Категория:** Atom  
**Импорт:** `import { DXGrid } from 'dxd-style-code'`

## Назначение

CSS Grid контейнер с поддержкой адаптивного количества колонок и гибкими отступами.

## Props

| `colsSm` | `number \| string` | `''` | Колонки на sm брейкпоинте |
| `colsMd` | `number \| string` | `''` | Колонки на md брейкпоинте |
| `colsLg` | `number \| string` | `''` | Колонки на lg брейкпоинте |
| `gap` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Общий отступ |
| `gapX` | `string` | `''` | Горизонтальный отступ |
| `gapY` | `string` | `''` | Вертикальный отступ |

## Slots

## Примеры использования

### Базовая сетка

```vue
<template>
  <DXGrid :cols="3" gap="md">
    <DXCard>Карточка 1</DXCard>
    <DXCard>Карточка 2</DXCard>
    <DXCard>Карточка 3</DXCard>
  </DXGrid>
</template>
```

### Адаптивная сетка

```vue
<template>
  <DXGrid :cols="1" :cols-sm="2" :cols-md="3" :cols-lg="4" gap="lg">
    <DXCard v-for="item in items" :key="item.id">
      {{ item.title }}
    </DXCard>
  </DXGrid>
</template>
```

### Автоматическая сетка

```vue
<template>
  <DXGrid cols="auto" gap="md">
    <!-- Автоматически подстраивает количество колонок -->
    <DXCard v-for="item in items" :key="item.id">
      {{ item.title }}
    </DXCard>
  </DXGrid>
</template>
```

### Разные отступы по осям

```vue
<template>
  <DXGrid :cols="2" gap-x="lg" gap-y="sm">
    <div>Элемент 1</div>
    <div>Элемент 2</div>
    <div>Элемент 3</div>
    <div>Элемент 4</div>
  </DXGrid>
</template>
```

## Auto режим

При `cols="auto"` используется:
```css
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))
```

Это создаёт адаптивную сетку с минимальной шириной колонки 250px.

## Использует

- `useSize` - для общего gap
- `useSpacing` - для gapX/gapY
- `useClassComposition` - для объединения классов

## Особенности

- Полная поддержка адаптивных брейкпоинтов (sm, md, lg)
- Раздельное управление gap по осям
- Auto режим для автоматической адаптации

---

**Категория:** Atom  
**Импорт:** `import { DXHeading } from 'dxd-style-code'`

## Назначение

Компонент заголовков с семантическими уровнями (h1-h6), настраиваемым размером, весом и цветом.

## Props

| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| '4xl'` | `''` | Размер (переопределяет level) |
| `weight` | `'normal' \| 'medium' \| 'semibold' \| 'bold'` | `'semibold'` | Вес шрифта |
| `color` | `'default' \| 'muted' \| 'primary' \| 'success' \| 'warning' \| 'danger'` | `'default'` | Цвет текста |
| `truncate` | `boolean` | `false` | Обрезать текст с многоточием |

## Slots

## Примеры использования

### Заголовки разных уровней

```vue
<template>
  <DXHeading :level="1">Заголовок страницы</DXHeading>
  <DXHeading :level="2">Раздел</DXHeading>
  <DXHeading :level="3">Подраздел</DXHeading>
</template>
```

### Кастомный размер

```vue
<template>
  <!-- h2 с размером как h1 -->
  <DXHeading :level="2" size="4xl">Большой заголовок</DXHeading>
</template>
```

### Цветной заголовок

```vue
<template>
  <DXHeading color="primary">Акцентный заголовок</DXHeading>
  <DXHeading color="muted">Приглушённый заголовок</DXHeading>
</template>
```

### Обрезка длинного текста

```vue
<template>
  <DXHeading :level="3" truncate class="max-w-xs">
    Очень длинный заголовок, который будет обрезан
  </DXHeading>
</template>
```

## Размеры по уровням

| 2 | `text-3xl` |
| 3 | `text-2xl` |
| 4 | `text-xl` |
| 5 | `text-lg` |
| 6 | `text-base` |

## Использует

- `useVariantText` - для цветов

## Особенности

- Семантически правильные теги (h1-h6)
- `tracking-tight` для лучшей читаемости крупного текста
- Prop `size` переопределяет автоматический размер по level

---

**Категория:** Atom  
**Импорт:** `import { DXIconWrapper } from 'dxd-style-code'`

## Назначение

Обёртка для позиционирования иконок внутри input-полей. Обеспечивает абсолютное позиционирование иконки слева или справа.

## Props

| `icon` | `Component` | `null` | Иконка (Heroicon) |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'sm'` | Размер иконки |
| `animation` | `'none' \| 'wiggle' \| 'scale' \| 'rotate'` | `'none'` | Анимация |
| `iconClass` | `string \| Array \| Object` | `'text-slate-400'` | Дополнительные классы иконки |
| `verticalAlign` | `'center' \| 'top'` | `'center'` | Вертикальное выравнивание |

## Slots

## Примеры использования

### Иконка слева

```vue
<template>
  <div class="relative">
    <DXIconWrapper :icon="MagnifyingGlassIcon" position="left" />
    <input class="pl-10 ..." />
  </div>
</template>
```

### Иконка справа

```vue
<template>
  <div class="relative">
    <input class="pr-10 ..." />
    <DXIconWrapper :icon="EyeIcon" position="right" />
  </div>
</template>
```

### С кастомным контентом

```vue
<template>
  <div class="relative">
    <DXIconWrapper position="right">
      <DXLoader size="xs" />
    </DXIconWrapper>
    <input class="pr-10 ..." />
  </div>
</template>
```

### Выравнивание по верху

```vue
<template>
  <div class="relative">
    <DXIconWrapper :icon="ChatIcon" position="left" vertical-align="top" />
    <textarea class="pl-10 ..." />
  </div>
</template>
```

## Позиционирование

- **left** - `left-3`
- **right** - `right-3`
- **center** (вертикаль) - `top-1/2 -translate-y-1/2`
- **top** (вертикаль) - `top-3`

## Использует

- `DXIcon` - для отображения иконок
- `useClassComposition` - для объединения классов
- `useCustomDataAttributes` - для data-атрибутов

## Особенности

- `pointer-events-none` - клики проходят сквозь иконку к input
- Абсолютное позиционирование - требует `position: relative` у родителя
- Автоматически использует DXIcon при передаче prop `icon`

---

**Категория:** Atom  
**Импорт:** `import { DXInputAddon } from 'dxd-style-code'`

## Назначение

Аддон для input-групп. Отображает статичный текст или иконку рядом с полем ввода. Синхронизируется с состоянием группы через provide/inject.

## Props

## Slots

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

---

**Категория:** Atom  
**Импорт:** `import { DXLabel } from 'dxd-style-code'`

## Назначение

Компонент label для форм с настраиваемым размером, весом шрифта и индикатором обязательного поля.

## Props

| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'sm'` | Размер текста |
| `weight` | `'normal' \| 'medium' \| 'semibold'` | `'medium'` | Вес шрифта |
| `color` | `'default' \| 'muted' \| 'primary'` | `'default'` | Цвет текста |
| `required` | `boolean` | `false` | Показать звёздочку обязательного поля |

## Slots

## Примеры использования

### Базовый label

```vue
<template>
  <DXLabel html-for="email">Email</DXLabel>
  <input id="email" type="email" />
</template>
```

### Обязательное поле

```vue
<template>
  <DXLabel html-for="name" required>Имя</DXLabel>
  <input id="name" type="text" />
</template>
```

### Разные размеры

```vue
<template>
  <DXLabel size="xs">Маленький</DXLabel>
  <DXLabel size="sm">Средний</DXLabel>
  <DXLabel size="md">Обычный</DXLabel>
  <DXLabel size="lg">Большой</DXLabel>
</template>
```

### Приглушённый цвет

```vue
<template>
  <DXLabel color="muted">Опциональное поле</DXLabel>
</template>
```

## Стилизация

- Тег: `<label>` с корректным `for`
- Звёздочка: `<span class="text-rose-500 ml-0.5">*</span>`
- Display: `block`

## Использует

- `useVariantText` - для цветов

## Особенности

- Семантически связывается с input через `htmlFor`
- Звёздочка обязательного поля красного цвета
- По умолчанию средний вес шрифта для лучшей читаемости

---

**Категория:** Atom  
**Импорт:** `import { DXLink } from 'dxd-style-code'`

## Назначение

Универсальный компонент ссылки с поддержкой Vue Router, внешних ссылок, различных вариантов стилизации и автоматической безопасности.

## Props

| `to` | `string \| Object` | `null` | Путь для Vue Router |
| `target` | `string` | `null` | Target атрибут |
| `rel` | `string` | `null` | Rel атрибут |
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'link'` | `'link'` | Вариант стилизации |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Размер |
| `disabled` | `boolean` | `false` | Отключенное состояние |
| `inactive` | `boolean` | `false` | Неактивное состояние (приглушённый вид) |
| `ariaLabel` | `string` | `null` | Кастомный aria-label |
| `showExternalIcon` | `boolean` | `true` | Показывать иконку внешней ссылки |

## Slots

## Примеры использования

### Внутренняя ссылка (Vue Router)

```vue
<template>
  <DXLink :to="{ name: 'dashboard' }">Дашборд</DXLink>
</template>
```

### Внешняя ссылка

```vue
<template>
  <DXLink href="https://github.com" target="_blank">
    GitHub
  </DXLink>
</template>
```

### Ссылка-кнопка

```vue
<template>
  <DXLink :to="'/signup'" variant="primary" size="lg">
    Зарегистрироваться
  </DXLink>
</template>
```

### Без иконки внешней ссылки

```vue
<template>
  <DXLink href="https://example.com" :show-external-icon="false">
    Ссылка без иконки
  </DXLink>
</template>
```

## Автоматическое определение типа

- `to` указан → `<router-link>`
- `href` указан → `<a>`
- Ничего не указано → `<span>`

## Безопасность

Для внешних ссылок с `target="_blank"` автоматически добавляется:
```html
rel="noopener noreferrer"
```

## Использует

- `useSize` - для размеров
- `useVariantButton` - для вариантов стилизации
- `useClassComposition` - для объединения классов
- `DXIcon` - для иконки внешней ссылки

## Особенности

- Автоматическая иконка ArrowTopRightOnSquareIcon для внешних ссылок
- Защита от tabnabbing атак
- Поддержка всех вариантов как у DXButton

---

**Категория:** Atom  
**Импорт:** `import { DXList } from 'dxd-style-code'`

## Назначение

Компонент списка (упорядоченного или неупорядоченного) с настраиваемым стилем маркеров и отступами.

## Props

| `marker` | `'disc' \| 'circle' \| 'square' \| 'decimal' \| 'none'` | `''` | Стиль маркеров |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Размер текста |
| `spacing` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'sm'` | Отступ между элементами |

## Slots

## Примеры использования

### Ненумерованный список

```vue
<template>
  <DXList>
    <li>Первый пункт</li>
    <li>Второй пункт</li>
    <li>Третий пункт</li>
  </DXList>
</template>
```

### Нумерованный список

```vue
<template>
  <DXList ordered>
    <li>Шаг первый</li>
    <li>Шаг второй</li>
    <li>Шаг третий</li>
  </DXList>
</template>
```

### Кастомные маркеры

```vue
<template>
  <DXList marker="square">
    <li>Пункт с квадратным маркером</li>
    <li>Ещё один пункт</li>
  </DXList>
</template>
```

### Без маркеров

```vue
<template>
  <DXList marker="none" spacing="md">
    <li>Первый элемент</li>
    <li>Второй элемент</li>
  </DXList>
</template>
```

### Компактный список

```vue
<template>
  <DXList size="sm" spacing="none">
    <li>Плотный</li>
    <li>Список</li>
  </DXList>
</template>
```

## Стили маркеров

| `circle` | ○ |
| `square` | ▪ |
| `decimal` | 1. 2. 3. (по умолчанию для ol) |
| `none` | Без маркеров |

## Особенности

- Автоматический выбор тега: `<ul>` или `<ol>`
- Левый отступ `pl-5` для маркеров
- Цвет текста `text-slate-700`
- Отступы между элементами через `space-y-*`

---

**Категория:** Atom  
**Импорт:** `import { DXLoader } from 'dxd-style-code'`

## Назначение

Индикатор загрузки (спиннер) с опциональным текстом и цветовыми вариантами.

## Props

| `variant` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'slate'` | `'default'` | Цветовой вариант |
| `text` | `string` | `''` | Текст загрузки |
| `showText` | `boolean` | `undefined` | Принудительно показать/скрыть текст |

## Slots

## Примеры использования

### Простой лоадер

```vue
<template>
  <DXLoader />
</template>
```

### С текстом

```vue
<template>
  <DXLoader text="Загрузка..." />
</template>
```

### Цветные варианты

```vue
<template>
  <DXLoader variant="primary" />
  <DXLoader variant="success" text="Сохранение..." />
  <DXLoader variant="danger" />
</template>
```

### Разные размеры

```vue
<template>
  <DXLoader size="xs" />
  <DXLoader size="sm" />
  <DXLoader size="md" />
  <DXLoader size="lg" />
  <DXLoader size="xl" />
</template>
```

### В кнопке

```vue
<template>
  <DXButton :disabled="isLoading">
    <DXLoader v-if="isLoading" size="xs" variant="slate" />
    <span v-else>Отправить</span>
  </DXButton>
</template>
```

## Размеры

| `sm` | 16x16px |
| `md` | 20x20px |
| `lg` | 24x24px |
| `xl` | 32x32px |

## Использует

- `useSize` - для размеров
- `useVariantLoader` - для цветов

## Особенности

- CSS анимация `animate-spin`
- Двухцветная граница для эффекта вращения
- Текст отображается справа от спиннера с `gap-2`
- Автоматическое определение показа текста по наличию prop или slot

---

**Категория:** Atom  
**Импорт:** `import { DXProgress } from 'dxd-style-code'`

## Назначение

Индикатор прогресса с поддержкой label, значения, анимации и полосатого стиля.

## Props

| `min` | `number` | `0` | Минимальное значение |
| `max` | `number` | `100` | Максимальное значение |
| `label` | `string` | `''` | Текст лейбла |
| `showLabel` | `boolean` | `false` | Показывать лейбл |
| `showValue` | `boolean` | `false` | Показывать значение справа |
| `showInnerValue` | `boolean` | `false` | Показывать значение внутри бара |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Размер (высота бара) |
| `color` | `'default' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'default'` | Цвет бара |
| `animated` | `boolean` | `false` | Анимация полос |
| `striped` | `boolean` | `false` | Полосатый стиль |

## Slots

## Примеры использования

### Базовый прогресс

```vue
<template>
  <DXProgress :value="65" />
</template>
```

### С лейблом и значением

```vue
<template>
  <DXProgress 
    :value="45" 
    label="Загрузка файлов"
    show-label
    show-value
  />
</template>
```

### Цветные варианты

```vue
<template>
  <DXProgress :value="100" color="success" />
  <DXProgress :value="75" color="warning" />
  <DXProgress :value="25" color="danger" />
</template>
```

### Полосатый с анимацией

```vue
<template>
  <DXProgress 
    :value="60" 
    striped 
    animated
    color="info"
  />
</template>
```

### Значение внутри бара

```vue
<template>
  <DXProgress 
    :value="80" 
    size="lg"
    show-inner-value
  />
</template>
```

## ARIA атрибуты

```html
<div 
  role="progressbar"
  aria-valuenow="65"
  aria-valuemin="0"
  aria-valuemax="100"
/>
```

## Использует

- `useSize` - для размеров
- `useVariantProgress` - для цветов
- `useAnimation` - для анимации полос

## Особенности

- Автоматический расчёт процента от min/max
- Внутреннее значение показывается только при percentage > 10%
- Анимация работает только с `striped`
- Плавная transition на изменение ширины

---

**Категория:** Atom  
**Импорт:** `import { DXRadio } from 'dxd-style-code'`

## Назначение

Компонент radio-кнопки с поддержкой нативного и кастомного вариантов. Работает в группе через v-model.

## Props

| `value` | `string \| number \| boolean` | **required** | Значение этого radio |
| `label` | `string` | `''` | Текст лейбла |
| `disabled` | `boolean` | `false` | Отключенное состояние |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Размер |
| `variant` | `'default' \| 'custom'` | `'default'` | Вариант отображения |
| `color` | `'slate' \| 'primary' \| 'success' \| 'danger' \| 'warning' \| 'info'` | `'primary'` | Цвет (custom variant) |

## Events

## Примеры использования

### Группа radio-кнопок

```vue
<template>
  <DXRadio v-model="selected" value="option1" label="Опция 1" />
  <DXRadio v-model="selected" value="option2" label="Опция 2" />
  <DXRadio v-model="selected" value="option3" label="Опция 3" />
</template>

<script setup>
import { ref } from 'vue';
const selected = ref('option1');
</script>
```

### Кастомный вариант

```vue
<template>
  <DXRadio 
    v-model="plan" 
    value="basic" 
    label="Базовый" 
    variant="custom"
    color="primary"
  />
  <DXRadio 
    v-model="plan" 
    value="pro" 
    label="Профессиональный" 
    variant="custom"
    color="success"
  />
</template>
```

### Разные размеры

```vue
<template>
  <DXRadio v-model="size" value="s" label="S" size="sm" />
  <DXRadio v-model="size" value="m" label="M" size="md" />
  <DXRadio v-model="size" value="l" label="L" size="lg" />
</template>
```

## Варианты

- **default** - нативный HTML radio с Tailwind стилями
- **custom** - кастомный с анимированной точкой внутри

## Использует

- `useSize` - для размеров
- `useVariantRadio` - для цветов custom варианта

## Особенности

- Плавная анимация точки при выборе (scale transition)
- Keyboard accessible: Space для выбора
- ARIA атрибуты для доступности
- Круглая форма (`rounded-full`)

---

**Категория:** Atom  
**Импорт:** `import { DXSkeleton } from 'dxd-style-code'`

## Назначение

Компонент-заглушка для отображения во время загрузки контента. Показывает анимированный placeholder вместо реальных данных.

## Props

| `height` | `string` | `'1rem'` | Высота элемента |
| `rounded` | `string` | `'rounded-md'` | Tailwind класс скругления |

## Примеры использования

### Скелетон для текста

```vue
<template>
  <DXSkeleton width="60%" height="1rem" />
  <DXSkeleton width="80%" height="1rem" />
  <DXSkeleton width="40%" height="1rem" />
</template>
```

### Скелетон для аватара

```vue
<template>
  <DXSkeleton width="48px" height="48px" rounded="rounded-full" />
</template>
```

### Скелетон для карточки

```vue
<template>
  <DXCard padding="md">
    <DXFlex gap="md" align="start">
      <DXSkeleton width="64px" height="64px" rounded="rounded-lg" />
      <div class="flex-1 space-y-2">
        <DXSkeleton width="70%" height="1.25rem" />
        <DXSkeleton width="100%" height="0.875rem" />
        <DXSkeleton width="50%" height="0.875rem" />
      </div>
    </DXFlex>
  </DXCard>
</template>
```

### Скелетон для изображения

```vue
<template>
  <DXSkeleton width="100%" height="200px" rounded="rounded-xl" />
</template>
```

### Скелетон для списка

```vue
<template>
  <div v-for="i in 5" :key="i" class="flex items-center gap-3 py-2">
    <DXSkeleton width="40px" height="40px" rounded="rounded-full" />
    <div class="flex-1 space-y-1">
      <DXSkeleton width="40%" height="1rem" />
      <DXSkeleton width="60%" height="0.75rem" />
    </div>
  </div>
</template>
```

## Стилизация

- Фон: `bg-slate-200`
- Анимация: `animate-pulse` (плавное мерцание)
- Inline стили для width/height

## Особенности

- Минималистичный компонент без дополнительной логики
- Использует CSS анимацию Tailwind
- Гибкие размеры через inline стили
- Любое скругление через Tailwind класс

---

**Категория:** Atom  
**Импорт:** `import { DXSlider } from 'dxd-style-code'`

## Назначение

Слайдер (range input) с поддержкой засечек (ticks), иконок, лейблов и различных цветовых вариантов.

## Props

| `min` | `number` | `0` | Минимальное значение |
| `max` | `number` | `100` | Максимальное значение |
| `step` | `number` | `1` | Шаг изменения |
| `label` | `string` | `''` | Лейбл слайдера |
| `helper` | `string` | `''` | Вспомогательный текст |
| `showValue` | `boolean` | `true` | Показывать текущее значение |
| `ticks` | `boolean` | `false` | Показывать засечки |
| `showTickLabels` | `boolean` | `true` | Показывать подписи к засечкам |
| `tickCount` | `number` | `5` | Количество засечек |
| `tickIcons` | `Array<Component>` | `null` | Массив иконок для засечек |
| `tickIconAnimation` | `'wiggle' \| 'scale' \| 'rotate' \| 'none'` | `'wiggle'` | Анимация активной иконки |
| `unit` | `string` | `''` | Единица измерения |
| `disabled` | `boolean` | `false` | Отключенное состояние |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Размер |
| `variant` | `'slate' \| 'primary' \| 'success' \| 'danger' \| 'warning' \| 'info'` | `'primary'` | Цветовой вариант |
| `spacing` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'sm'` | Отступы между элементами |

## Events

## Примеры использования

### Базовый слайдер

```vue
<template>
  <DXSlider v-model="volume" label="Громкость" unit="%" />
</template>
```

### С засечками

```vue
<template>
  <DXSlider 
    v-model="rating"
    :min="1"
    :max="5"
    :step="1"
    ticks
    :tick-count="5"
    label="Оценка"
  />
</template>
```

### С иконками

```vue
<template>
  <DXSlider 
    v-model="mood"
    :min="0"
    :max="4"
    ticks
    :tick-count="5"
    :tick-icons="[SadIcon, MehIcon, SmileIcon, GrinIcon, HeartIcon]"
    tick-icon-animation="scale"
  />
</template>
```

### Цветные варианты

```vue
<template>
  <DXSlider v-model="val" variant="success" label="Успех" />
  <DXSlider v-model="val" variant="danger" label="Опасность" />
</template>
```

## Использует

- `useSize` - для размеров
- `useVariantSlider` - для цветов
- `useSpacing` - для отступов
- `DXIcon` - для иконок засечек

## Особенности

- Кроссбраузерная стилизация (Webkit + Firefox)
- Динамическое позиционирование засечек с учётом размера thumb
- Анимация активной иконки (ближайшей к текущему значению)
- CSS переменные для динамических стилей
- Hover эффект на thumb (scale 1.1)

---

**Категория:** Atom  
**Импорт:** `import { DXSpacer } from 'dxd-style-code'`

## Назначение

Компонент для создания отступов между элементами. Может быть фиксированного размера или занимать всё доступное пространство (flex-grow).

## Props

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

---

**Категория:** Atom  
**Импорт:** `import { DXStack } from 'dxd-style-code'`

## Назначение

Компонент для вертикального или горизонтального выстраивания элементов с настраиваемыми отступами и разделителями.

## Props

| `direction` | `'vertical' \| 'horizontal'` | `'vertical'` | Направление |
| `gap` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `'md'` | Отступ между элементами |
| `align` | `'start' \| 'center' \| 'end' \| 'stretch'` | `'stretch'` | Выравнивание по поперечной оси |
| `justify` | `'start' \| 'center' \| 'end' \| 'between' \| 'around'` | `'start'` | Распределение по главной оси |
| `dividers` | `boolean` | `false` | Разделители между элементами |

## Slots

## Примеры использования

### Вертикальный стек

```vue
<template>
  <DXStack gap="lg">
    <DXInput label="Имя" />
    <DXInput label="Email" />
    <DXButton>Отправить</DXButton>
  </DXStack>
</template>
```

### Горизонтальный стек

```vue
<template>
  <DXStack direction="horizontal" gap="sm" align="center">
    <DXAvatar />
    <span>Имя пользователя</span>
  </DXStack>
</template>
```

### С разделителями

```vue
<template>
  <DXStack dividers gap="md">
    <div>Секция 1</div>
    <div>Секция 2</div>
    <div>Секция 3</div>
  </DXStack>
</template>
```

### Распределение space-between

```vue
<template>
  <DXStack direction="horizontal" justify="between">
    <DXButton variant="ghost">Отмена</DXButton>
    <DXButton>Сохранить</DXButton>
  </DXStack>
</template>
```

## Сравнение с DXFlex

`DXStack` - это упрощённый вариант `DXFlex`:
- Меньше props (только основные)
- Предустановленные значения для типичных use-cases
- Встроенная поддержка разделителей

## Использует

- `useSize` - для gap
- `useClassComposition` - для объединения классов

## Особенности

- Разделители автоматически адаптируются к направлению (horizontal → divide-x, vertical → divide-y)
- По умолчанию `align: stretch` для полноширинных элементов
- Поддержка любого HTML тега через prop `tag`

---

**Категория:** Atom  
**Импорт:** `import { DXTags } from 'dxd-style-code'`

## Назначение

Компонент для отображения набора тегов с поддержкой иконок, удаления и цветовых вариантов.

## Props

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

---

**Категория:** Atom  
**Импорт:** `import { DXText } from 'dxd-style-code'`

## Назначение

Компонент для отображения текста с настраиваемым размером, весом, цветом, выравниванием и обрезкой.

## Props

| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Размер текста |
| `weight` | `'normal' \| 'medium' \| 'semibold' \| 'bold'` | `'normal'` | Вес шрифта |
| `color` | `'default' \| 'muted' \| 'primary' \| 'success' \| 'warning' \| 'danger'` | `'default'` | Цвет текста |
| `align` | `'left' \| 'center' \| 'right' \| 'justify'` | `'left'` | Выравнивание |
| `truncate` | `boolean` | `false` | Обрезать с многоточием |
| `lines` | `number` | `0` | Максимум строк (line-clamp) |

## Slots

## Примеры использования

### Базовый текст

```vue
<template>
  <DXText>Обычный параграф текста.</DXText>
</template>
```

### Разные размеры

```vue
<template>
  <DXText size="xs">Очень маленький</DXText>
  <DXText size="sm">Маленький</DXText>
  <DXText size="md">Средний</DXText>
  <DXText size="lg">Большой</DXText>
  <DXText size="xl">Очень большой</DXText>
</template>
```

### Цветной текст

```vue
<template>
  <DXText color="primary">Акцентный текст</DXText>
  <DXText color="muted">Приглушённый текст</DXText>
  <DXText color="danger">Текст с ошибкой</DXText>
</template>
```

### Обрезка текста

```vue
<template>
  <!-- Однострочный с многоточием -->
  <DXText truncate class="max-w-xs">
    Очень длинный текст, который будет обрезан
  </DXText>
  
  <!-- Ограничение на 2 строки -->
  <DXText :lines="2">
    Длинный текст, который может занимать максимум
    две строки, после чего будет обрезан с многоточием.
  </DXText>
</template>
```

### Inline текст

```vue
<template>
  <DXText tag="span" weight="bold">Жирный</DXText>
  <DXText tag="span"> и </DXText>
  <DXText tag="span" color="primary">цветной</DXText>
</template>
```

## Использует

- `useVariantText` - для цветов

## Особенности

- `leading-relaxed` для комфортной высоты строки
- `line-clamp-*` для многострочной обрезки
- Поддержка всех стандартных HTML текстовых тегов

---

**Категория:** Atom  
**Импорт:** `import { DXToast } from 'dxd-style-code'`

## Назначение

Компонент уведомления (toast) с иконкой и цветовыми вариантами. Используется для отображения информационных сообщений, успехов, предупреждений и ошибок.

## Props

| `showIcon` | `boolean` | `true` | Показывать иконку |

## Slots

## Примеры использования

### Информационный toast

```vue
<template>
  <DXToast variant="info">
    Новая версия доступна для скачивания.
  </DXToast>
</template>
```

### Успех

```vue
<template>
  <DXToast variant="success">
    Данные успешно сохранены!
  </DXToast>
</template>
```

### Предупреждение

```vue
<template>
  <DXToast variant="warning">
    Срок действия сессии истекает через 5 минут.
  </DXToast>
</template>
```

### Ошибка

```vue
<template>
  <DXToast variant="danger">
    Не удалось загрузить данные. Попробуйте снова.
  </DXToast>
</template>
```

### Без иконки

```vue
<template>
  <DXToast variant="info" :show-icon="false">
    Простое уведомление без иконки.
  </DXToast>
</template>
```

## Иконки по вариантам

| `success` | CheckCircleIcon |
| `warning` | ExclamationTriangleIcon |
| `danger` | ExclamationCircleIcon |

## Стилизация

- Скругление: `rounded-2xl`
- Рамка + фон в соответствии с вариантом
- Иконка размера `md`
- Flex layout с gap-3

## Использует

- `useVariantConfig` - для получения цветов и иконки
- `DXIcon` - для отображения иконки

## Особенности

- Автоматическая иконка в зависимости от варианта
- Flex-1 для контента, чтобы он занимал оставшееся пространство
- Иконка с `shrink-0` для предотвращения сжатия

---

**Категория:** Atom  
**Импорт:** `import { DXToggle } from 'dxd-style-code'`

## Назначение

Компонент переключателя (toggle switch) для бинарных состояний с плавной анимацией.

## Props

| `label` | `string` | `''` | Текст лейбла |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Размер |
| `color` | `'slate' \| 'primary' \| 'success' \| 'danger' \| 'warning' \| 'info'` | `'slate'` | Цвет при включении |
| `animation` | `'none' \| 'smooth'` | `'smooth'` | Анимация переключения |
| `disabled` | `boolean` | `false` | Отключенное состояние |

## Events

## Примеры использования

### Базовый toggle

```vue
<template>
  <DXToggle v-model="isEnabled" label="Уведомления" />
</template>
```

### Цветные варианты

```vue
<template>
  <DXToggle v-model="darkMode" color="slate" label="Тёмная тема" />
  <DXToggle v-model="notifications" color="primary" label="Push-уведомления" />
  <DXToggle v-model="analytics" color="success" label="Аналитика" />
</template>
```

### Разные размеры

```vue
<template>
  <DXToggle v-model="val" size="xs" label="Маленький" />
  <DXToggle v-model="val" size="md" label="Средний" />
  <DXToggle v-model="val" size="xl" label="Большой" />
</template>
```

### Без анимации

```vue
<template>
  <DXToggle v-model="val" animation="none" label="Без анимации" />
</template>
```

### В форме настроек

```vue
<template>
  <DXStack gap="md">
    <DXToggle v-model="settings.notifications" label="Email уведомления" />
    <DXToggle v-model="settings.marketing" label="Маркетинговые рассылки" />
    <DXToggle v-model="settings.twoFactor" color="success" label="Двухфакторная аутентификация" />
  </DXStack>
</template>
```

## Размеры

| `sm` | w-9 h-5 | w-3.5 h-3.5 |
| `md` | w-11 h-6 | w-4 h-4 |
| `lg` | w-14 h-7 | w-5 h-5 |
| `xl` | w-16 h-8 | w-6 h-6 |

## Использует

- `useSize` - для размеров
- `useVariantToggle` - для цветов
- `useAnimation` - для анимации
- `useClassComposition` - для объединения классов

## Особенности

- ARIA: `role="switch"` и `aria-checked`
- Плавная анимация translate для thumb
- Focus ring при фокусе
- Белый thumb (`bg-white`)

---

**Категория:** Atom  
**Импорт:** `import { DXTooltip } from 'dxd-style-code'`

## Назначение

Всплывающая подсказка с поддержкой различных позиций, цветов, анимаций и задержки показа.

## Props

| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Позиция |
| `color` | `'dark' \| 'light' \| 'primary' \| 'success' \| 'danger' \| 'warning' \| 'info'` | `'dark'` | Цвет |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Размер текста |
| `animation` | `'fade' \| 'fade-scale' \| 'slide-up' \| 'slide-down' \| 'slide-left' \| 'slide-right' \| 'tooltip-custom'` | `'tooltip-custom'` | Анимация появления |
| `maxWidth` | `string` | `'200px'` | Максимальная ширина |
| `delay` | `number` | `100` | Задержка показа (мс) |

## Slots

| `content` | Кастомный контент подсказки |

## Примеры использования

### Базовый tooltip

```vue
<template>
  <DXTooltip content="Это подсказка">
    <DXButton>Наведи на меня</DXButton>
  </DXTooltip>
</template>
```

### Разные позиции

```vue
<template>
  <DXTooltip content="Сверху" position="top">
    <DXButton>Top</DXButton>
  </DXTooltip>
  <DXTooltip content="Снизу" position="bottom">
    <DXButton>Bottom</DXButton>
  </DXTooltip>
  <DXTooltip content="Слева" position="left">
    <DXButton>Left</DXButton>
  </DXTooltip>
  <DXTooltip content="Справа" position="right">
    <DXButton>Right</DXButton>
  </DXTooltip>
</template>
```

### Цветные tooltips

```vue
<template>
  <DXTooltip content="Светлый" color="light">
    <DXButton>Light</DXButton>
  </DXTooltip>
  <DXTooltip content="Успех" color="success">
    <DXButton>Success</DXButton>
  </DXTooltip>
</template>
```

### С кастомным контентом

```vue
<template>
  <DXTooltip>
    <DXButton>Hover</DXButton>
    <template #content>
      <strong>Заголовок</strong>
      <p>Описание с форматированием</p>
    </template>
  </DXTooltip>
</template>
```

### С задержкой

```vue
<template>
  <DXTooltip content="Появится через 500мс" :delay="500">
    <DXButton>Долгий hover</DXButton>
  </DXTooltip>
</template>
```

## Использует

- `useSize` - для размеров
- `useVariantTooltip` - для цветов
- `useTooltipArrow` - для стрелки
- `useTooltipPosition` - для позиционирования
- `useAnimationTransition` - для анимаций

## Особенности

- Стрелка автоматически позиционируется
- `tooltip-custom` анимация адаптируется к позиции
- Tooltip скрывается мгновенно, показывается с задержкой
- Поддержка focus/blur для keyboard navigation
- Очистка таймеров при размонтировании

---

---

## Molecules (Молекулы) - 34 компонента

Композиции атомов, выполняющие конкретную функцию.

### Компоненты форм

Универсальный компонент текстового поля ввода.

## Import

```javascript
import { DXInput } from 'dxd-style-code';
```

## Props

| `type` | `String` | `'text'` | Тип input: `'text'`, `'email'`, `'password'`, `'number'`, `'tel'`, `'url'`, `'search'` |
| `placeholder` | `String` | `''` | Placeholder |
| `label` | `String` | `''` | Лейбл поля |
| `size` | `String` | `'md'` | Размер: `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'` |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `readonly` | `Boolean` | `false` | Только для чтения |
| `required` | `Boolean` | `false` | Обязательное поле |
| `error` | `String` | `''` | Текст ошибки |
| `helper` | `String` | `''` | Вспомогательный текст |
| `prefixIcon` | `Object\|Function` | `null` | Иконка слева |
| `suffixIcon` | `Object\|Function` | `null` | Иконка справа |
| `clearable` | `Boolean` | `false` | Показать кнопку очистки |
| `maxLength` | `Number` | `0` | Максимальная длина |
| `showCount` | `Boolean` | `false` | Показать счётчик символов |
| `autocomplete` | `String` | `'off'` | Значение autocomplete |
| `autofocus` | `Boolean` | `false` | Автофокус при монтировании |

## Events

| `input` | `Event` | Событие input |
| `change` | `Event` | Событие change |
| `focus` | `Event` | Получение фокуса |
| `blur` | `Event` | Потеря фокуса |
| `clear` | - | Очистка значения |
| `keydown` | `KeyboardEvent` | Нажатие клавиши |
| `keyup` | `KeyboardEvent` | Отпускание клавиши |

## Slots

| `suffix` | Контент после input (вместо suffixIcon) |

## Usage

### Basic

```vue
<DXInput v-model="name" placeholder="Введите имя" />
```

### With Label

```vue
<DXInput
  v-model="email"
  label="Email"
  type="email"
  placeholder="example@mail.com"
/>
```

### With Icons

```vue
<DXInput
  v-model="search"
  :prefixIcon="MagnifyingGlassIcon"
  placeholder="Поиск..."
/>

<DXInput
  v-model="password"
  type="password"
  :suffixIcon="EyeIcon"
/>
```

### Sizes

```vue
<DXInput size="xs" placeholder="Extra Small" />
<DXInput size="sm" placeholder="Small" />
<DXInput size="md" placeholder="Medium (default)" />
<DXInput size="lg" placeholder="Large" />
<DXInput size="xl" placeholder="Extra Large" />
```

### States

```vue
<!-- Disabled -->
<DXInput v-model="value" disabled placeholder="Отключено" />

<!-- Readonly -->
<DXInput v-model="value" readonly />

<!-- With Error -->
<DXInput
  v-model="email"
  error="Введите корректный email"
  label="Email"
/>
```

### With Helper Text

```vue
<DXInput
  v-model="password"
  type="password"
  label="Пароль"
  helper="Минимум 8 символов"
/>
```

### Clearable

```vue
<DXInput
  v-model="search"
  clearable
  placeholder="Поиск..."
  @clear="handleClear"
/>
```

### With Character Count

```vue
<DXInput
  v-model="bio"
  :maxLength="200"
  showCount
  label="О себе"
/>
```

### Custom Slots

```vue
<DXInput v-model="amount">
  <template #prefix>
    <span class="text-slate-500">₽</span>
  </template>
  <template #suffix>
    <span class="text-xs text-slate-400">.00</span>
  </template>
</DXInput>
```

### Number Input

```vue
<DXInput
  v-model="quantity"
  type="number"
  :min="0"
  :max="100"
  :step="1"
/>
```

### In InputGroup

```vue
<DXInputGroup size="md">
  <DXInputAddon>https://</DXInputAddon>
  <DXInput v-model="domain" placeholder="example.com" />
  <DXButton>Проверить</DXButton>
</DXInputGroup>
```

## Integration with InputGroup

При использовании внутри `DXInputGroup`:
- Размер наследуется от группы
- Состояние disabled наследуется от группы
- Состояние error наследуется от группы
- Скругление адаптируется в зависимости от позиции

## See Also

- [DXInputGroup](./DXInputGroup.md)
- [DXPasswordInput](./DXPasswordInput.md)
- [DXTextarea](./DXTextarea.md)
- [DXFormControl](./DXFormControl.md)

---

Многострочное текстовое поле ввода.

## Import

```javascript
import { DXTextarea } from 'dxd-style-code';
```

## Props

| `placeholder` | `String` | `''` | Placeholder |
| `rows` | `Number` | `3` | Количество строк |
| `label` | `String` | `''` | Лейбл поля |
| `required` | `Boolean` | `false` | Обязательное поле |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `error` | `String` | `''` | Текст ошибки |
| `helper` | `String` | `''` | Вспомогательный текст |
| `prefixIcon` | `Object\|Function` | `null` | Иконка слева (верхний угол) |
| `suffixIcon` | `Object\|Function` | `null` | Иконка справа (верхний угол) |
| `maxLength` | `Number` | `0` | Максимальная длина |
| `showCount` | `Boolean` | `false` | Показать счётчик символов |
| `autoResize` | `Boolean` | `false` | Автоматическое изменение высоты |

## Events

| `input` | `Event` | Событие input |
| `focus` | `Event` | Получение фокуса |
| `blur` | `Event` | Потеря фокуса |

## Usage

### Basic

```vue
<DXTextarea
  v-model="description"
  placeholder="Введите описание..."
/>
```

### With Label

```vue
<DXTextarea
  v-model="bio"
  label="О себе"
  placeholder="Расскажите о себе..."
/>
```

### With Rows

```vue
<DXTextarea
  v-model="content"
  :rows="5"
  label="Содержание"
/>
```

### With Character Count

```vue
<DXTextarea
  v-model="message"
  :maxLength="500"
  showCount
  label="Сообщение"
/>
<!-- Показывает: 125/500 -->
```

### Auto Resize

```vue
<DXTextarea
  v-model="notes"
  autoResize
  :rows="2"
  placeholder="Начните печатать..."
/>
```

### With Validation

```vue
<DXTextarea
  v-model="form.comment"
  label="Комментарий"
  required
  :error="errors.comment"
  helper="Минимум 10 символов"
/>
```

### Disabled

```vue
<DXTextarea
  v-model="readonlyText"
  disabled
  label="Только для чтения"
/>
```

### With Icons

```vue
<DXTextarea
  v-model="notes"
  :prefixIcon="PencilIcon"
  label="Заметки"
/>
```

### In Form

```vue
<DXFormControl
  label="Описание товара"
  required
  :error="errors.description"
>
  <DXTextarea
    v-model="form.description"
    :rows="4"
    :maxLength="1000"
    showCount
    placeholder="Опишите товар..."
  />
</DXFormControl>
```

### Code Editor Style

```vue
<DXTextarea
  v-model="code"
  :rows="10"
  class="font-mono text-sm"
  placeholder="// Введите код..."
/>
```

### In InputGroup

```vue
<DXInputGroup>
  <DXTextarea
    v-model="message"
    :rows="3"
    placeholder="Напишите сообщение..."
  />
</DXInputGroup>
```

### Message Input

```vue
<div class="flex gap-2">
  <DXTextarea
    v-model="message"
    :rows="1"
    autoResize
    placeholder="Написать сообщение..."
    class="flex-1"
    @keydown.enter.exact="sendMessage"
  />
  <DXButton @click="sendMessage">
    <DXIcon :icon="PaperAirplaneIcon" />
  </DXButton>
</div>
```

## Integration with InputGroup

При использовании внутри `DXInputGroup`:
- Скругление адаптируется в зависимости от позиции addon

## Accessibility

- Связывает `label` с `textarea` через `id`
- `aria-describedby` для helper и error
- `aria-invalid` при наличии ошибки

## See Also

- [DXInput](./DXInput.md)
- [DXFormControl](./DXFormControl.md)
- [DXFormLabel](../atoms/DXFormLabel.md)

---

Стандартный компонент выпадающего списка.

## Import

```javascript
import { DXSelect } from 'dxd-style-code';
```

## Props

| `options` | `Array` | `[]` | Список опций |
| `placeholder` | `String` | `'Выберите...'` | Placeholder |
| `label` | `String` | `''` | Лейбл поля |
| `size` | `String` | `'md'` | Размер: `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'` |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `required` | `Boolean` | `false` | Обязательное поле |
| `error` | `String` | `''` | Текст ошибки |
| `helper` | `String` | `''` | Вспомогательный текст |
| `multiple` | `Boolean` | `false` | Мультивыбор |
| `labelField` | `String` | `'label'` | Поле для отображения |
| `valueField` | `String` | `'value'` | Поле для значения |
| `prefixIcon` | `Object\|Function` | `null` | Иконка слева |
| `clearable` | `Boolean` | `false` | Кнопка очистки |

## Option Structure

```typescript
// Простой формат
type SimpleOption = string | number;

// Объектный формат
interface Option {
  value: string | number;
  label: string;
  disabled?: boolean;
  group?: string;  // Для группировки
}

// Группа опций
interface OptionGroup {
  label: string;    // Название группы
  options: Option[]; // Опции в группе
}
```

## Events

| `change` | `any` | Альтернативное событие |
| `focus` | `Event` | Фокус |
| `blur` | `Event` | Потеря фокуса |

## Slots

## Usage

### Basic

```vue
<DXSelect
  v-model="country"
  :options="['Россия', 'США', 'Германия', 'Франция']"
  label="Страна"
/>
```

### With Object Options

```vue
<DXSelect
  v-model="status"
  :options="[
    { value: 'active', label: 'Активный' },
    { value: 'inactive', label: 'Неактивный' },
    { value: 'pending', label: 'Ожидает' }
  ]"
  label="Статус"
/>
```

### With Placeholder

```vue
<DXSelect
  v-model="category"
  :options="categories"
  placeholder="Выберите категорию"
  label="Категория"
/>
```

### Sizes

```vue
<DXSelect size="xs" :options="options" v-model="val" />
<DXSelect size="sm" :options="options" v-model="val" />
<DXSelect size="md" :options="options" v-model="val" />
<DXSelect size="lg" :options="options" v-model="val" />
<DXSelect size="xl" :options="options" v-model="val" />
```

### With Icon

```vue
<DXSelect
  v-model="country"
  :options="countries"
  :prefixIcon="GlobeAltIcon"
  label="Страна"
/>
```

### With Validation

```vue
<DXSelect
  v-model="form.role"
  :options="roles"
  label="Роль"
  required
  :error="errors.role"
  helper="Выберите роль пользователя"
/>
```

### Disabled State

```vue
<DXSelect
  v-model="value"
  :options="options"
  disabled
  label="Отключено"
/>
```

### Disabled Options

```vue
<DXSelect
  v-model="selected"
  :options="[
    { value: 'a', label: 'Доступно' },
    { value: 'b', label: 'Недоступно', disabled: true },
    { value: 'c', label: 'Доступно' }
  ]"
/>
```

### Grouped Options

```vue
<DXSelect
  v-model="selected"
  :options="[
    {
      label: 'Фрукты',
      options: [
        { value: 'apple', label: 'Яблоко' },
        { value: 'banana', label: 'Банан' }
      ]
    },
    {
      label: 'Овощи',
      options: [
        { value: 'carrot', label: 'Морковь' },
        { value: 'tomato', label: 'Помидор' }
      ]
    }
  ]"
/>
```

### Multiple Select

```vue
<DXSelect
  v-model="selectedItems"
  :options="items"
  multiple
  label="Выберите несколько"
/>
```

### Clearable

```vue
<DXSelect
  v-model="selected"
  :options="options"
  clearable
  label="С очисткой"
/>
```

### In InputGroup

```vue
<DXInputGroup>
  <DXSelect v-model="protocol" :options="['http://', 'https://']" />
  <DXInput v-model="domain" placeholder="example.com" />
</DXInputGroup>
```

### In Form

```vue
<DXFormControl label="Отдел" required :error="errors.department">
  <DXSelect
    v-model="form.department"
    :options="departments"
    placeholder="Выберите отдел"
  />
</DXFormControl>
```

## Integration with InputGroup

При использовании внутри `DXInputGroup`:
- Размер наследуется от группы
- Состояние disabled наследуется от группы
- Скругление адаптируется в зависимости от позиции

## See Also

- [DXSearchSelect](./DXSearchSelect.md)
- [DXComboBox](./DXComboBox.md)
- [DXFormControl](./DXFormControl.md)

---

Группировка input-элементов с аддонами (префиксы, суффиксы, кнопки).

## Import

```javascript
import { DXInputGroup } from 'dxd-style-code';
```

## Props

| `disabled` | `Boolean` | `false` | Отключить все элементы |
| `error` | `Boolean` | `false` | Состояние ошибки для всей группы |
| `fullWidth` | `Boolean` | `true` | Растянуть на всю ширину |
| `direction` | `String` | `'horizontal'` | Направление: `'horizontal'`, `'vertical'` |

## Slots

## Usage

### Basic with Addon

```vue
<DXInputGroup>
  <DXInputAddon>@</DXInputAddon>
  <DXInput v-model="username" placeholder="username" />
</DXInputGroup>
```

### URL Input

```vue
<DXInputGroup>
  <DXInputAddon>https://</DXInputAddon>
  <DXInput v-model="domain" placeholder="example.com" />
</DXInputGroup>
```

### With Button

```vue
<DXInputGroup>
  <DXInput v-model="email" placeholder="Email для подписки" />
  <DXButton>Подписаться</DXButton>
</DXInputGroup>
```

### With Both Addons

```vue
<DXInputGroup>
  <DXInputAddon>
    <DXIcon :icon="CurrencyDollarIcon" size="sm" />
  </DXInputAddon>
  <DXInput v-model="price" type="number" placeholder="0.00" />
  <DXInputAddon>.00</DXInputAddon>
</DXInputGroup>
```

### Multiple Inputs

```vue
<DXInputGroup>
  <DXInput v-model="firstName" placeholder="Имя" />
  <DXInput v-model="lastName" placeholder="Фамилия" />
</DXInputGroup>
```

### Sizes

```vue
<DXInputGroup size="sm">
  <DXInputAddon>@</DXInputAddon>
  <DXInput v-model="value" />
</DXInputGroup>

<DXInputGroup size="md">
  <DXInputAddon>@</DXInputAddon>
  <DXInput v-model="value" />
</DXInputGroup>

<DXInputGroup size="lg">
  <DXInputAddon>@</DXInputAddon>
  <DXInput v-model="value" />
</DXInputGroup>
```

### Disabled State

```vue
<DXInputGroup disabled>
  <DXInputAddon>https://</DXInputAddon>
  <DXInput v-model="url" />
  <DXButton>Открыть</DXButton>
</DXInputGroup>
```

### Search with Icon and Button

```vue
<DXInputGroup>
  <DXInputAddon>
    <DXIcon :icon="MagnifyingGlassIcon" size="sm" />
  </DXInputAddon>
  <DXInput v-model="search" placeholder="Поиск..." />
  <DXButton variant="ghost">
    <DXIcon :icon="XMarkIcon" size="sm" />
  </DXButton>
</DXInputGroup>
```

### Phone Input

```vue
<DXInputGroup>
  <DXInputAddon>+7</DXInputAddon>
  <DXInput v-model="phone" placeholder="(999) 123-45-67" />
</DXInputGroup>
```

### With Select

```vue
<DXInputGroup>
  <DXSelect v-model="protocol" :options="['http://', 'https://']" />
  <DXInput v-model="domain" placeholder="example.com" />
</DXInputGroup>
```

### Vertical Direction

```vue
<DXInputGroup direction="vertical">
  <DXInput v-model="line1" placeholder="Адрес (строка 1)" />
  <DXInput v-model="line2" placeholder="Адрес (строка 2)" />
  <DXInput v-model="city" placeholder="Город" />
</DXInputGroup>
```

## Provide/Inject

DXInputGroup использует Vue provide/inject для передачи контекста:
- `inputGroup.size` - размер группы
- `inputGroup.disabled` - состояние disabled
- `inputGroup.error` - состояние error
- `inputGroup.registerComponent()` - регистрация компонента
- `inputGroup.unregisterComponent()` - отмена регистрации
- `inputGroup.getComponentPosition()` - позиция компонента (для скругления)

## See Also

- [DXInput](./DXInput.md)
- [DXInputAddon](../atoms/DXInputAddon.md)
- [DXButton](../atoms/DXButton.md)

---

Обёртка для полей формы с лейблом, ошибками и вспомогательным текстом.

## Import

```javascript
import { DXFormControl } from 'dxd-style-code';
```

## Props

| `error` | `String` | `''` | Текст ошибки |
| `helper` | `String` | `''` | Вспомогательный текст |
| `required` | `Boolean` | `false` | Пометка обязательного поля (*) |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `labelPosition` | `String` | `'top'` | Позиция лейбла: `'top'`, `'left'`, `'right'` |
| `labelWidth` | `String` | `'auto'` | Ширина лейбла (для position left/right) |
| `showOptional` | `Boolean` | `false` | Показывать "(опционально)" для необязательных |
| `id` | `String` | `auto` | ID для связи label и input |

## Slots

| `label` | Кастомный лейбл |
| `error` | Кастомное сообщение об ошибке |
| `helper` | Кастомный вспомогательный текст |

## Usage

### Basic

```vue
<DXFormControl label="Email" required>
  <DXInput v-model="email" type="email" />
</DXFormControl>
```

### With Error

```vue
<DXFormControl
  label="Пароль"
  required
  :error="errors.password"
>
  <DXInput v-model="password" type="password" />
</DXFormControl>
```

### With Helper Text

```vue
<DXFormControl
  label="Имя пользователя"
  helper="Только латинские буквы и цифры, 3-20 символов"
>
  <DXInput v-model="username" />
</DXFormControl>
```

### Label Positions

```vue
<!-- Top (default) -->
<DXFormControl label="Имя" labelPosition="top">
  <DXInput v-model="name" />
</DXFormControl>

<!-- Left -->
<DXFormControl label="Имя" labelPosition="left" labelWidth="120px">
  <DXInput v-model="name" />
</DXFormControl>

<!-- Right -->
<DXFormControl label="Имя" labelPosition="right" labelWidth="120px">
  <DXInput v-model="name" />
</DXFormControl>
```

### Optional Field

```vue
<DXFormControl label="Телефон" showOptional>
  <DXInput v-model="phone" />
</DXFormControl>
```

### With Custom Label

```vue
<DXFormControl>
  <template #label>
    <div class="flex items-center gap-2">
      <span>API Key</span>
      <DXTooltip content="Ключ для доступа к API">
        <DXIcon :icon="QuestionMarkCircleIcon" size="sm" />
      </DXTooltip>
    </div>
  </template>
  <DXCopyField :value="apiKey" />
</DXFormControl>
```

### With Custom Error

```vue
<DXFormControl label="Email" :error="errors.email">
  <DXInput v-model="email" />
  <template #error>
    <div class="flex items-center gap-1 text-rose-500">
      <DXIcon :icon="ExclamationCircleIcon" size="sm" />
      <span>{{ errors.email }}</span>
    </div>
  </template>
</DXFormControl>
```

### Complex Form Example

```vue
<form @submit.prevent="handleSubmit">
  <DXStack spacing="lg">
    <DXFormControl
      label="Имя"
      required
      :error="errors.name"
    >
      <DXInput v-model="form.name" placeholder="Введите имя" />
    </DXFormControl>

    <DXFormControl
      label="Email"
      required
      :error="errors.email"
      helper="На этот адрес будет отправлено подтверждение"
    >
      <DXInput v-model="form.email" type="email" />
    </DXFormControl>

    <DXFormControl label="Роль" required :error="errors.role">
      <DXSelect v-model="form.role" :options="roles" />
    </DXFormControl>

    <DXFormControl label="Примечание">
      <DXTextarea v-model="form.note" :rows="3" />
    </DXFormControl>

    <DXButton type="submit">Сохранить</DXButton>
  </DXStack>
</form>
```

## Accessibility

- Автоматически связывает `label` с полем через `for`/`id`
- Добавляет `aria-describedby` для helper и error
- Добавляет `aria-invalid="true"` при наличии ошибки

## See Also

- [DXFormLabel](../atoms/DXFormLabel.md)
- [DXInput](./DXInput.md)
- [DXInputGroup](./DXInputGroup.md)

---

Input для ввода пароля с переключателем видимости.

## Import

```javascript
import { DXPasswordInput } from 'dxd-style-code';
```

## Props

| `placeholder` | `String` | `''` | Placeholder |
| `label` | `String` | `''` | Лейбл поля |
| `size` | `String` | `'md'` | Размер: `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'` |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `required` | `Boolean` | `false` | Обязательное поле |
| `error` | `String` | `''` | Текст ошибки |
| `helper` | `String` | `''` | Вспомогательный текст |
| `showToggle` | `Boolean` | `true` | Показать кнопку переключения |
| `defaultVisible` | `Boolean` | `false` | Показать пароль по умолчанию |
| `autocomplete` | `String` | `'current-password'` | Значение autocomplete |
| `showStrength` | `Boolean` | `false` | Показать индикатор силы |

## Events

| `visibility-change` | `Boolean` | Изменение видимости пароля |
| `strength-change` | `Object` | Изменение силы пароля |
| `focus` | `Event` | Получение фокуса |
| `blur` | `Event` | Потеря фокуса |

## Slots

| `strength` | Кастомный индикатор силы |

## Usage

### Basic

```vue
<DXPasswordInput
  v-model="password"
  label="Пароль"
  placeholder="Введите пароль"
/>
```

### With Helper

```vue
<DXPasswordInput
  v-model="password"
  label="Пароль"
  helper="Минимум 8 символов, включая цифры и спецсимволы"
/>
```

### With Error

```vue
<DXPasswordInput
  v-model="password"
  label="Пароль"
  :error="errors.password"
/>
```

### With Strength Indicator

```vue
<DXPasswordInput
  v-model="password"
  label="Пароль"
  showStrength
  @strength-change="handleStrength"
/>

<script setup>
function handleStrength({ score, label }) {
  // score: 0-4
  // label: 'Очень слабый', 'Слабый', 'Средний', 'Сильный', 'Очень сильный'
  console.log('Strength:', label);
}
</script>
```

### Sizes

```vue
<DXPasswordInput size="sm" v-model="password" />
<DXPasswordInput size="md" v-model="password" />
<DXPasswordInput size="lg" v-model="password" />
```

### Without Toggle

```vue
<DXPasswordInput
  v-model="password"
  :showToggle="false"
  label="PIN-код"
/>
```

### Initially Visible

```vue
<DXPasswordInput
  v-model="password"
  :defaultVisible="true"
  label="Показать пароль"
/>
```

### Registration Form

```vue
<DXFormControl label="Новый пароль" required :error="errors.password">
  <DXPasswordInput
    v-model="form.password"
    autocomplete="new-password"
    showStrength
    helper="Минимум 8 символов"
  />
</DXFormControl>

<DXFormControl label="Подтверждение пароля" required :error="errors.confirmPassword">
  <DXPasswordInput
    v-model="form.confirmPassword"
    autocomplete="new-password"
  />
</DXFormControl>
```

### Custom Toggle Button

```vue
<DXPasswordInput v-model="password">
  <template #toggle="{ visible, toggle }">
    <button @click="toggle" class="text-slate-500 hover:text-slate-700">
      {{ visible ? 'Скрыть' : 'Показать' }}
    </button>
  </template>
</DXPasswordInput>
```

## Password Strength Levels

| 1 | Слабый | orange |
| 2 | Средний | yellow |
| 3 | Сильный | lime |
| 4 | Очень сильный | green |

## See Also

- [DXInput](./DXInput.md)
- [DXFormControl](./DXFormControl.md)

---

Input с маской ввода для форматированных данных (телефон, дата, карта).

## Import

```javascript
import { DXInputMask } from 'dxd-style-code';
```

## Props

| `mask` | `String` | `''` | Маска ввода |
| `placeholder` | `String` | `''` | Placeholder |
| `label` | `String` | `''` | Лейбл поля |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `error` | `String` | `''` | Текст ошибки |
| `helper` | `String` | `''` | Вспомогательный текст |
| `required` | `Boolean` | `false` | Обязательное поле |
| `showMask` | `Boolean` | `false` | Показывать маску в placeholder |
| `returnMasked` | `Boolean` | `false` | Возвращать значение с маской |
| `tokens` | `Object` | `default` | Кастомные токены маски |
| `prefixIcon` | `Object\|Function` | `null` | Иконка слева |
| `suffixIcon` | `Object\|Function` | `null` | Иконка справа |

## Default Mask Tokens

| `A` | `[A-Za-z]` | Только буквы |
| `N` | `[A-Za-z0-9]` | Буквы и цифры |
| `X` | `.` | Любой символ |

## Events

| `complete` | `String` | Маска полностью заполнена |
| `focus` | `Event` | Получение фокуса |
| `blur` | `Event` | Потеря фокуса |

## Usage

### Phone Number

```vue
<DXInputMask
  v-model="phone"
  mask="+7 (###) ###-##-##"
  label="Телефон"
  placeholder="+7 (___) ___-__-__"
/>
```

### Credit Card

```vue
<DXInputMask
  v-model="cardNumber"
  mask="#### #### #### ####"
  label="Номер карты"
/>
```

### Date

```vue
<DXInputMask
  v-model="birthDate"
  mask="##.##.####"
  label="Дата рождения"
  placeholder="ДД.ММ.ГГГГ"
/>
```

### Time

```vue
<DXInputMask
  v-model="time"
  mask="##:##"
  label="Время"
  placeholder="ЧЧ:ММ"
/>
```

### Passport (Russia)

```vue
<DXInputMask
  v-model="passport"
  mask="## ## ######"
  label="Серия и номер паспорта"
/>
```

### INN (Individual)

```vue
<DXInputMask
  v-model="inn"
  mask="############"
  label="ИНН"
/>
```

### With Icon

```vue
<DXInputMask
  v-model="phone"
  mask="+7 (###) ###-##-##"
  :prefixIcon="PhoneIcon"
  label="Контактный телефон"
/>
```

### Show Mask in Placeholder

```vue
<DXInputMask
  v-model="code"
  mask="AA-####"
  :showMask="true"
/>
<!-- Показывает "AA-____" как placeholder -->
```

### Return Masked Value

```vue
<DXInputMask
  v-model="phone"
  mask="+7 (###) ###-##-##"
  :returnMasked="true"
/>
<!-- v-model будет содержать "+7 (999) 123-45-67" вместо "9991234567" -->
```

### Custom Tokens

```vue
<DXInputMask
  v-model="code"
  mask="HH-HH-HH"
  :tokens="{
    H: { pattern: /[0-9A-Fa-f]/ }
  }"
  label="Hex код"
/>
```

### On Complete Event

```vue
<DXInputMask
  v-model="phone"
  mask="+7 (###) ###-##-##"
  @complete="validatePhone"
/>

<script setup>
function validatePhone(value) {
  console.log('Phone complete:', value);
}
</script>
```

### With Validation

```vue
<DXInputMask
  v-model="phone"
  mask="+7 (###) ###-##-##"
  label="Телефон"
  required
  :error="errors.phone"
  helper="Введите номер мобильного телефона"
/>
```

## Common Masks

| Phone (US) | `(###) ###-####` |
| Credit Card | `#### #### #### ####` |
| Date | `##.##.####` |
| Time | `##:##` |
| ZIP (RU) | `######` |
| ZIP (US) | `#####-####` |
| SSN | `###-##-####` |
| IP Address | `###.###.###.###` |

## See Also

- [DXInput](./DXInput.md)
- [DXFormControl](./DXFormControl.md)
- [DXPhoneInput](./DXPhoneInput.md)

---

Компонент выбора даты с календарём и поддержкой диапазонов.

## Import

```javascript
import { DXDatePicker } from 'dxd-style-code';
```

## Props

| `mode` | `String` | `'single'` | Режим: `'single'`, `'range'`, `'multiple'` |
| `format` | `String` | `'DD.MM.YYYY'` | Формат отображения даты |
| `placeholder` | `String` | `'Выберите дату'` | Placeholder |
| `label` | `String` | `''` | Лейбл поля |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `required` | `Boolean` | `false` | Обязательное поле |
| `error` | `String` | `''` | Текст ошибки |
| `helper` | `String` | `''` | Вспомогательный текст |
| `minDate` | `Date\|String` | `null` | Минимальная дата |
| `maxDate` | `Date\|String` | `null` | Максимальная дата |
| `disabledDates` | `Array\|Function` | `null` | Отключенные даты |
| `firstDayOfWeek` | `Number` | `1` | Первый день недели (0=Вс, 1=Пн) |
| `locale` | `String` | `'ru'` | Локаль |
| `clearable` | `Boolean` | `true` | Показать кнопку очистки |
| `inline` | `Boolean` | `false` | Показать календарь inline |
| `showTodayButton` | `Boolean` | `true` | Показать кнопку "Сегодня" |
| `showWeekNumbers` | `Boolean` | `false` | Показать номера недель |

## Events

| `change` | `Date\|Array` | Альтернативное событие |
| `open` | - | Открытие календаря |
| `close` | - | Закрытие календаря |
| `clear` | - | Очистка значения |
| `month-change` | `{ month, year }` | Смена месяца |

## Slots

| `day` | `{ date, selected, disabled }` | Кастомный рендер дня |
| `footer` | - | Футер календаря |

## Usage

### Basic

```vue
<DXDatePicker
  v-model="selectedDate"
  label="Дата рождения"
  placeholder="Выберите дату"
/>
```

### Date Range

```vue
<DXDatePicker
  v-model="dateRange"
  mode="range"
  label="Период"
  placeholder="Выберите период"
/>
```

### With Min/Max Dates

```vue
<DXDatePicker
  v-model="date"
  :minDate="new Date()"
  :maxDate="maxDate"
  label="Дата бронирования"
/>
```

### Disabled Dates

```vue
<DXDatePicker
  v-model="date"
  :disabledDates="[
    new Date('2024-01-01'),
    new Date('2024-12-31')
  ]"
/>

<!-- Or with function -->
<DXDatePicker
  v-model="date"
  :disabledDates="(date) => date.getDay() === 0 || date.getDay() === 6"
/>
```

### Inline Calendar

```vue
<DXDatePicker
  v-model="date"
  inline
/>
```

### With Week Numbers

```vue
<DXDatePicker
  v-model="date"
  showWeekNumbers
/>
```

### Custom Format

```vue
<DXDatePicker
  v-model="date"
  format="YYYY-MM-DD"
  placeholder="YYYY-MM-DD"
/>
```

### Multiple Dates

```vue
<DXDatePicker
  v-model="dates"
  mode="multiple"
  label="Выберите несколько дат"
/>
```

### With Quick Actions

```vue
<DXDatePicker v-model="dateRange" mode="range">
  <template #footer>
    <div class="flex gap-2 p-2 border-t">
      <DXButton size="sm" @click="setToday">Сегодня</DXButton>
      <DXButton size="sm" @click="setThisWeek">Эта неделя</DXButton>
      <DXButton size="sm" @click="setThisMonth">Этот месяц</DXButton>
    </div>
  </template>
</DXDatePicker>
```

### In Form

```vue
<DXFormControl
  label="Дата начала"
  required
  :error="errors.startDate"
>
  <DXDatePicker
    v-model="form.startDate"
    :minDate="new Date()"
  />
</DXFormControl>
```

## Date Format Tokens

| `D` | День | 1, 15, 31 |
| `MM` | Месяц (2 цифры) | 01, 06, 12 |
| `M` | Месяц | 1, 6, 12 |
| `YYYY` | Год | 2024 |
| `YY` | Год (2 цифры) | 24 |

## See Also

- [DXTimePicker](./DXTimePicker.md)
- [DXInput](./DXInput.md)
- [DXFormControl](./DXFormControl.md)

---

Компонент выбора времени с поддержкой 12/24-часового формата.

## Import

```javascript
import { DXTimePicker } from 'dxd-style-code';
```

## Props

| `format` | `String` | `'24h'` | Формат: `'12h'`, `'24h'` |
| `showSeconds` | `Boolean` | `false` | Показывать секунды |
| `placeholder` | `String` | `''` | Placeholder |
| `label` | `String` | `''` | Лейбл поля |
| `helper` | `String` | `''` | Вспомогательный текст |
| `error` | `String` | `''` | Текст ошибки |
| `required` | `Boolean` | `false` | Обязательное поле |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `size` | `String` | `'md'` | Размер: `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'` |
| `minTime` | `String` | `null` | Минимальное время |
| `maxTime` | `String` | `null` | Максимальное время |
| `showDropdown` | `Boolean` | `true` | Показывать dropdown для выбора |

## Events

| `change` | `String` | Альтернативное событие |
| `focus` | `Event` | Фокус на input |
| `blur` | `Event` | Потеря фокуса |

## Usage

### Basic

```vue
<DXTimePicker
  v-model="time"
  label="Время"
/>
```

### 12-Hour Format

```vue
<DXTimePicker
  v-model="time"
  format="12h"
  label="Время встречи"
/>
<!-- Отображает: 02:30 PM -->
```

### With Seconds

```vue
<DXTimePicker
  v-model="time"
  showSeconds
  label="Точное время"
/>
<!-- Формат: HH:mm:ss -->
```

### With Min/Max Time

```vue
<DXTimePicker
  v-model="time"
  minTime="09:00"
  maxTime="18:00"
  label="Рабочие часы"
  helper="Выберите время с 9:00 до 18:00"
/>
```

### Sizes

```vue
<DXTimePicker size="sm" v-model="time" />
<DXTimePicker size="md" v-model="time" />
<DXTimePicker size="lg" v-model="time" />
```

### With Validation

```vue
<DXTimePicker
  v-model="form.startTime"
  label="Время начала"
  required
  :error="errors.startTime"
/>
```

### Without Dropdown

```vue
<DXTimePicker
  v-model="time"
  :showDropdown="false"
  label="Введите время"
/>
<!-- Только ручной ввод -->
```

### Time Range

```vue
<div class="flex gap-4 items-end">
  <DXTimePicker
    v-model="startTime"
    label="С"
  />
  <span class="pb-3">—</span>
  <DXTimePicker
    v-model="endTime"
    :minTime="startTime"
    label="До"
  />
</div>
```

### In Form

```vue
<DXFormControl
  label="Время доставки"
  required
  :error="errors.deliveryTime"
>
  <DXTimePicker
    v-model="form.deliveryTime"
    minTime="10:00"
    maxTime="22:00"
    placeholder="Выберите время"
  />
</DXFormControl>
```

### With Date Picker

```vue
<div class="flex gap-4">
  <DXDatePicker
    v-model="date"
    label="Дата"
    class="flex-1"
  />
  <DXTimePicker
    v-model="time"
    label="Время"
  />
</div>
```

### Appointment Booking

```vue
<div class="space-y-4">
  <DXDatePicker
    v-model="appointmentDate"
    label="Дата записи"
    :minDate="new Date()"
  />
  
  <DXTimePicker
    v-model="appointmentTime"
    label="Время записи"
    minTime="09:00"
    maxTime="17:00"
    format="24h"
    helper="Доступные слоты: 9:00 - 17:00"
  />
</div>
```

## Time Format

| 24h + seconds | `14:30:45` | `14:30:45` |
| 12h | `14:30` | `02:30 PM` |
| 12h + seconds | `14:30:45` | `02:30:45 PM` |

## Dropdown Options

- **Часы (24h)**: 0-23
- **Часы (12h)**: 1-12 + AM/PM
- **Минуты**: 0, 5, 10, ..., 55 (шаг 5)
- **Секунды**: 0, 5, 10, ..., 55 (шаг 5)

## See Also

- [DXDatePicker](./DXDatePicker.md)
- [DXInput](./DXInput.md)
- [DXFormControl](./DXFormControl.md)

---

Комбинированный input с выпадающим списком предложений (autocomplete).

## Import

```javascript
import { DXComboBox } from 'dxd-style-code';
```

## Props

| `options` | `Array` | `[]` | Список опций |
| `placeholder` | `String` | `''` | Placeholder для input |
| `label` | `String` | `''` | Лейбл поля |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `error` | `String` | `''` | Текст ошибки |
| `helper` | `String` | `''` | Вспомогательный текст |
| `required` | `Boolean` | `false` | Обязательное поле |
| `clearable` | `Boolean` | `true` | Показать кнопку очистки |
| `filterable` | `Boolean` | `true` | Включить фильтрацию по вводу |
| `displayField` | `String` | `'label'` | Поле объекта для отображения |
| `valueField` | `String` | `'value'` | Поле объекта для значения |
| `filterFunction` | `Function` | `null` | Кастомная функция фильтрации |
| `minSearchLength` | `Number` | `0` | Минимум символов для показа списка |
| `maxHeight` | `String` | `'300px'` | Максимальная высота dropdown |
| `loading` | `Boolean` | `false` | Состояние загрузки |
| `noOptionsText` | `String` | `'Нет опций'` | Текст при пустом списке |

## Events

| `search` | `String` | Изменение поискового запроса |
| `select` | `Object` | Выбор опции |
| `clear` | - | Очистка значения |
| `focus` | `Event` | Фокус на input |
| `blur` | `Event` | Потеря фокуса |

## Slots

| `selected` | `{ option }` | Кастомный рендер выбранного значения |
| `no-options` | - | Контент при отсутствии опций |
| `loading` | - | Контент при загрузке |

## Usage

### Basic with String Options

```vue
<DXComboBox
  v-model="city"
  :options="['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск']"
  placeholder="Выберите город"
  label="Город"
/>
```

### With Object Options

```vue
<DXComboBox
  v-model="selectedUser"
  :options="users"
  displayField="name"
  valueField="id"
  placeholder="Найти пользователя"
  label="Пользователь"
/>

<script setup>
const users = [
  { id: 1, name: 'Иван Иванов' },
  { id: 2, name: 'Петр Петров' },
  { id: 3, name: 'Анна Сидорова' }
];
</script>
```

### With Custom Filter

```vue
<DXComboBox
  v-model="selected"
  :options="products"
  :filterFunction="(option, query) => 
    option.name.toLowerCase().includes(query.toLowerCase()) ||
    option.sku.includes(query)
  "
  displayField="name"
/>
```

### With Async Search

```vue
<DXComboBox
  v-model="selected"
  :options="searchResults"
  :loading="isSearching"
  :minSearchLength="2"
  @search="handleSearch"
  placeholder="Введите минимум 2 символа"
/>

<script setup>
const searchResults = ref([]);
const isSearching = ref(false);

async function handleSearch(query) {
  isSearching.value = true;
  searchResults.value = await api.search(query);
  isSearching.value = false;
}
</script>
```

### Custom Option Template

```vue
<DXComboBox v-model="selected" :options="users">
  <template #option="{ option, selected }">
    <div class="flex items-center gap-3">
      <img :src="option.avatar" class="w-8 h-8 rounded-full" />
      <div>
        <div class="font-medium">{{ option.name }}</div>
        <div class="text-xs text-slate-500">{{ option.email }}</div>
      </div>
      <DXIcon v-if="selected" :icon="CheckIcon" class="ml-auto" />
    </div>
  </template>
</DXComboBox>
```

### With Validation

```vue
<DXComboBox
  v-model="category"
  :options="categories"
  label="Категория"
  required
  :error="errors.category"
  helper="Выберите категорию товара"
/>
```

## See Also

- [DXSearchSelect](./DXSearchSelect.md)
- [DXSelect](./DXSelect.md)
- [DXInput](./DXInput.md)

---

Селект с поиском, мультивыбором и возможностью создания новых опций.

## Import

```javascript
import { DXSearchSelect } from 'dxd-style-code';
```

## Props

| `options` | `Array` | `[]` | Список опций |
| `placeholder` | `String` | `'Выберите...'` | Placeholder |
| `label` | `String` | `''` | Лейбл поля |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `error` | `String` | `''` | Текст ошибки |
| `helper` | `String` | `''` | Вспомогательный текст |
| `required` | `Boolean` | `false` | Обязательное поле |
| `multiple` | `Boolean` | `false` | Мультивыбор |
| `searchable` | `Boolean` | `true` | Включить поиск |
| `clearable` | `Boolean` | `true` | Кнопка очистки |
| `creatable` | `Boolean` | `false` | Разрешить создание новых опций |
| `createText` | `String` | `'Создать'` | Текст кнопки создания |
| `loading` | `Boolean` | `false` | Состояние загрузки |
| `labelField` | `String` | `'label'` | Поле для отображения |
| `valueField` | `String` | `'value'` | Поле для значения |
| `groupBy` | `String` | `null` | Поле для группировки |
| `maxItems` | `Number` | `0` | Максимум выбранных (0 = неограничено) |
| `closeOnSelect` | `Boolean` | `true` | Закрывать при выборе |
| `noOptionsText` | `String` | `'Нет опций'` | Текст при пустом списке |
| `noResultsText` | `String` | `'Ничего не найдено'` | Текст при пустом поиске |

## Events

| `search` | `String` | Изменение поиска |
| `create` | `String` | Создание новой опции |
| `open` | - | Открытие dropdown |
| `close` | - | Закрытие dropdown |
| `clear` | - | Очистка |

## Slots

| `selected` | `{ option }` | Выбранное значение |
| `tag` | `{ option, remove }` | Тег при мультивыборе |
| `no-options` | - | Пустой список |
| `no-results` | `{ search }` | Нет результатов поиска |
| `create-option` | `{ search }` | Кнопка создания |

## Usage

### Basic

```vue
<DXSearchSelect
  v-model="selectedCity"
  :options="cities"
  label="Город"
  placeholder="Выберите город"
/>
```

### Multiple Selection

```vue
<DXSearchSelect
  v-model="selectedTags"
  :options="tags"
  multiple
  label="Теги"
  placeholder="Выберите теги"
/>
```

### With Object Options

```vue
<DXSearchSelect
  v-model="selectedUser"
  :options="users"
  labelField="name"
  valueField="id"
  label="Пользователь"
/>
```

### Creatable

```vue
<DXSearchSelect
  v-model="selectedTags"
  :options="existingTags"
  multiple
  creatable
  createText="Добавить тег"
  @create="handleCreateTag"
/>

<script setup>
async function handleCreateTag(value) {
  const newTag = await api.createTag(value);
  existingTags.value.push(newTag);
}
</script>
```

### Async Options

```vue
<DXSearchSelect
  v-model="selected"
  :options="searchResults"
  :loading="isLoading"
  @search="handleSearch"
  searchable
/>

<script setup>
const searchResults = ref([]);
const isLoading = ref(false);

async function handleSearch(query) {
  if (query.length < 2) return;
  isLoading.value = true;
  searchResults.value = await api.search(query);
  isLoading.value = false;
}
</script>
```

### Grouped Options

```vue
<DXSearchSelect
  v-model="selected"
  :options="[
    { value: 'js', label: 'JavaScript', category: 'Frontend' },
    { value: 'vue', label: 'Vue.js', category: 'Frontend' },
    { value: 'node', label: 'Node.js', category: 'Backend' },
    { value: 'python', label: 'Python', category: 'Backend' }
  ]"
  groupBy="category"
  label="Технология"
/>
```

### Custom Option Render

```vue
<DXSearchSelect v-model="selected" :options="users">
  <template #option="{ option, selected }">
    <div class="flex items-center gap-3">
      <img :src="option.avatar" class="w-8 h-8 rounded-full" />
      <div>
        <div class="font-medium">{{ option.name }}</div>
        <div class="text-xs text-slate-500">{{ option.email }}</div>
      </div>
      <DXIcon v-if="selected" :icon="CheckIcon" class="ml-auto text-green-500" />
    </div>
  </template>
</DXSearchSelect>
```

### Custom Tags

```vue
<DXSearchSelect v-model="selected" :options="options" multiple>
  <template #tag="{ option, remove }">
    <DXTags size="sm" variant="primary" closable @close="remove">
      {{ option.label }}
    </DXTags>
  </template>
</DXSearchSelect>
```

### With Max Items

```vue
<DXSearchSelect
  v-model="selected"
  :options="options"
  multiple
  :maxItems="3"
  helper="Максимум 3 элемента"
/>
```

### Sizes

```vue
<DXSearchSelect size="sm" :options="options" v-model="val" />
<DXSearchSelect size="md" :options="options" v-model="val" />
<DXSearchSelect size="lg" :options="options" v-model="val" />
```

### With Validation

```vue
<DXSearchSelect
  v-model="form.category"
  :options="categories"
  label="Категория"
  required
  :error="errors.category"
/>
```

## Keyboard Navigation

- `↓` / `↑` - навигация по опциям
- `Enter` - выбор опции
- `Esc` - закрыть dropdown
- `Backspace` - удалить последний тег (multiple)

## See Also

- [DXSelect](./DXSelect.md)
- [DXComboBox](./DXComboBox.md)
- [DXTags](../atoms/DXTags.md)

---

Группа радио-кнопок с управлением выбором.

## Import

```javascript
import { DXRadioGroup } from 'dxd-style-code';
```

## Props

| `options` | `Array` | `[]` | Массив опций |
| `name` | `String` | `auto` | Имя группы для form submit |
| `label` | `String` | `''` | Лейбл группы |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `orientation` | `String` | `'vertical'` | Ориентация: `'vertical'`, `'horizontal'` |
| `disabled` | `Boolean` | `false` | Отключить все опции |
| `required` | `Boolean` | `false` | Обязательное поле |
| `error` | `String` | `''` | Текст ошибки |
| `helper` | `String` | `''` | Вспомогательный текст |

## Option Structure

```typescript
// Простой формат
type SimpleOption = string | number;

// Объектный формат
interface Option {
  value: string | number | boolean;
  label: string;
  description?: string;
  disabled?: boolean;
  icon?: Component;
}
```

## Events

| `change` | `any` | Альтернативное событие |

## Slots

| `label` | `{ option }` | Кастомный лейбл опции |
| `option` | `{ option, selected }` | Полностью кастомная опция |

## Usage

### Basic with Options Array

```vue
<DXRadioGroup
  v-model="gender"
  :options="['Мужской', 'Женский']"
  label="Пол"
/>
```

### With Object Options

```vue
<DXRadioGroup
  v-model="role"
  :options="[
    { value: 'admin', label: 'Администратор' },
    { value: 'editor', label: 'Редактор' },
    { value: 'viewer', label: 'Читатель' }
  ]"
  label="Роль"
/>
```

### With Descriptions

```vue
<DXRadioGroup
  v-model="plan"
  :options="[
    { 
      value: 'free', 
      label: 'Бесплатный', 
      description: 'Базовые функции' 
    },
    { 
      value: 'pro', 
      label: 'Профессиональный', 
      description: 'Все функции + поддержка' 
    }
  ]"
/>
```

### Horizontal Layout

```vue
<DXRadioGroup
  v-model="priority"
  :options="['Низкий', 'Средний', 'Высокий']"
  orientation="horizontal"
  label="Приоритет"
/>
```

### With Disabled Options

```vue
<DXRadioGroup
  v-model="option"
  :options="[
    { value: 'a', label: 'Опция A' },
    { value: 'b', label: 'Опция B', disabled: true },
    { value: 'c', label: 'Опция C' }
  ]"
/>
```

### With Slot Children

```vue
<DXRadioGroup v-model="selected" label="Выберите вариант">
  <DXRadio value="opt1" label="Первый вариант" />
  <DXRadio value="opt2" label="Второй вариант" />
  <DXRadio value="opt3" label="Третий вариант" />
</DXRadioGroup>
```

### With Validation

```vue
<DXRadioGroup
  v-model="acceptTerms"
  :options="[
    { value: true, label: 'Принимаю условия' },
    { value: false, label: 'Не принимаю' }
  ]"
  required
  :error="errors.terms"
/>
```

### Sizes

```vue
<DXRadioGroup size="sm" :options="options" v-model="value" />
<DXRadioGroup size="md" :options="options" v-model="value" />
<DXRadioGroup size="lg" :options="options" v-model="value" />
```

### Custom Option Render

```vue
<DXRadioGroup v-model="color" :options="colors">
  <template #option="{ option, selected }">
    <div class="flex items-center gap-2">
      <div 
        :class="[
          'w-4 h-4 rounded-full border-2',
          selected ? 'border-slate-900' : 'border-slate-300'
        ]"
        :style="{ backgroundColor: option.value }"
      />
      <span>{{ option.label }}</span>
    </div>
  </template>
</DXRadioGroup>
```

### In Form

```vue
<DXFormControl label="Способ оплаты" required :error="errors.paymentMethod">
  <DXRadioGroup
    v-model="form.paymentMethod"
    :options="[
      { value: 'card', label: 'Банковская карта', icon: CreditCardIcon },
      { value: 'cash', label: 'Наличные', icon: BanknotesIcon },
      { value: 'qr', label: 'QR-код', icon: QrCodeIcon }
    ]"
    orientation="horizontal"
  />
</DXFormControl>
```

## Provide/Inject

DXRadioGroup использует Vue provide/inject для передачи контекста дочерним DXRadio:
- `radioGroup.name` - имя группы
- `radioGroup.modelValue` - текущее значение
- `radioGroup.disabled` - состояние disabled
- `radioGroup.size` - размер
- `radioGroup.change(value)` - функция изменения

## See Also

- [DXRadio](../atoms/DXRadio.md)
- [DXRadioCard](./DXRadioCard.md)
- [DXButtonGroup](./DXButtonGroup.md)

---

Радио-кнопка в виде карточки для визуально выразительного выбора.

## Import

```javascript
import { DXRadioCard } from 'dxd-style-code';
```

## Props

| `value` | `String\|Number\|Boolean` | `required` | Значение опции |
| `label` | `String` | `''` | Заголовок |
| `description` | `String` | `''` | Описание |
| `icon` | `Object\|Function` | `null` | Иконка |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `variant` | `String` | `'default'` | Вариант: `'default'`, `'bordered'`, `'filled'` |
| `showRadio` | `Boolean` | `true` | Показать радио-кружок |
| `fullWidth` | `Boolean` | `false` | Растянуть на всю ширину |
| `name` | `String` | `''` | Имя группы (для form submit) |

## Events

| `change` | `any` | Альтернативное событие |

## Slots

| `icon` | Кастомная иконка |
| `extra` | Дополнительный контент |

## Usage

### Basic

```vue
<DXRadioCard
  v-model="selected"
  value="option1"
  label="Опция 1"
  description="Описание первой опции"
/>
```

### Radio Card Group

```vue
<div class="space-y-3">
  <DXRadioCard
    v-model="plan"
    value="free"
    label="Бесплатный"
    description="Для личного использования"
    :icon="GiftIcon"
  />
  <DXRadioCard
    v-model="plan"
    value="pro"
    label="Профессиональный"
    description="Для бизнеса"
    :icon="RocketLaunchIcon"
  />
  <DXRadioCard
    v-model="plan"
    value="enterprise"
    label="Корпоративный"
    description="Для крупных компаний"
    :icon="BuildingOfficeIcon"
  />
</div>
```

### Horizontal Layout

```vue
<div class="flex gap-4">
  <DXRadioCard
    v-model="size"
    value="s"
    label="S"
    class="flex-1"
  />
  <DXRadioCard
    v-model="size"
    value="m"
    label="M"
    class="flex-1"
  />
  <DXRadioCard
    v-model="size"
    value="l"
    label="L"
    class="flex-1"
  />
</div>
```

### With Price

```vue
<DXRadioCard
  v-model="plan"
  value="monthly"
  label="Ежемесячная подписка"
>
  <template #extra>
    <div class="text-xl font-bold">$9.99<span class="text-sm font-normal">/мес</span></div>
  </template>
</DXRadioCard>

<DXRadioCard
  v-model="plan"
  value="yearly"
  label="Годовая подписка"
>
  <template #extra>
    <div class="text-xl font-bold">$99.99<span class="text-sm font-normal">/год</span></div>
    <div class="text-xs text-green-600">Экономия 17%</div>
  </template>
</DXRadioCard>
```

### Without Radio Circle

```vue
<DXRadioCard
  v-model="selected"
  value="compact"
  label="Компактный вид"
  :showRadio="false"
/>
```

### Sizes

```vue
<DXRadioCard size="sm" v-model="val" value="1" label="Small" />
<DXRadioCard size="md" v-model="val" value="2" label="Medium" />
<DXRadioCard size="lg" v-model="val" value="3" label="Large" />
```

### Variants

```vue
<DXRadioCard variant="default" v-model="val" value="1" label="Default" />
<DXRadioCard variant="bordered" v-model="val" value="2" label="Bordered" />
<DXRadioCard variant="filled" v-model="val" value="3" label="Filled" />
```

### Custom Content

```vue
<DXRadioCard v-model="delivery" value="express">
  <div class="flex items-center gap-4">
    <img src="/express-icon.svg" class="w-12 h-12" />
    <div>
      <div class="font-medium">Экспресс доставка</div>
      <div class="text-sm text-slate-500">1-2 рабочих дня</div>
    </div>
    <div class="ml-auto text-lg font-bold">$15</div>
  </div>
</DXRadioCard>
```

### Disabled Options

```vue
<DXRadioCard
  v-model="plan"
  value="enterprise"
  label="Корпоративный"
  description="Свяжитесь с нами"
  disabled
/>
```

## See Also

- [DXRadio](../atoms/DXRadio.md)
- [DXRadioGroup](./DXRadioGroup.md)
- [DXCard](../atoms/DXCard.md)

---

Группа фильтров с возможностью выбора и очистки.

## Import

```javascript
import { DXFilterGroup } from 'dxd-style-code';
```

## Props

| `filters` | `Array` | `[]` | Список доступных фильтров |
| `multiple` | `Boolean` | `true` | Множественный выбор |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `variant` | `String` | `'default'` | Вариант: `'default'`, `'outline'`, `'ghost'` |
| `showClear` | `Boolean` | `true` | Показать кнопку очистки |
| `clearText` | `String` | `'Сбросить'` | Текст кнопки очистки |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `label` | `String` | `''` | Лейбл группы |

## Filter Structure

```typescript
interface Filter {
  value: string | number;   // Уникальное значение
  label: string;            // Отображаемый текст
  icon?: Component;         // Иконка (опционально)
  count?: number;           // Количество элементов (опционально)
  disabled?: boolean;       // Отключен ли фильтр
}
```

## Events

| `change` | `Array` | Альтернативное событие |
| `clear` | - | Очистка всех фильтров |

## Slots

| `clear` | - | Кастомная кнопка очистки |

## Usage

### Basic

```vue
<DXFilterGroup
  v-model="selectedFilters"
  :filters="[
    { value: 'all', label: 'Все' },
    { value: 'active', label: 'Активные' },
    { value: 'completed', label: 'Завершённые' },
    { value: 'archived', label: 'Архив' }
  ]"
/>
```

### With Counts

```vue
<DXFilterGroup
  v-model="selectedFilters"
  :filters="[
    { value: 'all', label: 'Все', count: 150 },
    { value: 'active', label: 'Активные', count: 45 },
    { value: 'pending', label: 'Ожидают', count: 12 },
    { value: 'completed', label: 'Завершённые', count: 93 }
  ]"
/>
```

### With Icons

```vue
<DXFilterGroup
  v-model="selectedFilters"
  :filters="[
    { value: 'inbox', label: 'Входящие', icon: InboxIcon },
    { value: 'sent', label: 'Отправленные', icon: PaperAirplaneIcon },
    { value: 'draft', label: 'Черновики', icon: DocumentIcon },
    { value: 'trash', label: 'Корзина', icon: TrashIcon }
  ]"
/>
```

### Single Selection

```vue
<DXFilterGroup
  v-model="selectedStatus"
  :filters="statusFilters"
  :multiple="false"
/>
```

### Without Clear Button

```vue
<DXFilterGroup
  v-model="selectedFilters"
  :filters="filters"
  :showClear="false"
/>
```

### With Label

```vue
<DXFilterGroup
  v-model="selectedFilters"
  :filters="filters"
  label="Фильтр по статусу"
/>
```

### Variants

```vue
<DXFilterGroup :filters="filters" variant="default" />
<DXFilterGroup :filters="filters" variant="outline" />
<DXFilterGroup :filters="filters" variant="ghost" />
```

### Custom Filter Render

```vue
<DXFilterGroup v-model="selected" :filters="filters">
  <template #filter="{ filter, selected }">
    <div :class="['flex items-center gap-2', selected && 'font-bold']">
      <DXIcon v-if="filter.icon" :icon="filter.icon" size="sm" />
      <span>{{ filter.label }}</span>
      <span v-if="filter.count" class="text-xs bg-slate-200 px-1.5 rounded">
        {{ filter.count }}
      </span>
    </div>
  </template>
</DXFilterGroup>
```

## See Also

- [DXButtonGroup](./DXButtonGroup.md)
- [DXSegmentedControl](./DXSegmentedControl.md)
- [DXTabs](../organisms/DXTabs.md)

---

Компонент для загрузки файлов с поддержкой drag-and-drop и предпросмотра.

## Import

```javascript
import { DXFileUpload } from 'dxd-style-code';
```

## Props

| `accept` | `String` | `''` | Допустимые типы файлов (MIME или расширения) |
| `multiple` | `Boolean` | `false` | Разрешить множественный выбор |
| `maxFiles` | `Number` | `10` | Максимум файлов |
| `maxSize` | `Number` | `5242880` | Максимальный размер файла (в байтах, default 5MB) |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `label` | `String` | `''` | Лейбл поля |
| `helper` | `String` | `''` | Вспомогательный текст |
| `error` | `String` | `''` | Текст ошибки |
| `required` | `Boolean` | `false` | Обязательное поле |
| `showPreview` | `Boolean` | `true` | Показывать превью изображений |
| `showFileList` | `Boolean` | `true` | Показывать список файлов |
| `variant` | `String` | `'default'` | Вариант: `'default'`, `'compact'`, `'button'` |
| `dropzoneText` | `String` | `'Перетащите файлы...'` | Текст в зоне drag-drop |
| `browseText` | `String` | `'Выбрать файлы'` | Текст кнопки выбора |

## Events

| `upload` | `File[]` | Новые файлы добавлены |
| `remove` | `{ file, index }` | Файл удалён |
| `error` | `{ type, file, message }` | Ошибка валидации |
| `preview` | `File` | Клик по превью файла |

## Slots

| `file` | `{ file, index, remove }` | Кастомный рендер файла |
| `preview` | `{ file }` | Кастомное превью |

## Usage

### Basic

```vue
<DXFileUpload
  v-model="files"
  label="Загрузите документы"
/>
```

### Image Upload

```vue
<DXFileUpload
  v-model="images"
  accept="image/*"
  multiple
  :maxSize="10485760"
  label="Загрузите изображения"
  helper="PNG, JPG до 10MB"
/>
```

### Single File

```vue
<DXFileUpload
  v-model="document"
  accept=".pdf,.doc,.docx"
  label="Загрузите резюме"
  helper="PDF или Word документ"
/>
```

### With Validation

```vue
<DXFileUpload
  v-model="files"
  accept="image/png,image/jpeg"
  :maxSize="2097152"
  :maxFiles="5"
  :error="errors.files"
  @error="handleUploadError"
/>

<script setup>
function handleUploadError({ type, file, message }) {
  if (type === 'size') {
    showToast(`Файл ${file.name} слишком большой`);
  } else if (type === 'type') {
    showToast(`Неподдерживаемый тип файла`);
  } else if (type === 'count') {
    showToast('Превышен лимит файлов');
  }
}
</script>
```

### Compact Variant

```vue
<DXFileUpload
  v-model="avatar"
  variant="compact"
  accept="image/*"
  label="Аватар"
/>
```

### Button Variant

```vue
<DXFileUpload
  v-model="files"
  variant="button"
  browseText="Прикрепить файлы"
/>
```

### Custom Dropzone

```vue
<DXFileUpload v-model="files">
  <template #dropzone="{ isDragActive }">
    <div :class="['p-8 border-2 border-dashed rounded-xl text-center', 
                  isDragActive ? 'border-blue-500 bg-blue-50' : 'border-slate-300']">
      <DXIcon :icon="CloudArrowUpIcon" size="xl" class="mb-2" />
      <p>{{ isDragActive ? 'Отпустите файлы' : 'Перетащите файлы сюда' }}</p>
    </div>
  </template>
</DXFileUpload>
```

### Custom File List

```vue
<DXFileUpload v-model="files" :showFileList="false">
  <template #file="{ file, index, remove }">
    <div class="flex items-center gap-2 p-2 bg-slate-100 rounded">
      <DXIcon :icon="DocumentIcon" />
      <span class="flex-1">{{ file.name }}</span>
      <span class="text-xs text-slate-500">
        {{ (file.size / 1024).toFixed(1) }} KB
      </span>
      <DXCloseButton size="xs" @click="remove" />
    </div>
  </template>
</DXFileUpload>
```

## Error Types

| `type` | Файл не соответствует accept |
| `count` | Превышен лимит maxFiles |

## See Also

- [DXInput](./DXInput.md)
- [DXFormControl](./DXFormControl.md)
- [DXProgress](../atoms/DXProgress.md)

---

Сегментированный переключатель для выбора между несколькими опциями.

## Import

```javascript
import { DXSegmentedControl } from "dxd-style-code";
```

## Props

| `options`           | `Array`                   | `required` | Список опций                                                 |
| `label`             | `String`                  | `''`       | Лейбл над контролом                                          |
| `iconAnimation`     | `String`                  | `'none'`   | Анимация иконок: `'none'`, `'wiggle'`, `'scale'`, `'rotate'` |
| `animateActiveOnly` | `Boolean`                 | `true`     | Анимировать только активную иконку                           |
| `disabled`          | `Boolean`                 | `false`    | Отключенное состояние                                        |
| `scrollable`        | `Boolean`                 | `false`    | Режим прокрутки с drag-to-scroll                             |
| `maxWidth`          | `String`                  | `null`     | Максимальная ширина при scrollable (`'300px'`, `'100%'`)     |
| `showFade`          | `Boolean`                 | `true`     | Показывать градиенты размытия по краям                       |

## Option Structure

```typescript
interface Option {
  value: string | number | boolean;
  label?: string;
  icon?: Component;
  count?: number; // Счётчик (badge)
}
```

## Events

## Usage

### Basic

```vue
<DXSegmentedControl
  v-model="view"
  :options="[
    { value: 'list', label: 'Список' },
    { value: 'grid', label: 'Сетка' },
    { value: 'table', label: 'Таблица' },
  ]"
/>
```

### With Icons

```vue
<DXSegmentedControl
  v-model="view"
  :options="[
    { value: 'list', label: 'Список', icon: ListBulletIcon },
    { value: 'grid', label: 'Сетка', icon: Squares2X2Icon },
  ]"
/>
```

### Icon Only

```vue
<DXSegmentedControl
  v-model="alignment"
  :options="[
    { value: 'left', icon: Bars3BottomLeftIcon },
    { value: 'center', icon: Bars3Icon },
    { value: 'right', icon: Bars3BottomRightIcon },
  ]"
/>
```

### With Count Badge

```vue
<DXSegmentedControl
  v-model="filter"
  :options="[
    { value: 'all', label: 'Все', count: 156 },
    { value: 'active', label: 'Активные', count: 42 },
    { value: 'completed', label: 'Завершённые', count: 114 },
  ]"
/>
```

### With Icon Animation

```vue
<DXSegmentedControl
  v-model="selected"
  :options="options"
  iconAnimation="wiggle"
/>

<!-- Анимация для всех иконок -->
<DXSegmentedControl
  v-model="selected"
  :options="options"
  iconAnimation="scale"
  :animateActiveOnly="false"
/>
```

### Scrollable Mode (New!)

Режим прокрутки без скроллбара с поддержкой drag-to-scroll (перетаскивание мышью).

```vue
<!-- Базовый scrollable -->
<DXSegmentedControl v-model="day" :options="weekDays" scrollable />

<!-- С ограниченной шириной -->
<DXSegmentedControl
  v-model="month"
  :options="[
    { value: 1, label: 'Январь' },
    { value: 2, label: 'Февраль' },
    { value: 3, label: 'Март' },
    { value: 4, label: 'Апрель' },
    { value: 5, label: 'Май' },
    { value: 6, label: 'Июнь' },
    { value: 7, label: 'Июль' },
    { value: 8, label: 'Август' },
    { value: 9, label: 'Сентябрь' },
    { value: 10, label: 'Октябрь' },
    { value: 11, label: 'Ноябрь' },
    { value: 12, label: 'Декабрь' },
  ]"
  scrollable
  maxWidth="400px"
/>
```

### Scrollable with Responsive Width

```vue
<DXSegmentedControl
  v-model="category"
  :options="manyCategories"
  scrollable
  maxWidth="100%"
/>
```

#### Scrollable Features:

- **Скрытый скроллбар** - прокрутка работает, но скроллбар не отображается
- **Drag-to-scroll** - зажмите и перетащите мышью для прокрутки
- **Автоцентрирование** - при выборе элемент автоматически центрируется
- **Защита от случайных кликов** - если был drag, клик не срабатывает
- **Градиенты по краям** - визуальная индикация возможности прокрутки (исчезают на краях)

### Without Fade Gradients

```vue
<DXSegmentedControl
  v-model="month"
  :options="months"
  scrollable
  maxWidth="300px"
  :showFade="false"
/>
```

### Disabled

```vue
<DXSegmentedControl v-model="value" :options="options" disabled />
```

### With Label

```vue
<DXSegmentedControl
  v-model="period"
  label="Период отчёта"
  :options="[
    { value: 'day', label: 'День' },
    { value: 'week', label: 'Неделя' },
    { value: 'month', label: 'Месяц' },
  ]"
/>
```

### In Toolbar

```vue
<div class="flex items-center justify-between p-4 border-b">
  <h2>Заказы</h2>
  <DXSegmentedControl
    v-model="filter"
    :options="[
      { value: 'all', label: 'Все' },
      { value: 'active', label: 'Активные' },
      { value: 'completed', label: 'Завершённые' }
    ]"
  />
</div>
```

### Date Picker Tabs

```vue
<DXSegmentedControl
  v-model="selectedDate"
  :options="
    dates.map((d) => ({
      value: d.toISOString(),
      label: formatDate(d),
    }))
  "
  scrollable
  maxWidth="300px"
/>
```

## Visual Features

- **Floating indicator** - плавный индикатор перемещается к выбранному элементу
- **Smooth transitions** - анимация длительностью 200ms
- **Icon animations** - поддержка анимаций для иконок

## Accessibility

- Поддерживает клавиатурную навигацию
- Hover и focus стили для каждого элемента
- Атрибут `disabled` отключает взаимодействие

## See Also

- [DXButtonGroup](./DXButtonGroup.md)
- [DXTabs](../organisms/DXTabs.md)
- [DXFilterGroup](./DXFilterGroup.md)

---

Иконка состояния валидации (успех, ошибка, предупреждение, информация).

## Import

```javascript
import { DXValidationIcon } from 'dxd-style-code';
```

## Props

| `size` | `String` | `'md'` | Размер: `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'` |

## Usage

### Basic

```vue
<DXValidationIcon state="success" />
<DXValidationIcon state="error" />
<DXValidationIcon state="warning" />
<DXValidationIcon state="info" />
```

### Sizes

```vue
<DXValidationIcon state="success" size="xs" />
<DXValidationIcon state="success" size="sm" />
<DXValidationIcon state="success" size="md" />
<DXValidationIcon state="success" size="lg" />
<DXValidationIcon state="success" size="xl" />
```

### In Input Field

```vue
<DXInput v-model="email" :error="emailError">
  <template #suffix>
    <DXValidationIcon 
      v-if="validationState"
      :state="validationState"
      size="sm"
    />
  </template>
</DXInput>

<script setup>
const validationState = computed(() => {
  if (!email.value) return null;
  if (emailError.value) return 'error';
  if (isValidEmail(email.value)) return 'success';
  return null;
});
</script>
```

### Form Field Status

```vue
<div class="flex items-center gap-2">
  <DXInput v-model="username" />
  <DXValidationIcon 
    v-if="usernameStatus"
    :state="usernameStatus"
  />
</div>
```

### In List

```vue
<ul class="space-y-2">
  <li v-for="rule in passwordRules" :key="rule.id" class="flex items-center gap-2">
    <DXValidationIcon 
      :state="rule.valid ? 'success' : 'error'"
      size="sm"
    />
    <span :class="rule.valid ? 'text-green-600' : 'text-slate-500'">
      {{ rule.text }}
    </span>
  </li>
</ul>
```

### Status Indicator

```vue
<div class="flex items-center gap-2">
  <DXValidationIcon :state="connectionStatus" size="sm" />
  <span>{{ connectionLabel }}</span>
</div>

<script setup>
const connectionStatus = computed(() => {
  switch (connection.value) {
    case 'connected': return 'success';
    case 'connecting': return 'warning';
    case 'error': return 'error';
    default: return 'info';
  }
});
</script>
```

### In Table Cell

```vue
<DXTable :data="tasks" :columns="columns">
  <template #cell-status="{ value }">
    <div class="flex items-center gap-2">
      <DXValidationIcon :state="getStatusState(value)" size="sm" />
      <span>{{ value }}</span>
    </div>
  </template>
</DXTable>
```

## State Configuration

| `error` | ExclamationCircleIcon | text-rose-500 |
| `warning` | ExclamationTriangleIcon | text-amber-500 |
| `info` | InformationCircleIcon | text-blue-500 |

## Animation

Иконка использует анимацию `scale` при появлении для привлечения внимания.

## See Also

- [DXAlert](./DXAlert.md)
- [DXInput](./DXInput.md)
- [DXIcon](../atoms/DXIcon.md)

---

### Навигация

Универсальный компонент меню навигации с поддержкой секций, поиска и сворачивания.

## Import

```javascript
import { DXMenu } from 'dxd-style-code';
```

## Props

| `modelValue` | `String` | `''` | Активный элемент (v-model) |
| `orientation` | `String` | `'vertical'` | Ориентация: `'vertical'`, `'horizontal'` |
| `variant` | `String` | `'default'` | Вариант: `'default'`, `'pills'`, `'underline'` |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `collapsible` | `Boolean` | `false` | Сворачиваемые секции |
| `searchable` | `Boolean` | `false` | Показать поиск |
| `searchPlaceholder` | `String` | `'Поиск...'` | Placeholder поиска |
| `accordion` | `Boolean` | `false` | Режим аккордеона (одна секция открыта) |
| `disabled` | `Boolean` | `false` | Отключить меню |
| `showIcons` | `Boolean` | `true` | Показывать иконки |
| `compact` | `Boolean` | `false` | Компактный режим |

## Menu Item Structure

```typescript
interface MenuItem {
  id: string;              // Уникальный ID
  label: string;           // Текст
  icon?: Component;        // Иконка
  href?: string;           // URL ссылки
  to?: string;             // Vue Router path
  badge?: string | number; // Бейдж
  disabled?: boolean;      // Отключен
  children?: MenuItem[];   // Вложенные элементы
  section?: string;        // Заголовок секции
  divider?: boolean;       // Разделитель
}
```

## Events

| `select` | `MenuItem` | Выбор элемента |
| `expand` | `String` | Раскрытие секции |
| `collapse` | `String` | Сворачивание секции |
| `search` | `String` | Изменение поискового запроса |

## Slots

| `icon` | `{ item }` | Кастомная иконка |
| `badge` | `{ item }` | Кастомный бейдж |
| `section-header` | `{ section }` | Заголовок секции |
| `header` | - | Контент перед меню |
| `footer` | - | Контент после меню |

## Usage

### Basic

```vue
<DXMenu
  v-model="activeItem"
  :items="[
    { id: 'home', label: 'Главная', icon: HomeIcon },
    { id: 'about', label: 'О нас', icon: InformationCircleIcon },
    { id: 'contact', label: 'Контакты', icon: EnvelopeIcon }
  ]"
/>
```

### With Sections

```vue
<DXMenu
  v-model="activeItem"
  :items="[
    { section: 'Навигация' },
    { id: 'home', label: 'Главная' },
    { id: 'dashboard', label: 'Панель' },
    { divider: true },
    { section: 'Настройки' },
    { id: 'profile', label: 'Профиль' },
    { id: 'settings', label: 'Настройки' }
  ]"
/>
```

### Nested Menu

```vue
<DXMenu
  v-model="activeItem"
  :items="[
    { id: 'home', label: 'Главная' },
    {
      id: 'products',
      label: 'Товары',
      children: [
        { id: 'catalog', label: 'Каталог' },
        { id: 'categories', label: 'Категории' },
        { id: 'brands', label: 'Бренды' }
      ]
    },
    { id: 'orders', label: 'Заказы' }
  ]"
  collapsible
/>
```

### Horizontal Menu

```vue
<DXMenu
  v-model="activeItem"
  :items="items"
  orientation="horizontal"
  variant="underline"
/>
```

### With Search

```vue
<DXMenu
  v-model="activeItem"
  :items="items"
  searchable
  searchPlaceholder="Найти страницу..."
/>
```

### With Badges

```vue
<DXMenu
  v-model="activeItem"
  :items="[
    { id: 'inbox', label: 'Входящие', icon: InboxIcon, badge: 5 },
    { id: 'sent', label: 'Отправленные', icon: PaperAirplaneIcon },
    { id: 'draft', label: 'Черновики', icon: DocumentIcon, badge: 2 }
  ]"
/>
```

### Accordion Mode

```vue
<DXMenu
  v-model="activeItem"
  :items="menuWithSections"
  collapsible
  accordion
/>
```

### Compact Mode

```vue
<DXMenu
  v-model="activeItem"
  :items="items"
  compact
  :showIcons="false"
/>
```

### With Vue Router

```vue
<DXMenu
  v-model="activeItem"
  :items="[
    { id: 'home', label: 'Главная', to: '/' },
    { id: 'users', label: 'Пользователи', to: '/users' },
    { id: 'settings', label: 'Настройки', to: '/settings' }
  ]"
/>
```

### Custom Item Render

```vue
<DXMenu v-model="activeItem" :items="items">
  <template #item="{ item, active }">
    <div :class="['flex items-center gap-3', active && 'font-bold']">
      <DXIcon v-if="item.icon" :icon="item.icon" />
      <span>{{ item.label }}</span>
      <DXTags v-if="item.badge" size="sm">{{ item.badge }}</DXTags>
    </div>
  </template>
</DXMenu>
```

## See Also

- [DXSidebarMenu](../organisms/DXSidebarMenu.md)
- [DXTabs](../organisms/DXTabs.md)
- [DXBreadcrumb](./DXBreadcrumb.md)

---

Компонент навигации "хлебные крошки" для отображения иерархии страниц.

## Import

```javascript
import { DXBreadcrumb } from 'dxd-style-code';
```

## Props

| `separator` | `String` | `'/'` | Разделитель между элементами |
| `variant` | `String` | `'default'` | Вариант ссылок: `'default'`, `'underline'`, `'muted'` |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `maxItems` | `Number` | `0` | Максимум видимых элементов (0 = все) |
| `showHomeIcon` | `Boolean` | `false` | Показать иконку дома для первого элемента |

## Items Structure

```typescript
interface BreadcrumbItem {
  label: string;      // Текст ссылки
  href?: string;      // URL (опционально)
  to?: string;        // Путь для Vue Router (опционально)
  icon?: Component;   // Иконка (опционально)
  active?: boolean;   // Текущий элемент (обычно последний)
}
```

## Slots

| `item` | `{ item, index, isLast }` | Кастомный элемент |

## Usage

### Basic

```vue
<DXBreadcrumb
  :items="[
    { label: 'Главная', href: '/' },
    { label: 'Каталог', href: '/catalog' },
    { label: 'Товар', active: true }
  ]"
/>
```

### With Vue Router

```vue
<DXBreadcrumb
  :items="[
    { label: 'Главная', to: '/' },
    { label: 'Пользователи', to: '/users' },
    { label: 'Профиль', to: '/users/123' }
  ]"
/>
```

### Custom Separator

```vue
<DXBreadcrumb
  :items="items"
  separator=">"
/>

<!-- Or with slot -->
<DXBreadcrumb :items="items">
  <template #separator>
    <DXIcon :icon="ChevronRightIcon" size="sm" />
  </template>
</DXBreadcrumb>
```

### With Icons

```vue
<script setup>
import { HomeIcon, FolderIcon, DocumentIcon } from '@heroicons/vue/24/outline';
</script>

<DXBreadcrumb
  :items="[
    { label: 'Главная', href: '/', icon: HomeIcon },
    { label: 'Проекты', href: '/projects', icon: FolderIcon },
    { label: 'Документ', active: true, icon: DocumentIcon }
  ]"
/>
```

### With Home Icon

```vue
<DXBreadcrumb
  :showHomeIcon="true"
  :items="[
    { label: 'Главная', href: '/' },
    { label: 'Настройки', href: '/settings' },
    { label: 'Профиль', active: true }
  ]"
/>
```

### Collapsed (Max Items)

```vue
<!-- Показать только первые 2 и последние 2, остальное скрыть -->
<DXBreadcrumb
  :items="longBreadcrumbs"
  :maxItems="4"
/>
```

### Variants

```vue
<DXBreadcrumb :items="items" variant="default" />
<DXBreadcrumb :items="items" variant="underline" />
<DXBreadcrumb :items="items" variant="muted" />
```

## See Also

- [DXLink](../atoms/DXLink.md)
- [DXSidebarMenu](../organisms/DXSidebarMenu.md)

---

Компонент для группировки кнопок с общим стилем и управлением выбором.

## Import

```javascript
import { DXButtonGroup } from 'dxd-style-code';
```

## Props

| `multiple` | `Boolean` | `false` | Множественный выбор |
| `size` | `String` | `'md'` | Размер кнопок: `'sm'`, `'md'`, `'lg'` |
| `variant` | `String` | `'default'` | Вариант: `'default'`, `'outline'`, `'ghost'` |
| `color` | `String` | `'default'` | Цвет: `'default'`, `'primary'`, `'secondary'`, `'success'`, `'danger'` |
| `fullWidth` | `Boolean` | `false` | Растянуть на всю ширину |
| `disabled` | `Boolean` | `false` | Отключить все кнопки |
| `orientation` | `String` | `'horizontal'` | Ориентация: `'horizontal'`, `'vertical'` |

## Events

| `change` | `String\|Array` | Альтернативное событие изменения |

## Slots

## Usage

### Basic Group

```vue
<DXButtonGroup>
  <DXButton>Левая</DXButton>
  <DXButton>Центр</DXButton>
  <DXButton>Правая</DXButton>
</DXButtonGroup>
```

### Single Selection (Radio-like)

```vue
<DXButtonGroup v-model="selected">
  <DXButton value="day">День</DXButton>
  <DXButton value="week">Неделя</DXButton>
  <DXButton value="month">Месяц</DXButton>
</DXButtonGroup>
```

### Multiple Selection

```vue
<DXButtonGroup v-model="selectedItems" multiple>
  <DXButton value="bold">B</DXButton>
  <DXButton value="italic">I</DXButton>
  <DXButton value="underline">U</DXButton>
</DXButtonGroup>
```

### Sizes

```vue
<DXButtonGroup size="sm">
  <DXButton>Маленькие</DXButton>
  <DXButton>Кнопки</DXButton>
</DXButtonGroup>

<DXButtonGroup size="md">
  <DXButton>Средние</DXButton>
  <DXButton>Кнопки</DXButton>
</DXButtonGroup>

<DXButtonGroup size="lg">
  <DXButton>Большие</DXButton>
  <DXButton>Кнопки</DXButton>
</DXButtonGroup>
```

### Variants

```vue
<DXButtonGroup variant="default">
  <DXButton>Default</DXButton>
  <DXButton>Variant</DXButton>
</DXButtonGroup>

<DXButtonGroup variant="outline">
  <DXButton>Outline</DXButton>
  <DXButton>Variant</DXButton>
</DXButtonGroup>

<DXButtonGroup variant="ghost">
  <DXButton>Ghost</DXButton>
  <DXButton>Variant</DXButton>
</DXButtonGroup>
```

### Full Width

```vue
<DXButtonGroup fullWidth>
  <DXButton>Первая</DXButton>
  <DXButton>Вторая</DXButton>
  <DXButton>Третья</DXButton>
</DXButtonGroup>
```

### Vertical Orientation

```vue
<DXButtonGroup orientation="vertical">
  <DXButton>Верхняя</DXButton>
  <DXButton>Средняя</DXButton>
  <DXButton>Нижняя</DXButton>
</DXButtonGroup>
```

### With Icons

```vue
<DXButtonGroup v-model="view">
  <DXButton value="list">
    <DXIcon :icon="ListBulletIcon" />
  </DXButton>
  <DXButton value="grid">
    <DXIcon :icon="Squares2X2Icon" />
  </DXButton>
  <DXButton value="table">
    <DXIcon :icon="TableCellsIcon" />
  </DXButton>
</DXButtonGroup>
```

## Provide/Inject

DXButtonGroup использует Vue provide/inject для передачи контекста дочерним DXButton:
- `buttonGroup.size` - размер группы
- `buttonGroup.variant` - вариант группы
- `buttonGroup.disabled` - состояние disabled
- `buttonGroup.selected` - выбранные значения
- `buttonGroup.toggle(value)` - функция переключения

## See Also

- [DXButton](../atoms/DXButton.md)
- [DXSegmentedControl](./DXSegmentedControl.md)

---

Компонент для отображения группы действий над элементом (просмотр, редактирование, удаление).

## Import

```javascript
import { DXActionButtons } from 'dxd-style-code';
```

## Props

| `showEdit` | `Boolean` | `true` | Показывать кнопку редактирования |
| `showDelete` | `Boolean` | `true` | Показывать кнопку удаления |
| `size` | `String` | `'md'` | Размер кнопок: `'sm'`, `'md'`, `'lg'` |
| `viewLabel` | `String` | `'Просмотр'` | Текст tooltip для просмотра |
| `editLabel` | `String` | `'Редактировать'` | Текст tooltip для редактирования |
| `deleteLabel` | `String` | `'Удалить'` | Текст tooltip для удаления |
| `confirmDelete` | `Boolean` | `false` | Запрашивать подтверждение удаления |
| `confirmMessage` | `String` | `'Вы уверены?'` | Сообщение подтверждения |

## Events

| `edit` | - | Клик по кнопке редактирования |
| `delete` | - | Клик по кнопке удаления (после подтверждения если включено) |

## Slots

| `after` | Контент после стандартных кнопок |

## Usage

### Basic

```vue
<DXActionButtons
  @view="handleView"
  @edit="handleEdit"
  @delete="handleDelete"
/>
```

### Only View and Edit

```vue
<DXActionButtons
  :showDelete="false"
  @view="handleView"
  @edit="handleEdit"
/>
```

### With Delete Confirmation

```vue
<DXActionButtons
  :confirmDelete="true"
  confirmMessage="Удалить этот элемент?"
  @delete="handleDelete"
/>
```

### Custom Labels

```vue
<DXActionButtons
  viewLabel="Открыть"
  editLabel="Изменить"
  deleteLabel="Убрать"
  @view="handleView"
  @edit="handleEdit"
  @delete="handleDelete"
/>
```

### In Table Row

```vue
<DXTable :data="items" :columns="columns">
  <template #cell-actions="{ row }">
    <DXActionButtons
      size="sm"
      @view="viewItem(row)"
      @edit="editItem(row)"
      @delete="deleteItem(row)"
    />
  </template>
</DXTable>
```

## See Also

- [DXButton](../atoms/DXButton.md)
- [DXTable](../organisms/DXTable.md)

---

Универсальная кнопка закрытия для модалов, алертов, тегов и других компонентов.

## Import

```javascript
import { DXCloseButton } from 'dxd-style-code';
```

## Props

| `variant` | `String` | `'ghost'` | Вариант: `'ghost'`, `'solid'`, `'outline'` |
| `color` | `String` | `'default'` | Цвет: `'default'`, `'light'`, `'dark'`, `'danger'` |
| `rounded` | `String` | `'full'` | Скругление: `'none'`, `'sm'`, `'md'`, `'lg'`, `'full'` |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `ariaLabel` | `String` | `'Закрыть'` | Aria-label для доступности |

## Events

## Usage

### Basic

```vue
<DXCloseButton @click="handleClose" />
```

### Sizes

```vue
<DXCloseButton size="xs" />
<DXCloseButton size="sm" />
<DXCloseButton size="md" />
<DXCloseButton size="lg" />
<DXCloseButton size="xl" />
```

### Variants

```vue
<DXCloseButton variant="ghost" />
<DXCloseButton variant="solid" />
<DXCloseButton variant="outline" />
```

### Colors

```vue
<DXCloseButton color="default" />
<DXCloseButton color="light" />
<DXCloseButton color="dark" />
<DXCloseButton color="danger" />
```

### In Modal Header

```vue
<div class="flex justify-between items-center">
  <h2>Заголовок модала</h2>
  <DXCloseButton size="sm" @click="closeModal" />
</div>
```

### In Alert

```vue
<DXAlert type="info" dismissible>
  <template #close>
    <DXCloseButton size="xs" color="light" @click="dismiss" />
  </template>
  Сообщение алерта
</DXAlert>
```

### In Tag

```vue
<DXTags>
  <span>Тег</span>
  <DXCloseButton size="xs" @click="removeTag" />
</DXTags>
```

### With Custom Aria Label

```vue
<DXCloseButton 
  ariaLabel="Закрыть диалог" 
  @click="closeDialog"
/>
```

## Accessibility

- Использует `<button>` элемент
- Имеет `aria-label` для screen readers
- Поддерживает фокус и клавиатурную навигацию (Enter, Space)

## See Also

- [DXModal](../organisms/DXModal.md)
- [DXAlert](./DXAlert.md)
- [DXTags](../atoms/DXTags.md)

---

Компонент пагинации для навигации по страницам.

## Import

```javascript
import { DXPagination } from 'dxd-style-code';
```

## Props

| `totalPages` | `Number` | `1` | Общее количество страниц |
| `totalItems` | `Number` | `0` | Общее количество элементов (альтернатива totalPages) |
| `perPage` | `Number` | `10` | Элементов на странице |
| `maxVisible` | `Number` | `5` | Максимум видимых кнопок страниц |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `variant` | `String` | `'default'` | Вариант: `'default'`, `'outline'`, `'ghost'` |
| `showFirstLast` | `Boolean` | `true` | Показать кнопки первой/последней страницы |
| `showPrevNext` | `Boolean` | `true` | Показать кнопки предыдущей/следующей |
| `showPageNumbers` | `Boolean` | `true` | Показать номера страниц |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `compact` | `Boolean` | `false` | Компактный режим |

## Events

| `change` | `Number` | Альтернативное событие |

## Slots

| `next` | - | Кастомная кнопка "вперёд" |
| `first` | - | Кастомная кнопка "в начало" |
| `last` | - | Кастомная кнопка "в конец" |
| `page` | `{ page, active }` | Кастомный рендер страницы |

## Usage

### Basic

```vue
<DXPagination
  v-model="currentPage"
  :totalPages="10"
/>
```

### With Total Items

```vue
<DXPagination
  v-model="currentPage"
  :totalItems="150"
  :perPage="15"
/>
```

### Sizes

```vue
<DXPagination v-model="page" :totalPages="10" size="sm" />
<DXPagination v-model="page" :totalPages="10" size="md" />
<DXPagination v-model="page" :totalPages="10" size="lg" />
```

### Variants

```vue
<DXPagination v-model="page" :totalPages="10" variant="default" />
<DXPagination v-model="page" :totalPages="10" variant="outline" />
<DXPagination v-model="page" :totalPages="10" variant="ghost" />
```

### Without First/Last

```vue
<DXPagination
  v-model="currentPage"
  :totalPages="20"
  :showFirstLast="false"
/>
```

### Compact Mode

```vue
<DXPagination
  v-model="currentPage"
  :totalPages="10"
  compact
/>
<!-- Показывает только "< 1/10 >" -->
```

### Max Visible Pages

```vue
<DXPagination
  v-model="currentPage"
  :totalPages="100"
  :maxVisible="7"
/>
<!-- Показывает: 1 ... 45 46 47 48 49 ... 100 -->
```

### Only Arrows

```vue
<DXPagination
  v-model="currentPage"
  :totalPages="10"
  :showPageNumbers="false"
/>
```

### Custom Navigation

```vue
<DXPagination v-model="currentPage" :totalPages="10">
  <template #prev>
    <span>← Назад</span>
  </template>
  <template #next>
    <span>Вперёд →</span>
  </template>
</DXPagination>
```

### With Table

```vue
<template>
  <DXTable :data="paginatedData" :columns="columns" />
  
  <div class="flex justify-between items-center mt-4">
    <span class="text-sm text-slate-500">
      Показано {{ from }}-{{ to }} из {{ total }}
    </span>
    <DXPagination
      v-model="currentPage"
      :totalItems="total"
      :perPage="perPage"
    />
  </div>
</template>
```

### Controlled

```vue
<DXPagination
  :modelValue="currentPage"
  :totalPages="totalPages"
  @update:modelValue="handlePageChange"
/>

<script setup>
async function handlePageChange(page) {
  loading.value = true;
  await fetchData(page);
  currentPage.value = page;
  loading.value = false;
}
</script>
```

## Keyboard Navigation

- `←` / `→` - предыдущая/следующая страница
- `Home` - первая страница
- `End` - последняя страница

## See Also

- [DXTablePagination](./DXTablePagination.md)
- [DXTable](../organisms/DXTable.md)

---

### Отображение

Компонент для отображения информационных, предупреждающих и ошибочных сообщений.

## Import

```javascript
import { DXAlert } from 'dxd-style-code';
```

## Props

| `title` | `String` | `''` | Заголовок алерта |
| `message` | `String` | `''` | Основной текст сообщения |
| `icon` | `Object\|Function` | `null` | Кастомная иконка (HeroIcon) |
| `showIcon` | `Boolean` | `true` | Показывать иконку |
| `dismissible` | `Boolean` | `false` | Показать кнопку закрытия |
| `variant` | `String` | `'solid'` | Вариант отображения: `'solid'`, `'outline'`, `'ghost'` |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `rounded` | `String` | `'md'` | Скругление: `'none'`, `'sm'`, `'md'`, `'lg'`, `'xl'`, `'full'` |

## Events

## Slots

| `icon` | Кастомная иконка |
| `title` | Кастомный заголовок |
| `actions` | Действия справа от сообщения |

## Usage

### Basic Types

```vue
<DXAlert type="info" title="Информация" message="Это информационное сообщение" />
<DXAlert type="success" title="Успех" message="Операция выполнена успешно" />
<DXAlert type="warning" title="Внимание" message="Требуется ваше внимание" />
<DXAlert type="danger" title="Ошибка" message="Произошла ошибка" />
```

### Dismissible Alert

```vue
<DXAlert
  type="info"
  title="Уведомление"
  message="Это уведомление можно закрыть"
  dismissible
  @dismiss="handleDismiss"
/>
```

### Variants

```vue
<DXAlert type="success" variant="solid" message="Solid вариант" />
<DXAlert type="success" variant="outline" message="Outline вариант" />
<DXAlert type="success" variant="ghost" message="Ghost вариант" />
```

### With Actions

```vue
<DXAlert type="warning" title="Подтвердите действие">
  Вы уверены, что хотите продолжить?
  
  <template #actions>
    <DXButton size="sm" variant="ghost" @click="cancel">Отмена</DXButton>
    <DXButton size="sm" @click="confirm">Подтвердить</DXButton>
  </template>
</DXAlert>
```

### With Slot Content

```vue
<DXAlert type="info" title="Подробности">
  <ul>
    <li>Пункт 1</li>
    <li>Пункт 2</li>
    <li>Пункт 3</li>
  </ul>
</DXAlert>
```

## Type Icons (Default)

- `info` - InformationCircleIcon (синий)
- `success` - CheckCircleIcon (зелёный)
- `warning` - ExclamationTriangleIcon (жёлтый)
- `danger` - XCircleIcon (красный)

## See Also

- [DXToast](../atoms/DXToast.md)
- [DXValidationIcon](./DXValidationIcon.md)

---

Карточка для отображения статистических данных с трендом.

## Import

```javascript
import { DXStatCard } from 'dxd-style-code';
```

## Props

| `value` | `String\|Number` | `''` | Значение метрики |
| `previousValue` | `Number` | `null` | Предыдущее значение для расчёта тренда |
| `trend` | `Number` | `null` | Процент изменения (альтернатива previousValue) |
| `trendDirection` | `String` | `'auto'` | Направление: `'auto'`, `'up'`, `'down'`, `'neutral'` |
| `trendLabel` | `String` | `''` | Текст тренда (например, "vs last month") |
| `icon` | `Object\|Function` | `null` | Иконка |
| `iconColor` | `String` | `'default'` | Цвет иконки: `'default'`, `'primary'`, `'success'`, `'warning'`, `'danger'` |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `variant` | `String` | `'default'` | Вариант: `'default'`, `'bordered'`, `'filled'` |
| `loading` | `Boolean` | `false` | Состояние загрузки |
| `prefix` | `String` | `''` | Префикс значения (например, "$") |
| `suffix` | `String` | `''` | Суффикс значения (например, "%") |

## Events

## Slots

| `value` | Кастомное значение |
| `trend` | Кастомный тренд |
| `footer` | Футер карточки |

## Usage

### Basic

```vue
<DXStatCard
  title="Выручка"
  value="$12,456"
  :trend="12.5"
  trendLabel="vs прошлый месяц"
/>
```

### With Icon

```vue
<DXStatCard
  title="Пользователи"
  value="1,234"
  :icon="UsersIcon"
  :trend="8.3"
/>
```

### With Previous Value (Auto Trend)

```vue
<DXStatCard
  title="Продажи"
  :value="1500"
  :previousValue="1200"
  prefix="$"
/>
<!-- Автоматически покажет +25% -->
```

### Negative Trend

```vue
<DXStatCard
  title="Возвраты"
  value="23"
  :trend="-5.2"
  trendLabel="vs прошлая неделя"
/>
```

### Sizes

```vue
<DXStatCard size="sm" title="Small" value="123" />
<DXStatCard size="md" title="Medium" value="456" />
<DXStatCard size="lg" title="Large" value="789" />
```

### Icon Colors

```vue
<DXStatCard title="Успех" value="95%" :icon="CheckIcon" iconColor="success" />
<DXStatCard title="Внимание" value="12" :icon="ExclamationIcon" iconColor="warning" />
<DXStatCard title="Ошибки" value="3" :icon="XMarkIcon" iconColor="danger" />
```

### Loading State

```vue
<DXStatCard
  title="Загрузка..."
  loading
/>
```

### With Prefix/Suffix

```vue
<DXStatCard
  title="Средний чек"
  value="2,345"
  prefix="₽"
/>

<DXStatCard
  title="Конверсия"
  value="4.5"
  suffix="%"
/>
```

### With Footer

```vue
<DXStatCard title="Заказы" value="156">
  <template #footer>
    <DXLink href="/orders">Посмотреть все →</DXLink>
  </template>
</DXStatCard>
```

### Dashboard Grid

```vue
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <DXStatCard
    title="Выручка"
    value="$45,231"
    :trend="12.5"
    :icon="CurrencyDollarIcon"
    iconColor="success"
  />
  <DXStatCard
    title="Заказы"
    value="356"
    :trend="8.2"
    :icon="ShoppingBagIcon"
    iconColor="primary"
  />
  <DXStatCard
    title="Клиенты"
    value="2,103"
    :trend="3.1"
    :icon="UsersIcon"
  />
  <DXStatCard
    title="Конверсия"
    value="3.24%"
    :trend="-0.5"
    :icon="ChartBarIcon"
    iconColor="warning"
  />
</div>
```

### Clickable

```vue
<DXStatCard
  title="Активные задачи"
  value="12"
  class="cursor-pointer hover:shadow-md transition-shadow"
  @click="goToTasks"
/>
```

### Custom Value Format

```vue
<DXStatCard title="Средняя оценка">
  <template #value>
    <div class="flex items-center gap-2">
      <span class="text-3xl font-bold">4.8</span>
      <DXRating :modelValue="4.8" readonly size="sm" />
    </div>
  </template>
</DXStatCard>
```

### With Sparkline

```vue
<DXStatCard title="Продажи" value="$12,456">
  <template #footer>
    <div class="h-12">
      <SparklineChart :data="salesData" />
    </div>
  </template>
</DXStatCard>
```

## See Also

- [DXCard](../atoms/DXCard.md)
- [DXProgress](../atoms/DXProgress.md)
- [DXSkeleton](../atoms/DXSkeleton.md)

---

Расширенная поисковая строка с историей, подсказками и фильтрами.

## Import

```javascript
import { DXSearchBar } from 'dxd-style-code';
```

## Props

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

| `search` | `String` | Выполнение поиска (с debounce) |
| `submit` | `String` | Отправка формы (Enter или кнопка) |
| `clear` | - | Очистка поля |
| `select-suggestion` | `Object` | Выбор подсказки |
| `select-history` | `String` | Выбор из истории |
| `remove-history` | `String` | Удаление из истории |
| `focus` | `Event` | Фокус |
| `blur` | `Event` | Потеря фокуса |

## Slots

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

---

Поле с кнопкой для копирования значения в буфер обмена.

## Import

```javascript
import { DXCopyField } from 'dxd-style-code';
```

## Props

| `label` | `String` | `''` | Лейбл поля |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `variant` | `String` | `'default'` | Вариант: `'default'`, `'outline'`, `'ghost'` |
| `truncate` | `Boolean` | `true` | Обрезать длинный текст |
| `showTooltip` | `Boolean` | `true` | Показать tooltip при копировании |
| `successText` | `String` | `'Скопировано!'` | Текст успеха |
| `buttonText` | `String` | `''` | Текст кнопки (по умолчанию иконка) |
| `disabled` | `Boolean` | `false` | Отключенное состояние |

## Events

| `error` | `Error` | Ошибка копирования |

## Slots

| `suffix` | Контент после значения (перед кнопкой) |
| `button` | Кастомная кнопка копирования |

## Usage

### Basic

```vue
<DXCopyField value="https://example.com/invite/abc123" />
```

### With Label

```vue
<DXCopyField
  label="Ссылка для приглашения"
  value="https://example.com/invite/abc123"
/>
```

### API Key

```vue
<DXCopyField
  label="API Key"
  value="sk-1234567890abcdef"
  variant="outline"
/>
```

### With Prefix

```vue
<DXCopyField value="user@example.com">
  <template #prefix>
    <DXIcon :icon="EnvelopeIcon" size="sm" class="text-slate-400" />
  </template>
</DXCopyField>
```

### Sizes

```vue
<DXCopyField size="sm" value="Маленький" />
<DXCopyField size="md" value="Средний" />
<DXCopyField size="lg" value="Большой" />
```

### With Button Text

```vue
<DXCopyField
  value="promo2024"
  buttonText="Копировать код"
/>
```

### Custom Success Message

```vue
<DXCopyField
  value="ABC-123-XYZ"
  successText="Код скопирован в буфер!"
  @copy="showNotification"
/>
```

### In Form

```vue
<DXFormControl label="Реферальная ссылка">
  <DXCopyField
    :value="`https://app.example.com/ref/${userId}`"
    @copy="trackCopy"
  />
</DXFormControl>
```

### Without Truncation

```vue
<DXCopyField
  :truncate="false"
  value="Это очень длинное значение которое не будет обрезаться и покажется полностью"
/>
```

## Accessibility

- Кнопка имеет `aria-label` для screen readers
- Поддерживает клавиатурную навигацию
- Уведомляет о результате через `aria-live`

## See Also

- [DXInput](./DXInput.md)
- [DXButton](../atoms/DXButton.md)
- [DXTooltip](../atoms/DXTooltip.md)

---

Компонент рейтинга с поддержкой звёзд, сердец и других символов.

## Import

```javascript
import { DXRating } from 'dxd-style-code';
```

## Props

| `max` | `Number` | `5` | Максимальное значение |
| `size` | `String` | `'md'` | Размер: `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'` |
| `symbol` | `String` | `'star'` | Символ: `'star'`, `'heart'`, `'custom'` |
| `icon` | `Object\|Function` | `null` | Кастомная иконка (для symbol='custom') |
| `activeColor` | `String` | `'text-amber-400'` | Цвет активных элементов |
| `inactiveColor` | `String` | `'text-slate-300'` | Цвет неактивных элементов |
| `readonly` | `Boolean` | `false` | Только для чтения |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `allowHalf` | `Boolean` | `false` | Разрешить половинные значения |
| `allowClear` | `Boolean` | `true` | Разрешить сброс до 0 |
| `showValue` | `Boolean` | `false` | Показать числовое значение |
| `label` | `String` | `''` | Лейбл |

## Events

| `change` | `Number` | Альтернативное событие |
| `hover` | `Number` | Наведение на элемент |

## Slots

| `value` | `{ value, max }` | Кастомное отображение значения |

## Usage

### Basic

```vue
<DXRating v-model="rating" />
```

### With Label

```vue
<DXRating v-model="rating" label="Оцените товар" />
```

### Sizes

```vue
<DXRating v-model="rating" size="xs" />
<DXRating v-model="rating" size="sm" />
<DXRating v-model="rating" size="md" />
<DXRating v-model="rating" size="lg" />
<DXRating v-model="rating" size="xl" />
```

### Symbols

```vue
<!-- Звёзды (по умолчанию) -->
<DXRating v-model="rating" symbol="star" />

<!-- Сердца -->
<DXRating v-model="rating" symbol="heart" />

<!-- Кастомный -->
<DXRating v-model="rating" symbol="custom" :icon="FireIcon" />
```

### Half Values

```vue
<DXRating
  v-model="rating"
  allowHalf
/>
<!-- Позволяет устанавливать 0.5, 1.5, 2.5 и т.д. -->
```

### Custom Max

```vue
<DXRating v-model="rating" :max="10" />
```

### Colors

```vue
<DXRating
  v-model="rating"
  activeColor="text-rose-500"
  inactiveColor="text-rose-200"
/>
```

### Readonly

```vue
<DXRating v-model="rating" readonly />
```

### With Value Display

```vue
<DXRating v-model="rating" showValue />
<!-- Показывает: ★★★★☆ 4/5 -->
```

### Custom Value Display

```vue
<DXRating v-model="rating" showValue>
  <template #value="{ value, max }">
    <span class="ml-2 text-sm font-medium">
      {{ value.toFixed(1) }} из {{ max }}
    </span>
  </template>
</DXRating>
```

### In Review Form

```vue
<div class="space-y-4">
  <DXFormControl label="Качество">
    <DXRating v-model="review.quality" />
  </DXFormControl>
  
  <DXFormControl label="Сервис">
    <DXRating v-model="review.service" />
  </DXFormControl>
  
  <DXFormControl label="Соотношение цена/качество">
    <DXRating v-model="review.value" />
  </DXFormControl>
</div>
```

### Average Rating Display

```vue
<div class="flex items-center gap-2">
  <DXRating :modelValue="4.5" readonly allowHalf size="sm" />
  <span class="text-lg font-bold">4.5</span>
  <span class="text-slate-500">(128 отзывов)</span>
</div>
```

### Compact Inline

```vue
<div class="flex items-center gap-1">
  <DXRating :modelValue="4" readonly size="xs" />
  <span class="text-xs">4.0</span>
</div>
```

## Accessibility

- Поддерживает клавиатурную навигацию (←, →)
- Имеет `role="slider"` и соответствующие ARIA атрибуты
- `aria-valuenow`, `aria-valuemin`, `aria-valuemax`

## See Also

- [DXProgress](../atoms/DXProgress.md)
- [DXIcon](../atoms/DXIcon.md)

---

Разделитель для визуального разделения групп элементов в выпадающих меню.

## Import

```javascript
import { DXDropdownDivider } from 'dxd-style-code';
```

## Props

| `thickness` | `String` | `'default'` | Толщина: `'thin'`, `'default'`, `'thick'` |

## Usage

### Basic

```vue
<DXDropdown>
  <DXDropdownItem>Пункт 1</DXDropdownItem>
  <DXDropdownItem>Пункт 2</DXDropdownItem>
  <DXDropdownDivider />
  <DXDropdownItem>Пункт 3</DXDropdownItem>
</DXDropdown>
```

### With Colors

```vue
<DXDropdownDivider color="light" />
<DXDropdownDivider color="default" />
<DXDropdownDivider color="dark" />
```

### With Thickness

```vue
<DXDropdownDivider thickness="thin" />
<DXDropdownDivider thickness="default" />
<DXDropdownDivider thickness="thick" />
```

### In Menu Groups

```vue
<DXDropdown>
  <template #header>
    <span class="text-xs text-slate-500 px-2">Аккаунт</span>
  </template>
  
  <DXDropdownItem :icon="UserIcon">Профиль</DXDropdownItem>
  <DXDropdownItem :icon="CogIcon">Настройки</DXDropdownItem>
  
  <DXDropdownDivider />
  
  <DXDropdownItem :icon="ArrowRightOnRectangleIcon" variant="danger">
    Выйти
  </DXDropdownItem>
</DXDropdown>
```

## Implementation

Компонент использует `DXDivider` внутри с предустановленными значениями:
- `spacing="none"` - без отступов
- `orientation="horizontal"` - горизонтальная ориентация

## See Also

- [DXDropdown](../organisms/DXDropdown.md)
- [DXDropdownItem](../atoms/DXDropdownItem.md)
- [DXDivider](../atoms/DXDivider.md)

---

### Таблицы (части)

Панель инструментов для таблицы с поиском, фильтрами и управлением колонками.

## Import

```javascript
import { DXTableToolbar } from 'dxd-style-code';
```

## Props

| `searchable` | `Boolean` | `false` | Показать поиск |
| `selectedCount` | `Number` | `0` | Количество выбранных строк |
| `columnToggle` | `Boolean` | `false` | Показать переключатель колонок |
| `columns` | `Array` | `[]` | Список колонок с информацией о видимости |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |

## Column Structure

```typescript
interface Column {
  key: string;       // Уникальный ключ
  label: string;     // Отображаемое название
  visible: boolean;  // Видимость
}
```

## Events

| `toggle-column` | `String` | Переключение видимости колонки (key) |

## Slots

| `right` | Контент в правой части (перед колонками) |

## Usage

### Basic with Search

```vue
<DXTableToolbar
  v-model:searchQuery="search"
  searchable
/>

<DXTable :data="filteredData" :columns="columns" />
```

### With Column Toggle

```vue
<DXTableToolbar
  v-model:searchQuery="search"
  searchable
  columnToggle
  :columns="columnsWithVisibility"
  @toggle-column="toggleColumn"
/>

<script setup>
const columnsWithVisibility = ref([
  { key: 'name', label: 'Имя', visible: true },
  { key: 'email', label: 'Email', visible: true },
  { key: 'role', label: 'Роль', visible: true },
  { key: 'created', label: 'Дата создания', visible: false }
]);

function toggleColumn(key) {
  const col = columnsWithVisibility.value.find(c => c.key === key);
  if (col) col.visible = !col.visible;
}
</script>
```

### With Selection Info

```vue
<DXTableToolbar
  v-model:searchQuery="search"
  searchable
  :selectedCount="selectedRows.length"
/>

<DXTable
  :data="data"
  :columns="columns"
  selectable
  v-model:selected="selectedRows"
/>
```

### With Custom Actions

```vue
<DXTableToolbar
  v-model:searchQuery="search"
  searchable
  :selectedCount="selected.length"
>
  <template #left>
    <DXFilterGroup
      v-model="filters"
      :filters="statusFilters"
      size="sm"
    />
  </template>
  
  <template #right>
    <DXButton v-if="selected.length" variant="ghost" size="sm" @click="deleteSelected">
      <DXIcon :icon="TrashIcon" />
      Удалить
    </DXButton>
    <DXButton size="sm" @click="addNew">
      <DXIcon :icon="PlusIcon" />
      Добавить
    </DXButton>
  </template>
</DXTableToolbar>
```

### Full Example

```vue
<template>
  <div class="border rounded-xl">
    <DXTableToolbar
      v-model:searchQuery="search"
      searchable
      columnToggle
      :columns="columnsConfig"
      :selectedCount="selected.length"
      @toggle-column="toggleColumn"
    >
      <template #left>
        <DXSegmentedControl
          v-model="statusFilter"
          :options="['Все', 'Активные', 'Архив']"
          size="sm"
        />
      </template>
      
      <template #right>
        <DXButton size="sm" variant="outline" @click="exportData">
          <DXIcon :icon="ArrowDownTrayIcon" />
          Экспорт
        </DXButton>
      </template>
    </DXTableToolbar>
    
    <DXTable
      :data="filteredData"
      :columns="visibleColumns"
      selectable
      v-model:selected="selected"
    />
    
    <DXTablePagination
      v-model:currentPage="page"
      v-model:pageSize="pageSize"
      :totalPages="totalPages"
      :from="from"
      :to="to"
      :total="total"
    />
  </div>
</template>
```

### Sizes

```vue
<DXTableToolbar size="sm" searchable />
<DXTableToolbar size="md" searchable />
<DXTableToolbar size="lg" searchable />
```

## See Also

- [DXTable](../organisms/DXTable.md)
- [DXTablePagination](./DXTablePagination.md)
- [DXInput](./DXInput.md)

---

Специализированный компонент пагинации для таблиц с информацией о записях и размере страницы.

## Import

```javascript
import { DXTablePagination } from 'dxd-style-code';
```

## Props

| `totalPages` | `Number` | `required` | Общее количество страниц |
| `pageSize` | `Number` | `required` | Размер страницы (v-model:pageSize) |
| `pageSizeOptions` | `Array` | `[10, 25, 50, 100]` | Опции размера страницы |
| `from` | `Number` | `required` | Номер первого элемента на странице |
| `to` | `Number` | `required` | Номер последнего элемента на странице |
| `total` | `Number` | `required` | Общее количество элементов |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |

## Events

| `update:pageSize` | `Number` | Изменение размера страницы |

## Usage

### Basic

```vue
<DXTablePagination
  v-model:currentPage="currentPage"
  v-model:pageSize="pageSize"
  :totalPages="totalPages"
  :from="from"
  :to="to"
  :total="total"
/>
```

### Complete Example

```vue
<template>
  <DXTable :data="paginatedData" :columns="columns" />
  
  <DXTablePagination
    v-model:currentPage="currentPage"
    v-model:pageSize="pageSize"
    :totalPages="totalPages"
    :from="from"
    :to="to"
    :total="data.length"
  />
</template>

<script setup>
import { ref, computed } from 'vue';

const data = ref([/* ... 150 items ... */]);
const currentPage = ref(1);
const pageSize = ref(10);

const totalPages = computed(() => 
  Math.ceil(data.value.length / pageSize.value)
);

const from = computed(() => 
  (currentPage.value - 1) * pageSize.value + 1
);

const to = computed(() => 
  Math.min(currentPage.value * pageSize.value, data.value.length)
);

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  return data.value.slice(start, start + pageSize.value);
});
</script>
```

### Custom Page Size Options

```vue
<DXTablePagination
  v-model:currentPage="page"
  v-model:pageSize="size"
  :totalPages="100"
  :pageSizeOptions="[5, 10, 20, 50, 100]"
  :from="1"
  :to="5"
  :total="500"
/>
```

### Sizes

```vue
<DXTablePagination size="sm" ... />
<DXTablePagination size="md" ... />
<DXTablePagination size="lg" ... />
```

### With Loading State

```vue
<template>
  <DXTable :data="data" :columns="columns" :loading="isLoading" />
  
  <DXTablePagination
    v-model:currentPage="currentPage"
    v-model:pageSize="pageSize"
    :totalPages="totalPages"
    :from="from"
    :to="to"
    :total="total"
    :disabled="isLoading"
  />
</template>

<script setup>
async function handlePageChange(page) {
  isLoading.value = true;
  await fetchData({ page, pageSize: pageSize.value });
  isLoading.value = false;
}
</script>
```

### Server-Side Pagination

```vue
<template>
  <DXTable :data="serverData" :columns="columns" :loading="loading" />
  
  <DXTablePagination
    :currentPage="pagination.page"
    :pageSize="pagination.perPage"
    :totalPages="pagination.totalPages"
    :from="pagination.from"
    :to="pagination.to"
    :total="pagination.total"
    @update:currentPage="handlePageChange"
    @update:pageSize="handlePageSizeChange"
  />
</template>

<script setup>
const pagination = ref({
  page: 1,
  perPage: 10,
  total: 0,
  totalPages: 0,
  from: 0,
  to: 0
});

async function fetchData() {
  loading.value = true;
  const response = await api.getItems({
    page: pagination.value.page,
    perPage: pagination.value.perPage
  });
  
  serverData.value = response.data;
  pagination.value = response.meta;
  loading.value = false;
}

function handlePageChange(page) {
  pagination.value.page = page;
  fetchData();
}

function handlePageSizeChange(size) {
  pagination.value.perPage = size;
  pagination.value.page = 1; // Сбросить на первую страницу
  fetchData();
}
</script>
```

## Display Format

Компонент отображает:
- Слева: "Показано X-Y из Z" 
- Справа: Пагинация + Селект размера страницы

## See Also

- [DXPagination](./DXPagination.md)
- [DXTable](../organisms/DXTable.md)
- [DXSelect](./DXSelect.md)

---

---

## Organisms (Организмы) - 27 компонентов

Сложные UI структуры, композиции молекул и атомов.

### Основные

Полнофункциональный компонент таблицы данных с сортировкой, фильтрацией, пагинацией и выбором.

## Import

```javascript
import { DXTable } from 'dxd-style-code';
```

## Props

### Data Props

| `data` | `Array` | `[]` | Данные таблицы |
| `mode` | `String` | `'local'` | Режим данных: `'local'`, `'api'` |
| `apiUrl` | `String` | - | URL для API режима |
| `apiMethod` | `String` | `'GET'` | HTTP метод |
| `apiParams` | `Object` | `{}` | Дополнительные параметры API |

### Features Props

| `filterable` | `Boolean` | `false` | Включить фильтры |
| `sortable` | `Boolean` | `true` | Включить сортировку |
| `paginated` | `Boolean` | `true` | Включить пагинацию |
| `selectable` | `Boolean` | `false` | Включить выбор строк |
| `groupBy` | `String` | - | Группировка по полю |

### UI Props

| `height` | `String` | - | Фиксированная высота |
| `stickyHeader` | `Boolean` | `true` | Закреплённый заголовок |
| `striped` | `Boolean` | `false` | Чередование цвета строк |
| `bordered` | `Boolean` | `false` | Границы ячеек |
| `hoverable` | `Boolean` | `true` | Подсветка при наведении |
| `dense` | `Boolean` | `false` | Компактный режим |

### Toolbar Props

| `columnToggle` | `Boolean` | `false` | Переключатель колонок |
| `actions` | `Boolean` | `false` | Показывать колонку действий |

### Pagination Props

| `pageSizeOptions` | `Array` | `[10, 25, 50, 100]` | Опции размера страницы |

### Other Props

| `loading` | `Boolean` | `false` | Состояние загрузки |

## Column Structure

```typescript
interface Column {
  key: string;                    // Ключ данных
  label: string;                  // Заголовок
  sortable?: boolean;             // Можно сортировать
  filterable?: boolean;           // Можно фильтровать
  filterOptions?: Array;          // Опции фильтра
  width?: string;                 // Ширина ('100px', '20%')
  align?: 'left'|'center'|'right'; // Выравнивание
  format?: (value, row) => string; // Форматирование
  visible?: boolean;              // Видимость (default: true)
}
```

## Events

| `row-select` | `{ id, selected }` | Выбор строки |
| `select-all` | `Boolean` | Выбор всех строк |
| `sort` | `{ column, direction }` | Сортировка |
| `filter` | `{ column, value }` | Фильтрация |
| `filter-clear` | - | Очистка фильтров |
| `page-change` | `Number` | Изменение страницы |
| `page-size-change` | `Number` | Изменение размера страницы |
| `edit` | `row` | Редактирование строки |
| `delete` | `row` | Удаление строки |
| `data-loaded` | `data` | Данные загружены (API режим) |
| `error` | `Error` | Ошибка загрузки |

## Slots

| `header-{key}` | `{ column }` | Кастомный заголовок |
| `toolbar-actions` | - | Действия в тулбаре |
| `empty` | - | Пустое состояние |
| `loading` | - | Состояние загрузки |

## Usage

### Basic

```vue
<DXTable
  :columns="[
    { key: 'name', label: 'Имя' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Роль' }
  ]"
  :data="users"
/>
```

### With Search and Filters

```vue
<DXTable
  :columns="columns"
  :data="data"
  searchable
  filterable
/>
```

### With Selection

```vue
<DXTable
  :columns="columns"
  :data="data"
  selectable
  @row-select="handleSelect"
  @select-all="handleSelectAll"
/>
```

### With Actions Column

```vue
<DXTable
  :columns="columns"
  :data="data"
  actions
  @edit="handleEdit"
  @delete="handleDelete"
/>
```

### Custom Cell Render

```vue
<DXTable :columns="columns" :data="data">
  <template #cell-status="{ value }">
    <DXTags :variant="getStatusVariant(value)">
      {{ value }}
    </DXTags>
  </template>
  
  <template #cell-avatar="{ row }">
    <img :src="row.avatar" class="w-8 h-8 rounded-full" />
  </template>
</DXTable>
```

### With Column Toggle

```vue
<DXTable
  :columns="columns"
  :data="data"
  columnToggle
/>
```

### Striped and Bordered

```vue
<DXTable
  :columns="columns"
  :data="data"
  striped
  bordered
/>
```

### Fixed Height with Scroll

```vue
<DXTable
  :columns="columns"
  :data="data"
  height="400px"
  stickyHeader
/>
```

### Server-Side Mode

```vue
<DXTable
  mode="api"
  apiUrl="/api/users"
  :columns="columns"
  @data-loaded="handleDataLoaded"
  @error="handleError"
/>
```

### With Default Sort

```vue
<DXTable
  :columns="columns"
  :data="data"
  :defaultSort="{ column: 'createdAt', direction: 'desc' }"
/>
```

### Toolbar Actions

```vue
<DXTable :columns="columns" :data="data" searchable>
  <template #toolbar-actions>
    <DXButton size="sm" @click="exportData">
      <DXIcon :icon="ArrowDownTrayIcon" />
      Экспорт
    </DXButton>
    <DXButton size="sm" @click="addNew">
      <DXIcon :icon="PlusIcon" />
      Добавить
    </DXButton>
  </template>
</DXTable>
```

## Composables Used

- `useTableData` - управление данными
- `useTableSort` - сортировка
- `useTableFilter` - фильтрация
- `useTablePagination` - пагинация
- `useTableSelection` - выбор строк
- `useTableColumns` - управление колонками

## See Also

- [DXTableToolbar](../molecules/DXTableToolbar.md)
- [DXTablePagination](../molecules/DXTablePagination.md)
- [DXPagination](../molecules/DXPagination.md)

---

Базовый компонент таблицы без тулбара и пагинации. Используется внутри DXTable.

## Import

```javascript
import { DXBaseTable } from 'dxd-style-code';
```

## Props

| `data` | `Array` | `[]` | Данные таблицы |
| `sortBy` | `String` | `null` | Колонка сортировки |
| `sortDirection` | `String` | `'asc'` | Направление: `'asc'`, `'desc'` |
| `selectable` | `Boolean` | `false` | Включить выбор строк |
| `selectedRows` | `Array` | `[]` | Выбранные строки |
| `actions` | `Boolean` | `false` | Показывать колонку действий |
| `filterable` | `Boolean` | `false` | Включить фильтры в заголовках |
| `filters` | `Object` | `{}` | Текущие фильтры |
| `groupBy` | `String` | `null` | Группировка по полю |
| `height` | `String` | `null` | Фиксированная высота |
| `stickyHeader` | `Boolean` | `true` | Закреплённый заголовок |
| `striped` | `Boolean` | `false` | Чередование цвета строк |
| `bordered` | `Boolean` | `false` | Границы ячеек |
| `hoverable` | `Boolean` | `true` | Подсветка при наведении |
| `dense` | `Boolean` | `false` | Компактный режим |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |
| `loading` | `Boolean` | `false` | Состояние загрузки |

## Events

| `filter` | `{ column, value }` | Фильтрация |
| `row-click` | `row` | Клик по строке |
| `row-select` | `{ id, selected }` | Выбор строки |
| `select-all` | `Boolean` | Выбор всех строк |
| `edit` | `row` | Редактирование строки |
| `delete` | `row` | Удаление строки |

## Slots

| `header-{key}` | `{ column }` | Кастомный заголовок |
| `empty` | - | Пустое состояние |
| `loading` | - | Состояние загрузки |

## Usage

### Basic

```vue
<DXBaseTable
  :columns="[
    { key: 'name', label: 'Имя' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Роль' }
  ]"
  :data="users"
/>
```

### With Sorting

```vue
<DXBaseTable
  :columns="columns"
  :data="data"
  :sortBy="sortColumn"
  :sortDirection="sortDirection"
  @sort="handleSort"
/>
```

### With Selection

```vue
<DXBaseTable
  :columns="columns"
  :data="data"
  selectable
  :selectedRows="selected"
  @row-select="handleSelect"
  @select-all="handleSelectAll"
/>
```

### With Actions

```vue
<DXBaseTable
  :columns="columns"
  :data="data"
  actions
  @edit="handleEdit"
  @delete="handleDelete"
/>
```

### Styled Variants

```vue
<DXBaseTable :columns="columns" :data="data" striped />
<DXBaseTable :columns="columns" :data="data" bordered />
<DXBaseTable :columns="columns" :data="data" dense />
```

### Custom Cells

```vue
<DXBaseTable :columns="columns" :data="data">
  <template #cell-status="{ value }">
    <DXTags :variant="getStatusVariant(value)">
      {{ value }}
    </DXTags>
  </template>
</DXBaseTable>
```

Обычно используется через DXTable, который добавляет тулбар и пагинацию.

## See Also

- [DXTable](./DXTable.md)
- [DXDataTable](./DXDataTable.md)

---

Таблица данных с расширенными возможностями (алиас для DXTable).

## Import

```javascript
import { DXDataTable } from 'dxd-style-code';
```

## Description

DXDataTable является алиасом для DXTable и предоставляет те же функции:
- Сортировка
- Фильтрация
- Пагинация
- Выбор строк
- Группировка

Для полной документации смотрите [DXTable](./DXTable.md).

## Usage

```vue
<DXDataTable
  :columns="columns"
  :data="data"
  searchable
  filterable
  paginated
/>
```

## See Also

- [DXTable](./DXTable.md)
- [DXBaseTable](./DXBaseTable.md)

---

Модальное окно с различными вариантами отображения.

## Import

```javascript
import { DXModal } from 'dxd-style-code';
```

## Props

| `variant` | `String` | `'modal'` | Вариант: `'modal'`, `'fullscreen'`, `'sidebar-right'`, `'half-right'` |
| `width` | `String` | `'md'` | Ширина (для modal): `'sm'`, `'md'`, `'lg'`, `'xl'` |
| `closable` | `Boolean` | `true` | Можно ли закрыть |
| `showModeSwitcher` | `Boolean` | `false` | Показывать переключатель режимов |
| `backdropBlur` | `String` | `'sm'` | Размытие: `'none'`, `'sm'`, `'md'`, `'lg'`, `'xl'` |
| `backdropOpacity` | `String\|Number` | `'40'` | Прозрачность backdrop (0-100) |
| `backdropColor` | `String` | `'slate-900'` | Цвет backdrop |
| `backdropLockScroll` | `Boolean` | `true` | Блокировать скролл body |

## Events

| `opened` | - | Модал полностью открылся |
| `closed` | - | Модал полностью закрылся |
| `update:variant` | `String` | Изменение варианта (при showModeSwitcher) |

## Slots

| `default` | Контент модала |
| `actions` | Действия в футере |

## Usage

### Basic Modal

```vue
<DXButton @click="showModal = true">Открыть</DXButton>

<DXModal :open="showModal" @close="showModal = false">
  <template #title>Заголовок модала</template>
  
  <p>Контент модального окна</p>
  
  <template #actions>
    <DXButton variant="ghost" @click="showModal = false">Отмена</DXButton>
    <DXButton @click="handleConfirm">Подтвердить</DXButton>
  </template>
</DXModal>
```

### Width Sizes

```vue
<DXModal :open="show" width="sm">Маленький (max-w-md)</DXModal>
<DXModal :open="show" width="md">Средний (max-w-xl)</DXModal>
<DXModal :open="show" width="lg">Большой (max-w-3xl)</DXModal>
<DXModal :open="show" width="xl">Очень большой (max-w-5xl)</DXModal>
```

### Fullscreen Modal

```vue
<DXModal :open="show" variant="fullscreen" @close="show = false">
  <template #title>Полноэкранный режим</template>
  <div class="h-full overflow-auto">
    <!-- Большой контент -->
  </div>
</DXModal>
```

### Sidebar Right

```vue
<DXModal :open="show" variant="sidebar-right" @close="show = false">
  <template #title>Детали</template>
  <div class="space-y-4">
    <!-- Контент боковой панели -->
  </div>
</DXModal>
```

### Half Right

```vue
<DXModal :open="show" variant="half-right" @close="show = false">
  <template #title>Редактор</template>
  <div class="h-full">
    <!-- Контент половины экрана справа -->
  </div>
</DXModal>
```

### With Mode Switcher

```vue
<DXModal
  :open="show"
  v-model:variant="modalVariant"
  showModeSwitcher
  @close="show = false"
>
  <template #title>Настраиваемый модал</template>
  <p>Переключайте режимы с помощью кнопок справа от заголовка</p>
</DXModal>
```

### Custom Backdrop

```vue
<DXModal
  :open="show"
  backdropBlur="lg"
  backdropOpacity="60"
  backdropColor="black"
  @close="show = false"
>
  <template #title>Кастомный backdrop</template>
  <p>Контент</p>
</DXModal>
```

### Non-closable Modal

```vue
<DXModal
  :open="show"
  :closable="false"
>
  <template #title>Важное действие</template>
  <p>Это модальное окно нельзя закрыть кликом по backdrop</p>
  
  <template #actions>
    <DXButton @click="handleComplete">Завершить</DXButton>
  </template>
</DXModal>
```

### Confirmation Dialog

```vue
<DXModal :open="showConfirm" width="sm" @close="showConfirm = false">
  <template #title>Подтверждение</template>
  
  <p>Вы уверены, что хотите удалить этот элемент?</p>
  
  <template #actions>
    <DXButton variant="ghost" @click="showConfirm = false">
      Отмена
    </DXButton>
    <DXButton variant="danger" @click="handleDelete">
      Удалить
    </DXButton>
  </template>
</DXModal>
```

## Animations

| `fullscreen` | fade-scale |
| `sidebar-right` | slide-right |
| `half-right` | slide-right |

## Accessibility

- Блокировка скролла body
- Фокус-ловушка внутри модала
- Закрытие по Escape

## See Also

- [DXBackdrop](../atoms/DXBackdrop.md)
- [DXCloseButton](../molecules/DXCloseButton.md)

---

Выпадающее меню с поддержкой клавиатурной навигации.

## Import

```javascript
import { DXDropdown, DXDropdownItem, DXDropdownDivider } from 'dxd-style-code';
```

## Props

| `width` | `String` | `'md'` | Ширина: `'sm'`, `'md'`, `'lg'`, `'xl'`, `'auto'` |
| `variant` | `String` | `'default'` | Вариант: `'default'`, `'minimal'` |
| `offset` | `Number` | `8` | Отступ от trigger (px) |
| `disabled` | `Boolean` | `false` | Отключить dropdown |
| `showChevron` | `Boolean` | `true` | Показать стрелочку |

## Slots

| `default` | Содержимое меню (DXDropdownItem) |

## Usage

### Basic

```vue
<DXDropdown>
  <template #trigger>
    Меню
  </template>
  
  <DXDropdownItem>Профиль</DXDropdownItem>
  <DXDropdownItem>Настройки</DXDropdownItem>
  <DXDropdownDivider />
  <DXDropdownItem variant="danger">Выйти</DXDropdownItem>
</DXDropdown>
```

### With Icons

```vue
<DXDropdown>
  <template #trigger>
    <DXIcon :icon="EllipsisVerticalIcon" />
  </template>
  
  <DXDropdownItem :icon="PencilIcon">Редактировать</DXDropdownItem>
  <DXDropdownItem :icon="DocumentDuplicateIcon">Дублировать</DXDropdownItem>
  <DXDropdownItem :icon="TrashIcon" variant="danger">Удалить</DXDropdownItem>
</DXDropdown>
```

### Position

```vue
<DXDropdown position="left">
  <template #trigger>Влево</template>
  <DXDropdownItem>Пункт 1</DXDropdownItem>
</DXDropdown>

<DXDropdown position="center">
  <template #trigger>По центру</template>
  <DXDropdownItem>Пункт 1</DXDropdownItem>
</DXDropdown>

<DXDropdown position="right">
  <template #trigger>Вправо</template>
  <DXDropdownItem>Пункт 1</DXDropdownItem>
</DXDropdown>
```

### Widths

```vue
<DXDropdown width="sm"><!-- 192px --></DXDropdown>
<DXDropdown width="md"><!-- 224px --></DXDropdown>
<DXDropdown width="lg"><!-- 288px --></DXDropdown>
<DXDropdown width="xl"><!-- 384px --></DXDropdown>
<DXDropdown width="auto"><!-- auto --></DXDropdown>
```

### Without Chevron

```vue
<DXDropdown :showChevron="false">
  <template #trigger>
    <DXButton variant="ghost" size="sm">
      <DXIcon :icon="DotsVerticalIcon" />
    </DXButton>
  </template>
  
  <DXDropdownItem>Действие 1</DXDropdownItem>
  <DXDropdownItem>Действие 2</DXDropdownItem>
</DXDropdown>
```

### User Menu

```vue
<DXDropdown position="right" width="md">
  <template #trigger>
    <div class="flex items-center gap-2">
      <img src="/avatar.jpg" class="w-8 h-8 rounded-full" />
      <span>Иван Иванов</span>
    </div>
  </template>
  
  <DXDropdownItem :icon="UserIcon">Профиль</DXDropdownItem>
  <DXDropdownItem :icon="CogIcon">Настройки</DXDropdownItem>
  <DXDropdownItem :icon="BellIcon">Уведомления</DXDropdownItem>
  <DXDropdownDivider />
  <DXDropdownItem :icon="ArrowRightOnRectangleIcon" variant="danger">
    Выйти
  </DXDropdownItem>
</DXDropdown>
```

### With Descriptions

```vue
<DXDropdown width="lg">
  <template #trigger>Создать</template>
  
  <DXDropdownItem :icon="DocumentIcon">
    <div>
      <div class="font-medium">Документ</div>
      <div class="text-xs text-slate-500">Создать новый документ</div>
    </div>
  </DXDropdownItem>
  
  <DXDropdownItem :icon="FolderIcon">
    <div>
      <div class="font-medium">Папка</div>
      <div class="text-xs text-slate-500">Создать новую папку</div>
    </div>
  </DXDropdownItem>
</DXDropdown>
```

### Disabled

```vue
<DXDropdown disabled>
  <template #trigger>Отключено</template>
  <DXDropdownItem>Недоступно</DXDropdownItem>
</DXDropdown>
```

## Keyboard Navigation

- `↓` / `↑` - навигация по пунктам
- `Enter` / `Space` - выбор пункта
- `Escape` - закрыть

## Provide/Inject

DXDropdown предоставляет контекст для дочерних компонентов:
- `dropdown.close()` - закрыть dropdown
- `dropdown.isOpen` - состояние открытия

## See Also

- [DXDropdownItem](../atoms/DXDropdownItem.md)
- [DXDropdownDivider](../molecules/DXDropdownDivider.md)
- [DXMenu](../molecules/DXMenu.md)

---

Компонент табов для переключения между контентом.

## Import

```javascript
import { DXTabs } from 'dxd-style-code';
```

## Props

| `tabs` | `Array` | `[]` | Конфигурация табов |
| `variant` | `String` | `'buttons'` | Вариант: `'buttons'`, `'tabs-top'`, `'tabs-bottom'` |
| `align` | `String` | `'left'` | Выравнивание: `'left'`, `'center'`, `'right'` |
| `scrollable` | `Boolean` | `true` | Включить прокрутку при overflow |
| `compact` | `Boolean` | `false` | Компактный режим |
| `compactDisplay` | `String` | `'icon-badge'` | Отображение в компактном режиме: `'icon'`, `'icon-badge'` |
| `iconAnimation` | `String` | `'wiggle'` | Анимация иконок: `'none'`, `'wiggle'`, `'scale'`, `'rotate'` |
| `animateActiveOnly` | `Boolean` | `true` | Анимировать только активную иконку |

## Tab Structure

```typescript
interface Tab {
  value: string | number;    // Уникальное значение
  label: string;             // Текст таба
  icon?: Component;          // Иконка
  count?: number;            // Бейдж с числом
  iconAnimation?: string;    // Индивидуальная анимация иконки
}
```

## Events

## Usage

### Basic

```vue
<DXTabs
  v-model="activeTab"
  :tabs="[
    { value: 'all', label: 'Все' },
    { value: 'active', label: 'Активные' },
    { value: 'archived', label: 'Архив' }
  ]"
/>
```

### With Icons

```vue
<DXTabs
  v-model="activeTab"
  :tabs="[
    { value: 'inbox', label: 'Входящие', icon: InboxIcon },
    { value: 'sent', label: 'Отправленные', icon: PaperAirplaneIcon },
    { value: 'trash', label: 'Корзина', icon: TrashIcon }
  ]"
/>
```

### With Counts

```vue
<DXTabs
  v-model="activeTab"
  :tabs="[
    { value: 'all', label: 'Все', count: 42 },
    { value: 'unread', label: 'Непрочитанные', count: 5 },
    { value: 'starred', label: 'Избранные', count: 12 }
  ]"
/>
```

### Variants

```vue
<!-- Кнопки (default) -->
<DXTabs v-model="tab" :tabs="tabs" variant="buttons" />

<!-- Табы сверху -->
<DXTabs v-model="tab" :tabs="tabs" variant="tabs-top" />

<!-- Табы снизу -->
<DXTabs v-model="tab" :tabs="tabs" variant="tabs-bottom" />
```

### Alignment

```vue
<DXTabs v-model="tab" :tabs="tabs" align="left" />
<DXTabs v-model="tab" :tabs="tabs" align="center" />
<DXTabs v-model="tab" :tabs="tabs" align="right" />
```

### Compact Mode

```vue
<DXTabs
  v-model="activeTab"
  :tabs="tabsWithIcons"
  compact
  compactDisplay="icon-badge"
/>
<!-- В компактном режиме неактивные табы показывают только иконки,
     при наведении раскрываются с текстом -->
```

### Icon Animations

```vue
<DXTabs
  v-model="tab"
  :tabs="tabs"
  iconAnimation="wiggle"
/>

<!-- Варианты: none, wiggle, scale, rotate -->
```

### Animate All Icons

```vue
<DXTabs
  v-model="tab"
  :tabs="tabs"
  iconAnimation="scale"
  :animateActiveOnly="false"
/>
```

### Full Example with Content

```vue
<template>
  <div>
    <DXTabs v-model="activeTab" :tabs="tabs" />
    
    <div class="mt-4">
      <div v-if="activeTab === 'profile'">
        <h2>Профиль</h2>
        <!-- ... -->
      </div>
      <div v-else-if="activeTab === 'settings'">
        <h2>Настройки</h2>
        <!-- ... -->
      </div>
      <div v-else-if="activeTab === 'notifications'">
        <h2>Уведомления</h2>
        <!-- ... -->
      </div>
    </div>
  </div>
</template>

<script setup>
const activeTab = ref('profile');

const tabs = [
  { value: 'profile', label: 'Профиль', icon: UserIcon },
  { value: 'settings', label: 'Настройки', icon: CogIcon },
  { value: 'notifications', label: 'Уведомления', icon: BellIcon, count: 3 }
];
</script>
```

### Scrollable Tabs

```vue
<DXTabs
  v-model="activeTab"
  :tabs="manyTabs"
  scrollable
/>
<!-- При переполнении появляется горизонтальный скролл -->
```

## Accessibility

- `role="radiogroup"` на контейнере
- `role="radio"` на каждом табе
- `aria-selected` для активного таба
- Клавиатурная навигация (←, →, Home, End)

## See Also

- [DXSegmentedControl](../molecules/DXSegmentedControl.md)
- [DXButtonGroup](../molecules/DXButtonGroup.md)

---

Компонент раскрывающихся панелей (аккордеон).

## Import

```javascript
import { DXAccordion } from 'dxd-style-code';
```

## Props

| `multiple` | `Boolean` | `false` | Разрешить несколько открытых панелей |
| `defaultOpen` | `Array` | `[]` | Изначально открытые индексы |
| `variant` | `String` | `'default'` | Вариант: `'default'`, `'bordered'`, `'separated'` |

## Items Structure

```typescript
interface AccordionItem {
  title: string;       // Заголовок панели
  content?: string;    // Текстовое содержимое
  icon?: Component;    // Иконка в заголовке
}
```

## Slots

## Usage

### Basic

```vue
<DXAccordion
  :items="[
    { title: 'Что такое Vue?', content: 'Vue.js — это прогрессивный фреймворк...' },
    { title: 'Что такое Vite?', content: 'Vite — это инструмент сборки...' },
    { title: 'Что такое Tailwind?', content: 'Tailwind CSS — это utility-first...' }
  ]"
/>
```

### Multiple Open

```vue
<DXAccordion
  :items="items"
  multiple
/>
```

### Default Open Items

```vue
<DXAccordion
  :items="items"
  :defaultOpen="[0, 2]"
/>
```

### Variants

```vue
<DXAccordion :items="items" variant="default" />
<DXAccordion :items="items" variant="bordered" />
<DXAccordion :items="items" variant="separated" />
```

### With Icons

```vue
<DXAccordion
  :items="[
    { title: 'Доставка', content: '...', icon: TruckIcon },
    { title: 'Оплата', content: '...', icon: CreditCardIcon },
    { title: 'Возврат', content: '...', icon: ArrowPathIcon }
  ]"
/>
```

### Custom Content Slot

```vue
<DXAccordion :items="items">
  <template #item-0>
    <div class="space-y-4">
      <p>Кастомный контент с разметкой</p>
      <DXButton>Действие</DXButton>
    </div>
  </template>
</DXAccordion>
```

### FAQ Example

```vue
<DXAccordion
  :items="faqItems"
  variant="bordered"
/>

<script setup>
const faqItems = [
  {
    title: 'Как оформить заказ?',
    content: 'Добавьте товары в корзину и перейдите к оформлению...'
  },
  {
    title: 'Какие способы оплаты доступны?',
    content: 'Мы принимаем банковские карты, электронные кошельки...'
  },
  {
    title: 'Как отследить заказ?',
    content: 'После отправки заказа вы получите трек-номер...'
  }
];
</script>
```

## Animations

Использует `useTransition('collapse')` для плавной анимации открытия/закрытия.

## Accessibility

- `aria-expanded` на кнопках заголовков
- Клавиатурная навигация (Enter, Space)

## See Also

- [DXTabs](./DXTabs.md)
- [DXCard](../atoms/DXCard.md)

---

Компонент для отображения пустого состояния с иконкой, текстом и действием.

## Import

```javascript
import { DXEmptyState } from 'dxd-style-code';
```

## Props

| `title` | `String` | `required` | Заголовок |
| `description` | `String` | `''` | Описание |
| `animated` | `Boolean` | `false` | Анимация иконки |

## Slots

## Usage

### Basic

```vue
<DXEmptyState
  :icon="InboxIcon"
  title="Нет сообщений"
  description="Ваш почтовый ящик пуст"
/>
```

### With Action

```vue
<DXEmptyState
  :icon="FolderPlusIcon"
  title="Нет проектов"
  description="Создайте свой первый проект"
>
  <template #action>
    <DXButton @click="createProject">
      Создать проект
    </DXButton>
  </template>
</DXEmptyState>
```

### With Animation

```vue
<DXEmptyState
  :icon="MagnifyingGlassIcon"
  title="Ничего не найдено"
  description="Попробуйте изменить параметры поиска"
  animated
/>
```

### In Table

```vue
<DXTable :data="data" :columns="columns">
  <template #empty>
    <DXEmptyState
      :icon="TableCellsIcon"
      title="Нет данных"
      description="Таблица пуста"
    />
  </template>
</DXTable>
```

### Search Results

```vue
<DXEmptyState
  :icon="DocumentMagnifyingGlassIcon"
  title="По запросу ничего не найдено"
  :description="`Результаты по запросу '${searchQuery}' отсутствуют`"
>
  <template #action>
    <DXButton variant="ghost" @click="clearSearch">
      Сбросить поиск
    </DXButton>
  </template>
</DXEmptyState>
```

### Error State

```vue
<DXEmptyState
  :icon="ExclamationTriangleIcon"
  title="Произошла ошибка"
  description="Не удалось загрузить данные"
>
  <template #action>
    <DXButton @click="retry">
      Повторить
    </DXButton>
  </template>
</DXEmptyState>
```

### No Access

```vue
<DXEmptyState
  :icon="LockClosedIcon"
  title="Доступ запрещён"
  description="У вас нет прав для просмотра этой страницы"
>
  <template #action>
    <DXLink to="/dashboard">Вернуться на главную</DXLink>
  </template>
</DXEmptyState>
```

### Different Icons

```vue
<!-- Пустая корзина -->
<DXEmptyState
  :icon="ShoppingCartIcon"
  title="Корзина пуста"
  description="Добавьте товары для оформления заказа"
/>

<!-- Нет уведомлений -->
<DXEmptyState
  :icon="BellSlashIcon"
  title="Нет уведомлений"
  description="Все уведомления прочитаны"
/>

<!-- Нет комментариев -->
<DXEmptyState
  :icon="ChatBubbleLeftIcon"
  title="Нет комментариев"
  description="Будьте первым, кто оставит комментарий"
/>
```

## Animation

При `animated="true"` иконка плавно покачивается для привлечения внимания.

## See Also

- [DXTable](./DXTable.md)
- [DXCard](../atoms/DXCard.md)

---

Боковое меню навигации с поддержкой секций, вложенных элементов и компактного режима.

## Import

```javascript
import { DXSidebarMenu } from 'dxd-style-code';
```

## Props

| `sections` | `Array` | `required` | Секции меню |
| `activeItem` | `String` | `''` | Текущий активный элемент (path или id) |
| `compact` | `Boolean` | `false` | Компактный режим (только иконки) |
| `collapsible` | `Boolean` | `true` | Можно ли сворачивать |
| `searchable` | `Boolean` | `false` | Показывать поиск |
| `showHeader` | `Boolean` | `undefined` | Показывать header (auto если undefined) |
| `headerSize` | `String` | `'md'` | Размер header: `'sm'`, `'md'`, `'lg'` |
| `width` | `String` | `'md'` | Ширина: `'sm'`, `'md'`, `'lg'`, `'full'` |
| `fixed` | `Boolean` | `false` | Фиксированная позиция |
| `bordered` | `Boolean` | `true` | Показывать бордер справа |

## Section Structure

```typescript
interface Section {
  title?: string;           // Заголовок секции
  items: MenuItem[];        // Элементы секции
}

interface MenuItem {
  id?: string;              // Уникальный ID
  label: string;            // Текст
  icon?: Component;         // Иконка
  to?: string;              // Vue Router path
  href?: string;            // Обычная ссылка
  badge?: string | number;  // Бейдж
  badgeVariant?: string;    // Вариант бейджа
  children?: MenuItem[];    // Вложенные элементы
  disabled?: boolean;       // Отключен
  action?: () => void;      // Действие при клике
}
```

## Events

| `update:compact` | `Boolean` | Изменение компактного режима |

## Slots

| `footer` | Футер сайдбара |

## Usage

### Basic

```vue
<DXSidebarMenu
  title="Приложение"
  :sections="[
    {
      items: [
        { label: 'Главная', icon: HomeIcon, to: '/' },
        { label: 'Профиль', icon: UserIcon, to: '/profile' },
        { label: 'Настройки', icon: CogIcon, to: '/settings' }
      ]
    }
  ]"
  :activeItem="$route.path"
/>
```

### With Sections

```vue
<DXSidebarMenu
  :sections="[
    {
      title: 'Основное',
      items: [
        { label: 'Дашборд', icon: ChartBarIcon, to: '/dashboard' },
        { label: 'Проекты', icon: FolderIcon, to: '/projects' }
      ]
    },
    {
      title: 'Настройки',
      items: [
        { label: 'Профиль', icon: UserIcon, to: '/profile' },
        { label: 'Настройки', icon: CogIcon, to: '/settings' }
      ]
    }
  ]"
/>
```

### With Nested Items

```vue
<DXSidebarMenu
  :sections="[
    {
      items: [
        { label: 'Главная', icon: HomeIcon, to: '/' },
        {
          label: 'Товары',
          icon: CubeIcon,
          children: [
            { label: 'Каталог', to: '/products' },
            { label: 'Категории', to: '/categories' },
            { label: 'Бренды', to: '/brands' }
          ]
        },
        { label: 'Заказы', icon: ShoppingCartIcon, to: '/orders' }
      ]
    }
  ]"
/>
```

### With Badges

```vue
<DXSidebarMenu
  :sections="[
    {
      items: [
        { label: 'Входящие', icon: InboxIcon, to: '/inbox', badge: 5 },
        { label: 'Задачи', icon: ClipboardIcon, to: '/tasks', badge: 12 },
        { label: 'Уведомления', icon: BellIcon, to: '/notifications', badge: 'new', badgeVariant: 'success' }
      ]
    }
  ]"
/>
```

### Compact Mode

```vue
<DXSidebarMenu
  :sections="sections"
  compact
  collapsible
/>
```

### With Search

```vue
<DXSidebarMenu
  :sections="sections"
  searchable
/>
```

### Width Variants

```vue
<DXSidebarMenu :sections="sections" width="sm" /> <!-- 256px -->
<DXSidebarMenu :sections="sections" width="md" /> <!-- 320px -->
<DXSidebarMenu :sections="sections" width="lg" /> <!-- 384px -->
<DXSidebarMenu :sections="sections" width="full" /> <!-- 100% -->
```

### With Footer

```vue
<DXSidebarMenu :sections="sections">
  <template #footer>
    <div class="flex items-center gap-3">
      <img src="/avatar.jpg" class="w-8 h-8 rounded-full" />
      <div>
        <div class="font-medium">Иван Иванов</div>
        <div class="text-xs text-slate-500">admin@example.com</div>
      </div>
    </div>
  </template>
</DXSidebarMenu>
```

### Fixed Position

```vue
<DXSidebarMenu
  :sections="sections"
  fixed
  width="md"
/>
```

### Full Example

```vue
<template>
  <DXAppLayout>
    <template #sidebar>
      <DXSidebarMenu
        title="MyApp"
        :sections="menuSections"
        :activeItem="$route.path"
        collapsible
        searchable
        @item-click="handleMenuClick"
      >
        <template #footer>
          <DXDropdown position="left" width="md">
            <template #trigger>
              <UserProfileButton :user="currentUser" />
            </template>
            <DXDropdownItem @click="logout">Выйти</DXDropdownItem>
          </DXDropdown>
        </template>
      </DXSidebarMenu>
    </template>
    
    <template #content>
      <router-view />
    </template>
  </DXAppLayout>
</template>
```

## Composables Used

- `useMenu` - логика меню, поиск, compact режим

## See Also

- [DXAppLayout](./DXAppLayout.md)
- [DXSidebar](./DXSidebar.md)
- [DXMenu](../molecules/DXMenu.md)

---

### Layout

Компонент макета приложения с header, sidebar, content и footer.

## Import

```javascript
import { DXAppLayout } from 'dxd-style-code';
```

## Props

| `sidebarMode` | `String` | `'static'` | Режим sidebar: `'overlay'`, `'push'`, `'static'` |
| `sidebarCollapsed` | `Boolean` | `false` | Свернут ли sidebar |
| `sidebarWidth` | `Number` | `256` | Ширина sidebar (px) |
| `sidebarCollapsedWidth` | `Number` | `64` | Ширина свёрнутого sidebar (px) |
| `showSidebarOnMobile` | `Boolean` | `false` | Показывать sidebar на мобильных |
| `backdropBlur` | `String` | `'sm'` | Размытие backdrop: `'none'`, `'sm'`, `'md'`, `'lg'`, `'xl'` |
| `headerPadding` | `String` | `''` | Отступы header |
| `contentPadding` | `String` | `''` | Отступы content |
| `sidebarPadding` | `String` | `''` | Отступы sidebar |
| `footerPadding` | `String` | `''` | Отступы footer |

## Events

| `sidebar-collapse` | `Boolean` | Сворачивание/разворачивание sidebar |

## Slots

| `sidebar` | Боковая панель |
| `content` | Основной контент |
| `content-left` | Левая панель (для split варианта) |
| `content-right` | Правая панель (для split варианта) |
| `footer` | Подвал |

## Usage

### Dashboard Layout

```vue
<DXAppLayout variant="dashboard">
  <template #header>
    <DXHeaderBar appName="Dashboard" />
  </template>
  
  <template #sidebar>
    <DXSidebarMenu :sections="menuSections" />
  </template>
  
  <template #content>
    <div class="p-6">
      <h1>Dashboard Content</h1>
    </div>
  </template>
</DXAppLayout>
```

### Content Layout (Blog/Docs)

```vue
<DXAppLayout variant="content" contentPadding="lg">
  <template #header>
    <DXHeaderBar appName="Blog" />
  </template>
  
  <template #content>
    <article class="prose max-w-3xl mx-auto">
      <slot />
    </article>
  </template>
</DXAppLayout>
```

### Minimal Layout

```vue
<DXAppLayout variant="minimal">
  <template #header>
    <DXHeaderBar appName="App" />
  </template>
  
  <template #content>
    <slot />
  </template>
</DXAppLayout>
```

### Split Layout (Editor)

```vue
<DXAppLayout variant="split">
  <template #header>
    <DXHeaderBar appName="Editor" />
  </template>
  
  <template #content-left>
    <div class="p-4">
      <h2>Source</h2>
      <CodeEditor v-model="source" />
    </div>
  </template>
  
  <template #content-right>
    <div class="p-4">
      <h2>Preview</h2>
      <Preview :content="source" />
    </div>
  </template>
</DXAppLayout>
```

### Collapsible Sidebar

```vue
<DXAppLayout
  variant="dashboard"
  :sidebarCollapsed="isCollapsed"
  :sidebarWidth="280"
  :sidebarCollapsedWidth="64"
  @sidebar-collapse="isCollapsed = $event"
>
  <template #sidebar>
    <DXSidebarMenu 
      :sections="sections" 
      :compact="isCollapsed"
      collapsible
    />
  </template>
  
  <template #content>
    <slot />
  </template>
</DXAppLayout>
```

### Overlay Sidebar (Mobile)

```vue
<DXAppLayout
  variant="dashboard"
  sidebarMode="overlay"
  :sidebarCollapsed="!sidebarOpen"
  @sidebar-toggle="sidebarOpen = $event"
>
  <template #header>
    <DXHeaderBar>
      <template #mobile-menu>
        <DXButton @click="sidebarOpen = true">
          <DXIcon :icon="Bars3Icon" />
        </DXButton>
      </template>
    </DXHeaderBar>
  </template>
  
  <template #sidebar>
    <DXSidebarMenu :sections="sections" />
  </template>
  
  <template #content>
    <slot />
  </template>
</DXAppLayout>
```

### With Footer

```vue
<DXAppLayout variant="dashboard">
  <template #header>
    <DXHeaderBar />
  </template>
  
  <template #sidebar>
    <DXSidebarMenu :sections="sections" />
  </template>
  
  <template #content>
    <slot />
  </template>
  
  <template #footer>
    <div class="text-center text-sm text-slate-500 py-4">
      © 2024 Company Name
    </div>
  </template>
</DXAppLayout>
```

## Variants Description

| `content` | Для блогов, статей (минималистичный header, широкий контент) |
| `minimal` | Только header и content, без sidebar и footer |
| `split` | Две панели контента (редакторы, сравнение) |
| `tabbed` | Header с табами, переключаемый контент |

## See Also

- [DXHeaderBar](./DXHeaderBar.md)
- [DXSidebarMenu](./DXSidebarMenu.md)
- [DXSidebar](./DXSidebar.md)

---

Компонент шапки приложения с логотипом, навигацией и действиями.

## Import

```javascript
import { DXHeaderBar } from 'dxd-style-code';
```

## Props

| `appName` | `String` | `''` | Название приложения |
| `logoLink` | `String\|Object` | `null` | Vue Router ссылка для логотипа |
| `logoHref` | `String` | `null` | Обычная ссылка для логотипа |
| `sticky` | `Boolean` | `false` | Sticky позиционирование |
| `fixed` | `Boolean` | `false` | Fixed позиционирование |
| `containerSize` | `String` | `'lg'` | Размер контейнера: `'sm'`, `'md'`, `'lg'`, `'xl'`, `'2xl'`, `'full'` |
| `containerPadding` | `String` | `'md'` | Отступы контейнера |
| `height` | `String` | `'auto'` | Высота: `'auto'`, `'sm'`, `'md'`, `'lg'` |
| `variant` | `String` | `null` | Вариант: `'bordered'`, `'elevated'`, `'flat'` |
| `bg` | `String` | `'white'` | Фон: `'white'`, `'slate'`, `'transparent'` |
| `shadow` | `String` | `null` | Тень: `'none'`, `'sm'`, `'md'`, `'lg'`, `'xl'` |
| `border` | `String` | `'bottom'` | Рамка: `'none'`, `'bottom'`, `'full'` |

## Events

## Slots

| `navigation` | Навигация (desktop) |
| `search` | Поиск (desktop) |
| `actions` | Действия (desktop) |
| `center` | Центральный контент |
| `mobile-menu` | Кнопка мобильного меню |
| `mobile-navigation` | Мобильная навигация (drawer) |

## Usage

### Basic

```vue
<DXHeaderBar
  appName="MyApp"
  logo="/logo.svg"
  logoLink="/"
/>
```

### With Navigation

```vue
<DXHeaderBar appName="Dashboard">
  <template #navigation>
    <DXLink to="/dashboard">Главная</DXLink>
    <DXLink to="/projects">Проекты</DXLink>
    <DXLink to="/team">Команда</DXLink>
  </template>
  
  <template #actions>
    <DXButton variant="ghost" size="sm">
      <DXIcon :icon="BellIcon" />
    </DXButton>
    <DXButton>Профиль</DXButton>
  </template>
</DXHeaderBar>
```

### With Search

```vue
<DXHeaderBar appName="Store">
  <template #search>
    <DXSearchBar
      v-model="searchQuery"
      placeholder="Поиск товаров..."
      @search="handleSearch"
    />
  </template>
  
  <template #actions>
    <DXButton variant="ghost">
      <DXIcon :icon="ShoppingCartIcon" />
    </DXButton>
  </template>
</DXHeaderBar>
```

### Sticky Header

```vue
<DXHeaderBar
  appName="Blog"
  sticky
  shadow="sm"
/>
```

### Fixed Header

```vue
<DXHeaderBar
  appName="App"
  fixed
  variant="elevated"
/>
```

### With Mobile Menu

```vue
<DXHeaderBar appName="App">
  <template #navigation>
    <DXLink to="/">Главная</DXLink>
    <DXLink to="/about">О нас</DXLink>
  </template>
  
  <template #mobile-menu>
    <DXButton variant="ghost" @click="$refs.header.openMobileMenu()">
      <DXIcon :icon="Bars3Icon" />
    </DXButton>
  </template>
  
  <template #mobile-navigation>
    <DXLink to="/" class="block py-2">Главная</DXLink>
    <DXLink to="/about" class="block py-2">О нас</DXLink>
    <DXLink to="/contact" class="block py-2">Контакты</DXLink>
  </template>
</DXHeaderBar>
```

### Height Variants

```vue
<DXHeaderBar height="sm" /> <!-- 56px -->
<DXHeaderBar height="md" /> <!-- 64px -->
<DXHeaderBar height="lg" /> <!-- 80px -->
```

### Background Variants

```vue
<DXHeaderBar bg="white" />
<DXHeaderBar bg="slate" />
<DXHeaderBar bg="transparent" />
```

### Center Content

```vue
<DXHeaderBar appName="Editor">
  <template #center>
    <DXTabs v-model="currentTab" :tabs="tabs" variant="buttons" />
  </template>
</DXHeaderBar>
```

### With Actions

```vue
<DXHeaderBar appName="Dashboard">
  <template #actions>
    <DXDropdown>
      <template #trigger>
        <img src="/avatar.jpg" class="w-8 h-8 rounded-full" />
      </template>
      <DXDropdownItem :icon="UserIcon">Профиль</DXDropdownItem>
      <DXDropdownItem :icon="CogIcon">Настройки</DXDropdownItem>
      <DXDropdownDivider />
      <DXDropdownItem :icon="ArrowRightOnRectangleIcon" variant="danger">
        Выйти
      </DXDropdownItem>
    </DXDropdown>
  </template>
</DXHeaderBar>
```

## Exposed Methods

```javascript
const headerRef = ref(null);

// Открыть мобильное меню
headerRef.value.openMobileMenu();

// Закрыть мобильное меню
headerRef.value.closeMobileMenu();

// Доступ к breakpoint данным
headerRef.value.isMobile;
headerRef.value.isDesktop;
headerRef.value.currentBreakpoint;
```

## See Also

- [DXAppLayout](./DXAppLayout.md)
- [DXSidebarMenu](./DXSidebarMenu.md)

---

Базовый компонент боковой панели с поддержкой overlay, push и static режимов.

## Import

```javascript
import { DXSidebar } from 'dxd-style-code';
```

## Props

| `mode` | `String` | `'static'` | Режим: `'overlay'`, `'push'`, `'static'` |
| `width` | `Number` | `256` | Ширина сайдбара (px) |
| `collapsedWidth` | `Number` | `64` | Ширина свёрнутого сайдбара (px) |
| `collapsed` | `Boolean` | `false` | Свёрнут ли сайдбар |
| `showOnMobile` | `Boolean` | `false` | Показывать на мобильных |
| `backdropBlur` | `String` | `'sm'` | Размытие backdrop: `'none'`, `'sm'`, `'md'`, `'lg'`, `'xl'` |

## Events

| `toggle` | `Boolean` | Переключение |
| `collapse` | `Boolean` | Сворачивание/разворачивание |

## Slots

| `content` | Основной контент |
| `footer` | Подвал сайдбара |

## Usage

### Basic

```vue
<DXSidebar>
  <template #header>
    <h2>Меню</h2>
  </template>
  
  <template #content>
    <nav>
      <a href="/">Главная</a>
      <a href="/about">О нас</a>
    </nav>
  </template>
</DXSidebar>
```

### Static Mode (Default)

```vue
<DXSidebar mode="static" :width="280">
  <template #content>
    <DXSidebarMenu :sections="sections" />
  </template>
</DXSidebar>
```

### Overlay Mode

```vue
<DXSidebar
  :open="sidebarOpen"
  mode="overlay"
  @update:open="sidebarOpen = $event"
>
  <template #content>
    <DXSidebarMenu :sections="sections" />
  </template>
</DXSidebar>
```

### Push Mode

```vue
<DXSidebar
  :open="sidebarOpen"
  mode="push"
  :width="300"
>
  <template #content>
    <DXSidebarMenu :sections="sections" />
  </template>
</DXSidebar>
```

### Collapsible

```vue
<DXSidebar
  :collapsed="isCollapsed"
  :width="280"
  :collapsedWidth="64"
  @collapse="isCollapsed = $event"
>
  <template #header>
    <DXButton @click="isCollapsed = !isCollapsed">
      <DXIcon :icon="isCollapsed ? ChevronRightIcon : ChevronLeftIcon" />
    </DXButton>
  </template>
  
  <template #content>
    <DXSidebarMenu :sections="sections" :compact="isCollapsed" />
  </template>
</DXSidebar>
```

### With Header and Footer

```vue
<DXSidebar :width="280">
  <template #header>
    <div class="flex items-center gap-2">
      <img src="/logo.svg" class="h-8" />
      <span class="font-bold">MyApp</span>
    </div>
  </template>
  
  <template #content>
    <DXSidebarMenu :sections="sections" />
  </template>
  
  <template #footer>
    <div class="flex items-center gap-2">
      <img src="/avatar.jpg" class="w-8 h-8 rounded-full" />
      <span>Иван Иванов</span>
    </div>
  </template>
</DXSidebar>
```

### Custom Width

```vue
<DXSidebar :width="320" :collapsedWidth="80">
  <template #content>
    <!-- Широкий сайдбар с кастомным контентом -->
  </template>
</DXSidebar>
```

### Mobile Overlay

```vue
<template>
  <DXHeaderBar>
    <template #mobile-menu>
      <DXButton @click="showMobileSidebar = true">
        <DXIcon :icon="Bars3Icon" />
      </DXButton>
    </template>
  </DXHeaderBar>
  
  <DXSidebar
    :open="showMobileSidebar"
    mode="overlay"
    :showOnMobile="true"
    @update:open="showMobileSidebar = $event"
  >
    <template #content>
      <DXSidebarMenu :sections="sections" />
    </template>
  </DXSidebar>
</template>
```

## Mode Comparison

| `push` | Сайдбар сдвигает контент |
| `overlay` | Сайдбар поверх контента с backdrop |

## See Also

- [DXSidebarMenu](./DXSidebarMenu.md)
- [DXAppLayout](./DXAppLayout.md)

---

### Специализированные

Готовая форма аутентификации с поддержкой входа, регистрации и восстановления пароля.

## Import

```javascript
import { DXAuthenticationForm } from 'dxd-style-code';
```

## Props

| `title` | `String` | `auto` | Заголовок формы |
| `submitText` | `String` | `auto` | Текст кнопки отправки |
| `showSocialLogin` | `Boolean` | `false` | Показать кнопки соцсетей |
| `socialProviders` | `Array` | `['google', 'github']` | Провайдеры соцсетей |
| `showRememberMe` | `Boolean` | `true` | Показать "Запомнить меня" |
| `showForgotPassword` | `Boolean` | `true` | Показать "Забыли пароль?" |
| `loading` | `Boolean` | `false` | Состояние загрузки |
| `errors` | `Object` | `{}` | Ошибки валидации |
| `logo` | `String` | `null` | URL логотипа |

## Events

| `social-login` | `String` | Клик по соцсети |
| `mode-change` | `String` | Изменение режима |
| `forgot-password` | - | Клик "Забыли пароль?" |

## Usage

### Login Form

```vue
<DXAuthenticationForm
  mode="login"
  @submit="handleLogin"
  @forgot-password="showForgotPassword = true"
  @social-login="handleSocialLogin"
/>
```

### Registration Form

```vue
<DXAuthenticationForm
  mode="register"
  title="Создать аккаунт"
  submitText="Зарегистрироваться"
  :errors="validationErrors"
  @submit="handleRegister"
/>
```

### Forgot Password

```vue
<DXAuthenticationForm
  mode="forgot-password"
  @submit="handleForgotPassword"
  @mode-change="currentMode = $event"
/>
```

### With Social Login

```vue
<DXAuthenticationForm
  mode="login"
  showSocialLogin
  :socialProviders="['google', 'github', 'facebook']"
  @social-login="handleSocialLogin"
/>
```

### With Logo

```vue
<DXAuthenticationForm
  mode="login"
  logo="/logo.svg"
  title="Войти в MyApp"
/>
```

### Custom Submit

```vue
<DXAuthenticationForm
  mode="login"
  submitText="Войти в систему"
  :loading="isLoading"
  @submit="handleLogin"
/>
```

### With Errors

```vue
<DXAuthenticationForm
  mode="login"
  :errors="{
    email: 'Неверный email',
    password: 'Пароль слишком короткий'
  }"
  @submit="handleLogin"
/>
```

### Full Example

```vue
<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-100">
    <DXCard class="w-full max-w-md">
      <DXAuthenticationForm
        :mode="authMode"
        logo="/logo.svg"
        showSocialLogin
        :loading="isLoading"
        :errors="errors"
        @submit="handleSubmit"
        @social-login="handleSocialLogin"
        @mode-change="authMode = $event"
        @forgot-password="authMode = 'forgot-password'"
      />
    </DXCard>
  </div>
</template>

<script setup>
const authMode = ref('login');
const isLoading = ref(false);
const errors = ref({});

async function handleSubmit(formData) {
  isLoading.value = true;
  errors.value = {};
  
  try {
    if (authMode.value === 'login') {
      await auth.login(formData);
    } else if (authMode.value === 'register') {
      await auth.register(formData);
    }
  } catch (e) {
    errors.value = e.errors;
  } finally {
    isLoading.value = false;
  }
}
</script>
```

## Form Data Structure

### Login

```typescript
interface LoginData {
  email: string;
  password: string;
  rememberMe?: boolean;
}
```

### Register

```typescript
interface RegisterData {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}
```

### Forgot Password

```typescript
interface ForgotPasswordData {
  email: string;
}
```

## See Also

- [DXFormControl](../molecules/DXFormControl.md)
- [DXInput](../molecules/DXInput.md)
- [DXPasswordInput](../molecules/DXPasswordInput.md)

---

Многошаговая форма (wizard) с валидацией на каждом шаге.

## Import

```javascript
import { DXFormWizard } from 'dxd-style-code';
```

## Props

| `modelValue` | `Number` | `0` | Текущий шаг (v-model) |
| `linear` | `Boolean` | `true` | Линейная навигация (нельзя пропускать шаги) |
| `showSteps` | `Boolean` | `true` | Показывать индикатор шагов |
| `showNavigation` | `Boolean` | `true` | Показывать кнопки навигации |
| `prevText` | `String` | `'Назад'` | Текст кнопки "Назад" |
| `nextText` | `String` | `'Далее'` | Текст кнопки "Далее" |
| `finishText` | `String` | `'Завершить'` | Текст кнопки на последнем шаге |
| `loading` | `Boolean` | `false` | Состояние загрузки |

## Step Structure

```typescript
interface Step {
  title: string;           // Название шага
  description?: string;    // Описание
  icon?: Component;        // Иконка
  validate?: () => boolean | Promise<boolean>; // Функция валидации
  optional?: boolean;      // Опциональный шаг
}
```

## Events

| `step-change` | `{ from, to }` | Переход между шагами |
| `next` | `Number` | Клик "Далее" |
| `prev` | `Number` | Клик "Назад" |
| `finish` | - | Завершение wizard |
| `validate-error` | `Number` | Ошибка валидации шага |

## Slots

| `step-indicator` | `{ step, index, isActive, isCompleted }` | Кастомный индикатор |
| `navigation` | `{ canPrev, canNext, isLast, prev, next }` | Кастомная навигация |

## Usage

### Basic

```vue
<DXFormWizard
  v-model="currentStep"
  :steps="[
    { title: 'Личные данные' },
    { title: 'Контакты' },
    { title: 'Подтверждение' }
  ]"
  @finish="handleSubmit"
>
  <template #step-0>
    <DXFormControl label="Имя">
      <DXInput v-model="form.name" />
    </DXFormControl>
  </template>
  
  <template #step-1>
    <DXFormControl label="Email">
      <DXInput v-model="form.email" type="email" />
    </DXFormControl>
  </template>
  
  <template #step-2>
    <p>Проверьте введённые данные</p>
    <p>Имя: {{ form.name }}</p>
    <p>Email: {{ form.email }}</p>
  </template>
</DXFormWizard>
```

### With Validation

```vue
<DXFormWizard
  v-model="currentStep"
  :steps="[
    { 
      title: 'Аккаунт',
      validate: () => validateStep1()
    },
    { 
      title: 'Профиль',
      validate: () => validateStep2()
    },
    { title: 'Готово' }
  ]"
  @validate-error="handleValidationError"
>
  <!-- Шаги -->
</DXFormWizard>

<script setup>
function validateStep1() {
  return form.email && form.password;
}

function validateStep2() {
  return form.name && form.phone;
}
</script>
```

### With Icons

```vue
<DXFormWizard
  :steps="[
    { title: 'Личные данные', icon: UserIcon },
    { title: 'Оплата', icon: CreditCardIcon },
    { title: 'Доставка', icon: TruckIcon },
    { title: 'Подтверждение', icon: CheckIcon }
  ]"
>
  <!-- Шаги -->
</DXFormWizard>
```

### Non-linear Navigation

```vue
<DXFormWizard
  :steps="steps"
  :linear="false"
>
  <!-- Можно переходить на любой шаг -->
</DXFormWizard>
```

### Async Validation

```vue
<DXFormWizard
  :steps="[
    { 
      title: 'Email',
      validate: async () => {
        return await checkEmailAvailability(form.email);
      }
    },
    { title: 'Пароль' }
  ]"
  :loading="isValidating"
>
  <!-- Шаги -->
</DXFormWizard>
```

### Custom Navigation

```vue
<DXFormWizard :steps="steps" :showNavigation="false">
  <template #step-0>
    <!-- Контент -->
  </template>
  
  <template #navigation="{ canPrev, canNext, isLast, prev, next }">
    <div class="flex justify-between mt-6">
      <DXButton 
        v-if="canPrev"
        variant="ghost"
        @click="prev"
      >
        ← Вернуться
      </DXButton>
      
      <DXButton @click="isLast ? finish() : next()">
        {{ isLast ? 'Отправить' : 'Продолжить →' }}
      </DXButton>
    </div>
  </template>
</DXFormWizard>
```

### Registration Flow

```vue
<DXFormWizard
  v-model="step"
  :steps="[
    { title: 'Аккаунт', icon: UserIcon },
    { title: 'Компания', icon: BuildingOfficeIcon },
    { title: 'План', icon: CreditCardIcon }
  ]"
  finishText="Создать аккаунт"
  @finish="register"
>
  <template #step-0>
    <DXFormControl label="Email" required>
      <DXInput v-model="form.email" type="email" />
    </DXFormControl>
    <DXFormControl label="Пароль" required>
      <DXPasswordInput v-model="form.password" showStrength />
    </DXFormControl>
  </template>
  
  <template #step-1>
    <DXFormControl label="Название компании">
      <DXInput v-model="form.company" />
    </DXFormControl>
    <DXFormControl label="Размер">
      <DXSelect v-model="form.size" :options="companySizes" />
    </DXFormControl>
  </template>
  
  <template #step-2>
    <DXRadioGroup v-model="form.plan" :options="plans" />
  </template>
</DXFormWizard>
```

## See Also

- [DXWizard](./DXWizard.md)
- [DXFormControl](../molecules/DXFormControl.md)

---

Компонент пошагового мастера (wizard) с индикатором прогресса.

## Import

```javascript
import { DXWizard } from 'dxd-style-code';
```

## Props

| `steps` | `Array` | `required` | Конфигурация шагов |
| `variant` | `String` | `'default'` | Вариант: `'default'`, `'vertical'`, `'compact'` |
| `linear` | `Boolean` | `true` | Линейная навигация |
| `showNumbers` | `Boolean` | `true` | Показывать номера шагов |
| `clickable` | `Boolean` | `false` | Клик по индикатору переключает шаг |

## Step Structure

```typescript
interface Step {
  title: string;
  description?: string;
  icon?: Component;
  optional?: boolean;
  completed?: boolean;
  error?: boolean;
}
```

## Events

| `step-click` | `Number` | Клик по индикатору шага |

## Slots

| `indicator` | `{ step, index, isActive, isCompleted }` | Кастомный индикатор |

## Usage

### Basic

```vue
<DXWizard
  v-model="currentStep"
  :steps="[
    { title: 'Шаг 1' },
    { title: 'Шаг 2' },
    { title: 'Шаг 3' }
  ]"
>
  <template #step-0>
    <p>Контент первого шага</p>
  </template>
  
  <template #step-1>
    <p>Контент второго шага</p>
  </template>
  
  <template #step-2>
    <p>Контент третьего шага</p>
  </template>
</DXWizard>
```

### With Descriptions

```vue
<DXWizard
  v-model="step"
  :steps="[
    { title: 'Личные данные', description: 'Введите имя и email' },
    { title: 'Аккаунт', description: 'Создайте пароль' },
    { title: 'Подтверждение', description: 'Проверьте данные' }
  ]"
/>
```

### With Icons

```vue
<DXWizard
  v-model="step"
  :steps="[
    { title: 'Корзина', icon: ShoppingCartIcon },
    { title: 'Доставка', icon: TruckIcon },
    { title: 'Оплата', icon: CreditCardIcon },
    { title: 'Готово', icon: CheckIcon }
  ]"
  :showNumbers="false"
/>
```

### Vertical Variant

```vue
<DXWizard
  v-model="step"
  :steps="steps"
  variant="vertical"
>
  <template #step-0>
    <!-- Контент -->
  </template>
</DXWizard>
```

### Compact Variant

```vue
<DXWizard
  v-model="step"
  :steps="steps"
  variant="compact"
/>
```

### Non-linear Navigation

```vue
<DXWizard
  v-model="step"
  :steps="steps"
  :linear="false"
  clickable
/>
```

### With Completed/Error States

```vue
<DXWizard
  v-model="step"
  :steps="[
    { title: 'Шаг 1', completed: true },
    { title: 'Шаг 2', error: true },
    { title: 'Шаг 3' }
  ]"
/>
```

### Optional Steps

```vue
<DXWizard
  v-model="step"
  :steps="[
    { title: 'Обязательный' },
    { title: 'Опциональный', optional: true },
    { title: 'Обязательный' }
  ]"
/>
```

### Checkout Flow

```vue
<template>
  <div class="max-w-3xl mx-auto">
    <DXWizard
      v-model="checkoutStep"
      :steps="checkoutSteps"
    >
      <template #step-0>
        <CartReview :items="cartItems" />
      </template>
      
      <template #step-1>
        <ShippingForm v-model="shipping" />
      </template>
      
      <template #step-2>
        <PaymentForm v-model="payment" />
      </template>
      
      <template #step-3>
        <OrderConfirmation :order="order" />
      </template>
    </DXWizard>
    
    <div class="flex justify-between mt-8">
      <DXButton
        v-if="checkoutStep > 0"
        variant="ghost"
        @click="checkoutStep--"
      >
        Назад
      </DXButton>
      
      <DXButton
        @click="nextStep"
        :loading="isProcessing"
      >
        {{ checkoutStep === 3 ? 'Оформить заказ' : 'Далее' }}
      </DXButton>
    </div>
  </div>
</template>
```

### Custom Indicator

```vue
<DXWizard v-model="step" :steps="steps">
  <template #indicator="{ step, index, isActive, isCompleted }">
    <div
      :class="[
        'w-10 h-10 rounded-full flex items-center justify-center',
        isCompleted ? 'bg-green-500 text-white' :
        isActive ? 'bg-blue-500 text-white' :
        'bg-slate-200 text-slate-600'
      ]"
    >
      <DXIcon v-if="isCompleted" :icon="CheckIcon" />
      <span v-else>{{ index + 1 }}</span>
    </div>
  </template>
</DXWizard>
```

## See Also

- [DXFormWizard](./DXFormWizard.md)
- [DXProgress](../atoms/DXProgress.md)

---

Сетка для размещения виджетов дашборда с поддержкой drag-and-drop.

## Import

```javascript
import { DXDashboardGrid } from 'dxd-style-code';
```

## Props

| `columns` | `Number` | `4` | Количество колонок |
| `gap` | `String` | `'md'` | Отступы между виджетами: `'sm'`, `'md'`, `'lg'` |
| `draggable` | `Boolean` | `false` | Разрешить перетаскивание |
| `resizable` | `Boolean` | `false` | Разрешить изменение размера |
| `responsive` | `Boolean` | `true` | Адаптивная сетка |

## Widget Structure

```typescript
interface Widget {
  id: string;
  x: number;           // Позиция X (колонка)
  y: number;           // Позиция Y (строка)
  w: number;           // Ширина (в колонках)
  h: number;           // Высота (в строках)
  minW?: number;       // Минимальная ширина
  minH?: number;       // Минимальная высота
  maxW?: number;       // Максимальная ширина
  maxH?: number;       // Максимальная высота
  static?: boolean;    // Нельзя перемещать
}
```

## Events

| `layout-change` | `Widget[]` | Изменение layout |
| `widget-move` | `{ id, x, y }` | Перемещение виджета |
| `widget-resize` | `{ id, w, h }` | Изменение размера |

## Slots

| `default` | - | Общий контент виджетов |

## Usage

### Basic

```vue
<DXDashboardGrid
  :widgets="[
    { id: 'stats', x: 0, y: 0, w: 2, h: 1 },
    { id: 'chart', x: 2, y: 0, w: 2, h: 2 },
    { id: 'table', x: 0, y: 1, w: 2, h: 2 }
  ]"
>
  <template #widget-stats>
    <DXDashboardWidget title="Статистика">
      <StatsContent />
    </DXDashboardWidget>
  </template>
  
  <template #widget-chart>
    <DXDashboardWidget title="График">
      <ChartContent />
    </DXDashboardWidget>
  </template>
  
  <template #widget-table>
    <DXDashboardWidget title="Таблица">
      <TableContent />
    </DXDashboardWidget>
  </template>
</DXDashboardGrid>
```

### Draggable

```vue
<DXDashboardGrid
  v-model:widgets="widgets"
  draggable
  @layout-change="saveLayout"
/>
```

### Resizable

```vue
<DXDashboardGrid
  v-model:widgets="widgets"
  draggable
  resizable
/>
```

### Custom Columns

```vue
<DXDashboardGrid
  :widgets="widgets"
  :columns="6"
  gap="lg"
/>
```

### Static Widgets

```vue
<DXDashboardGrid
  :widgets="[
    { id: 'header', x: 0, y: 0, w: 4, h: 1, static: true },
    { id: 'content', x: 0, y: 1, w: 3, h: 2 },
    { id: 'sidebar', x: 3, y: 1, w: 1, h: 2 }
  ]"
  draggable
/>
```

### Responsive

```vue
<DXDashboardGrid
  :widgets="widgets"
  responsive
/>
<!-- Автоматически перестраивается на мобильных -->
```

### Full Dashboard Example

```vue
<template>
  <DXAppLayout variant="dashboard">
    <template #header>
      <DXHeaderBar appName="Dashboard" />
    </template>
    
    <template #content>
      <div class="p-6">
        <DXDashboardGrid
          v-model:widgets="dashboardWidgets"
          :columns="4"
          gap="md"
          draggable
          resizable
          @layout-change="saveLayout"
        >
          <template #widget-revenue>
            <DXDashboardWidget title="Выручка" :icon="CurrencyDollarIcon">
              <DXStatCard value="$45,231" :trend="12.5" />
            </DXDashboardWidget>
          </template>
          
          <template #widget-orders>
            <DXDashboardWidget title="Заказы" :icon="ShoppingBagIcon">
              <DXStatCard value="356" :trend="8.2" />
            </DXDashboardWidget>
          </template>
          
          <template #widget-chart>
            <DXDashboardWidget title="Продажи" refreshable @refresh="loadChart">
              <SalesChart :data="salesData" />
            </DXDashboardWidget>
          </template>
          
          <template #widget-recent-orders>
            <DXDashboardWidget title="Последние заказы">
              <RecentOrdersTable :orders="recentOrders" />
            </DXDashboardWidget>
          </template>
        </DXDashboardGrid>
      </div>
    </template>
  </DXAppLayout>
</template>

<script setup>
const dashboardWidgets = ref([
  { id: 'revenue', x: 0, y: 0, w: 1, h: 1 },
  { id: 'orders', x: 1, y: 0, w: 1, h: 1 },
  { id: 'chart', x: 2, y: 0, w: 2, h: 2 },
  { id: 'recent-orders', x: 0, y: 1, w: 2, h: 2 }
]);

function saveLayout(widgets) {
  localStorage.setItem('dashboardLayout', JSON.stringify(widgets));
}
</script>
```

## See Also

- [DXDashboardWidget](./DXDashboardWidget.md)
- [DXStatCard](../molecules/DXStatCard.md)
- [DXGrid](../atoms/DXGrid.md)

---

Виджет для дашборда с заголовком, действиями и контентом.

## Import

```javascript
import { DXDashboardWidget } from 'dxd-style-code';
```

## Props

| `subtitle` | `String` | `''` | Подзаголовок |
| `icon` | `Object\|Function` | `null` | Иконка в заголовке |
| `loading` | `Boolean` | `false` | Состояние загрузки |
| `error` | `String` | `''` | Сообщение об ошибке |
| `collapsible` | `Boolean` | `false` | Можно сворачивать |
| `collapsed` | `Boolean` | `false` | Свёрнут (v-model:collapsed) |
| `removable` | `Boolean` | `false` | Можно удалить |
| `refreshable` | `Boolean` | `false` | Можно обновить |
| `padding` | `String` | `'md'` | Отступы контента |
| `minHeight` | `String` | `null` | Минимальная высота |

## Events

| `refresh` | - | Клик по кнопке обновления |
| `remove` | - | Клик по кнопке удаления |

## Slots

| `header` | Кастомный header |
| `actions` | Действия в header |
| `footer` | Футер виджета |
| `loading` | Состояние загрузки |
| `error` | Состояние ошибки |

## Usage

### Basic

```vue
<DXDashboardWidget title="Статистика">
  <DXStatCard
    title="Продажи"
    value="$12,456"
    :trend="12.5"
  />
</DXDashboardWidget>
```

### With Icon and Subtitle

```vue
<DXDashboardWidget
  title="Активность пользователей"
  subtitle="За последние 7 дней"
  :icon="ChartBarIcon"
>
  <UserActivityChart :data="activityData" />
</DXDashboardWidget>
```

### Loading State

```vue
<DXDashboardWidget
  title="Данные"
  :loading="isLoading"
>
  <template #loading>
    <div class="flex items-center justify-center h-48">
      <DXLoader size="lg" />
    </div>
  </template>
  
  <DataContent v-if="!isLoading" :data="data" />
</DXDashboardWidget>
```

### With Error

```vue
<DXDashboardWidget
  title="API Данные"
  :error="errorMessage"
>
  <template #error>
    <DXEmptyState
      :icon="ExclamationTriangleIcon"
      title="Ошибка загрузки"
      :description="errorMessage"
    >
      <template #action>
        <DXButton @click="retry">Повторить</DXButton>
      </template>
    </DXEmptyState>
  </template>
  
  <DataContent v-if="!errorMessage" :data="data" />
</DXDashboardWidget>
```

### Collapsible

```vue
<DXDashboardWidget
  title="Детальная статистика"
  collapsible
  v-model:collapsed="isCollapsed"
>
  <DetailedStats :data="data" />
</DXDashboardWidget>
```

### With Actions

```vue
<DXDashboardWidget
  title="Заказы"
  refreshable
  @refresh="loadOrders"
>
  <template #actions>
    <DXDropdown>
      <template #trigger>
        <DXIcon :icon="EllipsisVerticalIcon" />
      </template>
      <DXDropdownItem @click="exportData">Экспорт</DXDropdownItem>
      <DXDropdownItem @click="openSettings">Настройки</DXDropdownItem>
    </DXDropdown>
  </template>
  
  <OrdersList :orders="orders" />
</DXDashboardWidget>
```

### Removable

```vue
<DXDashboardWidget
  title="Виджет"
  removable
  @remove="removeWidget"
>
  <WidgetContent />
</DXDashboardWidget>
```

### With Footer

```vue
<DXDashboardWidget title="Последние заказы">
  <OrdersTable :data="recentOrders" />
  
  <template #footer>
    <DXLink to="/orders">Все заказы →</DXLink>
  </template>
</DXDashboardWidget>
```

### Chart Widget

```vue
<DXDashboardWidget
  title="Продажи по месяцам"
  :icon="ChartBarIcon"
  refreshable
  minHeight="300px"
  @refresh="loadChartData"
>
  <SalesChart :data="salesData" />
</DXDashboardWidget>
```

## See Also

- [DXDashboardGrid](./DXDashboardGrid.md)
- [DXStatCard](../molecules/DXStatCard.md)
- [DXCard](../atoms/DXCard.md)

---

Контейнер для графиков с заголовком, легендой и опциями.

## Import

```javascript
import { DXChartContainer } from 'dxd-style-code';
```

## Props

| `subtitle` | `String` | `''` | Подзаголовок |
| `legend` | `Array` | `[]` | Легенда графика |
| `showLegend` | `Boolean` | `true` | Показывать легенду |
| `legendPosition` | `String` | `'bottom'` | Позиция легенды: `'top'`, `'bottom'`, `'left'`, `'right'` |
| `loading` | `Boolean` | `false` | Состояние загрузки |
| `error` | `String` | `''` | Сообщение об ошибке |
| `height` | `String` | `'300px'` | Высота графика |
| `refreshable` | `Boolean` | `false` | Можно обновлять |
| `downloadable` | `Boolean` | `false` | Можно скачать |
| `fullscreen` | `Boolean` | `false` | Режим fullscreen |

## Legend Item Structure

```typescript
interface LegendItem {
  label: string;
  color: string;
  value?: string | number;
  active?: boolean;
}
```

## Events

| `download` | - | Скачивание графика |
| `fullscreen` | `Boolean` | Переключение fullscreen |
| `legend-toggle` | `number` | Переключение элемента легенды |

## Slots

| `header` | Кастомный header |
| `legend` | Кастомная легенда |
| `loading` | Состояние загрузки |
| `error` | Состояние ошибки |
| `actions` | Дополнительные действия |

## Usage

### Basic

```vue
<DXChartContainer title="Продажи">
  <MyChart :data="salesData" />
</DXChartContainer>
```

### With Legend

```vue
<DXChartContainer
  title="Выручка по категориям"
  :legend="[
    { label: 'Электроника', color: '#3b82f6', value: '45%' },
    { label: 'Одежда', color: '#10b981', value: '30%' },
    { label: 'Книги', color: '#f59e0b', value: '25%' }
  ]"
>
  <PieChart :data="revenueData" />
</DXChartContainer>
```

### With Subtitle

```vue
<DXChartContainer
  title="Активность пользователей"
  subtitle="За последние 30 дней"
>
  <LineChart :data="activityData" />
</DXChartContainer>
```

### Refreshable

```vue
<DXChartContainer
  title="Данные в реальном времени"
  refreshable
  @refresh="loadChartData"
>
  <RealtimeChart :data="realtimeData" />
</DXChartContainer>
```

### Downloadable

```vue
<DXChartContainer
  title="Отчёт"
  downloadable
  @download="downloadChart"
>
  <BarChart :data="reportData" />
</DXChartContainer>
```

### Custom Height

```vue
<DXChartContainer
  title="Большой график"
  height="500px"
>
  <LargeChart :data="data" />
</DXChartContainer>
```

### Loading State

```vue
<DXChartContainer
  title="Данные"
  :loading="isLoading"
>
  <Chart v-if="!isLoading" :data="data" />
</DXChartContainer>
```

### Error State

```vue
<DXChartContainer
  title="Данные"
  :error="errorMessage"
>
  <template #error>
    <DXEmptyState
      :icon="ExclamationTriangleIcon"
      title="Ошибка загрузки"
      :description="errorMessage"
    >
      <template #action>
        <DXButton @click="retry">Повторить</DXButton>
      </template>
    </DXEmptyState>
  </template>
</DXChartContainer>
```

### Legend Positions

```vue
<DXChartContainer :legend="legend" legendPosition="top" />
<DXChartContainer :legend="legend" legendPosition="bottom" />
<DXChartContainer :legend="legend" legendPosition="left" />
<DXChartContainer :legend="legend" legendPosition="right" />
```

### With Actions

```vue
<DXChartContainer title="Продажи">
  <template #actions>
    <DXSegmentedControl
      v-model="period"
      :options="['День', 'Неделя', 'Месяц']"
      size="sm"
    />
  </template>
  
  <SalesChart :data="salesData" :period="period" />
</DXChartContainer>
```

### Dashboard Widget

```vue
<DXDashboardWidget title="Аналитика">
  <DXChartContainer
    :legend="chartLegend"
    refreshable
    downloadable
    height="250px"
    @refresh="refreshData"
  >
    <AreaChart :data="analyticsData" />
  </DXChartContainer>
</DXDashboardWidget>
```

## See Also

- [DXDashboardWidget](./DXDashboardWidget.md)
- [DXStatCard](../molecules/DXStatCard.md)

---

Галерея изображений и медиафайлов с lightbox.

## Import

```javascript
import { DXMediaGallery } from 'dxd-style-code';
```

## Props

| `columns` | `Number` | `4` | Количество колонок |
| `gap` | `String` | `'md'` | Отступы: `'sm'`, `'md'`, `'lg'` |
| `aspectRatio` | `String` | `'square'` | Соотношение сторон: `'square'`, `'video'`, `'portrait'`, `'auto'` |
| `lightbox` | `Boolean` | `true` | Включить lightbox |
| `selectable` | `Boolean` | `false` | Режим выбора |
| `selected` | `Array` | `[]` | Выбранные элементы (v-model) |
| `maxSelect` | `Number` | `0` | Максимум выбранных (0 = неограничено) |
| `loading` | `Boolean` | `false` | Состояние загрузки |

## Media Item Structure

```typescript
interface MediaItem {
  id: string | number;
  src: string;              // URL изображения
  thumbnail?: string;       // URL превью
  alt?: string;             // Alt текст
  title?: string;           // Заголовок
  type?: 'image' | 'video'; // Тип медиа
  metadata?: {
    size?: string;
    dimensions?: string;
    date?: string;
  };
}
```

## Events

| `item-click` | `MediaItem` | Клик по элементу |
| `lightbox-open` | `number` | Открытие lightbox (индекс) |
| `lightbox-close` | - | Закрытие lightbox |

## Slots

| `overlay` | `{ item }` | Overlay на элементе |
| `empty` | - | Пустое состояние |

## Usage

### Basic

```vue
<DXMediaGallery
  :items="[
    { id: 1, src: '/image1.jpg', alt: 'Image 1' },
    { id: 2, src: '/image2.jpg', alt: 'Image 2' },
    { id: 3, src: '/image3.jpg', alt: 'Image 3' }
  ]"
/>
```

### With Thumbnails

```vue
<DXMediaGallery
  :items="[
    { id: 1, src: '/full/image1.jpg', thumbnail: '/thumb/image1.jpg' },
    { id: 2, src: '/full/image2.jpg', thumbnail: '/thumb/image2.jpg' }
  ]"
/>
```

### Custom Columns

```vue
<DXMediaGallery
  :items="images"
  :columns="6"
  gap="sm"
/>
```

### Aspect Ratios

```vue
<DXMediaGallery :items="images" aspectRatio="square" />   <!-- 1:1 -->
<DXMediaGallery :items="images" aspectRatio="video" />    <!-- 16:9 -->
<DXMediaGallery :items="images" aspectRatio="portrait" /> <!-- 3:4 -->
<DXMediaGallery :items="images" aspectRatio="auto" />     <!-- Оригинальное -->
```

### Selectable

```vue
<DXMediaGallery
  v-model:selected="selectedImages"
  :items="images"
  selectable
  :maxSelect="5"
/>
```

### Without Lightbox

```vue
<DXMediaGallery
  :items="images"
  :lightbox="false"
  @item-click="handleImageClick"
/>
```

### With Overlay

```vue
<DXMediaGallery :items="images">
  <template #overlay="{ item }">
    <div class="absolute bottom-0 left-0 right-0 p-2 bg-black/50 text-white">
      {{ item.title }}
    </div>
  </template>
</DXMediaGallery>
```

### Loading State

```vue
<DXMediaGallery
  :items="images"
  :loading="isLoading"
/>
```

### Image Picker

```vue
<template>
  <div>
    <DXMediaGallery
      v-model:selected="selectedImages"
      :items="availableImages"
      selectable
      :maxSelect="3"
    />
    
    <div class="mt-4">
      <p>Выбрано: {{ selectedImages.length }} / 3</p>
      <DXButton @click="confirmSelection">Выбрать</DXButton>
    </div>
  </div>
</template>
```

### Product Gallery

```vue
<div class="flex gap-4">
  <DXMediaGallery
    :items="productImages"
    :columns="1"
    aspectRatio="auto"
    class="w-16"
    :lightbox="false"
    @item-click="setMainImage"
  />
  
  <div class="flex-1">
    <img :src="mainImage" class="w-full rounded-xl" />
  </div>
</div>
```

## Lightbox Features

- Клавиатурная навигация (←, →, Escape)
- Свайпы на мобильных
- Зум
- Счётчик изображений

## See Also

- [DXFileUpload](../molecules/DXFileUpload.md)
- [DXModal](./DXModal.md)

---

Карточка профиля пользователя с аватаром, информацией и действиями.

## Import

```javascript
import { DXUserProfileCard } from 'dxd-style-code';
```

## Props

| `variant` | `String` | `'default'` | Вариант: `'default'`, `'compact'`, `'horizontal'` |
| `showStatus` | `Boolean` | `false` | Показывать статус онлайн |
| `showStats` | `Boolean` | `false` | Показывать статистику |
| `showActions` | `Boolean` | `true` | Показывать действия |
| `editable` | `Boolean` | `false` | Можно редактировать |
| `size` | `String` | `'md'` | Размер: `'sm'`, `'md'`, `'lg'` |

## User Structure

```typescript
interface User {
  id: string | number;
  name: string;
  email?: string;
  avatar?: string;
  role?: string;
  status?: 'online' | 'offline' | 'away' | 'busy';
  bio?: string;
  location?: string;
  website?: string;
  stats?: {
    posts?: number;
    followers?: number;
    following?: number;
  };
  socialLinks?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}
```

## Events

| `edit` | - | Клик "Редактировать" |
| `avatar-click` | - | Клик по аватару |

## Slots

| `actions` | Кастомные действия |
| `stats` | Кастомная статистика |
| `footer` | Футер карточки |

## Usage

### Basic

```vue
<DXUserProfileCard
  :user="{
    name: 'Иван Иванов',
    email: 'ivan@example.com',
    avatar: '/avatar.jpg',
    role: 'Администратор'
  }"
/>
```

### With Status

```vue
<DXUserProfileCard
  :user="user"
  showStatus
/>
```

### With Stats

```vue
<DXUserProfileCard
  :user="{
    name: 'Иван Иванов',
    avatar: '/avatar.jpg',
    stats: {
      posts: 42,
      followers: 1234,
      following: 567
    }
  }"
  showStats
/>
```

### Compact Variant

```vue
<DXUserProfileCard
  :user="user"
  variant="compact"
/>
```

### Horizontal Variant

```vue
<DXUserProfileCard
  :user="user"
  variant="horizontal"
/>
```

### Editable

```vue
<DXUserProfileCard
  :user="currentUser"
  editable
  @edit="openEditModal"
/>
```

### Sizes

```vue
<DXUserProfileCard :user="user" size="sm" />
<DXUserProfileCard :user="user" size="md" />
<DXUserProfileCard :user="user" size="lg" />
```

### With Actions

```vue
<DXUserProfileCard :user="user">
  <template #actions>
    <DXButton size="sm">Подписаться</DXButton>
    <DXButton size="sm" variant="ghost">Сообщение</DXButton>
  </template>
</DXUserProfileCard>
```

### With Bio and Links

```vue
<DXUserProfileCard
  :user="{
    name: 'Иван Иванов',
    avatar: '/avatar.jpg',
    bio: 'Frontend разработчик. Люблю Vue.js и TypeScript.',
    location: 'Москва, Россия',
    website: 'https://ivan.dev',
    socialLinks: {
      twitter: 'ivan_dev',
      github: 'ivan-dev'
    }
  }"
  showStats
/>
```

### In Sidebar

```vue
<DXSidebar>
  <template #footer>
    <DXUserProfileCard
      :user="currentUser"
      variant="compact"
      @action="handleUserAction"
    />
  </template>
</DXSidebar>
```

### Team Member Card

```vue
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  <DXUserProfileCard
    v-for="member in team"
    :key="member.id"
    :user="member"
    variant="default"
    showStatus
  />
</div>
```

## See Also

- [DXCard](../atoms/DXCard.md)
- [DXDropdown](./DXDropdown.md)

---

Центр уведомлений с группировкой и действиями.

## Import

```javascript
import { DXNotificationCenter } from 'dxd-style-code';
```

## Props

| `groupBy` | `String` | `null` | Группировка: `'date'`, `'type'`, `'category'` |
| `showUnreadOnly` | `Boolean` | `false` | Показывать только непрочитанные |
| `maxVisible` | `Number` | `10` | Максимум видимых уведомлений |
| `loading` | `Boolean` | `false` | Состояние загрузки |
| `showMarkAllRead` | `Boolean` | `true` | Показать "Прочитать все" |
| `showSettings` | `Boolean` | `false` | Показать кнопку настроек |
| `emptyTitle` | `String` | `'Нет уведомлений'` | Заголовок пустого состояния |
| `emptyDescription` | `String` | `''` | Описание пустого состояния |

## Notification Structure

```typescript
interface Notification {
  id: string | number;
  title: string;
  message?: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  category?: string;
  read?: boolean;
  timestamp: Date | string;
  icon?: Component;
  avatar?: string;
  action?: {
    label: string;
    href?: string;
    to?: string;
    onClick?: () => void;
  };
}
```

## Events

| `mark-read` | `string \| number` | Пометить как прочитанное |
| `mark-all-read` | - | Прочитать все |
| `delete` | `string \| number` | Удалить уведомление |
| `settings` | - | Клик по настройкам |
| `load-more` | - | Загрузить ещё |

## Slots

| `empty` | - | Пустое состояние |
| `footer` | - | Футер центра |

## Usage

### Basic

```vue
<DXNotificationCenter
  :notifications="notifications"
  @notification-click="handleClick"
  @mark-read="handleMarkRead"
/>
```

### Grouped by Date

```vue
<DXNotificationCenter
  :notifications="notifications"
  groupBy="date"
/>
```

### With Actions

```vue
<DXNotificationCenter
  :notifications="notifications"
  showSettings
  @mark-all-read="markAllAsRead"
  @settings="openNotificationSettings"
/>
```

### In Dropdown

```vue
<DXDropdown width="lg" position="right">
  <template #trigger>
    <div class="relative">
      <DXIcon :icon="BellIcon" />
      <span v-if="unreadCount" class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
        {{ unreadCount }}
      </span>
    </div>
  </template>
  
  <DXNotificationCenter
    :notifications="notifications"
    :maxVisible="5"
    @notification-click="handleClick"
  >
    <template #footer>
      <DXLink to="/notifications">Все уведомления</DXLink>
    </template>
  </DXNotificationCenter>
</DXDropdown>
```

### Custom Notification Render

```vue
<DXNotificationCenter :notifications="notifications">
  <template #notification="{ notification }">
    <div class="flex gap-3 p-3 hover:bg-slate-50">
      <img 
        v-if="notification.avatar"
        :src="notification.avatar"
        class="w-10 h-10 rounded-full"
      />
      <div class="flex-1">
        <p class="font-medium">{{ notification.title }}</p>
        <p class="text-sm text-slate-500">{{ notification.message }}</p>
        <p class="text-xs text-slate-400 mt-1">
          {{ formatDate(notification.timestamp) }}
        </p>
      </div>
    </div>
  </template>
</DXNotificationCenter>
```

### Unread Only

```vue
<DXNotificationCenter
  :notifications="notifications"
  showUnreadOnly
/>
```

### With Loading

```vue
<DXNotificationCenter
  :notifications="notifications"
  :loading="isLoading"
  @load-more="loadMoreNotifications"
/>
```

### Empty State

```vue
<DXNotificationCenter
  :notifications="[]"
  emptyTitle="Всё прочитано!"
  emptyDescription="У вас нет новых уведомлений"
/>
```

### Full Page

```vue
<DXCard>
  <DXNotificationCenter
    :notifications="allNotifications"
    groupBy="date"
    :maxVisible="50"
    showSettings
    @mark-all-read="markAllAsRead"
    @delete="deleteNotification"
    @settings="showSettings = true"
  />
</DXCard>
```

## See Also

- [DXDropdown](./DXDropdown.md)
- [DXToast](../atoms/DXToast.md)
- [DXAlert](../molecules/DXAlert.md)

---

Интерфейс чата с сообщениями и полем ввода.

## Import

```javascript
import { DXChatInterface } from 'dxd-style-code';
```

## Props

| `currentUserId` | `String\|Number` | `null` | ID текущего пользователя |
| `placeholder` | `String` | `'Введите сообщение...'` | Placeholder ввода |
| `loading` | `Boolean` | `false` | Состояние загрузки |
| `showTypingIndicator` | `Boolean` | `false` | Показать индикатор печати |
| `typingUsers` | `Array` | `[]` | Пользователи, которые печатают |
| `showAvatars` | `Boolean` | `true` | Показывать аватары |
| `showTimestamps` | `Boolean` | `true` | Показывать время |
| `groupMessages` | `Boolean` | `true` | Группировать последовательные сообщения |

## Message Structure

```typescript
interface Message {
  id: string | number;
  userId: string | number;
  userName: string;
  userAvatar?: string;
  content: string;
  timestamp: Date | string;
  type?: 'text' | 'image' | 'file' | 'system';
  status?: 'sending' | 'sent' | 'delivered' | 'read';
  attachments?: Attachment[];
}

interface Attachment {
  id: string;
  type: 'image' | 'file';
  url: string;
  name?: string;
  size?: number;
}
```

## Events

| `scroll-top` | - | Прокрутка вверх (для загрузки истории) |
| `message-click` | `Message` | Клик по сообщению |
| `attachment-click` | `Attachment` | Клик по вложению |

## Slots

| `header` | - | Шапка чата |
| `empty` | - | Пустой чат |
| `input` | `{ send }` | Кастомный ввод |

## Usage

### Basic

```vue
<DXChatInterface
  :messages="messages"
  :currentUserId="currentUser.id"
  @send="sendMessage"
/>
```

### With Header

```vue
<DXChatInterface :messages="messages" :currentUserId="userId">
  <template #header>
    <div class="flex items-center gap-3 p-4 border-b">
      <img :src="chatPartner.avatar" class="w-10 h-10 rounded-full" />
      <div>
        <div class="font-medium">{{ chatPartner.name }}</div>
        <div class="text-sm text-slate-500">Онлайн</div>
      </div>
    </div>
  </template>
</DXChatInterface>
```

### With Typing Indicator

```vue
<DXChatInterface
  :messages="messages"
  :currentUserId="userId"
  showTypingIndicator
  :typingUsers="typingUsers"
/>
```

### Load History

```vue
<DXChatInterface
  :messages="messages"
  :currentUserId="userId"
  :loading="isLoadingHistory"
  @scroll-top="loadMoreHistory"
/>
```

### With Attachments

```vue
<DXChatInterface
  :messages="messagesWithAttachments"
  :currentUserId="userId"
  @attachment-click="openAttachment"
/>
```

### Custom Message Render

```vue
<DXChatInterface :messages="messages" :currentUserId="userId">
  <template #message="{ message, isOwn }">
    <div
      :class="[
        'max-w-xs px-4 py-2 rounded-2xl',
        isOwn ? 'bg-blue-500 text-white ml-auto' : 'bg-slate-100'
      ]"
    >
      <p>{{ message.content }}</p>
      <span class="text-xs opacity-70">
        {{ formatTime(message.timestamp) }}
      </span>
    </div>
  </template>
</DXChatInterface>
```

### Support Chat Widget

```vue
<template>
  <div class="fixed bottom-4 right-4">
    <DXButton v-if="!showChat" @click="showChat = true">
      <DXIcon :icon="ChatBubbleLeftIcon" />
      Чат с поддержкой
    </DXButton>
    
    <DXCard v-else class="w-96 h-[500px] flex flex-col">
      <DXChatInterface
        :messages="supportMessages"
        :currentUserId="'user'"
        class="flex-1"
        @send="sendSupportMessage"
      >
        <template #header>
          <div class="flex justify-between items-center p-4 border-b">
            <span class="font-medium">Поддержка</span>
            <DXCloseButton @click="showChat = false" />
          </div>
        </template>
      </DXChatInterface>
    </DXCard>
  </div>
</template>
```

### Empty State

```vue
<DXChatInterface :messages="[]" :currentUserId="userId">
  <template #empty>
    <div class="flex flex-col items-center justify-center h-full text-slate-500">
      <DXIcon :icon="ChatBubbleLeftRightIcon" size="xl" />
      <p class="mt-2">Начните диалог</p>
    </div>
  </template>
</DXChatInterface>
```

## Message Status Icons

| `sent` | Отправлено (одна галочка) |
| `delivered` | Доставлено (две галочки) |
| `read` | Прочитано (две синие галочки) |

## See Also

- [DXTextarea](../molecules/DXTextarea.md)
- [DXAvatar](../atoms/DXAvatar.md)

---

Секция комментариев с вложенными ответами.

## Import

```javascript
import { DXCommentSection } from 'dxd-style-code';
```

## Props

| `currentUserId` | `String\|Number` | `null` | ID текущего пользователя |
| `allowReplies` | `Boolean` | `true` | Разрешить ответы |
| `allowEdit` | `Boolean` | `true` | Разрешить редактирование своих комментариев |
| `allowDelete` | `Boolean` | `true` | Разрешить удаление своих комментариев |
| `maxDepth` | `Number` | `3` | Максимальная глубина вложенности |
| `showForm` | `Boolean` | `true` | Показывать форму добавления |
| `placeholder` | `String` | `'Написать комментарий...'` | Placeholder |
| `loading` | `Boolean` | `false` | Состояние загрузки |

## Comment Structure

```typescript
interface Comment {
  id: string | number;
  userId: string | number;
  userName: string;
  userAvatar?: string;
  content: string;
  timestamp: Date | string;
  likes?: number;
  isLiked?: boolean;
  replies?: Comment[];
}
```

## Events

| `edit` | `{ id, content }` | Редактирование |
| `delete` | `id` | Удаление |
| `like` | `id` | Лайк |
| `reply` | `{ parentId, content }` | Ответ |
| `load-more` | - | Загрузить ещё |

## Slots

| `form` | `{ submit }` | Кастомная форма |
| `empty` | - | Пустое состояние |

## Usage

### Basic

```vue
<DXCommentSection
  :comments="comments"
  :currentUserId="currentUser.id"
  @add="addComment"
/>
```

### With Likes

```vue
<DXCommentSection
  :comments="comments"
  :currentUserId="userId"
  @like="handleLike"
/>
```

### With Nested Replies

```vue
<DXCommentSection
  :comments="[
    {
      id: 1,
      userName: 'Иван',
      content: 'Отличная статья!',
      replies: [
        {
          id: 2,
          userName: 'Мария',
          content: 'Согласна!'
        }
      ]
    }
  ]"
  :maxDepth="3"
/>
```

### Without Form

```vue
<DXCommentSection
  :comments="comments"
  :showForm="false"
/>
```

### Read-only

```vue
<DXCommentSection
  :comments="comments"
  :allowReplies="false"
  :allowEdit="false"
  :allowDelete="false"
  :showForm="false"
/>
```

### Blog Post Example

```vue
<DXCard>
  <article>
    <h1>{{ post.title }}</h1>
    <div v-html="post.content"></div>
  </article>
  
  <DXDivider />
  
  <DXCommentSection
    :comments="post.comments"
    :currentUserId="currentUser?.id"
    @add="addComment"
    @reply="addReply"
    @like="likeComment"
    @delete="deleteComment"
  />
</DXCard>
```

## See Also

- [DXChatInterface](./DXChatInterface.md)
- [DXTextarea](../molecules/DXTextarea.md)

---

Генератор отчётов с фильтрами и экспортом.

## Import

```javascript
import { DXReportGenerator } from 'dxd-style-code';
```

## Props

| `filters` | `Array` | `[]` | Конфигурация фильтров |
| `columns` | `Array` | `[]` | Колонки отчёта |
| `data` | `Array` | `[]` | Данные отчёта |
| `loading` | `Boolean` | `false` | Состояние загрузки |
| `exportFormats` | `Array` | `['csv', 'xlsx', 'pdf']` | Доступные форматы экспорта |
| `showPreview` | `Boolean` | `true` | Показывать превью |
| `autoGenerate` | `Boolean` | `false` | Автогенерация при изменении фильтров |

## Filter Structure

```typescript
interface Filter {
  key: string;
  label: string;
  type: 'select' | 'date' | 'daterange' | 'input' | 'checkbox';
  options?: Array;
  defaultValue?: any;
}
```

## Events

| `export` | `{ format, data }` | Экспорт |
| `filter-change` | `{ key, value }` | Изменение фильтра |

## Slots

| `preview` | `{ data }` | Кастомный превью |
| `actions` | - | Дополнительные действия |

## Usage

### Basic

```vue
<DXReportGenerator
  title="Отчёт по продажам"
  :filters="[
    { key: 'period', label: 'Период', type: 'daterange' },
    { key: 'category', label: 'Категория', type: 'select', options: categories }
  ]"
  :columns="columns"
  :data="reportData"
  @generate="generateReport"
  @export="exportReport"
/>
```

### With Custom Filters

```vue
<DXReportGenerator title="Финансовый отчёт">
  <template #filters="{ values }">
    <DXFormControl label="Год">
      <DXSelect v-model="values.year" :options="years" />
    </DXFormControl>
    <DXFormControl label="Квартал">
      <DXSelect v-model="values.quarter" :options="quarters" />
    </DXFormControl>
  </template>
</DXReportGenerator>
```

### Auto-generate

```vue
<DXReportGenerator
  title="Отчёт"
  :filters="filters"
  :data="data"
  autoGenerate
  @filter-change="handleFilterChange"
/>
```

## See Also

- [DXTable](./DXTable.md)
- [DXDatePicker](../molecules/DXDatePicker.md)

---

Панель настроек с группами параметров.

## Import

```javascript
import { DXSettingsPanel } from 'dxd-style-code';
```

## Props

| `modelValue` | `Object` | `{}` | Значения настроек (v-model) |
| `variant` | `String` | `'default'` | Вариант: `'default'`, `'compact'`, `'cards'` |
| `showSearch` | `Boolean` | `false` | Показать поиск |
| `showReset` | `Boolean` | `false` | Показать кнопку сброса |
| `loading` | `Boolean` | `false` | Состояние загрузки |

## Section Structure

```typescript
interface Section {
  id: string;
  title: string;
  description?: string;
  icon?: Component;
  settings: Setting[];
}

interface Setting {
  key: string;
  label: string;
  description?: string;
  type: 'toggle' | 'select' | 'input' | 'slider' | 'color' | 'radio';
  options?: Array;     // Для select и radio
  min?: number;        // Для slider
  max?: number;        // Для slider
  step?: number;       // Для slider
  placeholder?: string;
  disabled?: boolean;
  validation?: (value) => string | null;
}
```

## Events

| `change` | `{ key, value }` | Изменение конкретной настройки |
| `reset` | - | Сброс настроек |
| `save` | `Object` | Сохранение настроек |

## Slots

| `section-{id}` | `{ section }` | Кастомная секция |
| `footer` | - | Футер панели |

## Usage

### Basic

```vue
<DXSettingsPanel
  v-model="settings"
  :sections="[
    {
      id: 'general',
      title: 'Основные',
      settings: [
        { key: 'darkMode', label: 'Тёмная тема', type: 'toggle' },
        { key: 'language', label: 'Язык', type: 'select', options: ['Русский', 'English'] }
      ]
    }
  ]"
/>
```

### With Icons

```vue
<DXSettingsPanel
  v-model="settings"
  :sections="[
    {
      id: 'notifications',
      title: 'Уведомления',
      icon: BellIcon,
      settings: [
        { key: 'email', label: 'Email уведомления', type: 'toggle' },
        { key: 'push', label: 'Push уведомления', type: 'toggle' },
        { key: 'frequency', label: 'Частота', type: 'select', options: ['Мгновенно', 'Ежедневно', 'Еженедельно'] }
      ]
    },
    {
      id: 'privacy',
      title: 'Приватность',
      icon: ShieldCheckIcon,
      settings: [
        { key: 'profileVisibility', label: 'Видимость профиля', type: 'radio', options: ['Все', 'Только друзья', 'Никто'] },
        { key: 'showOnline', label: 'Показывать онлайн статус', type: 'toggle' }
      ]
    }
  ]"
/>
```

### With Descriptions

```vue
<DXSettingsPanel
  v-model="settings"
  :sections="[
    {
      id: 'appearance',
      title: 'Внешний вид',
      description: 'Настройте внешний вид приложения',
      settings: [
        {
          key: 'theme',
          label: 'Тема',
          description: 'Выберите цветовую схему',
          type: 'select',
          options: ['Светлая', 'Тёмная', 'Системная']
        },
        {
          key: 'fontSize',
          label: 'Размер шрифта',
          description: 'Базовый размер текста',
          type: 'slider',
          min: 12,
          max: 24,
          step: 2
        }
      ]
    }
  ]"
/>
```

### With Search

```vue
<DXSettingsPanel
  v-model="settings"
  :sections="sections"
  showSearch
/>
```

### With Reset

```vue
<DXSettingsPanel
  v-model="settings"
  :sections="sections"
  showReset
  @reset="resetToDefaults"
/>
```

### Cards Variant

```vue
<DXSettingsPanel
  v-model="settings"
  :sections="sections"
  variant="cards"
/>
```

### Custom Setting

```vue
<DXSettingsPanel v-model="settings" :sections="sections">
  <template #setting-avatar>
    <div class="flex items-center gap-4">
      <img :src="settings.avatar" class="w-16 h-16 rounded-full" />
      <DXButton size="sm" @click="changeAvatar">Изменить</DXButton>
    </div>
  </template>
</DXSettingsPanel>
```

### With Save Button

```vue
<DXSettingsPanel
  v-model="settings"
  :sections="sections"
  :loading="isSaving"
>
  <template #footer>
    <DXButton @click="saveSettings" :loading="isSaving">
      Сохранить изменения
    </DXButton>
  </template>
</DXSettingsPanel>
```

### Full Example

```vue
<template>
  <DXCard>
    <DXSettingsPanel
      v-model="userSettings"
      :sections="settingsSections"
      showSearch
      showReset
      @change="handleSettingChange"
      @reset="confirmReset"
    >
      <template #footer>
        <div class="flex justify-end gap-2">
          <DXButton variant="ghost" @click="cancel">Отмена</DXButton>
          <DXButton @click="save" :loading="saving">Сохранить</DXButton>
        </div>
      </template>
    </DXSettingsPanel>
  </DXCard>
</template>
```

## See Also

- [DXToggle](../atoms/DXToggle.md)
- [DXSelect](../molecules/DXSelect.md)
- [DXSlider](../atoms/DXSlider.md)

---

---

## Utilities (Утилиты) - 7 компонентов

Утилитарные компоненты для расширенной функциональности.

Компонент для рендеринга контента в другой части DOM (Teleport).

## Import

```javascript
import { DXPortal } from 'dxd-style-code';
```

## Props

| `disabled` | `Boolean` | `false` | Отключить портал (рендерить на месте) |

### to prop values

- `'body'` - рендеринг в body
- `'#id'` - CSS селектор по ID
- `'.class'` - CSS селектор по классу
- `HTMLElement` - DOM элемент напрямую

## Slots

## Usage

### Basic (to body)

```vue
<DXPortal>
  <DXModal v-if="isOpen">
    <p>Модальное окно</p>
  </DXModal>
</DXPortal>
```

### To Specific Container

```vue
<template>
  <div id="modals-container"></div>
  
  <DXPortal to="#modals-container">
    <DXModal v-if="isOpen">
      <p>Модальное окно в контейнере</p>
    </DXModal>
  </DXPortal>
</template>
```

### Disabled

```vue
<DXPortal :disabled="true">
  <div>Рендерится на месте</div>
</DXPortal>
```

### With Dynamic Target

```vue
<template>
  <DXPortal :to="portalTarget">
    <DXTooltip>Подсказка</DXTooltip>
  </DXPortal>
</template>

<script setup>
import { ref } from 'vue';
const portalTarget = ref('body');
</script>
```

### Use Cases

1. **Модальные окна** - рендеринг поверх всего контента
2. **Тултипы** - избежание проблем с overflow
3. **Dropdown меню** - позиционирование относительно viewport
4. **Уведомления** - глобальный контейнер нотификаций

## Fallback Behavior

Если указанный контейнер не найден, компонент:
1. Выводит предупреждение в консоль
2. Использует `body` как fallback

## See Also

- [DXModal](../organisms/DXModal.md)
- [DXTooltip](../atoms/DXTooltip.md)
- [DXDropdown](../organisms/DXDropdown.md)

---

Компонент для отслеживания видимости элементов (Intersection Observer).

## Import

```javascript
import { DXObserver } from 'dxd-style-code';
```

## Props

| `rootMargin` | `String` | `'0px'` | Отступы от root (CSS margin формат) |
| `once` | `Boolean` | `false` | Срабатывать только один раз |
| `root` | `String\|HTMLElement` | `null` | Root элемент (по умолчанию viewport) |
| `disabled` | `Boolean` | `false` | Отключить observer |

## Events

## Slots

## Usage

### Basic

```vue
<DXObserver @intersect="onVisible">
  <div>Отслеживаемый элемент</div>
</DXObserver>

<script setup>
function onVisible(isVisible, entry) {
  if (isVisible) {
    console.log('Элемент виден!');
  }
}
</script>
```

### Lazy Loading

```vue
<DXObserver :once="true" @intersect="loadImage">
  <img v-if="loaded" :src="imageSrc" />
  <DXSkeleton v-else height="200px" />
</DXObserver>

<script setup>
import { ref } from 'vue';

const loaded = ref(false);
const imageSrc = ref('');

function loadImage(isVisible) {
  if (isVisible) {
    imageSrc.value = '/large-image.jpg';
    loaded.value = true;
  }
}
</script>
```

### Infinite Scroll

```vue
<div class="list">
  <div v-for="item in items" :key="item.id">
    {{ item.name }}
  </div>
  
  <DXObserver @intersect="loadMore" :threshold="0">
    <DXLoader v-if="loading" />
  </DXObserver>
</div>

<script setup>
async function loadMore(isVisible) {
  if (isVisible && !loading.value) {
    loading.value = true;
    await fetchMoreItems();
    loading.value = false;
  }
}
</script>
```

### Animate on Scroll

```vue
<DXObserver 
  :once="true" 
  :threshold="0.3"
  @intersect="(visible) => isVisible = visible"
>
  <div :class="{ 'animate-fade-in': isVisible }">
    Анимированный контент
  </div>
</DXObserver>
```

### Custom Root

```vue
<div id="scroll-container" class="overflow-auto h-64">
  <DXObserver 
    root="#scroll-container" 
    :rootMargin="'-50px'"
    @intersect="handleIntersect"
  >
    <div>Элемент в контейнере</div>
  </DXObserver>
</div>
```

### Multiple Thresholds

```vue
<DXObserver 
  :threshold="[0, 0.25, 0.5, 0.75, 1]"
  @intersect="onProgress"
>
  <div>Элемент с прогрессом видимости</div>
</DXObserver>

<script setup>
function onProgress(isVisible, entry) {
  console.log(`Видимость: ${entry.intersectionRatio * 100}%`);
}
</script>
```

## See Also

- [DXLoader](../atoms/DXLoader.md)
- [DXSkeleton](../atoms/DXSkeleton.md)
- [DXAnimatePresence](./DXAnimatePresence.md)

---

Провайдер брейкпоинтов для адаптивного дизайна.

## Import

```javascript
import { DXBreakpointProvider } from 'dxd-style-code';
```

## Props

| `debounce` | `Number` | `150` | Debounce для resize (ms) |

## Default Breakpoints (Tailwind CSS)

```javascript
{
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
}
```

## Events

## Provided Values

Доступны через `inject()`:

| `currentBreakpoint` | `inject('currentBreakpoint')` | `ComputedRef<string>` | Текущий брейкпоинт |
| `screenWidth` | `inject('screenWidth')` | `ComputedRef<number>` | Ширина экрана |
| `screenHeight` | `inject('screenHeight')` | `ComputedRef<number>` | Высота экрана |

## Usage

### Basic

```vue
<DXBreakpointProvider>
  <App />
</DXBreakpointProvider>
```

### With Custom Breakpoints

```vue
<DXBreakpointProvider
  :breakpoints="{
    mobile: 0,
    tablet: 768,
    desktop: 1200
  }"
>
  <App />
</DXBreakpointProvider>
```

### Responsive Component

```vue
<template>
  <div>
    <MobileLayout v-if="isMobile" />
    <DesktopLayout v-else />
  </div>
</template>

<script setup>
import { inject, computed } from 'vue';

const currentBreakpoint = inject('currentBreakpoint');
const isMobile = computed(() => 
  ['xs', 'sm'].includes(currentBreakpoint.value)
);
</script>
```

### Using Screen Dimensions

```vue
<script setup>
import { inject, computed } from 'vue';

const screenWidth = inject('screenWidth');
const screenHeight = inject('screenHeight');

const columns = computed(() => {
  if (screenWidth.value >= 1280) return 4;
  if (screenWidth.value >= 768) return 3;
  if (screenWidth.value >= 640) return 2;
  return 1;
});
</script>

<template>
  <DXGrid :cols="columns">
    <DXCard v-for="item in items" :key="item.id">
      {{ item.name }}
    </DXCard>
  </DXGrid>
</template>
```

### Listen to Changes

```vue
<DXBreakpointProvider 
  @breakpoint-change="onBreakpointChange"
>
  <App />
</DXBreakpointProvider>

<script setup>
function onBreakpointChange(newBreakpoint, oldBreakpoint) {
  console.log(`Брейкпоинт изменился: ${oldBreakpoint} → ${newBreakpoint}`);
}
</script>
```

### Conditional Rendering

```vue
<script setup>
import { inject, computed } from 'vue';

const breakpoints = inject('breakpoints');
const screenWidth = inject('screenWidth');

const isTabletOrLarger = computed(() => 
  screenWidth.value >= breakpoints.value.md
);
</script>

<template>
  <DXSidebar v-if="isTabletOrLarger">
    <DXSidebarMenu :items="menuItems" />
  </DXSidebar>
  
  <DXDrawer v-else>
    <DXMenu :items="menuItems" />
  </DXDrawer>
</template>
```

## See Also

- [DXThemeProvider](./DXThemeProvider.md)
- [DXAppLayout](../organisms/DXAppLayout.md)

---

Провайдер тем для приложения с поддержкой системной темы и localStorage.

## Import

```javascript
import { DXThemeProvider } from 'dxd-style-code';
```

## Props

| `themes` | `Object` | `{}` | Доступные темы с цветами |
| `persist` | `Boolean` | `false` | Сохранять в localStorage |
| `storageKey` | `String` | `'dx-theme'` | Ключ localStorage |
| `useSystemTheme` | `Boolean` | `false` | Использовать системную тему |

## Theme Structure

```typescript
interface ThemeConfig {
  [themeName: string]: {
    name: string;
    colors: {
      primary: string;
      background: string;
      text: string;
      // ... другие цвета
    };
  };
}
```

## Events

## Provided Values

Доступны через `inject('theme')`:

| `effectiveTheme` | `ComputedRef<string>` | Эффективная тема (с учётом системной) |
| `themeColors` | `ComputedRef<Object>` | Цвета текущей темы |
| `setTheme` | `Function` | Переключить тему |
| `availableThemes` | `ComputedRef<string[]>` | Список тем |

## Usage

### Basic

```vue
<DXThemeProvider
  :themes="{
    light: {
      name: 'Светлая',
      colors: {
        primary: '#3b82f6',
        background: '#ffffff',
        text: '#1f2937'
      }
    },
    dark: {
      name: 'Тёмная',
      colors: {
        primary: '#60a5fa',
        background: '#1f2937',
        text: '#f9fafb'
      }
    }
  }"
  theme="light"
>
  <App />
</DXThemeProvider>
```

### With Persistence

```vue
<DXThemeProvider
  :themes="themes"
  persist
  storageKey="my-app-theme"
>
  <App />
</DXThemeProvider>
```

### System Theme

```vue
<DXThemeProvider
  :themes="themes"
  useSystemTheme
  @theme-change="onThemeChange"
>
  <App />
</DXThemeProvider>
```

### Theme Switcher (child component)

```vue
<template>
  <DXSelect
    :modelValue="theme.currentTheme.value"
    :options="theme.availableThemes.value"
    @update:modelValue="theme.setTheme"
  />
</template>

<script setup>
import { inject } from 'vue';
const theme = inject('theme');
</script>
```

### Toggle Theme

```vue
<script setup>
import { inject } from 'vue';
const theme = inject('theme');

function toggleTheme() {
  // Без аргументов переключает на следующую тему
  theme.setTheme();
}
</script>

<template>
  <DXButton @click="toggleTheme">
    Переключить тему
  </DXButton>
</template>
```

### Using CSS Variables

CSS переменные автоматически применяются к `document.documentElement`:

```css
.my-component {
  background: var(--color-background);
  color: var(--color-text);
  border-color: var(--color-primary);
}
```

## See Also

- [DXBreakpointProvider](./DXBreakpointProvider.md)

---

Компонент для анимации появления/исчезновения элементов.

## Import

```javascript
import { DXAnimatePresence } from 'dxd-style-code';
```

## Props

| `name` | `String` | `'fade'` | Имя transition для CSS классов |
| `mode` | `String` | `'default'` | Режим: `'default'`, `'in-out'`, `'out-in'` |
| `type` | `String` | `'fade'` | Тип анимации |
| `duration` | `Number` | `200` | Длительность в ms |
| `appear` | `Boolean` | `false` | Анимировать при первом появлении |

## Animation Types

| `fade-scale` | Появление с масштабированием |
| `slide-right` | Слайд справа |
| `slide-left` | Слайд слева |
| `slide-up` | Слайд снизу вверх |
| `slide-down` | Слайд сверху вниз |

## Slots

## Usage

### Basic Fade

```vue
<DXAnimatePresence :show="isVisible">
  <div>Анимированный контент</div>
</DXAnimatePresence>
```

### Fade Scale

```vue
<DXAnimatePresence :show="isOpen" type="fade-scale">
  <DXModal>
    <p>Модальное окно с масштабированием</p>
  </DXModal>
</DXAnimatePresence>
```

### Slide Animations

```vue
<DXAnimatePresence :show="showSidebar" type="slide-left">
  <DXSidebar>Боковая панель</DXSidebar>
</DXAnimatePresence>

<DXAnimatePresence :show="showDropdown" type="slide-down">
  <DXDropdown>Выпадающее меню</DXDropdown>
</DXAnimatePresence>
```

### Custom Duration

```vue
<DXAnimatePresence :show="isVisible" :duration="500">
  <div>Медленная анимация</div>
</DXAnimatePresence>
```

### With Appear

```vue
<DXAnimatePresence :show="true" appear type="fade-scale">
  <DXCard>Появляется с анимацией при монтировании</DXCard>
</DXAnimatePresence>
```

### Mode out-in

```vue
<DXAnimatePresence :show="showFirst" mode="out-in">
  <div v-if="showFirst" key="first">Первый</div>
  <div v-else key="second">Второй</div>
</DXAnimatePresence>
```

### Notification Example

```vue
<DXAnimatePresence 
  :show="notification.visible" 
  type="slide-right"
  :duration="300"
>
  <DXToast :variant="notification.type">
    {{ notification.message }}
  </DXToast>
</DXAnimatePresence>
```

### Modal with Backdrop

```vue
<template>
  <DXAnimatePresence :show="isOpen" type="fade" :duration="150">
    <DXBackdrop @click="close" />
  </DXAnimatePresence>
  
  <DXAnimatePresence :show="isOpen" type="fade-scale" :duration="200">
    <DXModal>
      <h2>Заголовок</h2>
      <p>Контент модального окна</p>
    </DXModal>
  </DXAnimatePresence>
</template>
```

## See Also

- [DXTransitionGroup](./DXTransitionGroup.md)
- [DXStaggeredAnimation](./DXStaggeredAnimation.md)
- [useAnimation](../composables/useAnimation.md)

---

Компонент для анимации списков элементов (TransitionGroup wrapper).

## Import

```javascript
import { DXTransitionGroup } from 'dxd-style-code';
```

## Props

| `tag` | `String` | `'div'` | HTML тег для контейнера |
| `type` | `String` | `'fade'` | Тип анимации |
| `duration` | `Number` | `200` | Длительность анимации (ms) |

## Animation Types

| `fade-scale` | Появление с масштабированием |
| `slide-right` | Слайд справа |
| `slide-left` | Слайд слева |
| `slide-up` | Слайд снизу вверх |
| `slide-down` | Слайд сверху вниз |

## Slots

## Usage

### Basic List

```vue
<DXTransitionGroup>
  <div v-for="item in items" :key="item.id">
    {{ item.name }}
  </div>
</DXTransitionGroup>
```

### Custom Tag

```vue
<DXTransitionGroup tag="ul">
  <li v-for="item in items" :key="item.id">
    {{ item.name }}
  </li>
</DXTransitionGroup>
```

### Fade Scale

```vue
<DXTransitionGroup type="fade-scale" :duration="300">
  <DXCard v-for="card in cards" :key="card.id">
    {{ card.title }}
  </DXCard>
</DXTransitionGroup>
```

### Todo List

```vue
<template>
  <DXTransitionGroup type="slide-right" tag="div" class="space-y-2">
    <div 
      v-for="todo in todos" 
      :key="todo.id"
      class="flex items-center gap-2"
    >
      <DXCheckbox 
        :modelValue="todo.done"
        @update:modelValue="toggleTodo(todo.id)"
      />
      <span :class="{ 'line-through': todo.done }">
        {{ todo.text }}
      </span>
      <DXButton size="sm" variant="ghost" @click="removeTodo(todo.id)">
        ✕
      </DXButton>
    </div>
  </DXTransitionGroup>
</template>

<script setup>
import { ref } from 'vue';

const todos = ref([
  { id: 1, text: 'Задача 1', done: false },
  { id: 2, text: 'Задача 2', done: true },
]);

function toggleTodo(id) {
  const todo = todos.value.find(t => t.id === id);
  if (todo) todo.done = !todo.done;
}

function removeTodo(id) {
  todos.value = todos.value.filter(t => t.id !== id);
}
</script>
```

### Notifications Stack

```vue
<DXTransitionGroup type="slide-left" tag="div" class="fixed top-4 right-4 space-y-2">
  <DXToast 
    v-for="notification in notifications" 
    :key="notification.id"
    :variant="notification.type"
  >
    {{ notification.message }}
  </DXToast>
</DXTransitionGroup>
```

### Grid with Move Animation

```vue
<DXTransitionGroup 
  type="fade-scale" 
  tag="div" 
  class="grid grid-cols-3 gap-4"
>
  <DXCard v-for="item in sortedItems" :key="item.id">
    {{ item.name }}
  </DXCard>
</DXTransitionGroup>

<script setup>
import { computed, ref } from 'vue';

const items = ref([...]);
const sortedItems = computed(() => 
  [...items.value].sort((a, b) => a.order - b.order)
);
</script>
```

### Filter Animation

```vue
<template>
  <DXButtonGroup>
    <DXButton 
      v-for="cat in categories" 
      :key="cat"
      :variant="filter === cat ? 'primary' : 'outline'"
      @click="filter = cat"
    >
      {{ cat }}
    </DXButton>
  </DXButtonGroup>
  
  <DXTransitionGroup type="fade" tag="div" class="grid grid-cols-4 gap-4 mt-4">
    <DXCard v-for="item in filteredItems" :key="item.id">
      {{ item.name }}
    </DXCard>
  </DXTransitionGroup>
</template>

<script setup>
import { ref, computed } from 'vue';

const filter = ref('all');
const items = ref([...]);

const filteredItems = computed(() => {
  if (filter.value === 'all') return items.value;
  return items.value.filter(i => i.category === filter.value);
});
</script>
```

## Notes

- Каждый дочерний элемент должен иметь уникальный `key`
- Move анимация применяется автоматически при изменении порядка элементов
- Для правильной работы move анимации элементы должны быть в одном контейнере

## See Also

- [DXAnimatePresence](./DXAnimatePresence.md)
- [DXStaggeredAnimation](./DXStaggeredAnimation.md)

---

Компонент для последовательной анимации дочерних элементов.

## Import

```javascript
import { DXStaggeredAnimation } from 'dxd-style-code';
```

## Props

| `direction` | `String` | `'top-to-bottom'` | Направление анимации |
| `transition` | `String` | `'fade'` | Тип перехода |
| `duration` | `Number` | `300` | Длительность анимации (ms) |
| `animateOnMount` | `Boolean` | `true` | Анимировать при монтировании |

## Direction Values

| `bottom-to-top` | Снизу вверх |
| `left-to-right` | Слева направо |
| `right-to-left` | Справа налево |

## Transition Types

| `fade-slide` | Прозрачность + сдвиг |
| `scale` | Прозрачность + масштаб |

## Events

## Slots

## Usage

### Basic List Animation

```vue
<DXStaggeredAnimation>
  <DXCard v-for="item in items" :key="item.id">
    {{ item.name }}
  </DXCard>
</DXStaggeredAnimation>
```

### Custom Delay

```vue
<DXStaggeredAnimation :delay="150" :duration="400">
  <div v-for="i in 5" :key="i">
    Элемент {{ i }}
  </div>
</DXStaggeredAnimation>
```

### Different Directions

```vue
<!-- Справа налево -->
<DXStaggeredAnimation direction="right-to-left">
  <DXCard v-for="card in cards" :key="card.id">
    {{ card.title }}
  </DXCard>
</DXStaggeredAnimation>

<!-- Снизу вверх -->
<DXStaggeredAnimation direction="bottom-to-top">
  <DXListItem v-for="item in list" :key="item.id">
    {{ item.name }}
  </DXListItem>
</DXStaggeredAnimation>
```

### Scale Transition

```vue
<DXStaggeredAnimation transition="scale" :delay="80">
  <DXTags v-for="tag in tags" :key="tag">
    {{ tag }}
  </DXTags>
</DXStaggeredAnimation>
```

### Dashboard Widgets

```vue
<DXStaggeredAnimation 
  :delay="100" 
  direction="left-to-right"
  @animation-complete="onAnimationDone"
>
  <DXDashboardWidget v-for="widget in widgets" :key="widget.id">
    {{ widget.content }}
  </DXDashboardWidget>
</DXStaggeredAnimation>
```

### Grid Animation

```vue
<DXGrid cols="3" gap="4">
  <DXStaggeredAnimation :delay="50">
    <DXCard v-for="product in products" :key="product.id">
      <img :src="product.image" />
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }}</p>
    </DXCard>
  </DXStaggeredAnimation>
</DXGrid>
```

### Controlled Animation

```vue
<template>
  <DXButton @click="triggerAnimation">
    Запустить анимацию
  </DXButton>
  
  <DXStaggeredAnimation 
    v-if="showItems"
    :animateOnMount="true"
    @animation-complete="onComplete"
  >
    <div v-for="item in items" :key="item.id">
      {{ item.name }}
    </div>
  </DXStaggeredAnimation>
</template>

<script setup>
import { ref } from 'vue';

const showItems = ref(false);

function triggerAnimation() {
  showItems.value = false;
  setTimeout(() => {
    showItems.value = true;
  }, 100);
}
</script>
```

## See Also

- [DXAnimatePresence](./DXAnimatePresence.md)
- [DXTransitionGroup](./DXTransitionGroup.md)

---

---

## Composables - 14 функций

Переиспользуемая логика для компонентов.

### Общие

Composable для унификации размеров компонентов.

## Import

```javascript
import { useSize } from 'dxd-style-code';
```

## Signature

```typescript
function useSize(
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none',
  type: string
): string | Object
```

## Parameters

| `type` | `String` | `'input'` | Тип компонента |

## Component Types

| `buttonIcon` | Иконочные кнопки | xs, sm, md, lg, xl |
| `input` | Инпуты | xs, sm, md, lg, xl |
| `icon` | Иконки | xs, sm, md, lg, xl |
| `text` | Текст | xs, sm, md, lg, xl |
| `checkbox` | Чекбоксы | xs, sm, md, lg, xl |
| `radio` | Радио-кнопки | xs, sm, md, lg, xl |
| `avatar` | Аватары | xs, sm, md, lg, xl |
| `loader` | Лоадеры | xs, sm, md, lg, xl |
| `progress` | Прогресс-бары | xs, sm, md, lg |
| `inputAddon` | Аддоны инпутов | xs, sm, md, lg, xl |
| `sliderTrack` | Трек слайдера | xs, sm, md, lg, xl |
| `sliderThumb` | Ползунок слайдера | xs, sm, md, lg, xl |
| `spacing` | Отступы | none, xs, sm, md, lg, xl |
| `tooltip` | Тултипы | xs, sm, md, lg, xl |
| `toggle` | Переключатели | xs, sm, md, lg, xl |
| `badge` | Бейджи | sm, md |
| `image` | Изображения | xs, sm, md, lg, xl |

## Returns

- `String` - Tailwind CSS классы (для большинства типов)
- `Object` - `{ track, thumb }` (для типа `toggle`)

## Usage

### Basic

```javascript
import { useSize } from 'dxd-style-code';

const buttonClasses = useSize('md', 'button');
// Returns: 'h-10 px-4 py-2.5 text-sm'

const iconClasses = useSize('lg', 'icon');
// Returns: 'w-6 h-6'
```

### In Component

```vue
<script setup>
import { computed } from 'vue';
import { useSize } from 'dxd-style-code';

const props = defineProps({
  size: { type: String, default: 'md' }
});

const sizeClasses = computed(() => useSize(props.size, 'button'));
</script>

<template>
  <button :class="sizeClasses">
    <slot />
  </button>
</template>
```

### Toggle (returns Object)

```vue
<script setup>
import { computed } from 'vue';
import { useSize } from 'dxd-style-code';

const props = defineProps({
  size: { type: String, default: 'md' }
});

const toggleSizes = computed(() => useSize(props.size, 'toggle'));
// Returns: { track: 'h-6 w-11', thumb: 'h-4 w-4' }
</script>

<template>
  <div :class="toggleSizes.track">
    <span :class="toggleSizes.thumb" />
  </div>
</template>
```

### Spacing

```vue
<script setup>
import { useSize } from 'dxd-style-code';

const gapClass = useSize('md', 'spacing');
// Returns: 'gap-4'
</script>

<template>
  <div :class="['flex', gapClass]">
    <div>Item 1</div>
    <div>Item 2</div>
  </div>
</template>
```

## Size Reference Table

| sm | h-8 | w-4 h-4 | text-sm |
| md | h-10 | w-5 h-5 | text-base |
| lg | h-12 | w-6 h-6 | text-lg |
| xl | h-14 | w-8 h-8 | text-xl |

## See Also

- [useSpacing](./useSpacing.md)
- [useVariant](./useVariant.md)

---

Composable для управления вариантами и цветовыми схемами компонентов.

## Import

```javascript
import { 
  useVariantClasses,
  useVariantIcon,
  useVariantConfig,
  useVariantCheckbox,
  useVariantRadio,
  useVariantText,
  useVariantTag,
  useVariantProgress,
  useVariantLoader,
  useVariantDivider,
  useVariantDividerBorder,
  useVariantTooltip,
  useTooltipPosition,
  useTooltipArrow,
  useVariantSlider,
  useVariantToggle,
  useVariantBadge,
  useVariantButton,
  useVariantDropdownItem,
  VARIANT_CONFIGS,
} from 'dxd-style-code';
```

## Variants

| `primary` | Основной цвет | Главные действия |
| `info` | Синий | Информация |
| `success` | Зелёный | Успех, подтверждение |
| `warning` | Жёлтый/оранжевый | Предупреждение |
| `danger` | Красный | Ошибка, удаление |

## Functions

### useVariantClasses(variant)

Базовые классы для Alert/Toast.

```javascript
const classes = useVariantClasses('success');
// Returns: 'bg-emerald-50 text-emerald-800 border-emerald-200'
```

### useVariantIcon(variant)

Иконка для варианта (Heroicons).

```javascript
import { useVariantIcon } from 'dxd-style-code';

const Icon = useVariantIcon('warning');
// Returns: ExclamationTriangleIcon component
```

### useVariantConfig(variant)

Полная конфигурация варианта.

```javascript
const config = useVariantConfig('info');
// Returns: { bg, text, border, icon, iconColor, checkbox, radio, ... }
```

### useVariantButton(variant)

Классы для кнопки.

```javascript
const classes = useVariantButton('primary');
// Returns: 'bg-slate-800 text-white hover:bg-slate-700'
```

**Button variants:** `primary`, `secondary`, `ghost`, `outline`, `success`, `warning`, `danger`, `info`, `link`, `soft`

### useVariantCheckbox(color)

Классы для checkbox.

```javascript
const classes = useVariantCheckbox('primary');
// Returns: { unchecked, checked, ring }
```

### useVariantRadio(color)

Классы для radio.

```javascript
const classes = useVariantRadio('success');
// Returns: { unchecked, checked, ring, dot }
```

### useVariantText(color)

Цвет текста.

```javascript
const textClass = useVariantText('muted');
// Returns: 'text-slate-500'
```

### useVariantTag(color)

Классы для тега.

```javascript
const classes = useVariantTag('info');
// Returns: 'bg-cyan-100 text-cyan-800 border-cyan-200'
```

### useVariantProgress(color)

Класс для progress bar.

```javascript
const progressClass = useVariantProgress('success');
// Returns: 'bg-emerald-500'
```

### useVariantLoader(color)

Конфигурация для loader.

```javascript
const loader = useVariantLoader('info');
// Returns: { border, borderTop, text }
```

### useVariantTooltip(color)

Классы для tooltip.

```javascript
const classes = useVariantTooltip('dark');
// Returns: 'bg-slate-900 text-white'
```

### useTooltipPosition(position)

Классы позиционирования tooltip.

```javascript
const positionClasses = useTooltipPosition('bottom');
// Returns: 'top-full left-1/2 -translate-x-1/2 mt-2'
```

### useTooltipArrow(position, color)

Классы для стрелки tooltip.

```javascript
const arrowClasses = useTooltipArrow('top', 'dark');
```

### useVariantSlider(variant)

Конфигурация для slider.

```javascript
const slider = useVariantSlider('primary');
// Returns: { track, thumb, thumbHover, tick, text, textActive, textValue }
```

### useVariantToggle(color, checked)

Классы для toggle.

```javascript
const toggle = useVariantToggle('success', true);
// Returns: { checked, unchecked, ring, current }
```

### useVariantBadge(variant)

Классы для badge.

```javascript
const classes = useVariantBadge('success');
// Returns: 'bg-emerald-50 text-emerald-700 border-emerald-100'
```

### useVariantDividerBorder(orientation, thickness, color)

Классы для divider.

```javascript
const classes = useVariantDividerBorder('horizontal', 'default', 'dark');
// Returns: 'border-t border-slate-300'
```

## Usage

### Alert Component

```vue
<script setup>
import { computed } from 'vue';
import { useVariantClasses, useVariantIcon } from 'dxd-style-code';

const props = defineProps({
  variant: { type: String, default: 'info' }
});

const alertClasses = computed(() => useVariantClasses(props.variant));
const AlertIcon = computed(() => useVariantIcon(props.variant));
</script>

<template>
  <div :class="['rounded-lg p-4 border', alertClasses]">
    <component :is="AlertIcon" v-if="AlertIcon" class="w-5 h-5" />
    <slot />
  </div>
</template>
```

### Button Component

```vue
<script setup>
import { computed } from 'vue';
import { useVariantButton } from 'dxd-style-code';

const props = defineProps({
  variant: { type: String, default: 'primary' }
});

const buttonClasses = computed(() => useVariantButton(props.variant));
</script>

<template>
  <button :class="['px-4 py-2 rounded', buttonClasses]">
    <slot />
  </button>
</template>
```

## See Also

- [useSize](./useSize.md)
- [DXButton](../atoms/DXButton.md)
- [DXAlert](../molecules/DXAlert.md)

---

Composable для унификации padding и margin классов.

## Import

```javascript
import { useSpacing } from 'dxd-style-code';
```

## Signature

```typescript
function useSpacing(
  size: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  type: 'padding' | 'paddingX' | 'paddingY' | 'margin' | 'marginX' | 'marginY'
): string
```

## Parameters

| `type` | `String` | `'padding'` | Тип отступа |

## Size Values

| `xs` | `1` | 4px |
| `sm` | `2` | 8px |
| `md` | `4` | 16px |
| `lg` | `6` | 24px |
| `xl` | `8` | 32px |

## Type Values

| `paddingX` | `px-` |
| `paddingY` | `py-` |
| `margin` | `m-` |
| `marginX` | `mx-` |
| `marginY` | `my-` |

## Usage

### Basic

```javascript
import { useSpacing } from 'dxd-style-code';

const padding = useSpacing('md', 'padding');
// Returns: 'p-4'

const marginX = useSpacing('sm', 'marginX');
// Returns: 'mx-2'

const paddingY = useSpacing('lg', 'paddingY');
// Returns: 'py-6'
```

### In Component

```vue
<script setup>
import { computed } from 'vue';
import { useSpacing } from 'dxd-style-code';

const props = defineProps({
  padding: { type: String, default: 'md' }
});

const paddingClass = computed(() => useSpacing(props.padding, 'padding'));
</script>

<template>
  <div :class="paddingClass">
    <slot />
  </div>
</template>
```

### Combining Spacings

```vue
<script setup>
import { useSpacing } from 'dxd-style-code';

const paddingX = useSpacing('lg', 'paddingX');
const paddingY = useSpacing('md', 'paddingY');
</script>

<template>
  <div :class="[paddingX, paddingY]">
    <!-- px-6 py-4 -->
    Content
  </div>
</template>
```

### Card Example

```vue
<script setup>
import { useSpacing } from 'dxd-style-code';

const props = defineProps({
  spacing: { 
    type: String, 
    default: 'md',
    validator: v => ['none', 'xs', 'sm', 'md', 'lg', 'xl'].includes(v)
  }
});

const cardPadding = useSpacing(props.spacing, 'padding');
</script>

<template>
  <div :class="['bg-white rounded-lg shadow', cardPadding]">
    <slot />
  </div>
</template>
```

## See Also

- [useSize](./useSize.md)

---

Composable для управления анимациями и transition конфигурациями.

## Import

```javascript
import { 
  useAnimation,
  useAnimationTransition,
  useTooltipCustomTransition,
  FADE_TRANSITION,
  COLLAPSE_TRANSITION,
  FADE_SCALE_TRANSITION,
  SLIDE_RIGHT_TRANSITION,
  SLIDE_LEFT_TRANSITION,
  SLIDE_UP_TRANSITION,
  SLIDE_DOWN_TRANSITION,
} from 'dxd-style-code';
```

## Transition Constants

### FADE_TRANSITION
Плавное появление/исчезновение.

### COLLAPSE_TRANSITION
Сворачивание/разворачивание с opacity и max-height.

### FADE_SCALE_TRANSITION
Появление с масштабированием.

### SLIDE_*_TRANSITION
Слайд анимации (RIGHT, LEFT, UP, DOWN).

## Functions

### useAnimationTransition(name)

Получение transition конфигурации по имени.

```javascript
const transition = useAnimationTransition('fade-scale');
// Returns: { enterActiveClass, enterFromClass, enterToClass, ... }
```

**Parameters:**
- `name` - `'collapse'` | `'fade'` | `'fade-scale'` | `'slide-right'` | `'slide-left'` | `'slide-up'` | `'slide-down'` | `'tooltip-custom'`

**Returns:** Object с классами для Vue Transition.

### useTooltipCustomTransition(position)

Кастомная анимация для tooltip с учётом позиции.

```javascript
const transition = useTooltipCustomTransition('bottom');
```

**Parameters:**
- `position` - `'top'` | `'bottom'` | `'left'` | `'right'`

**Returns:** Transition конфигурация.

### useAnimation(animation, type, groupHover)

Универсальный composable для CSS классов анимаций.

```javascript
const animClass = useAnimation('wiggle', 'icon', false);
// Returns: "dx-icon-wiggle"

const groupAnimClass = useAnimation('scale', 'icon', true);
// Returns: "dx-icon-scale-group"
```

**Parameters:**
- `animation` - Тип анимации
- `type` - `'icon'` | `'button'` | `'general'` | `'progress'` | `'tooltip'` | `'toggle'`
- `groupHover` - Использовать group-hover

**Animation types by component:**

| `button` | `none`, `wiggle`, `scale`, `rotate` |
| `general` | `none`, `fade`, `fade-out`, `slide`, `bounce`, `pulse`, `spin`, `shake` |
| `progress` | `none`, `stripes` |
| `toggle` | `none`, `smooth` |

## Usage

### With Vue Transition

```vue
<template>
  <Transition v-bind="transitionProps">
    <div v-show="isOpen">Content</div>
  </Transition>
</template>

<script setup>
import { useAnimationTransition } from 'dxd-style-code';

const transitionProps = useAnimationTransition('collapse');
</script>
```

### Icon Animation

```vue
<template>
  <button class="group">
    <DXIcon :class="iconAnim" />
    <span>Hover me</span>
  </button>
</template>

<script setup>
import { useAnimation } from 'dxd-style-code';

const iconAnim = useAnimation('rotate', 'icon', true);
</script>
```

### Fade-in on Mount

```vue
<template>
  <div :class="fadeIn">
    Animated content
  </div>
</template>

<script setup>
import { useAnimation } from 'dxd-style-code';

const fadeIn = useAnimation('fade', 'general');
</script>
```

## See Also

- [DXAnimatePresence](../utilities/DXAnimatePresence.md)
- [DXTransitionGroup](../utilities/DXTransitionGroup.md)

---

Composable для объединения базовых и дополнительных CSS классов.

## Import

```javascript
import { useClassComposition } from 'dxd-style-code';
```

## Signature

```typescript
function useClassComposition(
  baseClasses: string,
  ...additionalClasses: (string | Array | Object)[]
): Array
```

## Parameters

| `additionalClasses` | `...any` | Дополнительные источники классов |

## Returns

`Array` - Массив классов для использования в `:class` binding.

## Usage

### Basic

```javascript
import { useClassComposition } from 'dxd-style-code';

const BASE_CLASSES = 'flex items-center';
const classes = useClassComposition(BASE_CLASSES, 'text-lg', 'font-bold');
// Returns: ['flex items-center', 'text-lg', 'font-bold']
```

### With Conditional Classes

```vue
<script setup>
import { computed } from 'vue';
import { useClassComposition } from 'dxd-style-code';

const props = defineProps({
  variant: { type: String, default: 'primary' },
  size: { type: String, default: 'md' }
});

const VARIANT_CLASSES = {
  primary: 'bg-blue-500 text-white',
  secondary: 'bg-gray-200 text-gray-800'
};

const SIZE_CLASSES = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-4 py-2 text-base'
};

const buttonClasses = computed(() => 
  useClassComposition(
    'rounded font-medium',
    VARIANT_CLASSES[props.variant],
    SIZE_CLASSES[props.size]
  )
);
</script>

<template>
  <button :class="buttonClasses">
    <slot />
  </button>
</template>
```

### Filtering Empty Values

```javascript
const classes = useClassComposition(
  'base-class',
  null,              // Filtered out
  undefined,         // Filtered out
  '',                // Filtered out
  'valid-class'
);
// Returns: ['base-class', 'valid-class']
```

### In Component

```vue
<script setup>
import { computed } from 'vue';
import { useClassComposition } from 'dxd-style-code';

const props = defineProps({
  disabled: Boolean,
  class: String
});

const wrapperClasses = computed(() => 
  useClassComposition(
    'flex items-center gap-2',
    props.disabled && 'opacity-50 pointer-events-none',
    props.class
  )
);
</script>

<template>
  <div :class="wrapperClasses">
    <slot />
  </div>
</template>
```

## Notes

- Пустые значения (`null`, `undefined`, `''`, `false`) автоматически фильтруются
- Поддерживает строки, массивы и объекты
- Используется внутри большинства компонентов библиотеки

---

Composable для генерации data-атрибутов из props компонента.

## Import

```javascript
import { 
  useDataAttributes, 
  useCustomDataAttributes, 
  useBooleanDataAttributes 
} from 'dxd-style-code';
```

## Functions

### useDataAttributes(props, attributeNames)

Генерирует data-атрибуты из указанных props.

```javascript
const dataAttrs = useDataAttributes(props, ['variant', 'size', 'disabled']);
// Returns: { 'data-variant': 'primary', 'data-size': 'md', 'data-disabled': true }
```

**Parameters:**
- `props` - Объект props компонента
- `attributeNames` - Массив имён props для конвертации

**Returns:** Объект с data-* атрибутами.

### useCustomDataAttributes(attributesMap)

Генерирует data-атрибуты с кастомной логикой.

```javascript
const dataAttrs = useCustomDataAttributes({
  variant: props.variant,
  size: props.size,
  active: isActive.value,
  disabled: props.disabled || props.loading
});
// Returns: { 'data-variant': 'primary', 'data-size': 'md', 'data-active': true, 'data-disabled': false }
```

**Parameters:**
- `attributesMap` - Объект с именами атрибутов и их значениями

**Returns:** Объект с data-* атрибутами (false значения исключаются).

### useBooleanDataAttributes(props, booleanPropNames)

Генерирует data-атрибуты только для truthy boolean props.

```javascript
const dataAttrs = useBooleanDataAttributes(props, ['disabled', 'loading', 'active']);
// If props.disabled = true, props.loading = false
// Returns: { 'data-disabled': true }
```

**Parameters:**
- `props` - Объект props компонента
- `booleanPropNames` - Массив имён boolean props

**Returns:** Объект только с truthy boolean атрибутами.

## Usage

### Basic Component

```vue
<template>
  <div v-bind="dataAttrs">
    <slot />
  </div>
</template>

<script setup>
import { useDataAttributes } from 'dxd-style-code';

const props = defineProps({
  variant: { type: String, default: 'primary' },
  size: { type: String, default: 'md' }
});

const dataAttrs = useDataAttributes(props, ['variant', 'size']);
</script>
```

### Combined with Computed

```vue
<script setup>
import { computed } from 'vue';
import { useCustomDataAttributes } from 'dxd-style-code';

const props = defineProps({
  loading: Boolean,
  disabled: Boolean,
  variant: String
});

const dataAttrs = computed(() => useCustomDataAttributes({
  variant: props.variant,
  loading: props.loading,
  disabled: props.disabled || props.loading,
  component: 'DXButton'
}));
</script>

<template>
  <button v-bind="dataAttrs">
    <slot />
  </button>
</template>
```

### For Testing/Debugging

```vue
<template>
  <!-- Результат: <div data-component="MyCard" data-variant="primary" data-expanded="true"> -->
  <div 
    v-bind="dataAttrs"
    data-component="MyCard"
  >
    <slot />
  </div>
</template>

<script setup>
import { useDataAttributes } from 'dxd-style-code';

const props = defineProps({
  variant: String,
  expanded: Boolean
});

const dataAttrs = useDataAttributes(props, ['variant', 'expanded']);
</script>
```

## Notes

- camelCase имена автоматически конвертируются в kebab-case
- `null` и `undefined` значения исключаются
- Полезно для:
  - Отладки (инспекция элементов)
  - E2E тестирования (селекторы)
  - CSS стилизации (`[data-variant="primary"]`)

---

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

---

Composable для управления прокруткой табов.

## Import

```javascript
import { useTabsScroll } from 'dxd-style-code';
```

## Signature

```typescript
function useTabsScroll(
  containerRef: Ref<HTMLElement | null>,
  showScrollButtons: Ref<boolean>
): {
  canScrollLeft: Ref<boolean>;
  canScrollRight: Ref<boolean>;
  scrollLeft: () => void;
  scrollRight: () => void;
  scrollToActiveTab: () => void;
  updateScrollState: () => void;
}
```

## Parameters

| `showScrollButtons` | `Ref<boolean>` | Показывать ли кнопки прокрутки |

## Returns

| `canScrollRight` | `Ref<boolean>` | Можно прокрутить вправо |
| `scrollLeft` | `Function` | Прокрутка влево (200px) |
| `scrollRight` | `Function` | Прокрутка вправо (200px) |
| `scrollToActiveTab` | `Function` | Прокрутка к активному табу |
| `updateScrollState` | `Function` | Обновить состояние прокрутки |

## Usage

### Basic

```vue
<script setup>
import { ref } from 'vue';
import { useTabsScroll } from 'dxd-style-code';

const containerRef = ref(null);
const showScrollButtons = ref(true);

const { 
  canScrollLeft, 
  canScrollRight, 
  scrollLeft, 
  scrollRight 
} = useTabsScroll(containerRef, showScrollButtons);
</script>

<template>
  <div class="flex items-center">
    <DXButton 
      v-if="showScrollButtons && canScrollLeft"
      variant="ghost"
      @click="scrollLeft"
    >
      ←
    </DXButton>
    
    <div 
      ref="containerRef"
      class="flex overflow-x-auto scrollbar-hide"
    >
      <button 
        v-for="tab in tabs" 
        :key="tab.id"
        class="tab-btn"
        :class="{ active: activeTab === tab.id }"
      >
        {{ tab.label }}
      </button>
    </div>
    
    <DXButton 
      v-if="showScrollButtons && canScrollRight"
      variant="ghost"
      @click="scrollRight"
    >
      →
    </DXButton>
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
```

### With Active Tab Scroll

```vue
<script setup>
import { watch } from 'vue';
import { useTabsScroll } from 'dxd-style-code';

const { scrollToActiveTab } = useTabsScroll(containerRef, showScrollButtons);

const activeTab = ref('tab1');

// Прокрутка к активному табу при его изменении
watch(activeTab, () => {
  scrollToActiveTab();
});
</script>
```

### Responsive Scroll Buttons

```vue
<script setup>
import { ref, onMounted, computed } from 'vue';
import { useTabsScroll } from 'dxd-style-code';

const containerRef = ref(null);
const showScrollButtons = ref(true);

const { canScrollLeft, canScrollRight, updateScrollState } = useTabsScroll(
  containerRef, 
  showScrollButtons
);

// Показывать кнопки только если есть что прокручивать
const needsScrollButtons = computed(() => 
  canScrollLeft.value || canScrollRight.value
);
</script>

<template>
  <div class="relative">
    <button 
      v-if="needsScrollButtons && canScrollLeft"
      class="absolute left-0 top-1/2 -translate-y-1/2 z-10"
      @click="scrollLeft"
    >
      ‹
    </button>
    
    <div ref="containerRef" class="flex overflow-x-auto px-8">
      <slot />
    </div>
    
    <button 
      v-if="needsScrollButtons && canScrollRight"
      class="absolute right-0 top-1/2 -translate-y-1/2 z-10"
      @click="scrollRight"
    >
      ›
    </button>
  </div>
</template>
```

### Manual Update

```vue
<script setup>
const { updateScrollState } = useTabsScroll(containerRef, showScrollButtons);

// Обновить состояние после динамического добавления табов
const addTab = (tab) => {
  tabs.value.push(tab);
  nextTick(() => {
    updateScrollState();
  });
};
</script>
```

## Features

- Автоматическое отслеживание возможности прокрутки
- Плавная прокрутка (`behavior: 'smooth'`)
- Автоматическое обновление при ресайзе окна
- Прокрутка активного таба в центр видимой области
- Автоматическая очистка при размонтировании

## Notes

- Контейнер должен иметь `overflow-x: auto` или `overflow-x: scroll`
- Для корректной работы `scrollToActiveTab` активный таб должен иметь класс `active`
- Прокрутка происходит на 200px за клик

## See Also

- [DXTabs](../organisms/DXTabs.md)
- [DXSegmentedControl](../molecules/DXSegmentedControl.md)

---

### Таблицы

Composable для управления данными таблицы с поддержкой локального и API режимов.

## Import

```javascript
import { useTableData } from 'dxd-style-code';
```

## Signature

```typescript
function useTableData(props, emit): {
  localData: Ref<Array>;
  loading: Ref<boolean>;
  error: Ref<string | null>;
  loadData: (params?: Object) => Promise<void>;
}
```

## Parameters

### Props

```typescript
interface TableDataProps {
  data: Array;           // Данные для локального режима
  mode: 'local' | 'api'; // Режим работы
  apiUrl?: string;       // URL для API режима
  apiParams?: Object;    // Параметры запроса
  apiMethod?: string;    // HTTP метод (default: 'GET')
}
```

### Emit

- `data-loaded` - Данные загружены (API режим)
- `error` - Ошибка загрузки

## Returns

| `loading` | `Ref<boolean>` | Состояние загрузки |
| `error` | `Ref<string>` | Сообщение об ошибке |
| `loadData` | `Function` | Загрузка данных |

## Usage

### Local Mode

```vue
<script setup>
import { useTableData } from 'dxd-style-code';

const props = defineProps({
  data: { type: Array, default: () => [] },
  mode: { type: String, default: 'local' }
});

const emit = defineEmits(['data-loaded', 'error']);

const { localData, loading, error, loadData } = useTableData(props, emit);
</script>

<template>
  <table>
    <tr v-for="row in localData" :key="row.id">
      <td>{{ row.name }}</td>
    </tr>
  </table>
</template>
```

### API Mode

```vue
<script setup>
import { onMounted } from 'vue';
import { useTableData } from 'dxd-style-code';

const props = defineProps({
  mode: { type: String, default: 'api' },
  apiUrl: { type: String, required: true },
  apiParams: { type: Object, default: () => ({}) }
});

const emit = defineEmits(['data-loaded', 'error']);

const { localData, loading, error, loadData } = useTableData(props, emit);

onMounted(() => {
  loadData();
});

const reload = () => {
  loadData({ page: 1 });
};
</script>

<template>
  <div v-if="loading">Загрузка...</div>
  <div v-else-if="error">{{ error }}</div>
  <table v-else>
    <tr v-for="row in localData" :key="row.id">
      <td>{{ row.name }}</td>
    </tr>
  </table>
</template>
```

### With Pagination Params

```vue
<script setup>
const { localData, loadData } = useTableData(props, emit);

const loadPage = async (page, pageSize) => {
  await loadData({ 
    page, 
    limit: pageSize,
    sort: 'name',
    order: 'asc'
  });
};
</script>
```

## Notes

- В локальном режиме автоматически следит за изменениями `props.data`
- В API режиме поддерживает любые query параметры
- API ответ может быть массивом или объектом с полем `data`

## See Also

- [useTableSort](./useTableSort.md)
- [useTableFilter](./useTableFilter.md)
- [useTablePagination](./useTablePagination.md)
- [DXTable](../organisms/DXTable.md)

---

Composable для управления видимостью столбцов таблицы.

## Import

```javascript
import { useTableColumns } from 'dxd-style-code';
```

## Signature

```typescript
function useTableColumns(props, emit): {
  hiddenColumns: Ref<string[]>;
  visibleColumns: ComputedRef<Column[]>;
  columnsWithVisibility: ComputedRef<ColumnWithVisibility[]>;
  toggleColumn: (key: string) => void;
  showColumn: (key: string) => void;
  hideColumn: (key: string) => void;
  showAllColumns: () => void;
  hideAllColumns: (exceptKeys?: string[]) => void;
  resetColumns: () => void;
}
```

## Parameters

### Props

```typescript
interface TableColumnsProps {
  columns: Column[];
}

interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  filterable?: boolean;
  // ... other column props
}
```

### Emit

- `column-toggle` - Переключение видимости столбца
- `column-show` - Показ столбца
- `column-hide` - Скрытие столбца
- `columns-show-all` - Показ всех столбцов
- `columns-hide-all` - Скрытие всех столбцов
- `columns-reset` - Сброс к дефолту

## Returns

| `visibleColumns` | `ComputedRef<Column[]>` | Видимые столбцы |
| `columnsWithVisibility` | `ComputedRef<ColumnWithVisibility[]>` | Все столбцы с информацией о видимости |
| `toggleColumn` | `Function` | Переключить видимость |
| `showColumn` | `Function` | Показать столбец |
| `hideColumn` | `Function` | Скрыть столбец |
| `showAllColumns` | `Function` | Показать все |
| `hideAllColumns` | `Function` | Скрыть все (кроме указанных) |
| `resetColumns` | `Function` | Сброс |

## Usage

### Basic

```vue
<script setup>
import { useTableColumns } from 'dxd-style-code';

const props = defineProps({
  columns: { type: Array, required: true }
});

const emit = defineEmits(['column-toggle']);

const { 
  visibleColumns, 
  columnsWithVisibility, 
  toggleColumn 
} = useTableColumns(props, emit);
</script>

<template>
  <table>
    <thead>
      <tr>
        <th v-for="col in visibleColumns" :key="col.key">
          {{ col.label }}
        </th>
      </tr>
    </thead>
  </table>
</template>
```

### Column Picker

```vue
<script setup>
const { columnsWithVisibility, toggleColumn } = useTableColumns(props, emit);
</script>

<template>
  <DXDropdown>
    <template #trigger>
      <DXButton>Столбцы</DXButton>
    </template>
    
    <div v-for="col in columnsWithVisibility" :key="col.key">
      <DXCheckbox
        :modelValue="col.visible"
        @update:modelValue="toggleColumn(col.key)"
      >
        {{ col.label }}
      </DXCheckbox>
    </div>
  </DXDropdown>
</template>
```

### Hide All Except ID

```vue
<script setup>
const { hideAllColumns, showAllColumns, resetColumns } = useTableColumns(props, emit);

// Скрыть все кроме 'id' и 'name'
const hideNonEssential = () => {
  hideAllColumns(['id', 'name']);
};
</script>

<template>
  <DXButtonGroup>
    <DXButton @click="hideNonEssential">Только основные</DXButton>
    <DXButton @click="showAllColumns">Показать все</DXButton>
    <DXButton @click="resetColumns">Сброс</DXButton>
  </DXButtonGroup>
</template>
```

## See Also

- [useTableData](./useTableData.md)
- [DXTable](../organisms/DXTable.md)

---

Composable для фильтрации данных таблицы.

## Import

```javascript
import { useTableFilter } from 'dxd-style-code';
```

## Signature

```typescript
function useTableFilter(
  data: Ref<Array>,
  props: TableFilterProps,
  emit: Function,
  sourceData?: Ref<Array>
): {
  filters: Ref<Object>;
  searchQuery: Ref<string>;
  filteredData: ComputedRef<Array>;
  applyFilter: (column: string, value: any) => void;
  clearFilters: () => void;
  clearColumnFilter: (column: string) => void;
  getFilterOptions: (column: Column) => FilterOption[];
  activeFilters: ComputedRef<ActiveFilter[]>;
  activeFiltersCount: ComputedRef<number>;
}
```

## Parameters

| `props` | `Object` | Props компонента |
| `emit` | `Function` | Emit функция |
| `sourceData` | `Ref<Array>` | Исходные данные для опций фильтра (опционально) |

### Props

```typescript
interface TableFilterProps {
  columns: Column[];
  searchable: boolean;
  filterable: boolean;
}

interface Column {
  key: string;
  label: string;
  filterOptions?: FilterOption[];
}
```

### Emit

- `filter` - Применение фильтра
- `filter-clear` - Очистка всех фильтров

## Returns

| `searchQuery` | `Ref<string>` | Поисковый запрос |
| `filteredData` | `ComputedRef<Array>` | Отфильтрованные данные |
| `applyFilter` | `Function` | Применить фильтр |
| `clearFilters` | `Function` | Очистить все фильтры |
| `clearColumnFilter` | `Function` | Очистить фильтр столбца |
| `getFilterOptions` | `Function` | Получить опции для фильтра |
| `activeFilters` | `ComputedRef<ActiveFilter[]>` | Активные фильтры с метаданными |
| `activeFiltersCount` | `ComputedRef<number>` | Количество активных фильтров |

## Usage

### Basic Filtering

```vue
<script setup>
import { ref } from 'vue';
import { useTableFilter } from 'dxd-style-code';

const data = ref([...]);
const props = defineProps({
  columns: Array,
  searchable: Boolean,
  filterable: Boolean
});
const emit = defineEmits(['filter', 'filter-clear']);

const { 
  searchQuery, 
  filteredData, 
  applyFilter, 
  clearFilters 
} = useTableFilter(data, props, emit);
</script>

<template>
  <DXInput v-model="searchQuery" placeholder="Поиск..." />
  
  <table>
    <tr v-for="row in filteredData" :key="row.id">
      <td>{{ row.name }}</td>
    </tr>
  </table>
</template>
```

### Column Filters

```vue
<script setup>
const { filters, applyFilter, getFilterOptions } = useTableFilter(data, props, emit);
</script>

<template>
  <thead>
    <tr>
      <th v-for="col in columns" :key="col.key">
        {{ col.label }}
        
        <DXSelect
          v-if="col.filterable"
          :modelValue="filters[col.key]"
          :options="getFilterOptions(col)"
          @update:modelValue="applyFilter(col.key, $event)"
        />
      </th>
    </tr>
  </thead>
</template>
```

### Active Filters Display

```vue
<script setup>
const { activeFilters, clearColumnFilter, clearFilters } = useTableFilter(data, props, emit);
</script>

<template>
  <div v-if="activeFilters.length > 0" class="flex gap-2">
    <DXTags 
      v-for="filter in activeFilters" 
      :key="filter.column"
      closable
      @close="clearColumnFilter(filter.column)"
    >
      {{ filter.columnLabel }}: {{ filter.valueLabel }}
    </DXTags>
    
    <DXButton size="sm" variant="ghost" @click="clearFilters">
      Очистить все
    </DXButton>
  </div>
</template>
```

### Custom Filter Options

```vue
<script setup>
const columns = [
  {
    key: 'status',
    label: 'Статус',
    filterable: true,
    filterOptions: [
      { value: 'active', label: 'Активный' },
      { value: 'inactive', label: 'Неактивный' },
      { value: 'pending', label: 'В ожидании' }
    ]
  }
];
</script>
```

## Notes

- Глобальный поиск ищет по всем столбцам
- Фильтры столбцов используют точное совпадение
- Опция "Все" добавляется автоматически к filterOptions
- `sourceData` используется для генерации уникальных значений фильтра

## See Also

- [useTableSort](./useTableSort.md)
- [useTablePagination](./useTablePagination.md)
- [DXTable](../organisms/DXTable.md)

---

Composable для сортировки данных таблицы.

## Import

```javascript
import { useTableSort } from 'dxd-style-code';
```

## Signature

```typescript
function useTableSort(
  data: Ref<Array>,
  props: TableSortProps,
  emit: Function
): {
  sortBy: Ref<string | null>;
  sortDirection: Ref<'asc' | 'desc'>;
  sortedData: ComputedRef<Array>;
  toggleSort: (column: string) => void;
  resetSort: () => void;
}
```

## Parameters

### Props

```typescript
interface TableSortProps {
  sortable: boolean;
  defaultSort?: {
    column: string;
    direction: 'asc' | 'desc';
  };
}
```

### Emit

- `sort` - Событие сортировки `{ column, direction }`

## Returns

| `sortDirection` | `Ref<'asc'\|'desc'>` | Направление сортировки |
| `sortedData` | `ComputedRef<Array>` | Отсортированные данные |
| `toggleSort` | `Function` | Переключить сортировку столбца |
| `resetSort` | `Function` | Сбросить к дефолту |

## Sort Cycle

При клике на столбец сортировка циклически меняется:
1. `asc` - по возрастанию
2. `desc` - по убыванию
3. `null` - без сортировки (исходный порядок)

## Usage

### Basic

```vue
<script setup>
import { ref } from 'vue';
import { useTableSort } from 'dxd-style-code';

const data = ref([...]);
const props = defineProps({
  sortable: { type: Boolean, default: true }
});
const emit = defineEmits(['sort']);

const { sortBy, sortDirection, sortedData, toggleSort } = useTableSort(data, props, emit);
</script>

<template>
  <table>
    <thead>
      <tr>
        <th @click="toggleSort('name')" class="cursor-pointer">
          Имя
          <span v-if="sortBy === 'name'">
            {{ sortDirection === 'asc' ? '↑' : '↓' }}
          </span>
        </th>
        <th @click="toggleSort('date')" class="cursor-pointer">
          Дата
          <span v-if="sortBy === 'date'">
            {{ sortDirection === 'asc' ? '↑' : '↓' }}
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in sortedData" :key="row.id">
        <td>{{ row.name }}</td>
        <td>{{ row.date }}</td>
      </tr>
    </tbody>
  </table>
</template>
```

### With Default Sort

```vue
<script setup>
const props = defineProps({
  sortable: { type: Boolean, default: true },
  defaultSort: { 
    type: Object, 
    default: () => ({ column: 'createdAt', direction: 'desc' }) 
  }
});

const { sortedData } = useTableSort(data, props, emit);
</script>
```

### Sort Indicator Component

```vue
<script setup>
const getSortIcon = (column) => {
  if (sortBy.value !== column) return '⇅';
  return sortDirection.value === 'asc' ? '↑' : '↓';
};
</script>

<template>
  <th 
    v-for="col in columns" 
    :key="col.key"
    @click="col.sortable && toggleSort(col.key)"
    :class="{ 'cursor-pointer': col.sortable }"
  >
    {{ col.label }}
    <span v-if="col.sortable" class="ml-1">
      {{ getSortIcon(col.key) }}
    </span>
  </th>
</template>
```

### Reset Button

```vue
<script setup>
const { resetSort, sortBy } = useTableSort(data, props, emit);
</script>

<template>
  <DXButton 
    v-if="sortBy" 
    variant="ghost" 
    size="sm" 
    @click="resetSort"
  >
    Сбросить сортировку
  </DXButton>
</template>
```

## Sort Logic

- **Числа**: Числовое сравнение
- **Строки**: Case-insensitive сравнение через `localeCompare`
- **null/undefined**: Перемещаются в конец

```javascript
// Пример сортировки
const data = [
  { name: 'Banana', price: 100 },
  { name: 'apple', price: null },  // null → в конец
  { name: 'Cherry', price: 50 }
];

// После сортировки по name asc:
// Apple, Banana, Cherry (case-insensitive)

// После сортировки по price asc:
// Cherry (50), Banana (100), apple (null в конце)
```

## See Also

- [useTableFilter](./useTableFilter.md)
- [useTablePagination](./useTablePagination.md)
- [DXTable](../organisms/DXTable.md)

---

Composable для пагинации данных таблицы.

## Import

```javascript
import { useTablePagination } from 'dxd-style-code';
```

## Signature

```typescript
function useTablePagination(
  data: Ref<Array>,
  props: TablePaginationProps,
  emit: Function
): {
  currentPage: Ref<number>;
  pageSize: Ref<number>;
  totalPages: ComputedRef<number>;
  paginatedData: ComputedRef<Array>;
  paginationInfo: ComputedRef<PaginationInfo>;
  goToPage: (page: number) => void;
  nextPage: () => void;
  previousPage: () => void;
  changePageSize: (size: number) => void;
}
```

## Parameters

### Props

```typescript
interface TablePaginationProps {
  paginated: boolean;
  defaultPageSize?: number; // default: 10
}
```

### Emit

- `page-change` - Изменение текущей страницы
- `page-size-change` - Изменение размера страницы

## Returns

| `pageSize` | `Ref<number>` | Размер страницы |
| `totalPages` | `ComputedRef<number>` | Общее количество страниц |
| `paginatedData` | `ComputedRef<Array>` | Данные текущей страницы |
| `paginationInfo` | `ComputedRef<PaginationInfo>` | Информация о пагинации |
| `goToPage` | `Function` | Перейти на страницу |
| `nextPage` | `Function` | Следующая страница |
| `previousPage` | `Function` | Предыдущая страница |
| `changePageSize` | `Function` | Изменить размер страницы |

### PaginationInfo

```typescript
interface PaginationInfo {
  from: number;  // Начальная запись (1-based)
  to: number;    // Конечная запись
  total: number; // Всего записей
}
```

## Usage

### Basic

```vue
<script setup>
import { ref } from 'vue';
import { useTablePagination } from 'dxd-style-code';

const data = ref([...]);
const props = defineProps({
  paginated: { type: Boolean, default: true },
  defaultPageSize: { type: Number, default: 10 }
});
const emit = defineEmits(['page-change', 'page-size-change']);

const { 
  paginatedData, 
  currentPage, 
  totalPages,
  nextPage, 
  previousPage 
} = useTablePagination(data, props, emit);
</script>

<template>
  <table>
    <tr v-for="row in paginatedData" :key="row.id">
      <td>{{ row.name }}</td>
    </tr>
  </table>
  
  <div class="flex gap-2">
    <DXButton @click="previousPage" :disabled="currentPage === 1">
      Назад
    </DXButton>
    <span>{{ currentPage }} / {{ totalPages }}</span>
    <DXButton @click="nextPage" :disabled="currentPage === totalPages">
      Вперёд
    </DXButton>
  </div>
</template>
```

### With Page Info

```vue
<script setup>
const { paginationInfo, paginatedData } = useTablePagination(data, props, emit);
</script>

<template>
  <p>
    Показано {{ paginationInfo.from }}-{{ paginationInfo.to }} 
    из {{ paginationInfo.total }}
  </p>
</template>
```

### Page Size Selector

```vue
<script setup>
const { pageSize, changePageSize } = useTablePagination(data, props, emit);

const pageSizeOptions = [10, 25, 50, 100];
</script>

<template>
  <DXSelect
    :modelValue="pageSize"
    :options="pageSizeOptions.map(n => ({ value: n, label: `${n} на странице` }))"
    @update:modelValue="changePageSize"
  />
</template>
```

### Page Navigation

```vue
<script setup>
const { 
  currentPage, 
  totalPages, 
  goToPage, 
  nextPage, 
  previousPage 
} = useTablePagination(data, props, emit);

const visiblePages = computed(() => {
  const pages = [];
  const start = Math.max(1, currentPage.value - 2);
  const end = Math.min(totalPages.value, currentPage.value + 2);
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  return pages;
});
</script>

<template>
  <nav class="flex gap-1">
    <DXButton 
      variant="ghost" 
      @click="previousPage"
      :disabled="currentPage === 1"
    >
      ←
    </DXButton>
    
    <DXButton
      v-for="page in visiblePages"
      :key="page"
      :variant="page === currentPage ? 'primary' : 'ghost'"
      @click="goToPage(page)"
    >
      {{ page }}
    </DXButton>
    
    <DXButton 
      variant="ghost" 
      @click="nextPage"
      :disabled="currentPage === totalPages"
    >
      →
    </DXButton>
  </nav>
</template>
```

## Notes

- При изменении данных текущая страница автоматически корректируется
- При изменении размера страницы происходит сброс на первую страницу
- Если `paginated: false`, возвращаются все данные

## See Also

- [useTableFilter](./useTableFilter.md)
- [useTableSort](./useTableSort.md)
- [DXPagination](../molecules/DXPagination.md)
- [DXTablePagination](../molecules/DXTablePagination.md)

---

Composable для выделения строк таблицы.

## Import

```javascript
import { useTableSelection } from 'dxd-style-code';
```

## Signature

```typescript
function useTableSelection(
  data: Ref<Array>,
  props: Object,
  emit: Function
): {
  selectedRows: Ref<Array<string | number>>;
  allSelected: ComputedRef<boolean>;
  someSelected: ComputedRef<boolean>;
  isSelected: (id: string | number) => boolean;
  toggleRow: (id: string | number) => void;
  selectAll: () => void;
  clearSelection: () => void;
  selectRows: (ids: Array) => void;
  getSelectedRowsData: () => Array;
}
```

## Parameters

| `props` | `Object` | Props компонента |
| `emit` | `Function` | Emit функция |

### Emit Events

- `row-select` - Выделение строки `{ id, selected, selectedRows }`
- `select-all` - Выделение всех `{ selected, selectedRows }`
- `selection-clear` - Очистка выделения
- `selection-change` - Изменение выделения

## Returns

| `allSelected` | `ComputedRef<boolean>` | Все строки выделены |
| `someSelected` | `ComputedRef<boolean>` | Некоторые строки выделены |
| `isSelected` | `Function` | Проверка выделения строки |
| `toggleRow` | `Function` | Переключить выделение строки |
| `selectAll` | `Function` | Выделить/снять выделение со всех |
| `clearSelection` | `Function` | Очистить выделение |
| `selectRows` | `Function` | Выделить указанные строки |
| `getSelectedRowsData` | `Function` | Получить данные выделенных строк |

## Usage

### Basic

```vue
<script setup>
import { ref } from 'vue';
import { useTableSelection } from 'dxd-style-code';

const data = ref([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
]);

const emit = defineEmits(['row-select', 'select-all', 'selection-clear']);

const { 
  selectedRows, 
  allSelected, 
  someSelected,
  isSelected, 
  toggleRow, 
  selectAll 
} = useTableSelection(data, {}, emit);
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>
          <DXCheckbox
            :modelValue="allSelected"
            :indeterminate="someSelected"
            @update:modelValue="selectAll"
          />
        </th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in data" :key="row.id">
        <td>
          <DXCheckbox
            :modelValue="isSelected(row.id)"
            @update:modelValue="toggleRow(row.id)"
          />
        </td>
        <td>{{ row.name }}</td>
      </tr>
    </tbody>
  </table>
</template>
```

### Bulk Actions

```vue
<script setup>
const { selectedRows, getSelectedRowsData, clearSelection } = useTableSelection(data, {}, emit);

const deleteSelected = async () => {
  const rows = getSelectedRowsData();
  await api.delete(rows.map(r => r.id));
  clearSelection();
};
</script>

<template>
  <div v-if="selectedRows.length > 0" class="flex gap-2 items-center">
    <span>Выбрано: {{ selectedRows.length }}</span>
    <DXButton variant="danger" @click="deleteSelected">
      Удалить выбранные
    </DXButton>
    <DXButton variant="ghost" @click="clearSelection">
      Снять выделение
    </DXButton>
  </div>
</template>
```

### Programmatic Selection

```vue
<script setup>
const { selectRows, clearSelection } = useTableSelection(data, {}, emit);

// Выделить первые 5 строк
const selectFirst5 = () => {
  const first5Ids = data.value.slice(0, 5).map(r => r.id);
  selectRows(first5Ids);
};

// Выделить все с определённым статусом
const selectByStatus = (status) => {
  const ids = data.value
    .filter(r => r.status === status)
    .map(r => r.id);
  selectRows(ids);
};
</script>

<template>
  <DXButtonGroup>
    <DXButton @click="selectFirst5">Первые 5</DXButton>
    <DXButton @click="selectByStatus('active')">Активные</DXButton>
    <DXButton @click="clearSelection">Очистить</DXButton>
  </DXButtonGroup>
</template>
```

### Row Highlighting

```vue
<template>
  <tr 
    v-for="row in data" 
    :key="row.id"
    :class="{ 'bg-blue-50': isSelected(row.id) }"
  >
    <td>
      <DXCheckbox
        :modelValue="isSelected(row.id)"
        @update:modelValue="toggleRow(row.id)"
      />
    </td>
    <td>{{ row.name }}</td>
  </tr>
</template>
```

## Notes

- Требует наличие поля `id` в каждой строке данных
- `allSelected` возвращает `false` если данных нет
- `someSelected` используется для indeterminate состояния чекбокса

## See Also

- [useTableData](./useTableData.md)
- [DXTable](../organisms/DXTable.md)
- [DXCheckbox](../atoms/DXCheckbox.md)

---

---

## Паттерны использования

### Композиция форм

```vue
<template>
  <DXFormControl label="Email" :error="errors.email" required>
    <DXInputGroup>
      <DXInputAddon position="left">
        <DXIcon :icon="EnvelopeIcon" />
      </DXInputAddon>
      <DXInput v-model="email" type="email" placeholder="email@example.com" />
      <DXValidationIcon variant="success" v-if="isValid" />
    </DXInputGroup>
  </DXFormControl>
</template>
```

### Композиция таблиц

```vue
<template>
  <DXTable
    :columns="columns"
    :data="data"
    sortable
    filterable
    paginated
    selectable
    @row-click="handleRowClick"
    @row-select="handleRowSelect"
  />
</template>
```

### Layout композиция

```vue
<template>
  <DXAppLayout>
    <template #header>
      <DXHeaderBar title="Мое приложение">
        <template #right>
          <DXButton variant="ghost">Профиль</DXButton>
        </template>
      </DXHeaderBar>
    </template>
    <template #sidebar>
      <DXSidebarMenu :sections="menuSections" />
    </template>
    <template #content>
      <DXContainer>
        <DXCard>
          <!-- Контент -->
        </DXCard>
      </DXContainer>
    </template>
  </DXAppLayout>
</template>
```

### Модальные окна

```vue
<template>
  <DXModal :open="showModal" @close="showModal = false">
    <template #title>Подтверждение</template>
    <p>Вы уверены, что хотите удалить этот элемент?</p>
    <template #actions>
      <DXButton variant="ghost" @click="showModal = false">Отмена</DXButton>
      <DXButton variant="danger" @click="handleDelete">Удалить</DXButton>
    </template>
  </DXModal>
</template>
```

---

## Правила разработки

### 1. Следуй Atomic Design

- **Atoms** - базовые, неделимые компоненты
- **Molecules** - композиции атомов
- **Organisms** - сложные композиции молекул и атомов

### 2. Используй composables

Не дублируй логику:

- `useSize` - для размеров
- `useVariant*` - для вариантов
- `useClassComposition` - для объединения классов
- `useAnimation` - для анимаций

### 3. JSDoc для props

```js
const props = defineProps({
  /** Вариант оформления: primary | secondary | ghost */
  variant: { type: String, default: "primary" },
  /** Размер: xs | sm | md | lg | xl */
  size: { type: String, default: "md" },
});
```

### 4. Data-атрибуты

```vue
<button
  data-component="DXButton"
  :data-variant="variant"
  :data-size="size"
>
```

### 5. Доступность

- `aria-label` для иконок без текста
- `aria-describedby` для полей с ошибками
- `role` для семантических элементов

### 6. Tailwind классы

Используй Tailwind, не inline стили.

---

## Структура проекта

```
dxd-style-code/
├── src/
│   ├── components/
│   │   ├── atoms/          # 39 компонентов
│   │   ├── molecules/      # 34 компонента
│   │   ├── organisms/      # 27 компонентов
│   │   └── utilities/      # 7 компонентов
│   ├── composables/        # 14 composables
│   ├── styles/
│   └── index.js
├── docs/
│   └── api/
│       ├── atoms/          # Документация атомов
│       ├── molecules/      # Документация молекул
│       ├── organisms/      # Документация организмов
│       ├── utilities/      # Документация утилит
│       └── composables/    # Документация composables
└── package.json
```

---

## Дополнительная документация

- **README.md** - основная документация
- **docs/COMPONENTS_ARCHITECTURE.md** - архитектура компонентов
- **docs/COMPONENTS.md** - полный список компонентов
- **Storybook** - интерактивная документация (`npm run storybook`)

## Полезные ссылки

- [Vue 3 Documentation](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Heroicons](https://heroicons.com/)
- [Atomic Design](https://atomicdesign.bradfrost.com/)

---

**Версия документации:** 0.1.12  
**Последнее обновление:** Декабрь 2024

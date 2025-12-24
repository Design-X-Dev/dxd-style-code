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

Библиотека следует принципам **Atomic Design** и разделяет компоненты на три основных уровня:

### Atoms (Атомы) - 39 компонентов
Базовые, неделимые компоненты. Не зависят от других компонентов библиотеки.

**Основные компоненты:**
- [DX](./docs/api/atoms/DX.md) - Polymorphic компонент
- [DXButton](./docs/api/atoms/DXButton.md) - универсальная кнопка
- [DXIcon](./docs/api/atoms/DXIcon.md) - компонент иконки
- [DXBadge](./docs/api/atoms/DXBadge.md) - бейдж/метка
- [DXCard](./docs/api/atoms/DXCard.md) - карточка-контейнер
- [DXAvatar](./docs/api/atoms/DXAvatar.md) - аватар пользователя
- [DXImage](./docs/api/atoms/DXImage.md) - компонент изображения
- [DXNav](./docs/api/atoms/DXNav.md) - универсальная обертка для навигации
- [DXQuote](./docs/api/atoms/DXQuote.md) - inline цитата
- [DXToggleButton](./docs/api/atoms/DXToggleButton.md) - кнопка-переключатель
- DXCheckbox - чекбокс
- DXRadio - радио-кнопка
- DXToggle - переключатель
- DXLink - ссылка
- DXLoader - индикатор загрузки
- DXProgress - индикатор прогресса
- DXTooltip - всплывающая подсказка
- DXBackdrop - затемнение фона
- DXFormLabel - лейбл для полей форм
- DXIconWrapper - обертка для позиционирования иконок
- DXInputAddon - аддон для input групп
- DXDropdownItem - элемент выпадающего меню
- DXDivider - разделитель
- DXTags - теги
- DXToast - уведомление
- DXSkeleton - скелетон загрузки
- DXSlider - слайдер

**Layout компоненты:**
- DXContainer - контейнер с ограниченной шириной
- DXBox - универсальный контейнер
- DXFlex - Flexbox контейнер
- DXGrid - сетка
- DXStack - вертикальный стек
- DXSpacer - гибкий отступ

**Typography компоненты:**
- DXHeading - заголовок
- DXText - текст
- DXLabel - лейбл
- DXCode - код
- DXBlockquote - цитата
- DXList - список

*Полная документация: [docs/api/atoms/](./docs/api/atoms/)*

### Molecules (Молекулы) - 34 компонента
Композиции атомов, выполняющие конкретную функцию.

**Компоненты форм:**
- [DXInput](./docs/api/molecules/DXInput.md) - поле ввода с label, error, helper и иконками
- DXTextarea - многострочное поле
- DXSelect - выпадающий список
- DXInputGroup - группа полей ввода с аддонами
- DXFormControl - обертка для контролов форм
- DXPasswordInput - поле пароля с переключателем видимости
- DXInputMask - поле с маской ввода
- DXDatePicker - выбор даты
- DXTimePicker - выбор времени
- DXComboBox - комбинированный список с поиском
- DXSearchSelect - выпадающий список с поиском
- DXRadioGroup - группа радио-кнопок
- DXRadioCard - карточка с радио-кнопкой
- DXFilterGroup - группа фильтров
- DXFileUpload - загрузка файлов
- DXSegmentedControl - сегментированный контрол
- DXValidationIcon - иконка валидации

**Навигация:**
- DXMenu - меню
- DXBreadcrumb - хлебные крошки
- DXButtonGroup - группа кнопок
- DXActionButtons - кнопки действий (Edit/Delete)
- DXCloseButton - кнопка закрытия
- DXPagination - пагинация

**Отображение:**
- DXAlert - алерт/уведомление
- DXStatCard - карточка статистики
- DXSearchBar - поисковая строка
- DXCopyField - поле с копированием
- DXRating - рейтинг

**Таблицы (части):**
- [DXTableFiltersPanel](./docs/api/molecules/DXTableFiltersPanel.md) - панель фильтров таблицы
- [DXDataFilter](./docs/api/molecules/DXDataFilter.md) - панель фильтрации данных
- [DXDropdownDivider](./docs/api/molecules/DXDropdownDivider.md) - разделитель в выпадающем меню
- DXTableToolbar - панель инструментов таблицы
- DXTablePagination - пагинация таблицы

*Полная документация: [docs/api/molecules/](./docs/api/molecules/)*

### Organisms (Организмы) - 27 компонентов
Сложные UI структуры, композиции молекул и атомов.

**Основные:**
- [DXTable](./docs/api/organisms/DXTable.md) - полнофункциональная таблица с сортировкой, фильтрацией и пагинацией
- [DXModal](./docs/api/organisms/DXModal.md) - модальное окно (modal, fullscreen, sidebar)
- [DXSidebarMenu](./docs/api/organisms/DXSidebarMenu.md) - боковое меню навигации
- [DXBaseTable](./docs/api/organisms/DXBaseTable.md) - базовая таблица
- DXDropdown - выпадающее меню
- DXTabs - вкладки
- DXAccordion - аккордеон
- DXEmptyState - пустое состояние

**Layout:**
- DXAppLayout - главный layout приложения
- DXHeaderBar - верхняя панель
- DXSidebar - боковая панель

**Специализированные:**
- [DXAuthenticationForm](./docs/api/organisms/DXAuthenticationForm.md) - форма аутентификации
- [DXDashboardGrid](./docs/api/organisms/DXDashboardGrid.md) - сетка для дашборда
- [DXWizard](./docs/api/organisms/DXWizard.md) - мастер настройки
- DXDataTable - расширенная таблица данных
- DXFormWizard - мастер форм (многошаговая форма)
- DXDashboardWidget - виджет для дашборда
- DXChartContainer - контейнер для графиков
- DXMediaGallery - галерея медиа-файлов
- DXUserProfileCard - карточка профиля
- DXNotificationCenter - центр уведомлений
- DXChatInterface - интерфейс чата
- DXCommentSection - секция комментариев
- DXReportGenerator - генератор отчетов
- DXSettingsPanel - панель настроек

*Полная документация: [docs/api/organisms/](./docs/api/organisms/)*

### Utilities - утилитарные компоненты
- DXPortal - портал для рендеринга вне DOM
- DXObserver - Intersection Observer для lazy loading
- DXBreakpointProvider - провайдер брейкпоинтов
- DXThemeProvider - провайдер темы
- DXAnimatePresence - анимации появления/исчезновения
- DXTransitionGroup - групповые переходы
- DXStaggeredAnimation - ступенчатая анимация

*Полная документация: [docs/api/utilities/](./docs/api/utilities/)*

## Документация компонентов

Детальная документация по каждому компоненту доступна в отдельных файлах:

### Atoms (Атомы)

- [DX](./docs/api/atoms/DX.md) - Polymorphic компонент
- [DXButton](./docs/api/atoms/DXButton.md) - Универсальная кнопка
- [DXIcon](./docs/api/atoms/DXIcon.md) - Компонент иконки
- [DXBadge](./docs/api/atoms/DXBadge.md) - Бейдж/метка
- [DXAvatar](./docs/api/atoms/DXAvatar.md) - Аватар пользователя
- [DXImage](./docs/api/atoms/DXImage.md) - Компонент изображения
- [DXNav](./docs/api/atoms/DXNav.md) - Универсальная обертка для навигации
- [DXQuote](./docs/api/atoms/DXQuote.md) - Inline цитата
- [DXToggleButton](./docs/api/atoms/DXToggleButton.md) - Кнопка-переключатель

*Полный список атомов см. в [docs/api/atoms/](./docs/api/atoms/)*

### Molecules (Молекулы)

- [DXInput](./docs/api/molecules/DXInput.md) - Поле ввода с label, error, helper
- [DXDataFilter](./docs/api/molecules/DXDataFilter.md) - Панель фильтрации данных
- [DXDropdownDivider](./docs/api/molecules/DXDropdownDivider.md) - Разделитель в выпадающем меню
- [DXTableFiltersPanel](./docs/api/molecules/DXTableFiltersPanel.md) - Панель активных фильтров таблицы

*Полный список молекул см. в [docs/api/molecules/](./docs/api/molecules/)*

### Organisms (Организмы)

- [DXTable](./docs/api/organisms/DXTable.md) - Полнофункциональная таблица
- [DXModal](./docs/api/organisms/DXModal.md) - Модальное окно
- [DXSidebarMenu](./docs/api/organisms/DXSidebarMenu.md) - Боковое меню навигации
- [DXBaseTable](./docs/api/organisms/DXBaseTable.md) - Базовая таблица
- [DXAuthenticationForm](./docs/api/organisms/DXAuthenticationForm.md) - Форма аутентификации
- [DXDashboardGrid](./docs/api/organisms/DXDashboardGrid.md) - Сетка для дашборда
- [DXWizard](./docs/api/organisms/DXWizard.md) - Мастер настройки

*Полный список организмов см. в [docs/api/organisms/](./docs/api/organisms/)*

### Utilities (Утилиты)

*Полный список утилит см. в [docs/api/utilities/](./docs/api/utilities/)*

## Composables API

### useSize

Утилита для работы с размерами компонентов.

```js
import { useSize } from 'dxd-style-code';

const { sizeClasses } = useSize(props.size, 'input');
// Возвращает классы для размера: 'h-8', 'h-10', 'h-12' и т.д.
```

**Параметры:**
- `size`: `'xs' | 'sm' | 'md' | 'lg' | 'xl'`
- `type`: `'input' | 'button' | 'icon' | 'text' | 'general'` (default: `'input'`)

**Возвращает:**
- `sizeClasses`: `string` - Tailwind классы для размера

### useVariant

Утилиты для работы с вариантами компонентов.

```js
import { useVariantButton, useVariantBadge } from 'dxd-style-code';

// Для кнопок
const { variantClasses } = useVariantButton(props.variant);

// Для бейджей
const { variantClasses } = useVariantBadge(props.variant);
```

**Доступные функции:**
- `useVariantButton` - варианты кнопок
- `useVariantBadge` - варианты бейджей
- `useVariantToggle` - варианты переключателей
- `useVariantDropdownItem` - варианты элементов меню
- `useVariantClasses` - универсальная функция
- `useVariantIcon` - варианты иконок
- `useVariantConfig` - конфигурация вариантов
- `useVariantTooltip` - варианты тултипов

### useTableData

Composable для управления данными таблицы (локальный и API режимы).

```js
import { useTableData } from 'dxd-style-code';

const { localData, loading, error, loadData } = useTableData(props, emit);
```

**Возвращает:**
- `localData`: `Ref<Array>` - данные таблицы
- `loading`: `Ref<boolean>` - состояние загрузки
- `error`: `Ref<string | null>` - ошибка
- `loadData`: `Function` - функция загрузки данных

### useTableSort

Composable для сортировки таблицы.

```js
import { useTableSort } from 'dxd-style-code';

const { sortedData, sortBy, sortDirection, handleSort } = useTableSort(data, props, emit);
```

**Возвращает:**
- `sortedData`: `ComputedRef<Array>` - отсортированные данные
- `sortBy`: `Ref<string | null>` - колонка сортировки
- `sortDirection`: `Ref<'asc' | 'desc'>` - направление сортировки
- `handleSort`: `Function` - обработчик сортировки

### useTableFilter

Composable для фильтрации таблицы.

```js
import { useTableFilter } from 'dxd-style-code';

const { filteredData, filters, searchQuery, applyFilter, clearFilters } = useTableFilter(data, props, emit);
```

**Возвращает:**
- `filteredData`: `ComputedRef<Array>` - отфильтрованные данные
- `filters`: `Ref<Object>` - активные фильтры
- `searchQuery`: `Ref<string>` - поисковый запрос
- `applyFilter`: `Function` - применить фильтр
- `clearFilters`: `Function` - очистить все фильтры

### useTablePagination

Composable для пагинации таблицы.

```js
import { useTablePagination } from 'dxd-style-code';

const { paginatedData, currentPage, pageSize, totalPages, goToPage, changePageSize } = useTablePagination(data, props, emit);
```

**Возвращает:**
- `paginatedData`: `ComputedRef<Array>` - данные текущей страницы
- `currentPage`: `Ref<number>` - текущая страница
- `pageSize`: `Ref<number>` - размер страницы
- `totalPages`: `ComputedRef<number>` - всего страниц
- `goToPage`: `Function` - перейти на страницу
- `changePageSize`: `Function` - изменить размер страницы

### useTableSelection

Composable для выбора строк таблицы.

```js
import { useTableSelection } from 'dxd-style-code';

const { selectedRows, isSelected, toggleSelection, selectAll, clearSelection } = useTableSelection(data, props, emit);
```

**Возвращает:**
- `selectedRows`: `Ref<Array>` - выбранные строки
- `isSelected`: `Function` - проверка выбора строки
- `toggleSelection`: `Function` - переключить выбор
- `selectAll`: `Function` - выбрать все
- `clearSelection`: `Function` - очистить выбор

### useAnimation

Универсальный composable для управления классами анимаций.

```js
import { useAnimation } from 'dxd-style-code';

const animationClass = useAnimation('wiggle', 'icon', false);
// Возвращает: 'dx-icon-wiggle'
```

**Параметры:**
- `animation`: `'none' | 'wiggle' | 'scale' | 'rotate' | 'fade' | 'slide' | 'bounce' | 'pulse' | 'spin' | 'shake' | 'stripes' | 'custom' | 'smooth'`
- `type`: `'icon' | 'button' | 'general' | 'progress' | 'tooltip' | 'toggle'` (default: `'icon'`)
- `groupHover`: `boolean` (default: `false`) - использовать group-hover

**Доступные константы переходов:**
- `FADE_TRANSITION`
- `FADE_SCALE_TRANSITION`
- `SLIDE_RIGHT_TRANSITION`
- `SLIDE_LEFT_TRANSITION`
- `SLIDE_UP_TRANSITION`
- `SLIDE_DOWN_TRANSITION`
- `COLLAPSE_TRANSITION`
- `TOOLTIP_CUSTOM_TRANSITION`

### useClassComposition

Composable для объединения классов.

```js
import { useClassComposition } from 'dxd-style-code';

const classes = useClassComposition(
  BASE_CLASSES,
  SIZE_CLASSES[props.size],
  VARIANT_CLASSES[props.variant],
  props.class
);
```

**Параметры:**
- `baseClasses`: `string` - базовые классы
- `...additionalClasses`: `string | Array | Object` - дополнительные классы

**Возвращает:**
- `Array` - массив классов для Vue `:class`

### useSpacing

Composable для работы с отступами.

```js
import { useSpacing } from 'dxd-style-code';

const paddingClasses = useSpacing('md', 'padding');
// Возвращает: 'p-4'
```

**Параметры:**
- `size`: `'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'`
- `type`: `'padding' | 'margin'` (default: `'padding'`)

### useMenu

Composable для управления меню (sidebar и embedded).

```js
import { useMenu } from 'dxd-style-code';

const { filteredSections, isItemActive, toggleCompact, compact } = useMenu(props, emit);
```

**Возвращает:**
- `filteredSections`: `ComputedRef<Array>` - отфильтрованные секции
- `isItemActive`: `Function` - проверка активного элемента
- `toggleCompact`: `Function` - переключить компактный режим
- `compact`: `ComputedRef<boolean>` - компактный режим

### useDataAttributes

Composable для работы с data-атрибутами.

```js
import { useDataAttributes, useCustomDataAttributes, useBooleanDataAttributes } from 'dxd-style-code';

// Стандартные data-атрибуты
const dataAttrs = useDataAttributes(props, ['variant', 'size', 'disabled']);

// Кастомные data-атрибуты
const customAttrs = useCustomDataAttributes({ 'data-test': 'value' });

// Boolean data-атрибуты
const boolAttrs = useBooleanDataAttributes(props, ['disabled', 'loading']);
```

### useTabsScroll

Composable для прокрутки вкладок.

```js
import { useTabsScroll } from 'dxd-style-code';

const { scrollLeft, scrollRight, canScrollLeft, canScrollRight } = useTabsScroll(tabsContainer);
```

## Паттерны использования

### Композиция форм

```vue
<template>
  <DXFormControl label="Email" :error="errors.email" required>
    <DXInputGroup>
      <DXInputAddon position="left">
        <DXIcon :icon="EnvelopeIcon" />
      </DXInputAddon>
      <DXInput
        v-model="email"
        type="email"
        placeholder="email@example.com"
      />
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
    :sortable="true"
    :filterable="true"
    :paginated="true"
    :selectable="true"
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

### Группы кнопок

```vue
<template>
  <DXButtonGroup variant="outline" attached>
    <DXButton value="left">Левая</DXButton>
    <DXButton value="center">Центр</DXButton>
    <DXButton value="right">Правая</DXButton>
  </DXButtonGroup>
</template>
```

### Модальные окна с действиями

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

## Стилизация

### Tailwind CSS

Все компоненты используют Tailwind CSS классы. Кастомные стили определены в `src/styles/`.

### Дизайн-токены

Токены определены в `src/styles/tokens.js`:
- Цвета (slate, primary, success, warning, danger, info)
- Размеры (xs, sm, md, lg, xl)
- Отступы (spacing)
- Тени (shadows)
- Переходы (transitions)

### Кастомизация

Для кастомизации используйте Tailwind конфигурацию или переопределяйте CSS переменные.

## Правила разработки

### 1. Следуй Atomic Design

Компоненты должны быть на правильном уровне иерархии:
- **Atoms** - базовые, неделимые компоненты
- **Molecules** - композиции атомов
- **Organisms** - сложные композиции молекул и атомов

### 2. Используй composables

Не дублируй логику, используй существующие composables:
- `useSize` - для размеров
- `useVariant*` - для вариантов
- `useClassComposition` - для объединения классов
- `useAnimation` - для анимаций

### 3. JSDoc для props

Все props должны иметь JSDoc комментарии:

```js
const props = defineProps({
  /** Вариант оформления: primary | secondary | ghost */
  variant: { type: String, default: 'primary' },
  /** Размер: xs | sm | md | lg | xl */
  size: { type: String, default: 'md' },
});
```

### 4. Data-атрибуты

Добавляй `data-component`, `data-variant` для отладки:

```vue
<button
  data-component="DXButton"
  :data-variant="variant"
  :data-size="size"
>
```

### 5. Доступность

Используй ARIA атрибуты где необходимо:
- `aria-label` для иконок без текста
- `aria-describedby` для полей с ошибками
- `role` для семантических элементов

### 6. Tailwind классы

Используй Tailwind, не inline стили. Исключение - динамические значения.

### 7. Provide/Inject

Для связи компонентов используй provide/inject (например, DXButtonGroup):

```js
// В родителе
provide('buttonGroup', {
  size: props.size,
  variant: props.variant,
  registerComponent: (type, id) => { /* ... */ },
});

// В дочернем
const buttonGroup = inject('buttonGroup', null);
```

## Структура проекта

```
dxd-style-code/
├── src/
│   ├── components/
│   │   ├── atoms/          # Базовые компоненты (23)
│   │   ├── molecules/     # Составные компоненты (27)
│   │   ├── organisms/     # Сложные компоненты (7+)
│   │   └── utilities/     # Утилитарные компоненты
│   ├── composables/       # Переиспользуемая логика
│   │   ├── useSize.js
│   │   ├── useVariant.js
│   │   ├── useAnimation.js
│   │   ├── useTableData.js
│   │   ├── useTableSort.js
│   │   ├── useTableFilter.js
│   │   ├── useTablePagination.js
│   │   ├── useTableSelection.js
│   │   ├── useTableColumns.js
│   │   ├── useMenu.js
│   │   ├── useClassComposition.js
│   │   ├── useSpacing.js
│   │   ├── useDataAttributes.js
│   │   └── useTabsScroll.js
│   ├── styles/
│   │   ├── index.css      # Главные стили
│   │   ├── animations.css # Анимации
│   │   └── tokens.js      # Дизайн-токены
│   ├── utils/
│   │   ├── propTypes.js   # Стандартные prop types
│   │   └── toggleButtonPresets.js
│   └── index.js           # Главный экспорт
├── docs/                  # Документация
├── .storybook/            # Storybook конфигурация
└── package.json
```

## Примеры компонентов

### Создание атома

```vue
<template>
  <button :class="classes" data-component="DXMyButton">
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue';
import { useSize } from '../../../composables/useSize';
import { useClassComposition } from '../../../composables/useClassComposition';

const props = defineProps({
  /** Размер кнопки: xs | sm | md | lg | xl */
  size: { type: String, default: 'md' },
  /** Вариант: primary | secondary */
  variant: { type: String, default: 'primary' },
});

const { sizeClasses } = useSize(props.size, 'button');

const BASE_CLASSES = 'px-4 py-2 rounded-lg font-medium transition-colors';
const VARIANT_CLASSES = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
};

const classes = computed(() => useClassComposition(
  BASE_CLASSES,
  sizeClasses.value,
  VARIANT_CLASSES[props.variant]
));
</script>
```

### Создание молекулы

```vue
<template>
  <div class="form-group" data-component="DXMyFormGroup">
    <DXFormLabel :label="label" :error="error" :required="required" />
    <DXInput
      v-model="modelValue"
      :error="error"
      :disabled="disabled"
      :size="size"
    />
  </div>
</template>

<script setup>
import DXFormLabel from '../../atoms/DXFormLabel/DXFormLabel.vue';
import DXInput from '../../molecules/DXInput/DXInput.vue';

const props = defineProps({
  /** Метка поля */
  label: { type: String, required: true },
  /** Значение поля (v-model) */
  modelValue: { type: String, required: true },
  /** Текст ошибки */
  error: { type: String, default: null },
  /** Обязательное поле */
  required: { type: Boolean, default: false },
  /** Отключенное состояние */
  disabled: { type: Boolean, default: false },
  /** Размер: sm | md | lg */
  size: { type: String, default: 'md' },
});

const emit = defineEmits(['update:modelValue']);
</script>
```

## Дополнительная документация

- **README.md** - основная документация
- **docs/COMPONENTS_ARCHITECTURE.md** - архитектура компонентов и их взаимодействие
- **docs/COMPONENTS.md** - полный список всех компонентов
- **docs/COMPONENTS_DOCUMENTATION_STATUS.md** - статус документации
- **Storybook** - интерактивная документация (`npm run storybook`)

## Полезные ссылки

- [Vue 3 Documentation](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Heroicons](https://heroicons.com/)
- [Atomic Design](https://atomicdesign.bradfrost.com/)

---

**Версия документации:** 0.1.12  
**Последнее обновление:** 2024


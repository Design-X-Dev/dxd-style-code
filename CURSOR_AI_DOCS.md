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

| Компонент                                            | Описание                         |
| ---------------------------------------------------- | -------------------------------- |
| [DX](./docs/api/atoms/DX.md)                         | Polymorphic компонент            |
| [DXButton](./docs/api/atoms/DXButton.md)             | Универсальная кнопка             |
| [DXIcon](./docs/api/atoms/DXIcon.md)                 | Компонент иконки                 |
| [DXBadge](./docs/api/atoms/DXBadge.md)               | Бейдж/метка                      |
| [DXCard](./docs/api/atoms/DXCard.md)                 | Карточка-контейнер               |
| [DXAvatar](./docs/api/atoms/DXAvatar.md)             | Аватар пользователя              |
| [DXImage](./docs/api/atoms/DXImage.md)               | Компонент изображения            |
| [DXNav](./docs/api/atoms/DXNav.md)                   | Обертка для навигации            |
| [DXQuote](./docs/api/atoms/DXQuote.md)               | Inline цитата                    |
| [DXToggleButton](./docs/api/atoms/DXToggleButton.md) | Кнопка-переключатель             |
| [DXBackdrop](./docs/api/atoms/DXBackdrop.md)         | Затемнение фона                  |
| [DXBlockquote](./docs/api/atoms/DXBlockquote.md)     | Блочная цитата                   |
| [DXBox](./docs/api/atoms/DXBox.md)                   | Универсальный контейнер          |
| [DXCheckbox](./docs/api/atoms/DXCheckbox.md)         | Чекбокс                          |
| [DXCode](./docs/api/atoms/DXCode.md)                 | Код                              |
| [DXContainer](./docs/api/atoms/DXContainer.md)       | Контейнер с ограниченной шириной |
| [DXDivider](./docs/api/atoms/DXDivider.md)           | Разделитель                      |
| [DXDropdownItem](./docs/api/atoms/DXDropdownItem.md) | Элемент выпадающего меню         |
| [DXFlex](./docs/api/atoms/DXFlex.md)                 | Flexbox контейнер                |
| [DXFormLabel](./docs/api/atoms/DXFormLabel.md)       | Лейбл для полей форм             |
| [DXGrid](./docs/api/atoms/DXGrid.md)                 | CSS Grid сетка                   |
| [DXHeading](./docs/api/atoms/DXHeading.md)           | Заголовок                        |
| [DXIconWrapper](./docs/api/atoms/DXIconWrapper.md)   | Обертка для иконок               |
| [DXInputAddon](./docs/api/atoms/DXInputAddon.md)     | Аддон для input групп            |
| [DXLabel](./docs/api/atoms/DXLabel.md)               | Лейбл                            |
| [DXLink](./docs/api/atoms/DXLink.md)                 | Ссылка                           |
| [DXList](./docs/api/atoms/DXList.md)                 | Список                           |
| [DXLoader](./docs/api/atoms/DXLoader.md)             | Индикатор загрузки               |
| [DXProgress](./docs/api/atoms/DXProgress.md)         | Индикатор прогресса              |
| [DXRadio](./docs/api/atoms/DXRadio.md)               | Радио-кнопка                     |
| [DXSkeleton](./docs/api/atoms/DXSkeleton.md)         | Скелетон загрузки                |
| [DXSlider](./docs/api/atoms/DXSlider.md)             | Слайдер                          |
| [DXSpacer](./docs/api/atoms/DXSpacer.md)             | Гибкий отступ                    |
| [DXStack](./docs/api/atoms/DXStack.md)               | Вертикальный/горизонтальный стек |
| [DXTags](./docs/api/atoms/DXTags.md)                 | Теги                             |
| [DXText](./docs/api/atoms/DXText.md)                 | Текст                            |
| [DXToast](./docs/api/atoms/DXToast.md)               | Уведомление                      |
| [DXToggle](./docs/api/atoms/DXToggle.md)             | Переключатель                    |
| [DXTooltip](./docs/api/atoms/DXTooltip.md)           | Всплывающая подсказка            |

---

## Molecules (Молекулы) - 34 компонента

Композиции атомов, выполняющие конкретную функцию.

### Компоненты форм

| Компонент                                                        | Описание                          |
| ---------------------------------------------------------------- | --------------------------------- |
| [DXInput](./docs/api/molecules/DXInput.md)                       | Поле ввода с label, error, helper |
| [DXTextarea](./docs/api/molecules/DXTextarea.md)                 | Многострочное поле                |
| [DXSelect](./docs/api/molecules/DXSelect.md)                     | Выпадающий список                 |
| [DXInputGroup](./docs/api/molecules/DXInputGroup.md)             | Группа полей ввода с аддонами     |
| [DXFormControl](./docs/api/molecules/DXFormControl.md)           | Обертка для контролов форм        |
| [DXPasswordInput](./docs/api/molecules/DXPasswordInput.md)       | Поле пароля с переключателем      |
| [DXInputMask](./docs/api/molecules/DXInputMask.md)               | Поле с маской ввода               |
| [DXDatePicker](./docs/api/molecules/DXDatePicker.md)             | Выбор даты                        |
| [DXTimePicker](./docs/api/molecules/DXTimePicker.md)             | Выбор времени                     |
| [DXComboBox](./docs/api/molecules/DXComboBox.md)                 | Комбинированный список с поиском  |
| [DXSearchSelect](./docs/api/molecules/DXSearchSelect.md)         | Выпадающий список с поиском       |
| [DXRadioGroup](./docs/api/molecules/DXRadioGroup.md)             | Группа радио-кнопок               |
| [DXRadioCard](./docs/api/molecules/DXRadioCard.md)               | Карточка с радио-кнопкой          |
| [DXFilterGroup](./docs/api/molecules/DXFilterGroup.md)           | Группа фильтров                   |
| [DXFileUpload](./docs/api/molecules/DXFileUpload.md)             | Загрузка файлов                   |
| [DXSegmentedControl](./docs/api/molecules/DXSegmentedControl.md) | Сегментированный контрол          |
| [DXValidationIcon](./docs/api/molecules/DXValidationIcon.md)     | Иконка валидации                  |

### Навигация

| Компонент                                                  | Описание                      |
| ---------------------------------------------------------- | ----------------------------- |
| [DXMenu](./docs/api/molecules/DXMenu.md)                   | Меню                          |
| [DXBreadcrumb](./docs/api/molecules/DXBreadcrumb.md)       | Хлебные крошки                |
| [DXButtonGroup](./docs/api/molecules/DXButtonGroup.md)     | Группа кнопок                 |
| [DXActionButtons](./docs/api/molecules/DXActionButtons.md) | Кнопки действий (Edit/Delete) |
| [DXCloseButton](./docs/api/molecules/DXCloseButton.md)     | Кнопка закрытия               |
| [DXPagination](./docs/api/molecules/DXPagination.md)       | Пагинация                     |

### Отображение

| Компонент                                                      | Описание            |
| -------------------------------------------------------------- | ------------------- |
| [DXAlert](./docs/api/molecules/DXAlert.md)                     | Алерт/уведомление   |
| [DXStatCard](./docs/api/molecules/DXStatCard.md)               | Карточка статистики |
| [DXSearchBar](./docs/api/molecules/DXSearchBar.md)             | Поисковая строка    |
| [DXCopyField](./docs/api/molecules/DXCopyField.md)             | Поле с копированием |
| [DXRating](./docs/api/molecules/DXRating.md)                   | Рейтинг             |
| [DXDropdownDivider](./docs/api/molecules/DXDropdownDivider.md) | Разделитель в меню  |

### Таблицы (части)

| Компонент                                                      | Описание                    |
| -------------------------------------------------------------- | --------------------------- |
| [DXTableToolbar](./docs/api/molecules/DXTableToolbar.md)       | Панель инструментов таблицы |
| [DXTablePagination](./docs/api/molecules/DXTablePagination.md) | Пагинация таблицы           |

---

## Organisms (Организмы) - 27 компонентов

Сложные UI структуры, композиции молекул и атомов.

### Основные

| Компонент                                              | Описание                    |
| ------------------------------------------------------ | --------------------------- |
| [DXTable](./docs/api/organisms/DXTable.md)             | Полнофункциональная таблица |
| [DXBaseTable](./docs/api/organisms/DXBaseTable.md)     | Базовая таблица             |
| [DXDataTable](./docs/api/organisms/DXDataTable.md)     | Расширенная таблица данных  |
| [DXModal](./docs/api/organisms/DXModal.md)             | Модальное окно              |
| [DXDropdown](./docs/api/organisms/DXDropdown.md)       | Выпадающее меню             |
| [DXTabs](./docs/api/organisms/DXTabs.md)               | Вкладки                     |
| [DXAccordion](./docs/api/organisms/DXAccordion.md)     | Аккордеон                   |
| [DXEmptyState](./docs/api/organisms/DXEmptyState.md)   | Пустое состояние            |
| [DXSidebarMenu](./docs/api/organisms/DXSidebarMenu.md) | Боковое меню навигации      |

### Layout

| Компонент                                          | Описание                  |
| -------------------------------------------------- | ------------------------- |
| [DXAppLayout](./docs/api/organisms/DXAppLayout.md) | Главный layout приложения |
| [DXHeaderBar](./docs/api/organisms/DXHeaderBar.md) | Верхняя панель            |
| [DXSidebar](./docs/api/organisms/DXSidebar.md)     | Боковая панель            |

### Специализированные

| Компонент                                                            | Описание               |
| -------------------------------------------------------------------- | ---------------------- |
| [DXAuthenticationForm](./docs/api/organisms/DXAuthenticationForm.md) | Форма аутентификации   |
| [DXFormWizard](./docs/api/organisms/DXFormWizard.md)                 | Мастер форм            |
| [DXWizard](./docs/api/organisms/DXWizard.md)                         | Мастер настройки       |
| [DXDashboardGrid](./docs/api/organisms/DXDashboardGrid.md)           | Сетка для дашборда     |
| [DXDashboardWidget](./docs/api/organisms/DXDashboardWidget.md)       | Виджет для дашборда    |
| [DXChartContainer](./docs/api/organisms/DXChartContainer.md)         | Контейнер для графиков |
| [DXMediaGallery](./docs/api/organisms/DXMediaGallery.md)             | Галерея медиа-файлов   |
| [DXUserProfileCard](./docs/api/organisms/DXUserProfileCard.md)       | Карточка профиля       |
| [DXNotificationCenter](./docs/api/organisms/DXNotificationCenter.md) | Центр уведомлений      |
| [DXChatInterface](./docs/api/organisms/DXChatInterface.md)           | Интерфейс чата         |
| [DXCommentSection](./docs/api/organisms/DXCommentSection.md)         | Секция комментариев    |
| [DXReportGenerator](./docs/api/organisms/DXReportGenerator.md)       | Генератор отчетов      |
| [DXSettingsPanel](./docs/api/organisms/DXSettingsPanel.md)           | Панель настроек        |

---

## Utilities (Утилиты) - 7 компонентов

Утилитарные компоненты для расширенной функциональности.

| Компонент                                                            | Описание                        |
| -------------------------------------------------------------------- | ------------------------------- |
| [DXPortal](./docs/api/utilities/DXPortal.md)                         | Портал для рендеринга вне DOM   |
| [DXObserver](./docs/api/utilities/DXObserver.md)                     | Intersection Observer           |
| [DXBreakpointProvider](./docs/api/utilities/DXBreakpointProvider.md) | Провайдер брейкпоинтов          |
| [DXThemeProvider](./docs/api/utilities/DXThemeProvider.md)           | Провайдер темы                  |
| [DXAnimatePresence](./docs/api/utilities/DXAnimatePresence.md)       | Анимации появления/исчезновения |
| [DXTransitionGroup](./docs/api/utilities/DXTransitionGroup.md)       | Групповые переходы              |
| [DXStaggeredAnimation](./docs/api/utilities/DXStaggeredAnimation.md) | Ступенчатая анимация            |

---

## Composables - 14 функций

Переиспользуемая логика для компонентов.

### Общие

| Composable                                                           | Описание                        |
| -------------------------------------------------------------------- | ------------------------------- |
| [useSize](./docs/api/composables/useSize.md)                         | Унификация размеров компонентов |
| [useVariant](./docs/api/composables/useVariant.md)                   | Варианты и цветовые схемы       |
| [useSpacing](./docs/api/composables/useSpacing.md)                   | Padding и margin классы         |
| [useAnimation](./docs/api/composables/useAnimation.md)               | Анимации и transitions          |
| [useClassComposition](./docs/api/composables/useClassComposition.md) | Объединение CSS классов         |
| [useDataAttributes](./docs/api/composables/useDataAttributes.md)     | Генерация data-атрибутов        |
| [useMenu](./docs/api/composables/useMenu.md)                         | Управление меню                 |
| [useTabsScroll](./docs/api/composables/useTabsScroll.md)             | Прокрутка вкладок               |

### Таблицы

| Composable                                                         | Описание                   |
| ------------------------------------------------------------------ | -------------------------- |
| [useTableData](./docs/api/composables/useTableData.md)             | Управление данными таблицы |
| [useTableColumns](./docs/api/composables/useTableColumns.md)       | Видимость столбцов         |
| [useTableFilter](./docs/api/composables/useTableFilter.md)         | Фильтрация данных          |
| [useTableSort](./docs/api/composables/useTableSort.md)             | Сортировка данных          |
| [useTablePagination](./docs/api/composables/useTablePagination.md) | Пагинация                  |
| [useTableSelection](./docs/api/composables/useTableSelection.md)   | Выбор строк                |

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

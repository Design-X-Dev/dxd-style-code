# DX Components

Vue 3 UI Component Library с атомарной структурой и Tailwind CSS.

## Установка

```bash
npm install dxd-style-code
```

## Использование

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

## Компоненты

### Atoms (Базовые)

| Компонент    | Описание                                             |
| ------------ | ---------------------------------------------------- |
| `DXButton`   | Кнопка с вариантами: primary, ghost, danger, outline |
| `DXInput`    | Текстовое поле ввода                                 |
| `DXBadge`    | Бейдж/метка со статусами                             |
| `DXCheckbox` | Чекбокс                                              |
| `DXRadio`    | Radio-кнопка                                         |
| `DXToggle`   | Переключатель                                        |
| `DXSelect`   | Выпадающий список                                    |
| `DXTextarea` | Многострочное поле                                   |
| `DXSlider`   | Слайдер/ползунок                                     |
| `DXLoader`   | Индикатор загрузки                                   |
| `DXSkeleton` | Скелетон для загрузки                                |
| `DXToast`    | Уведомление                                          |
| `DXCard`     | Карточка-контейнер                                   |

### Molecules (Составные)

| Компонент         | Описание                           |
| ----------------- | ---------------------------------- |
| `DXFormField`     | Обертка поля формы с label и error |
| `DXFormControl`   | Расширенная обертка с валидацией   |
| `DXInputMask`     | Input с маской ввода               |
| `DXPasswordInput` | Поле пароля с переключателем       |
| `DXSearchSelect`  | Select с поиском                   |
| `DXDatePicker`    | Выбор даты/диапазона               |
| `DXButtonGroup`   | Группа кнопок                      |
| `DXRadioGroup`    | Группа radio-кнопок                |
| `DXFilterGroup`   | Группа фильтров                    |
| `DXActionButtons` | Кнопки действий (Edit/Delete)      |
| `DXCopyField`     | Поле с копированием                |

### Organisms (Сложные)

| Компонент      | Описание                                    |
| -------------- | ------------------------------------------- |
| `DXModal`      | Модальное окно (modal, fullscreen, sidebar) |
| `DXSidebarMenu` | Боковое меню с навигацией, иконками, счетчиками |
| `DXTable`      | Таблица                                     |
| `DXTabs`       | Табы/вкладки                                |
| `DXDropdown`   | Выпадающее меню                             |
| `DXEmptyState` | Пустое состояние                            |

## Примеры

### DXButton

```vue
<template>
  <DXButton variant="primary" size="md"> Сохранить </DXButton>

  <DXButton variant="danger" @click="handleDelete">
    <TrashIcon class="w-4 h-4" />
    Удалить
  </DXButton>
</template>
```

**Props:**

- `variant`: `'primary'` | `'ghost'` | `'danger'` | `'outline'`
- `size`: `'sm'` | `'md'` | `'lg'`
- `disabled`: `boolean`
- `block`: `boolean` - на всю ширину
- `iconOnly`: `boolean` - квадратная кнопка

### DXInput

```vue
<template>
  <DXInput
    v-model="email"
    label="Email"
    placeholder="example@mail.com"
    :error="errors.email"
    helper="Введите рабочий email"
  />
</template>
```

**Props:**

- `modelValue`: `string | number`
- `label`: `string`
- `placeholder`: `string`
- `error`: `string`
- `helper`: `string`
- `disabled`: `boolean`
- `size`: `'sm'` | `'md'` | `'lg'`

### DXModal

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
      <DXButton variant="ghost" @click="showModal = false"> Отмена </DXButton>
      <DXButton @click="save"> Сохранить </DXButton>
    </template>
  </DXModal>
</template>
```

**Props:**

- `open`: `boolean`
- `variant`: `'modal'` | `'fullscreen'` | `'sidebar-right'` | `'half-right'`
- `width`: `'sm'` | `'md'` | `'lg'` | `'xl'`
- `closable`: `boolean`
- `showModeSwitcher`: `boolean`

## Storybook

Запуск Storybook для интерактивной документации:

```bash
npm run storybook
```

## Разработка

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Сборка библиотеки
npm run build

# Запуск Storybook
npm run storybook
```

## Структура проекта

```
dxd-style-code/
├── src/
│   ├── components/
│   │   ├── atoms/          # Базовые компоненты
│   │   ├── molecules/      # Составные компоненты
│   │   └── organisms/      # Сложные компоненты
│   ├── styles/
│   │   ├── index.css       # Главные стили
│   │   └── tokens.js       # Дизайн-токены
│   └── index.js            # Главный экспорт
├── .storybook/             # Конфигурация Storybook
├── package.json
└── vite.config.js
```

## Лицензия

MIT

# Компоненты DXD Style Code

Полное описание всех компонентов библиотеки, организованных по принципам Atomic Design.

## Содержание

- [Atoms (Атомы)](#atoms-атомы)
- [Molecules (Молекулы)](#molecules-молекулы)
- [Organisms (Организмы)](#organisms-организмы)
- [Layout (Макет)](#layout-макет)
- [Typography (Типографика)](#typography-типографика)

---

## Atoms (Атомы)

Базовые компоненты, которые нельзя разбить на более мелкие части.

### DXIcon

Компонент для отображения иконок из библиотеки Heroicons.

**Props:**

- `icon` (Object | Function, required) - Компонент Heroicon
- `size` (String, default: "md") - Размер: `xs | sm | md | lg | xl`
- `animation` (String, default: "none") - Анимация при hover: `none | wiggle | scale | rotate`
- `groupHover` (Boolean, default: false) - Использовать group-hover вместо обычного hover
- `class` (String | Array | Object, default: "") - Дополнительные классы

**Пример:**

```vue
<DXIcon :icon="UserIcon" size="md" animation="wiggle" />
```

---

### DXIconWrapper

Обертка для позиционирования иконок внутри input-полей.

**Props:**

- `position` (String, default: "left") - Позиция: `left | right`
- `icon` (Object | Function, default: null) - Компонент Heroicon
- `size` (String, default: "sm") - Размер иконки: `xs | sm | md | lg`
- `animation` (String, default: "none") - Анимация: `none | wiggle | scale | rotate`
- `iconClass` (String | Array | Object, default: "text-slate-400") - Дополнительные классы для иконки
- `verticalAlign` (String, default: "center") - Вертикальное выравнивание: `center | top`

**Пример:**

```vue
<DXIconWrapper position="left" :icon="SearchIcon" size="md" />
```

---

### DXButton

Универсальная кнопка с различными вариантами оформления.

**Props:**

- `variant` (String, default: "primary") - Вариант: `primary | secondary | ghost | outline | success | warning | danger | info | link | soft`
- `size` (String, default: "md") - Размер: `xs | sm | md | lg | xl`
- `block` (Boolean, default: false) - Растянуть на всю ширину
- `iconOnly` (Boolean, default: false) - Только иконка (квадратная кнопка)
- `type` (String, default: "button") - Тип кнопки для form
- `disabled` (Boolean, default: false) - Отключенное состояние
- `to` (String | Object, default: null) - Vue Router путь
- `href` (String, default: null) - Обычная ссылка
- `target` (String, default: null) - Target для ссылки
- `rel` (String, default: null) - Rel для ссылки

**Пример:**

```vue
<DXButton variant="primary" size="md">Нажми меня</DXButton>
<DXButton :to="/home" variant="ghost">Перейти</DXButton>
```

---

### DXBadge

Бейдж для отображения статусов и меток.

**Props:**

- `variant` (String, default: "slate") - Вариант: `slate | success | warning | danger | info`
- `size` (String, default: "sm") - Размер: `sm | md`
- `iconLeft` (Object | Function, default: null) - Иконка слева
- `iconRight` (Object | Function, default: null) - Иконка справа

**Пример:**

```vue
<DXBadge variant="success" :iconLeft="CheckIcon">Активен</DXBadge>
```

---

### DXAvatar

Аватар пользователя с поддержкой изображений, инициалов и fallback-иконки.

**Props:**

- `src` (String, default: "") - URL изображения
- `alt` (String, default: "Avatar") - Alt текст
- `initials` (String, default: "") - Инициалы (если нет изображения)
- `size` (String, default: "md") - Размер: `xs | sm | md | lg | xl`
- `shape` (String, default: "circle") - Форма: `circle | square`
- `icon` (Object | Function, default: null) - Кастомная иконка для fallback
- `iconAnimation` (String, default: "wiggle") - Анимация иконки: `none | wiggle | scale | rotate`

**Пример:**

```vue
<DXAvatar src="/avatar.jpg" alt="User" size="lg" />
<DXAvatar initials="JD" size="md" />
```

---

### DXCheckbox

Чекбокс с поддержкой нативного и кастомного вариантов.

**Props:**

- `modelValue` (Boolean | Array, default: false) - Значение (v-model)
- `value` (String | Number, default: undefined) - Значение для массива
- `label` (String, default: "") - Текст лейбла
- `disabled` (Boolean, default: false) - Отключенное состояние
- `size` (String, default: "md") - Размер: `xs | sm | md | lg | xl`
- `variant` (String, default: "default") - Вариант: `default | custom`
- `checkedIcon` (Object | Function, default: null) - Иконка для checked состояния
- `uncheckedIcon` (Object | Function, default: null) - Иконка для unchecked состояния
- `shape` (String, default: "square") - Форма: `square | circle`
- `iconAnimation` (String, default: "scale") - Анимация иконки: `none | scale | wiggle`
- `color` (String, default: "primary") - Цвет: `slate | primary | success | danger | warning | info`

**Пример:**

```vue
<DXCheckbox v-model="checked" label="Согласен с условиями" />
<DXCheckbox v-model="checked" variant="custom" color="success" />
```

---

### DXRadio

Радио-кнопка с поддержкой нативного и кастомного вариантов.

**Props:**

- `modelValue` (String | Number | Boolean, default: null) - Текущее значение группы (v-model)
- `value` (String | Number | Boolean, required) - Значение этого radio
- `label` (String, default: "") - Текст лейбла
- `disabled` (Boolean, default: false) - Отключенное состояние
- `size` (String, default: "md") - Размер: `xs | sm | md | lg | xl`
- `variant` (String, default: "default") - Вариант: `default | custom`
- `color` (String, default: "primary") - Цвет: `slate | primary | success | danger | warning | info`

**Пример:**

```vue
<DXRadio v-model="selected" value="option1" label="Вариант 1" />
```

---

### DXToggle

Переключатель (toggle switch).

**Props:**

- `modelValue` (Boolean, default: false) - Значение (v-model)
- `label` (String, default: "") - Текст лейбла
- `size` (String, default: "md") - Размер: `xs | sm | md | lg | xl`
- `color` (String, default: "slate") - Цвет: `slate | primary | success | danger | warning | info`
- `animation` (String, default: "smooth") - Анимация: `none | smooth`
- `disabled` (Boolean, default: false) - Отключенное состояние

**Пример:**

```vue
<DXToggle v-model="enabled" label="Включить уведомления" />
```

---

### DXToggleButton

Кнопка-переключатель с иконками для активного/неактивного состояний.

**Props:**

- `modelValue` (Boolean, default: false) - Текущее состояние (v-model)
- `activeIcon` (Object | Function, required) - Иконка для активного состояния
- `inactiveIcon` (Object | Function, required) - Иконка для неактивного состояния
- `activeLabel` (String, default: null) - Текст для активного состояния
- `inactiveLabel` (String, default: null) - Текст для неактивного состояния
- `activeVariant` (String, default: "primary") - Вариант для активного состояния
- `inactiveVariant` (String, default: "ghost") - Вариант для неактивного состояния
- `size` (String, default: "md") - Размер: `sm | md | lg`
- `iconAnimation` (String, default: "wiggle") - Анимация иконки: `none | wiggle | scale | rotate`
- `block` (Boolean, default: false) - Растянуть на всю ширину
- `disabled` (Boolean, default: false) - Отключенное состояние
- `ariaLabel` (String, default: null) - Aria-label для доступности

**Пример:**

```vue
<DXToggleButton
  v-model="favorite"
  :activeIcon="HeartSolidIcon"
  :inactiveIcon="HeartOutlineIcon"
/>
```

---

### DXFormLabel

Лейбл для полей ввода с поддержкой ошибок, подсказок и счетчика символов.

**Props:**

- `label` (String, default: "") - Текст лейбла
- `error` (String, default: "") - Текст ошибки
- `helper` (String, default: "") - Вспомогательный текст
- `success` (String, default: "") - Текст успеха
- `required` (Boolean, default: false) - Показывать обязательный индикатор
- `showValidationIcon` (Boolean, default: true) - Показывать иконку валидации
- `maxLength` (Number, default: 0) - Максимальная длина для счетчика
- `currentLength` (Number, default: 0) - Текущая длина для счетчика
- `showCount` (Boolean, default: false) - Показывать счетчик символов

**Пример:**

```vue
<DXFormLabel label="Email" error="Неверный email" required>
  <input type="email" />
</DXFormLabel>
```

---

### DXInputAddon

Дополнительный элемент для группировки с input-полями.

**Props:**

- `position` (String, default: "left") - Позиция: `left | right`
- `size` (String, default: "md") - Размер: `sm | md | lg`

**Пример:**

```vue
<DXInputGroup>
  <DXInputAddon position="left">$</DXInputAddon>
  <DXInput v-model="price" />
</DXInputGroup>
```

---

### DXCard

Карточка для группировки контента.

**Props:**

- `variant` (String, default: "default") - Вариант: `default | bordered | elevated | flat`
- `padding` (String, default: "md") - Padding: `none | xs | sm | md | lg | xl`

**Пример:**

```vue
<DXCard variant="elevated" padding="lg">
  <h3>Заголовок</h3>
  <p>Содержимое карточки</p>
</DXCard>
```

---

### DXLoader

Индикатор загрузки (spinner).

**Props:**

- `size` (String, default: "md") - Размер: `xs | sm | md | lg | xl`
- `variant` (String, default: "default") - Цвет: `default | primary | success | warning | danger | info | slate`
- `text` (String, default: "") - Текст лоадера
- `showText` (Boolean, default: undefined) - Показывать текст

**Пример:**

```vue
<DXLoader size="lg" variant="primary" text="Загрузка..." />
```

---

### DXProgress

Индикатор прогресса.

**Props:**

- `value` (Number, default: 0) - Текущее значение
- `min` (Number, default: 0) - Минимум
- `max` (Number, default: 100) - Максимум
- `label` (String, default: "") - Лейбл
- `showLabel` (Boolean, default: false) - Показывать лейбл
- `showValue` (Boolean, default: false) - Показывать значение справа
- `showInnerValue` (Boolean, default: false) - Показывать значение внутри бара
- `size` (String, default: "md") - Размер: `xs | sm | md | lg`
- `color` (String, default: "default") - Цвет: `default | success | warning | danger | info`
- `animated` (Boolean, default: false) - Анимация
- `striped` (Boolean, default: false) - Полосатый

**Пример:**

```vue
<DXProgress :value="75" showValue color="success" />
```

---

### DXTooltip

Всплывающая подсказка.

**Props:**

- `content` (String, default: "") - Текст подсказки
- `position` (String, default: "top") - Позиция: `top | bottom | left | right`
- `color` (String, default: "dark") - Цвет: `dark | light | primary | success | danger | warning | info`
- `size` (String, default: "md") - Размер: `xs | sm | md | lg | xl`
- `animation` (String, default: "tooltip-custom") - Анимация: `fade | fade-scale | slide-up | slide-down | slide-left | slide-right | tooltip-custom`
- `maxWidth` (String, default: "200px") - Максимальная ширина
- `delay` (Number, default: 100) - Задержка перед показом (мс)

**Пример:**

```vue
<DXTooltip content="Подсказка" position="top">
  <DXButton>Наведите курсор</DXButton>
</DXTooltip>
```

---

### DXBackdrop

Фоновый слой для модальных окон.

**Props:**

- `show` (Boolean, default: false) - Показать/скрыть backdrop
- `blur` (String, default: "sm") - Уровень размытия: `none | sm | md | lg | xl`
- `backgroundColor` (String, default: "bg-slate-900/40") - Цвет фона (Tailwind класс)
- `zIndex` (String, default: "50") - z-index: `0 | 10 | 20 | 30 | 40 | 50 | auto`
- `dismissible` (Boolean, default: true) - Можно ли закрыть кликом
- `lockScroll` (Boolean, default: true) - Блокировать скролл body

**Пример:**

```vue
<DXBackdrop :show="isOpen" @close="isOpen = false">
  <div>Контент</div>
</DXBackdrop>
```

---

### DXDivider

Разделитель.

**Props:**

- `variant` (String, default: "horizontal") - Вариант: `horizontal | vertical`
- `spacing` (String, default: "md") - Отступы: `none | xs | sm | md | lg | xl`

**Пример:**

```vue
<DXDivider variant="horizontal" spacing="lg" />
```

---

### DXTags

Теги для отображения меток.

**Props:**

- `tags` (Array, default: []) - Массив тегов
- `variant` (String, default: "default") - Вариант: `default | success | warning | danger | info`
- `size` (String, default: "sm") - Размер: `xs | sm | md`
- `closable` (Boolean, default: false) - Можно ли закрыть
- `maxVisible` (Number, default: null) - Максимальное количество видимых тегов

**Пример:**

```vue
<DXTags :tags="['Vue', 'React', 'Angular']" closable />
```

---

### DXToast

Всплывающее уведомление.

**Props:**

- `variant` (String, default: "info") - Вариант: `info | success | warning | danger`
- `title` (String, default: "") - Заголовок
- `message` (String, default: "") - Сообщение
- `duration` (Number, default: 3000) - Длительность отображения (мс)
- `dismissible` (Boolean, default: true) - Можно ли закрыть
- `position` (String, default: "top-right") - Позиция: `top-left | top-right | bottom-left | bottom-right`

**Пример:**

```vue
<DXToast variant="success" title="Успех" message="Операция выполнена" />
```

---

### DXSkeleton

Скелетон для отображения состояния загрузки.

**Props:**

- `variant` (String, default: "text") - Вариант: `text | circular | rectangular`
- `width` (String, default: "100%") - Ширина
- `height` (String, default: "1rem") - Высота
- `animated` (Boolean, default: true) - Анимация

**Пример:**

```vue
<DXSkeleton variant="text" width="200px" />
```

---

### DXSlider

Слайдер для выбора числового значения.

**Props:**

- `modelValue` (Number, default: 0) - Значение (v-model)
- `min` (Number, default: 0) - Минимум
- `max` (Number, default: 100) - Максимум
- `step` (Number, default: 1) - Шаг
- `disabled` (Boolean, default: false) - Отключенное состояние
- `showValue` (Boolean, default: false) - Показывать значение
- `color` (String, default: "primary") - Цвет: `primary | success | warning | danger | info`

**Пример:**

```vue
<DXSlider v-model="value" :min="0" :max="100" showValue />
```

---

### DXDropdownItem

Элемент выпадающего меню.

**Props:**

- `disabled` (Boolean, default: false) - Отключенное состояние
- `icon` (Object | Function, default: null) - Иконка слева
- `iconRight` (Object | Function, default: null) - Иконка справа

**Пример:**

```vue
<DXDropdownItem :icon="UserIcon">Профиль</DXDropdownItem>
```

---

## Molecules (Молекулы)

Комбинации атомов, образующие более сложные компоненты.

### DXInput

Поле ввода текста.

**Props:**

- `modelValue` (String | Number) - Значение поля (v-model)
- `type` (String, default: "text") - Тип input
- `placeholder` (String, default: "") - Placeholder
- `label` (String, default: "") - Лейбл над полем
- `required` (Boolean, default: false) - Обязательное поле
- `disabled` (Boolean, default: false) - Отключенное состояние
- `error` (String, default: "") - Текст ошибки
- `helper` (String, default: "") - Вспомогательный текст
- `size` (String, default: "md") - Размер: `sm | md | lg`
- `inputClass` (String | Array | Object, default: "") - Дополнительные классы
- `prefixIcon` (Object | Function, default: null) - Иконка слева
- `suffixIcon` (Object | Function, default: null) - Иконка справа

**Slots:**

- `prefix` - Кастомный префикс
- `suffix` - Кастомный суффикс

**Пример:**

```vue
<DXInput
  v-model="email"
  label="Email"
  type="email"
  :prefixIcon="MailIcon"
  error="Неверный email"
/>
```

---

### DXTextarea

Многострочное поле ввода.

**Props:**

- `modelValue` (String) - Значение (v-model)
- `placeholder` (String, default: "") - Placeholder
- `rows` (Number, default: 3) - Количество строк
- `label` (String, default: "") - Лейбл
- `required` (Boolean, default: false) - Обязательное поле
- `disabled` (Boolean, default: false) - Отключенное состояние
- `error` (String, default: "") - Текст ошибки
- `helper` (String, default: "") - Вспомогательный текст
- `prefixIcon` (Object | Function, default: null) - Иконка слева
- `suffixIcon` (Object | Function, default: null) - Иконка справа
- `maxLength` (Number, default: 0) - Максимальная длина
- `showCount` (Boolean, default: false) - Показывать счетчик символов
- `autoResize` (Boolean, default: false) - Автоматическое изменение размера

**Пример:**

```vue
<DXTextarea
  v-model="description"
  label="Описание"
  :rows="5"
  :maxLength="500"
  showCount
/>
```

---

### DXSelect

Выпадающий список.

**Props:**

- `modelValue` (String | Number) - Значение (v-model)
- `options` (Array, default: []) - Массив опций: `[{ value, label }]`
- `label` (String, default: "") - Лейбл
- `required` (Boolean, default: false) - Обязательное поле
- `placeholder` (String, default: "") - Placeholder
- `error` (String, default: "") - Текст ошибки
- `helper` (String, default: "") - Вспомогательный текст
- `prefixIcon` (Object | Function, default: null) - Иконка слева
- `disabled` (Boolean, default: false) - Отключенное состояние
- `size` (String, default: "md") - Размер: `sm | md | lg`

**Пример:**

```vue
<DXSelect v-model="selected" :options="options" label="Выберите вариант" />
```

---

### DXInputGroup

Группа для объединения input-полей с addon-элементами.

**Props:**

- `label` (String, default: "") - Лейбл группы
- `helper` (String, default: "") - Вспомогательный текст
- `size` (String, default: "md") - Размер: `sm | md | lg`
- `disabled` (Boolean, default: false) - Отключенное состояние
- `error` (String, default: "") - Текст ошибки

**Пример:**

```vue
<DXInputGroup label="Цена">
  <DXInputAddon position="left">$</DXInputAddon>
  <DXInput v-model="price" />
  <DXInputAddon position="right">USD</DXInputAddon>
</DXInputGroup>
```

---

### DXAlert

Алерт для отображения важных сообщений.

**Props:**

- `variant` (String, default: "info") - Вариант: `info | success | warning | danger`
- `title` (String, default: "") - Заголовок
- `icon` (Object | Function, default: undefined) - Иконка (если null - используется иконка по умолчанию)
- `showIcon` (Boolean, default: true) - Показывать иконку
- `dismissible` (Boolean, default: false) - Можно ли закрыть

**Slots:**

- `default` - Содержимое алерта
- `actions` - Действия (кнопки)

**Пример:**

```vue
<DXAlert variant="success" title="Успех!" dismissible>
  Операция выполнена успешно
</DXAlert>
```

---

### DXFormControl

Универсальный компонент для управления формой.

**Props:**

- `label` (String, default: "") - Лейбл
- `error` (String, default: "") - Текст ошибки
- `helper` (String, default: "") - Вспомогательный текст
- `required` (Boolean, default: false) - Обязательное поле
- `prefixIcon` (Object | Function, default: null) - Иконка слева
- `size` (String, default: "md") - Размер: `sm | md | lg`

**Пример:**

```vue
<DXFormControl label="Email" error="Неверный email" required>
  <input type="email" />
</DXFormControl>
```

---

### DXPasswordInput

Поле ввода пароля с переключателем видимости.

**Props:**

- `modelValue` (String) - Значение (v-model)
- `label` (String, default: "") - Лейбл
- `placeholder` (String, default: "") - Placeholder
- `error` (String, default: "") - Текст ошибки
- `helper` (String, default: "") - Вспомогательный текст
- `required` (Boolean, default: false) - Обязательное поле
- `disabled` (Boolean, default: false) - Отключенное состояние
- `size` (String, default: "md") - Размер: `sm | md | lg`

**Пример:**

```vue
<DXPasswordInput v-model="password" label="Пароль" required />
```

---

### DXRadioGroup

Группа радио-кнопок.

**Props:**

- `modelValue` (String | Number | Boolean) - Выбранное значение (v-model)
- `options` (Array, required) - Массив опций: `[{ value, label, disabled }]`
- `variant` (String, default: "default") - Вариант: `default | custom`
- `size` (String, default: "md") - Размер: `xs | sm | md | lg | xl`
- `color` (String, default: "primary") - Цвет для custom variant
- `direction` (String, default: "vertical") - Направление: `vertical | horizontal`

**Пример:**

```vue
<DXRadioGroup v-model="selected" :options="options" variant="custom" />
```

---

### DXRadioCard

Карточка с радио-кнопкой.

**Props:**

- `modelValue` (String | Number | Boolean) - Выбранное значение группы (v-model)
- `value` (String | Number | Boolean, required) - Значение этой карточки
- `label` (String, default: "") - Заголовок карточки
- `description` (String, default: "") - Описание
- `icon` (Object | Function, default: null) - Иконка
- `disabled` (Boolean, default: false) - Отключенное состояние
- `size` (String, default: "md") - Размер: `sm | md | lg`

**Пример:**

```vue
<DXRadioCard
  v-model="plan"
  value="premium"
  label="Премиум"
  description="Все функции"
  :icon="StarIcon"
/>
```

---

### DXButtonGroup

Группа кнопок.

**Props:**

- `variant` (String, default: "default") - Вариант кнопок: `primary | secondary | ghost | outline`
- `size` (String, default: "md") - Размер: `xs | sm | md | lg | xl`
- `attached` (Boolean, default: false) - Склеенные кнопки

**Пример:**

```vue
<DXButtonGroup variant="outline" attached>
  <DXButton>Левая</DXButton>
  <DXButton>Центр</DXButton>
  <DXButton>Правая</DXButton>
</DXButtonGroup>
```

---

### DXActionButtons

Группа кнопок действий (просмотр, редактирование, удаление).

**Props:**

- `size` (String, default: "sm") - Размер: `xs | sm | md`
- `variant` (String, default: "ghost") - Вариант: `ghost | outline`
- `showView` (Boolean, default: true) - Показывать кнопку просмотра
- `showEdit` (Boolean, default: true) - Показывать кнопку редактирования
- `showDelete` (Boolean, default: true) - Показывать кнопку удаления
- `viewIcon` (Object | Function, default: EyeIcon) - Иконка просмотра
- `editIcon` (Object | Function, default: PencilIcon) - Иконка редактирования
- `deleteIcon` (Object | Function, default: TrashIcon) - Иконка удаления

**Events:**

- `view` - Клик по кнопке просмотра
- `edit` - Клик по кнопке редактирования
- `delete` - Клик по кнопке удаления

**Пример:**

```vue
<DXActionButtons @view="handleView" @edit="handleEdit" @delete="handleDelete" />
```

---

### DXCloseButton

Кнопка закрытия.

**Props:**

- `size` (String, default: "md") - Размер: `xs | sm | md | lg | xl`
- `variant` (String, default: "default") - Вариант: `default | ghost | outline`

**Пример:**

```vue
<DXCloseButton @click="handleClose" />
```

---

### DXValidationIcon

Иконка валидации (успех/ошибка).

**Props:**

- `variant` (String, default: "success") - Вариант: `success | error`
- `size` (String, default: "sm") - Размер: `xs | sm | md | lg`

**Пример:**

```vue
<DXValidationIcon variant="success" size="md" />
```

---

### DXCopyField

Поле с кнопкой копирования.

**Props:**

- `value` (String, default: "") - Значение для копирования
- `copyIcon` (Object | Function, default: ClipboardDocumentIcon) - Иконка копирования
- `successIcon` (Object | Function, default: ClipboardDocumentCheckIcon) - Иконка успешного копирования
- `animation` (String, default: "none") - Анимация иконки: `none | wiggle | scale | rotate`
- `size` (String, default: "md") - Размер: `sm | md | lg`

**Пример:**

```vue
<DXCopyField value="https://example.com" />
```

---

### DXBreadcrumb

Хлебные крошки для навигации.

**Props:**

- `items` (Array, required) - Массив элементов: `[{ label, to, icon }]`
- `separator` (String, default: "/") - Разделитель
- `size` (String, default: "md") - Размер: `sm | md | lg`

**Пример:**

```vue
<DXBreadcrumb
  :items="[
    { label: 'Главная', to: '/' },
    { label: 'Каталог', to: '/catalog' },
    { label: 'Товар' },
  ]"
/>
```

---

### DXPagination

Пагинация.

**Props:**

- `currentPage` (Number, default: 1) - Текущая страница (v-model)
- `totalPages` (Number, required) - Всего страниц
- `size` (String, default: "md") - Размер: `sm | md | lg`
- `showFirstLast` (Boolean, default: true) - Показывать первую/последнюю
- `showPrevNext` (Boolean, default: true) - Показывать предыдущую/следующую

**Пример:**

```vue
<DXPagination v-model:currentPage="page" :totalPages="10" />
```

---

### DXSegmentedControl

Сегментированный контрол для выбора одного варианта.

**Props:**

- `modelValue` (String | Number) - Выбранное значение (v-model)
- `options` (Array, required) - Массив опций: `[{ value, label, icon }]`
- `size` (String, default: "md") - Размер: `sm | md | lg`
- `fullWidth` (Boolean, default: false) - На всю ширину

**Пример:**

```vue
<DXSegmentedControl
  v-model="view"
  :options="[
    { value: 'list', label: 'Список' },
    { value: 'grid', label: 'Сетка' },
  ]"
/>
```

---

### DXComboBox

Комбинированный список с поиском.

**Props:**

- `modelValue` (String | Number) - Значение (v-model)
- `options` (Array, default: []) - Массив опций
- `label` (String, default: "") - Лейбл
- `placeholder` (String, default: "") - Placeholder
- `searchable` (Boolean, default: true) - Можно ли искать
- `disabled` (Boolean, default: false) - Отключенное состояние
- `size` (String, default: "md") - Размер: `sm | md | lg`

**Пример:**

```vue
<DXComboBox v-model="selected" :options="options" label="Выберите" searchable />
```

---

### DXSearchSelect

Выпадающий список с поиском.

**Props:**

- `modelValue` (String | Number) - Значение (v-model)
- `options` (Array, default: []) - Массив опций
- `label` (String, default: "") - Лейбл
- `placeholder` (String, default: "") - Placeholder
- `multiple` (Boolean, default: false) - Множественный выбор
- `disabled` (Boolean, default: false) - Отключенное состояние
- `size` (String, default: "md") - Размер: `sm | md | lg`

**Пример:**

```vue
<DXSearchSelect v-model="selected" :options="options" label="Поиск" />
```

---

### DXFileUpload

Загрузка файлов.

**Props:**

- `accept` (String, default: "") - Типы файлов (например, "image/\*")
- `multiple` (Boolean, default: false) - Множественная загрузка
- `maxSize` (Number, default: null) - Максимальный размер файла (байты)
- `disabled` (Boolean, default: false) - Отключенное состояние
- `variant` (String, default: "default") - Вариант: `default | drag-drop`

**Events:**

- `change` - Изменение файлов
- `error` - Ошибка загрузки

**Пример:**

```vue
<DXFileUpload accept="image/*" :maxSize="5242880" @change="handleFileChange" />
```

---

### DXDatePicker

Выбор даты.

**Props:**

- `modelValue` (String | Date) - Значение (v-model)
- `label` (String, default: "") - Лейбл
- `placeholder` (String, default: "") - Placeholder
- `format` (String, default: "YYYY-MM-DD") - Формат даты
- `min` (String | Date, default: null) - Минимальная дата
- `max` (String | Date, default: null) - Максимальная дата
- `disabled` (Boolean, default: false) - Отключенное состояние
- `size` (String, default: "md") - Размер: `sm | md | lg`

**Пример:**

```vue
<DXDatePicker v-model="date" label="Дата" format="DD.MM.YYYY" />
```

---

### DXInputMask

Поле ввода с маской.

**Props:**

- `modelValue` (String) - Значение (v-model)
- `mask` (String, required) - Маска (например, "+7 (###) ###-##-##")
- `label` (String, default: "") - Лейбл
- `placeholder` (String, default: "") - Placeholder
- `error` (String, default: "") - Текст ошибки
- `disabled` (Boolean, default: false) - Отключенное состояние
- `size` (String, default: "md") - Размер: `sm | md | lg`

**Пример:**

```vue
<DXInputMask v-model="phone" mask="+7 (###) ###-##-##" label="Телефон" />
```

---

### DXFilterGroup

Группа фильтров.

**Props:**

- `filters` (Array, default: []) - Массив фильтров
- `layout` (String, default: "horizontal") - Расположение: `horizontal | vertical`

**Пример:**

```vue
<DXFilterGroup :filters="filters" />
```

---

### DXMenu

Меню с элементами.

**Props:**

- `items` (Array, default: []) - Массив элементов меню
- `size` (String, default: "md") - Размер: `sm | md | lg`

**Пример:**

```vue
<DXMenu :items="menuItems" />
```

---

### DXDropdownDivider

Разделитель в выпадающем меню.

**Пример:**

```vue
<DXDropdown>
  <DXDropdownItem>Пункт 1</DXDropdownItem>
  <DXDropdownDivider />
  <DXDropdownItem>Пункт 2</DXDropdownItem>
</DXDropdown>
```

---

### DXBaseTable

Базовая таблица (используется внутри DXTable).

**Props:**

- `columns` (Array, required) - Массив колонок
- `data` (Array, default: []) - Данные
- `sortBy` (String, default: null) - Колонка для сортировки
- `sortDirection` (String, default: "asc") - Направление сортировки: `asc | desc`
- `selectedRows` (Array, default: []) - Выбранные строки
- `selectable` (Boolean, default: false) - Можно ли выбирать строки
- `size` (String, default: "md") - Размер: `sm | md | lg`
- `stickyHeader` (Boolean, default: true) - Закрепленный заголовок
- `striped` (Boolean, default: false) - Полосатая таблица
- `bordered` (Boolean, default: false) - С границами
- `hoverable` (Boolean, default: true) - Подсветка при наведении
- `loading` (Boolean, default: false) - Состояние загрузки

**Events:**

- `sort` - Сортировка
- `filter` - Фильтрация
- `row-click` - Клик по строке
- `row-select` - Выбор строки
- `select-all` - Выбрать все

---

### DXTableToolbar

Панель инструментов таблицы.

**Props:**

- `searchQuery` (String) - Поисковый запрос (v-model)
- `searchable` (Boolean, default: false) - Можно ли искать
- `selectedCount` (Number, default: 0) - Количество выбранных строк
- `columnToggle` (Boolean, default: false) - Переключение видимости колонок
- `columns` (Array, default: []) - Колонки для переключения
- `size` (String, default: "md") - Размер: `sm | md | lg`

**Slots:**

- `right` - Дополнительные действия справа

**Events:**

- `toggle-column` - Переключение видимости колонки

---

### DXTableFiltersPanel

Панель активных фильтров таблицы.

**Props:**

- `activeFilters` (Array, default: []) - Массив активных фильтров

**Events:**

- `remove-filter` - Удаление фильтра
- `clear-all` - Очистить все фильтры

---

### DXTablePagination

Пагинация для таблицы.

**Props:**

- `currentPage` (Number) - Текущая страница (v-model)
- `pageSize` (Number) - Размер страницы (v-model)
- `totalPages` (Number, required) - Всего страниц
- `pageSizeOptions` (Array, default: [10, 25, 50, 100]) - Опции размера страницы
- `from` (Number, default: 0) - Начальный индекс
- `to` (Number, default: 0) - Конечный индекс
- `total` (Number, default: 0) - Всего элементов
- `size` (String, default: "md") - Размер: `sm | md | lg`

---

## Organisms (Организмы)

Сложные компоненты, состоящие из молекул и атомов.

### DXTable

Полнофункциональная таблица с сортировкой, фильтрацией и пагинацией.

**Props:**

- `columns` (Array, required) - Массив колонок: `[{ key, label, sortable, filterable, filterOptions, width, align, format }]`
- `data` (Array, default: []) - Данные
- `mode` (String, default: "local") - Режим данных: `local | api`
- `apiUrl` (String) - URL API для загрузки данных
- `apiMethod` (String, default: "GET") - HTTP метод
- `apiParams` (Object, default: {}) - Параметры API запроса
- `searchable` (Boolean, default: false) - Можно ли искать
- `filterable` (Boolean, default: false) - Можно ли фильтровать
- `sortable` (Boolean, default: true) - Можно ли сортировать
- `paginated` (Boolean, default: true) - Включить пагинацию
- `selectable` (Boolean, default: false) - Можно ли выбирать строки
- `groupBy` (String) - Группировка по колонке
- `size` (String, default: "md") - Размер: `sm | md | lg`
- `height` (String) - Высота таблицы
- `stickyHeader` (Boolean, default: true) - Закрепленный заголовок
- `striped` (Boolean, default: false) - Полосатая таблица
- `bordered` (Boolean, default: false) - С границами
- `hoverable` (Boolean, default: true) - Подсветка при наведении
- `dense` (Boolean, default: false) - Плотный режим
- `showToolbar` (Boolean, default: true) - Показывать toolbar
- `columnToggle` (Boolean, default: false) - Переключение видимости колонок
- `actions` (Boolean, default: false) - Показывать действия
- `defaultPageSize` (Number, default: 10) - Размер страницы по умолчанию
- `pageSizeOptions` (Array, default: [10, 25, 50, 100]) - Опции размера страницы
- `defaultSort` (Object) - Начальная сортировка: `{ column: 'name', direction: 'asc' }`
- `loading` (Boolean, default: false) - Состояние загрузки

**Events:**

- `row-click` - Клик по строке
- `row-select` - Выбор строки
- `select-all` - Выбрать все
- `sort` - Сортировка
- `filter` - Фильтрация
- `filter-clear` - Очистка фильтров
- `page-change` - Изменение страницы
- `page-size-change` - Изменение размера страницы
- `edit` - Редактирование
- `delete` - Удаление
- `data-loaded` - Данные загружены
- `error` - Ошибка
- `column-toggle` - Переключение колонки
- `selection-clear` - Очистка выбора

**Slots:**

- `toolbar-actions` - Дополнительные действия в toolbar
- Слоты для кастомизации колонок (по ключу колонки)

**Пример:**

```vue
<DXTable
  :columns="columns"
  :data="data"
  searchable
  filterable
  sortable
  paginated
  @row-click="handleRowClick"
/>
```

---

### DXModal

Модальное окно с различными вариантами отображения.

**Props:**

- `open` (Boolean, default: false) - Открыто/закрыто
- `variant` (String, default: "modal") - Вариант: `modal | fullscreen | sidebar-right | half-right`
- `width` (String, default: "md") - Ширина (для modal): `sm | md | lg | xl`
- `closable` (Boolean, default: true) - Можно ли закрыть
- `showModeSwitcher` (Boolean, default: false) - Показывать переключатель режимов
- `backdropBlur` (String, default: "sm") - Размытие backdrop: `none | sm | md | lg | xl`
- `backdropOpacity` (String | Number, default: "40") - Прозрачность backdrop: 0-100
- `backdropColor` (String, default: "slate-900") - Цвет backdrop: `slate-900 | gray-900 | black | white`
- `backdropLockScroll` (Boolean, default: true) - Блокировать скролл body

**Events:**

- `close` - Закрытие модального окна
- `opened` - Модальное окно открыто
- `closed` - Модальное окно закрыто
- `update:variant` - Изменение варианта

**Slots:**

- `default` - Содержимое модального окна
- `title` - Заголовок
- `actions` - Действия (кнопки)

**Пример:**

```vue
<DXModal :open="isOpen" variant="modal" width="lg" @close="isOpen = false">
  <template #title>Заголовок</template>
  <p>Содержимое модального окна</p>
  <template #actions>
    <DXButton @click="isOpen = false">Закрыть</DXButton>
  </template>
</DXModal>
```

---

### DXDropdown

Выпадающее меню.

**Props:**

- `trigger` (String, default: "click") - Способ открытия: `click | hover`
- `placement` (String, default: "bottom-start") - Позиция: `top | bottom | left | right` + `-start | -end`
- `offset` (Number, default: 8) - Отступ от триггера
- `disabled` (Boolean, default: false) - Отключенное состояние

**Slots:**

- `default` - Триггер (элемент, по которому кликают)
- `content` - Содержимое выпадающего меню

**Пример:**

```vue
<DXDropdown>
  <template #default>
    <DXButton>Меню</DXButton>
  </template>
  <template #content>
    <DXDropdownItem>Пункт 1</DXDropdownItem>
    <DXDropdownItem>Пункт 2</DXDropdownItem>
  </template>
</DXDropdown>
```

---

### DXAccordion

Аккордеон для раскрывающихся секций.

**Props:**

- `items` (Array, required) - Массив элементов: `[{ title, content, icon, defaultOpen }]`
- `variant` (String, default: "default") - Вариант: `default | bordered | flush`
- `size` (String, default: "md") - Размер: `sm | md | lg`
- `multiple` (Boolean, default: false) - Можно ли открыть несколько секций

**Events:**

- `toggle` - Переключение секции

**Пример:**

```vue
<DXAccordion :items="accordionItems" variant="bordered" />
```

---

### DXTabs

Вкладки для переключения между секциями контента.

**Props:**

- `modelValue` (String | Number) - Активная вкладка (v-model)
- `tabs` (Array, required) - Массив вкладок: `[{ value, label, icon, disabled, badge }]`
- `variant` (String, default: "default") - Вариант: `default | pills | underline`
- `size` (String, default: "md") - Размер: `sm | md | lg`
- `fullWidth` (Boolean, default: false) - На всю ширину
- `scrollable` (Boolean, default: false) - Прокручиваемые вкладки

**Events:**

- `change` - Изменение активной вкладки

**Slots:**

- Слоты по значению вкладки для контента

**Пример:**

```vue
<DXTabs v-model="activeTab" :tabs="tabs">
  <template #tab1>Контент вкладки 1</template>
  <template #tab2>Контент вкладки 2</template>
</DXTabs>
```

---

### DXEmptyState

Пустое состояние для отображения, когда нет данных.

**Props:**

- `title` (String, default: "Нет данных") - Заголовок
- `description` (String, default: "") - Описание
- `icon` (Object | Function, default: null) - Иконка
- `size` (String, default: "md") - Размер: `sm | md | lg`
- `variant` (String, default: "default") - Вариант: `default | minimal | illustration`

**Slots:**

- `default` - Дополнительный контент
- `actions` - Действия (кнопки)

**Пример:**

```vue
<DXEmptyState
  title="Нет товаров"
  description="Добавьте первый товар"
  :icon="ShoppingBagIcon"
>
  <template #actions>
    <DXButton>Добавить товар</DXButton>
  </template>
</DXEmptyState>
```

---

### DXSidebarMenu

Боковое меню навигации.

**Props:**

- `items` (Array, required) - Массив элементов меню
- `collapsed` (Boolean, default: false) - Свернутое состояние
- `variant` (String, default: "default") - Вариант: `default | compact | minimal`

**Events:**

- `item-click` - Клик по элементу меню
- `toggle-collapse` - Переключение свернутого состояния

**Пример:**

```vue
<DXSidebarMenu :items="menuItems" :collapsed="isCollapsed" />
```

Подробная документация по структуре данных и использованию доступна в `docs/components/DXSidebarMenu.md`.

---

## Layout (Макет)

Компоненты для организации структуры страницы.

### DXContainer

Контейнер с ограничением максимальной ширины.

**Props:**

- `maxWidth` (String, default: "xl") - Максимальная ширина: `sm | md | lg | xl | 2xl | full`
- `padding` (String, default: "md") - Padding: `none | xs | sm | md | lg | xl`
- `fluid` (Boolean, default: false) - На всю ширину

**Пример:**

```vue
<DXContainer maxWidth="xl" padding="lg">
  <p>Контент</p>
</DXContainer>
```

---

### DXFlex

Flexbox контейнер.

**Props:**

- `direction` (String, default: "row") - Направление: `row | row-reverse | col | col-reverse`
- `justify` (String, default: "start") - Выравнивание по главной оси: `start | center | end | between | around | evenly`
- `align` (String, default: "center") - Выравнивание по поперечной оси: `start | center | end | stretch | baseline`
- `wrap` (String, default: "nowrap") - Перенос: `nowrap | wrap | wrap-reverse`
- `gap` (String, default: "md") - Отступ между элементами: `none | xs | sm | md | lg | xl`
- `inline` (Boolean, default: false) - Inline flex

**Пример:**

```vue
<DXFlex direction="row" justify="between" align="center" gap="lg">
  <div>Элемент 1</div>
  <div>Элемент 2</div>
</DXFlex>
```

---

### DXStack

Вертикальный стек элементов.

**Props:**

- `spacing` (String, default: "md") - Отступ между элементами: `none | xs | sm | md | lg | xl`
- `align` (String, default: "stretch") - Выравнивание: `start | center | end | stretch`

**Пример:**

```vue
<DXStack spacing="lg">
  <div>Элемент 1</div>
  <div>Элемент 2</div>
</DXStack>
```

---

### DXGrid

Сетка для размещения элементов.

**Props:**

- `columns` (Number | String, default: 1) - Количество колонок
- `gap` (String, default: "md") - Отступ между элементами: `none | xs | sm | md | lg | xl`
- `responsive` (Boolean, default: false) - Адаптивная сетка

**Пример:**

```vue
<DXGrid :columns="3" gap="lg">
  <div>Элемент 1</div>
  <div>Элемент 2</div>
  <div>Элемент 3</div>
</DXGrid>
```

---

### DXBox

Универсальный контейнер для стилизации.

**Props:**

- `padding` (String, default: "none") - Padding: `none | xs | sm | md | lg | xl`
- `margin` (String, default: "none") - Margin: `none | xs | sm | md | lg | xl`
- `bg` (String, default: "transparent") - Цвет фона
- `rounded` (String, default: "none") - Скругление: `none | sm | md | lg | xl | full`

**Пример:**

```vue
<DXBox padding="lg" bg="white" rounded="lg">
  <p>Контент</p>
</DXBox>
```

---

### DXSpacer

Гибкий отступ для заполнения пространства.

**Props:**

- `size` (String | Number, default: "auto") - Размер отступа

**Пример:**

```vue
<DXFlex>
  <div>Слева</div>
  <DXSpacer />
  <div>Справа</div>
</DXFlex>
```

---

## Typography (Типографика)

Компоненты для работы с текстом.

### DXHeading

Заголовок с различными уровнями.

**Props:**

- `level` (Number | String, default: 1) - Уровень заголовка: 1-6
- `size` (String, default: "") - Размер (переопределяет level): `xs | sm | md | lg | xl | 2xl | 3xl | 4xl`
- `weight` (String, default: "semibold") - Вес шрифта: `normal | medium | semibold | bold`
- `color` (String, default: "default") - Цвет: `default | muted | primary | success | warning | danger`
- `truncate` (Boolean, default: false) - Обрезать текст с ...

**Пример:**

```vue
<DXHeading level="1" size="2xl" weight="bold">Заголовок</DXHeading>
```

---

### DXText

Текстовый компонент.

**Props:**

- `size` (String, default: "md") - Размер: `xs | sm | md | lg | xl`
- `weight` (String, default: "normal") - Вес: `normal | medium | semibold | bold`
- `color` (String, default: "default") - Цвет: `default | muted | primary | success | warning | danger`
- `align` (String, default: "left") - Выравнивание: `left | center | right | justify`
- `truncate` (Boolean, default: false) - Обрезать текст с ...

**Пример:**

```vue
<DXText size="lg" color="muted">Текст</DXText>
```

---

### DXLabel

Лейбл для текста.

**Props:**

- `size` (String, default: "sm") - Размер: `xs | sm | md | lg`
- `weight` (String, default: "medium") - Вес: `normal | medium | semibold | bold`
- `color` (String, default: "default") - Цвет: `default | muted | primary | success | warning | danger`
- `required` (Boolean, default: false) - Показывать обязательный индикатор

**Пример:**

```vue
<DXLabel size="sm" required>Email</DXLabel>
```

---

### DXCode

Код или моноширинный текст.

**Props:**

- `variant` (String, default: "default") - Вариант: `default | inline | block`
- `size` (String, default: "sm") - Размер: `xs | sm | md | lg`

**Пример:**

```vue
<DXCode variant="inline">const x = 1;</DXCode>
```

---

### DXBlockquote

Цитата.

**Props:**

- `author` (String, default: "") - Автор цитаты
- `variant` (String, default: "default") - Вариант: `default | bordered | colored`

**Пример:**

```vue
<DXBlockquote author="Автор">
  Текст цитаты
</DXBlockquote>
```

---

### DXList

Список элементов.

**Props:**

- `variant` (String, default: "unordered") - Вариант: `ordered | unordered | none`
- `spacing` (String, default: "md") - Отступ между элементами: `none | xs | sm | md | lg | xl`
- `size` (String, default: "md") - Размер: `sm | md | lg`

**Пример:**

```vue
<DXList variant="ordered" spacing="md">
  <li>Элемент 1</li>
  <li>Элемент 2</li>
</DXList>
```

---

## Общие принципы

### Размеры компонентов

Большинство компонентов поддерживают стандартные размеры:

- `xs` - Очень маленький
- `sm` - Маленький
- `md` - Средний (по умолчанию)
- `lg` - Большой
- `xl` - Очень большой

### Варианты оформления

Многие компоненты поддерживают варианты:

- `default` - Стандартный
- `primary` - Основной
- `success` - Успех
- `warning` - Предупреждение
- `danger` - Опасность
- `info` - Информация

### Иконки

Все компоненты, принимающие иконки, ожидают компоненты из библиотеки Heroicons:

```vue
import { UserIcon } from '@heroicons/vue/24/solid';
<DXIcon :icon="UserIcon" />
```

### v-model

Многие компоненты поддерживают двустороннее связывание через `v-model`:

```vue
<DXInput v-model="value" />
<DXCheckbox v-model="checked" />
<DXSelect v-model="selected" />
```

### События

Компоненты эмитят стандартные события:

- `update:modelValue` - Обновление значения
- `change` - Изменение
- `click` - Клик
- `focus` / `blur` - Фокус

---

## Дополнительная документация

- [DXTable](./components/DXTable.md) - Подробная документация по таблице
- [DXSidebarMenu](./components/DXSidebarMenu.md) - Документация по боковому меню
- [DXTabs](./components/DXTabs.md) - Документация по вкладкам
- [DXBaseTable](./components/DXBaseTable.md) - Документация по базовой таблице

---

_Последнее обновление: 2024_

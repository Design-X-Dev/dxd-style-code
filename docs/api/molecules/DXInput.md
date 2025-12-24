# DXInput

**Категория:** Molecule  
**Импорт:** `import { DXInput } from 'dxd-style-code'`

## Назначение

Текстовое поле ввода с поддержкой label, error, helper и иконок. Композиция атомов DXFormLabel и DXIconWrapper.

## Props

| Prop          | Тип                         | По умолчанию | Описание                                |
| ------------- | --------------------------- | ------------ | --------------------------------------- |
| `modelValue`  | `string \| number`          | -            | Значение поля (v-model)                 |
| `type`        | `string`                    | `'text'`     | Тип input (text, email, password, etc.) |
| `label`       | `string`                    | `''`         | Метка поля                              |
| `placeholder` | `string`                    | `''`         | Placeholder текст                       |
| `error`       | `string`                    | `''`         | Текст ошибки                            |
| `helper`      | `string`                    | `''`         | Вспомогательный текст                   |
| `disabled`    | `boolean`                   | `false`      | Отключенное состояние                   |
| `size`        | `'sm' \| 'md' \| 'lg'`      | `'md'`       | Размер поля                             |
| `required`    | `boolean`                   | `false`      | Обязательное поле                       |
| `prefixIcon`  | `Component`                 | `null`       | Иконка слева                            |
| `suffixIcon`  | `Component`                 | `null`       | Иконка справа                           |
| `inputClass`  | `string \| Array \| Object` | `''`         | Дополнительные классы для input         |

## Events

| Event               | Параметры          | Описание            |
| ------------------- | ------------------ | ------------------- |
| `update:modelValue` | `string \| number` | Обновление значения |
| `focus`             | `Event`            | Фокус на поле       |
| `blur`              | `Event`            | Потеря фокуса       |
| `input`             | `Event`            | Ввод текста         |

## Slots

| Slot     | Описание                              |
| -------- | ------------------------------------- |
| `prefix` | Кастомный префикс (вместо prefixIcon) |
| `suffix` | Кастомный суффикс (вместо suffixIcon) |

## Примеры использования

### Базовое поле

```vue
<template>
  <DXInput
    v-model="email"
    label="Email"
    type="email"
    placeholder="example@mail.com"
  />
</template>
```

### Поле с ошибкой

```vue
<template>
  <DXInput
    v-model="email"
    label="Email"
    :error="errors.email"
    helper="Введите рабочий email"
  />
</template>
```

### Поле с иконками

```vue
<template>
  <DXInput
    v-model="search"
    :prefixIcon="SearchIcon"
    :suffixIcon="ClearIcon"
    placeholder="Поиск..."
  />
</template>
```

### Поле с кастомными слотами

```vue
<template>
  <DXInput v-model="price" label="Цена">
    <template #prefix>
      <span class="text-slate-500">$</span>
    </template>
    <template #suffix>
      <span class="text-slate-500">USD</span>
    </template>
  </DXInput>
</template>
```

## Особенности

- Автоматически отображает ошибки через DXFormLabel
- Поддерживает иконки слева и справа через DXIconWrapper
- Интегрируется с DXInputGroup для группировки полей
- Поддерживает все стандартные HTML атрибуты input

## Использует

- `DXFormLabel` - для отображения label, error, helper
- `DXIconWrapper` - для позиционирования иконок

## Используется в

- `DXInputGroup` - группа полей ввода
- `DXFormControl` - обертка для контролов форм
- `DXPasswordInput` - поле пароля
- `DXSearchBar` - поисковая строка

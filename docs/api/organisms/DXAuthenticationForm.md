# DXAuthenticationForm

**Категория:** Organism  
**Импорт:** `import { DXAuthenticationForm } from 'dxd-style-code'`

## Назначение

Готовая форма аутентификации с поддержкой различных режимов (логин, регистрация, восстановление пароля, 2FA) и валидацией.

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `mode` | `'login' \| 'register' \| 'forgot-password' \| '2fa'` | `'login'` | Режим формы |
| `loading` | `boolean` | `false` | Состояние загрузки |
| `error` | `string` | `''` | Сообщение об ошибке |
| `errors` | `Object` | `{}` | Ошибки валидации: `{ field: 'error message' }` |
| `showHeader` | `boolean` | `true` | Показывать header |

## Events

| Event | Параметры | Описание |
|-------|-----------|----------|
| `submit` | `{ mode, data }` | Отправка формы |
| `mode-change` | `string` | Изменение режима |

## Slots

| Slot | Описание |
|------|----------|
| `header` | Кастомный header |
| `error` | Кастомное отображение ошибки |
| `login` | Кастомная форма входа |
| `register` | Кастомная форма регистрации |
| `forgot-password` | Кастомная форма восстановления пароля |
| `2fa` | Кастомная форма 2FA |

## Примеры использования

### Форма входа

```vue
<template>
  <DXAuthenticationForm
    mode="login"
    :loading="loading"
    :error="error"
    :errors="errors"
    @submit="handleLogin"
  />
</template>
```

### Форма регистрации

```vue
<template>
  <DXAuthenticationForm
    mode="register"
    :loading="loading"
    :errors="errors"
    @submit="handleRegister"
  />
</template>
```

### Кастомная форма

```vue
<template>
  <DXAuthenticationForm mode="login" @submit="handleSubmit">
    <template #login>
      <!-- Кастомная форма входа -->
    </template>
  </DXAuthenticationForm>
</template>
```

## Особенности

- **Четыре режима:** login, register, forgot-password, 2fa
- **Валидация:** Поддерживает валидацию через prop `errors`
- **Автоматическая проверка:** Проверяет заполненность обязательных полей
- **Кастомизация:** Все элементы формы можно кастомизировать через slots

## Использует

- `DXInput` - для полей ввода
- `DXPasswordInput` - для полей пароля
- `DXFormControl` - для валидации
- `DXButton` - для отправки
- `DXCheckbox` - для чекбоксов
- `DXLink` - для ссылок
- `DXAlert` - для ошибок

## Используется в

- Страницы входа в приложение
- Регистрация новых пользователей
- Восстановление пароля
- Двухфакторная аутентификация

